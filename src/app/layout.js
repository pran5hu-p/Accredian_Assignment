import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/common/ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Accredian",
  description: "Empowering professionals with industry-relevant skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}