"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

// Yaha apno ne ek basic form bnaya hai. 

export default function Home() {
  let ref = useRef() // Yaha apne ne ek ref bnaaya hai jisse apne form ko refer kr skte hai. Ye ref apne ko isliye chahiye taki jab form submit ho jaaye to apne usko reset kr ske.
  // Originally, nextjs me component server wala (server component) hota hai. To apne useRef ko aise use nhi kar skte, iske liye apne ko pehle component ko client component bnana pdega.
  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e)=> {submitAction(e); ref.current.reset()}}>
        {/* Yaha ref={ref} ka mtlb hai ki form ko reference krna. ref.current se current element milta hai, and apne iski mdad se values reset kr denge. */}
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black mx-4" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black mx-4" type="text" />
        </div>
        <div>

        <button className="border border-white px-3">Submit</button>
        </div>
      </form>
    </div>
  );
}