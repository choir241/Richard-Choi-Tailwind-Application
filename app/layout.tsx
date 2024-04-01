import "../public/styles.css";
import Header from "../components/Header";

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Personalized Website for Tailwind Job Application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Richard Choi</title>
      </head>
      <body className="bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
