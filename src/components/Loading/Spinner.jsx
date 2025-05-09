"use client"

export const Spinner = () => {
  // Create an array of colors for the spinner circles
  const colors = ["bg-primary", "bg-secondary", "bg-chart-1", "bg-chart-2", "bg-chart-3"]

  return (
    <div className="relative w-24 h-24">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${color} animate-spin`}
          style={{
            width: `${100 - index * 15}%`,
            height: `${100 - index * 15}%`,
            top: `${index * 7.5}%`,
            left: `${index * 7.5}%`,
            opacity: 0.8,
            animationDuration: `${2 + index * 0.5}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">L</div>
    </div>
  )
}

