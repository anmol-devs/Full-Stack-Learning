// This is the default 404 page for the app directory. You can customize it by creating a file at app/not-found.js. Isse apne custom 404 page ko define kar sakte hain. Ye page tab render hoga jab koi route match nahi karega.

import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Not Found</h2>
        <p className="text-lg text-gray-600">Could not find requested resource</p>
        <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
    </div>
  )
}