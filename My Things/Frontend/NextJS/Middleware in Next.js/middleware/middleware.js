// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     // return NextResponse.json({ message: 'Hello from the about page' })
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// // Maan lo koi bhi request aayi h /about page pe, to middleware function run hoga aur uske andar ka code execute hoga. Yaha pe humne NextResponse.redirect ka use kiya h, jisse ki user ko /about page pe jane se rok diya jayega aur usko / page pe redirect kar diya jayega. Or ek baar apno ne redirect kar diya, to about page pr chahe kuch bhi ho, vo user ko show nhi hoga. Or agar apne NextResponse.json ka use kiya hota, to user ko /about page pe jaane se rok diya jata aur usko ek json response show hota, jisme ki message hota "Hello from the about page".
// Jis path ko match krna hai vo apne config object me matcher property ke andar de sakte h. Yaha pe :path* ka matlab h ki /about ke baad jo bhi path aayega, vo match ho jayega.
// export const config = {
//   matcher: '/about/:path*',
// }


// middleware request ko modify krne ke kaam aata h, request aane se pehle hi apne modify kr paaenge.
import { NextResponse } from 'next/server'
 
// Apne alag alag functions bana sakte h, jaise ki rewrite, redirect, nextResponse.json etc.
// Aisa koi function, jisme apne like message dena ho ki server is down, database is down, etc.

// Upar to ek way hogya middleware ko use krne ka, ab dusra way h ki apne alag alag conditions ke liye alag alag functions bana do. Jaise ki agar user /about page pe jaa raha h, to usko / page pe redirect kar do, aur agar user /dashboard page pe jaa raha h, to usko bhi / page pe redirect kar do. Isse apne code ko aur clean aur readable bana diya h.
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// Difference between redirect and rewrite in Next.js middleware:
// 1. Redirect: Redirect is used to redirect the user to a different URL. When a redirect is performed, the browser will make a new request to the specified URL. The user will see the new URL in the address bar of the browser. In the above example, when a user tries to access /dashboard, they will be redirected to / and the URL in the address bar will change to /. 
// 2. Rewrite: Rewrite is used to rewrite the URL without making a new request to the server. The user will not see the new URL in the address bar of the browser. In the above example, when a user tries to access /about, they will be shown the content of the / page, but the URL in the address bar will remain /about.