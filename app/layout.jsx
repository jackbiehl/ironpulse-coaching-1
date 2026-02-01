export const metadata = {
  title: "IronPulse Coaching",
  description: "Motivational & supportive fitness coaching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#000",
        color: "#fff"
      }}>
        <style>{`
          .container { max-width: 1100px; margin: auto; padding: 40px 20px; }
          .hero { text-align: center; padding: 80px 20px; }
          .btn {
            background: #dc2626;
            color: white;
            padding: 14px 24px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 20px;
          }
          .btn:hover { background: #b91c1c; }
          .grid {
            display: grid;
            gap: 24px;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            margin-top: 40px;
          }
          .card {
            border: 2px solid #dc2626;
            border-radius: 16px;
            padding: 24px;
            background: #000;
          }
          footer {
            text-align: center;
            color: #aaa;
            padding: 30px 0;
            font-size: 14px;
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
