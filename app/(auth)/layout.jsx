import Footer from "@/components/footer/Footer";
import "../globals.css";
import { AuthProvider } from "@/components/authprovider/AuthProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashNav from "@/components/dashnav/DashNav";

export const metadata = {
  title: "Li's Private Space",
  description:
    "This is a control panel for the portfolio which only Madison Li has an access of this page. If you are other than the owner, you are not supposedly here",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <AuthProvider>
      <html lang="en" data-theme="coffee">
        <body className="antialiased">
          <div className="container flex">
            <div className="order-2">{children}</div>
            <div className="order-1">
              <DashNav />
            </div>
            <div className="order-3">
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
