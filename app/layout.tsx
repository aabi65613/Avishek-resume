import "./globals.css";
import Particles from "@/components/Particles";

export const metadata = {
  title: "Avishek Portfolio",
  description: "Modern AI & Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        {/* Particles Background */}
        <Particles />

        {/* Main Content */}
        <div className="relative z-[2]">
          {children}
        </div>
      </body>
    </html>
  );
}
