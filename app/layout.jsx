export const metadata = {
  title: "IronPulse Coaching",
  description: "Motivational & supportive fitness coaching"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
