// Ek form hai apne paas and apne chahte hai ki use submit krne par data server par chla jaaye. Pehle apne ko ye kaam api ke through krna pdta tha, ki client side component bnao, useeffect ya fir handleSubmit function bnao, and us function ko zimmedaari dedo us submit ko server tak pahunchane ki.
// But Next.js me apne ye simply kar skte hai server actions ke through. Apne ko bas ek function bnaani hai jo ki server side pe chalegi, aur us function ko apne form ke action me pass kr dena hai. Ye function automatically server side pe chalegi aur apne ko data mil jaayega.

"use server" // use server is a directive that tells Next.js that this function should be executed on the server side. It allows you to perform server-side operations, such as database queries or file system access, directly from your Next.js application.
import fs from "fs/promises"
export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("harry.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`) 
  }