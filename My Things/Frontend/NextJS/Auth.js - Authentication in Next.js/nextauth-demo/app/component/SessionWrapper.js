"use client"
import { SessionProvider } from "next-auth/react"
// This component is used to wrap the entire application and provide the session context to all components. SessionProvider is a component from next-auth that provides the session context to all components in the application. It allows components to access the current session and perform authentication-related actions, such as signing in and signing out.
// And SessionProvider is a client component, which means it can only be used in the client-side of the application. It cannot be used in server-side components or pages. This is because the session context is only available on the client-side, and server-side components do not have access to it.

const SessionWrapper = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionWrapper