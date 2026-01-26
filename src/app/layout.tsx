import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-playfair' 
});

export const metadata: Metadata = {
  title: "Heang Chheng Khoem",
  description: "Software Engineer & Digital Marketing Specialist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.className}`}>
      <body>
        <div className="snow-container">
           {[...Array(35)].map((_, i) => (
             <div 
               key={i} 
               className="snow-flake" 
               style={{
                 left: `${Math.random() * 100}%`,
                 width: `${Math.random() * 4 + 2}px`,
                 height: `${Math.random() * 4 + 2}px`,
                 animationDuration: `${Math.random() * 8 + 5}s`,
                 animationDelay: `${Math.random() * 5}s`
               }}
             />
           ))}
        </div>
        {children}
      </body>
    </html>
  );
}
