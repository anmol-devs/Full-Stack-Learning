App.jsx
    Navbar.jsx  
        Button.jsx
            Component1.jsx

1. app component me navbar and uske andr fir button and button ke andr component1
2. Ab apne ko maan lo ki app component se koi functionality like counter waali, apne ko component1 me use krni hai. Normally to apne
prop drilling krte hota hai. Iske liye apne ko sbse pehle prop <Navbar count = {count}/> krke paas krna padega navbar me in App.jsx. 
Isse Navbar ko mil jaaegi is counter waali value. Ab same Navbar.jsx me jaakr <Button count = {count}> krke paas krna padega, and destructuring se apne {count} ko function me parameter ke roop mme likhenge in Navbar.jsx. And similarly apne ko fir Button.jsx me jaakr krna pdega. And fir jaakr apne Component1.jsx me value accept krke use kr skenge. YE SAB without_context_api folder me krke dikhaya hua hai.
3. Main to useContext ka usage yhi hai ki itne saare components me ye values paas krwane ki jgah, seedha direct usi component me le jaao jaha chahiye.