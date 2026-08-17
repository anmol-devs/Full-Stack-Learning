import React from 'react'
import Script from 'next/script'
// YE HOGYI SCRIPT TAG KI BAAT.
// Kisi particular page pr javascript ka code run krne ke liye apne script tag ka use krte hai.

const contact = () => {
  return (
    <div>
        <Script>
            {`alert("Wecome to contact page");`}
        </Script>
      this is contact
    </div>
  )
}

export default contact

export const metadata = {
    title: "Contact Facebook - Connect with the world",
    description: "This is a page where you can contact facebook and we can connect with the world using facebook",
  };