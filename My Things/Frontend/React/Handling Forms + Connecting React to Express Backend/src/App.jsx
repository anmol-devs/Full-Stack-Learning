import { useState } from 'react' 
import './App.css'
import { useForm } from "react-hook-form"
// Ye useFrom apne isliye use krte hai kyuki ye react me form handling ko easy bana deta hai, aur ye hume form ke state ko manage karne me help karta hai. Ye hume form ke input fields ko register karne, validation rules set karne, aur form submit hone par data ko handle karne me help karta hai.
 
function App() { 
  const { // ye sab react hook form ke methods hai jo hum use kar rahe hai
    register, // ye method input field ko register karne ke liye use hota hai
    handleSubmit, // ye method form submit hone par call hota hai
    setError,   // ye method form ke errors ko set karne ke liye use hota hai
    formState: { errors, isSubmitting }, // ye object form ke state ko represent karta hai, jisme errors aur isSubmitting properties hoti hai
  } = useForm();

  const delay = (d)=>{ // for creating a delay in the form submission, so that if the network is slow, the user can see a loading indicator and not click submit multiple times.
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2) // simulating network delay. Taaki agar kisi ka network slow hai to uske apni ui me koi loading vgera ki mdad se bta ske ki submit ho rha hai, and vo 2-3 baar submit pr click na kre.
    // Jo form me data aaega, use save krne ke liye.
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: { // abe port 5173 se backend ke 3000 port pr data bhejna hai to cors ka use krna padega, aur ye backend me use krna hoga. Aur ye backend me use krne ke liye apne ko backend me cors package install krna hoga. Aur ye frontend me use krne ke liye apne ko react me fetch method ka use krna hoga.
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)}) // data string ki form me bhejne ke liye.
    let res = await r.text() // backend se response ko text ki form me receive krne ke liye.
    console.log(data, res)
    // apne custom errors bnane ke liye apne aise bna skte hai. And inhe apno ne submit waale ke neeche use kra hai.
    // if(data.username !== "shubham"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // }
  }

  return (
    <> 
    {isSubmitting && <div>Loading...</div>}
       <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: {value: true, message: "This field is required"}, minLength: {value: 3, message: "Min length is 3"}, maxLength: {value: 8, message: "Max length is 8"} })} type="text"   />
          {/* Agar apne ko error ka message show krwana hai to apne ko upr jo register method hai, usme jo jo fields lgayenge apne, un fields ke according hi unke saath me error message bhi denge, and ye sb object me hoga. And errors apne neeche diye gye way se show krenge. */}
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password'  {...register("password", {minLength: {value: 7, message: "Min length of password is 7"},})} type="password"/>
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" /> {/* isSubmitting ka use isliye kiya hai taaki jab form submit ho rha ho to user dobara submit pr click na kre, aur ye disabled ho jaye. And isSubmitting ki mdad se apne ui ko us hisaab se easily chla ske. */}
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
       </div>
    </>
  )
}

export default App