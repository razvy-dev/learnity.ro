/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

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

