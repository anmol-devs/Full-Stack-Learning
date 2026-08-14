import React from 'react'

const page = () => {
  return (
    <div>
      <div>I am homepage</div>
    </div>
  )
}

export default page

// app based routing is a feature of Next.js that allows developers to create routes based on the file structure of their application. In this approach, each file in the "pages" directory corresponds to a route in the application. For example, a file named "about.js" in the "pages" directory would correspond to the "/about" route in the application.
// but apno ne yaha har page ka ek folder bnaya and uske andar page.js file bnayi hai. ise hum file based routing kehte hai. isme har page ka ek alag folder hota hai jisme page.js file hoti hai. ye approach Next.js me routing ko simple aur organized banati hai.