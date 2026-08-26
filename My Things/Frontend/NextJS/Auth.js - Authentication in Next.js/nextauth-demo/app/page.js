"use client"
import { useSession, signIn, signOut } from "next-auth/react"
// This component is used to display the current session information and provide buttons for signing in and signing out. It uses the useSession hook from next-auth to access the current session data, and the signIn and signOut functions to perform authentication actions. The useSession hook returns an object with a data property that contains the current session information, including the user object with the user's email and other details. If there is a session, it displays the user's email and a sign-out button. If there is no session, it displays a message indicating that the user is not signed in and provides buttons for signing in using Github or Google.

export default function Component() {
  const { data: session } = useSession()
  // Here data: session is a destructuring assignment that renames the data property returned by the useSession hook to session. This allows us to access the current session information using the session variable instead of data.
  console.log(session)
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn("github")}>Sign in using Github</button>
    <button onClick={() => signIn("google")}>Sign in using Google</button> 
  </>
}