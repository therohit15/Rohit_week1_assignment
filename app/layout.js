import "./globals.css";

export const metadata = {
  title: "Customer Feedback Form",
  description: "A simple feedback form using Next.js and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
