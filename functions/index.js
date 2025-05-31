import { defineSecret } from 'firebase-functions/params';
import { onCall } from 'firebase-functions/v2/https';
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import Stripe from 'stripe';

// Initialize Firebase Admin
initializeApp({ credential: applicationDefault() });
const db = getFirestore();

// Stripe secret from Firebase environment
const stripeSecret = defineSecret("STRIPE_SECRET_KEY");

// Callable function
// export const createCheckoutSession = onCall({ secrets: [stripeSecret] }, async (request) => {
//   const { name, email, phone, school, grade, attendanceDays, reason, referralSource } = request.data;

//   if (!name || !email || !phone || !school || !grade || !attendanceDays) {
//     throw new Error("Missing required fields");
//   }

//   // Price logic based on attendanceDays
//   let priceInRon = 0;
//   if (attendanceDays === "both") {
//     priceInRon = 50;
//   } else if (attendanceDays === "first" || attendanceDays === "second") {
//     priceInRon = 35;
//   } else {
//     throw new Error("Invalid attendanceDays value");
//   }

//   const priceInBani = priceInRon * 100; // Convert RON to bani (Stripe uses smallest unit)

//   try {
//     // Save submission to Firestore
//     await db.collection("wtf").add({
//       name,
//       email,
//       phone,
//       school,
//       grade,
//       attendanceDays,
//       reason,
//       referralSource,
//       createdAt: FieldValue.serverTimestamp(),
//     });

//     // Create Stripe checkout session
//     const stripe = new Stripe(stripeSecret.value(), {
//       apiVersion: "2023-10-16",
//     });

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: [
//         {
//           price_data: {
//             currency: "ron",
//             unit_amount: priceInBani,
//             product_data: {
//               name: `Event Pass (${attendanceDays})`,
//               description: "Participation fee",
//             },
//           },
//           quantity: 1,
//         },
//       ],
//       customer_email: email,
//       success_url: "http://localhost:5173/thank-you", // Replace with your deployed site
//       cancel_url: "http://localhost:5173/xyz",
//     });

//     return { url: session.url };
//   } catch (error) {
//     console.error("Stripe checkout error:", error.message);
//     throw new Error("Unable to create Stripe session");
//   }
// });

export const createCheckoutSession = onCall({ secrets: [stripeSecret] }, async (request) => {
  const stripe = new Stripe(stripeSecret.value(), {
    apiVersion: "2023-10-16",
  });

  const { name, email, attendanceDays } = request.data;

  console.log("Received data:", { name, email, attendanceDays });

  if (!name || !email || !attendanceDays) {
    console.error("Missing required fields");
    throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
  }

  let amount = 0;
  if (attendanceDays === "first" || attendanceDays === "second") {
    amount = 3500;
  } else if (attendanceDays === "both") {
    amount = 5000;
  } else {
    console.error("Invalid attendanceDays value:", attendanceDays);
    throw new functions.https.HttpsError('invalid-argument', 'Invalid attendanceDays value');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      currency: 'ron',
      line_items: [
        {
          price_data: {
            currency: 'ron',
            product_data: {
              name: `Event Attendance - ${attendanceDays}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: "http://learnity.ro/see-you-there", // Replace with your deployed site
      cancel_url: "http://learnity/something-went-wrong",
    });

    console.log("Created session:", session.id);
    return { url: session.url };
  } catch (error) {
    console.error("Stripe error:", error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});


import { onRequest } from 'firebase-functions/v2/https';
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config()

// Configure the email transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com', // Your email address
    pass: process.env.EMAIL_PASS || 'your-app-password', // Use app password for Gmail
  },
});

export const sendEmail = onRequest(async (req, res) => {
  // Set CORS headers for browser requests
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }
  
  // Ensure request is a POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Get form data from request body
    const { name, email, subject, message } = req.body;
    
    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Configure email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.DESTINATION_EMAIL || 'your-destination-email@example.com', // Where to receive messages
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      // Optional HTML version
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

import functions from "firebase-functions";
import axios from "axios";
import corsLib from "cors";

const cors = corsLib({ origin: true });

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const SERVER_PREFIX = MAILCHIMP_API_KEY.split('-')[1];
const BASE_URL = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0`;

export const getNewsletters = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const response = await axios.get(`${BASE_URL}/campaigns`, {
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        },
        params: {
          status: "sent",
          sort_field: "send_time",
          sort_dir: "DESC",
        },
      });

      const campaigns = response.data.campaigns.map((c) => ({
        id: c.id,
        title: c.settings.subject_line,
        send_time: c.send_time,
        archive_url: c.archive_url,
      }));

      res.status(200).json({ campaigns });
    } catch (err) {
      console.error("Mailchimp error:", err?.response?.data || err.message);
      res.status(500).json({ error: "Failed to fetch newsletters" });
    }
  });
});

