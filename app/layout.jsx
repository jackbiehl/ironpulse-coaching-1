import "./globals.css";

export const metadata = {
  title: "IronPulse Coaching",
  description: "Motivational & supportive fitness coaching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
