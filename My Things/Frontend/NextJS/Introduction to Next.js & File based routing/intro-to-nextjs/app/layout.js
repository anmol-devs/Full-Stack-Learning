import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar"; // @ means sbse bahar waale component folder me jao, and fir import ki directory bnaenge.
// navbar ko apne layout waali file me import krenge taaki apne ek layout fix krde ki aise chlega, jaise apno ne yaha body ke just baad Navbar component ko call kiya hai. iska mtlb ye h ki har page me Navbar component show hoga.

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "I am a blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}