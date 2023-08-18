import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/navbar/Navbar";
import "../globals.css";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Japhet's Portfolio",
  description: "Developed by myself using Next.js for full stack framework, MongoDB Atlas for data to store and fetch, and TailwindCSS + DaisyUI for CSS libraries and components...",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <ThemeProvider>
      <body className="antialiased">
        <div className="container flex">
          <div className="order-2">{children}</div>
          <div className="order-1">
            <Navbar />
          </div>
          <div className="order-3">
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </ThemeProvider>
  );
}
