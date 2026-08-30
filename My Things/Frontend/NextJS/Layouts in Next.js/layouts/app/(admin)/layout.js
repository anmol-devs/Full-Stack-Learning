import { Inter } from "next/font/google"; 

// (admin) means that this layout is for the admin section of the application. The parentheses are used to group the layout under the "admin" directory, indicating that it is a specific layout for admin-related pages. Iska ye faida hai ki hum alag-alag layouts ko organize kar sakte hain aur unhe specific sections ke liye use kar sakte hain. For example, agar humare paas ek admin dashboard hai, to hum (admin) layout ka use karke uske liye alag styling aur structure define kar sakte hain, bina main application layout ko affect kiye.
// nested layouts kaise kaam karte hain, ye cheej btai gyi h is app me.

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin: Facebook - Connect with friends and the world around you",
  description: "Admin Page: Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.",
};

export default function AdminLayout({ children }) {
  return (
     <>
     <span>Admin Navbar</span>
        {children} 
     </>
  );
}