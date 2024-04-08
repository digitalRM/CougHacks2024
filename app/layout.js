import { Inter, Inclusive_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Accessible Articles",
  description: "A tool to make articles more accessible. Created for the CougHacks 2024 hackathon. 1st place winner!",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100`}>{children}</body>
    </html>
  );
}
