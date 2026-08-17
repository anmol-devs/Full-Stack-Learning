import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar"; // @ means sbse bahar waale component folder me jao, and fir import ki directory bnaenge.
// navbar ko apne layout waali file me import krenge taaki apne ek layout fix krde ki aise chlega, jaise apno ne yaha body ke just baad Navbar component ko call kiya hai. iska mtlb ye h ki har page me Navbar component show hoga.

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "I am a blog",
};

export default function RootLayout({ children }) { // yaha children ka mtlb hai ki jo bhi page ka content hoga wo yaha aa jaega. jaise apno ne about page me content likha tha, wo yaha aa jaega. ye ek special prop h jo Next.js provide krta h.
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}