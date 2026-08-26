import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  ]
})

export {handler as GET, handler as POST}
// We exported the handler as GET and POST because NextAuth uses both GET and POST requests for different authentication flows. By exporting the handler as both GET and POST, we ensure that NextAuth can handle all authentication requests correctly.
// We can not directly export NextAuth as GET and POST because NextAuth is a function that returns a handler function. We need to call the NextAuth function with the configuration object to get the handler function, and then we can export that handler function as GET and POST. Configuration object means the object that we pass to the NextAuth function to configure the authentication providers and other settings. In this case, we are passing an object with a providers property that contains an array of authentication providers, including the GithubProvider with its clientId and clientSecret.