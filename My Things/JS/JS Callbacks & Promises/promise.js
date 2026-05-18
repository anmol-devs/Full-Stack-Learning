let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a>0.5) {
        reject("No, random number was not supporting you")
    } else {
        setTimeout(() =>{
            console.log("Yes I am done")
            resolve("Anmol")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a>0.5) {
        reject("No, random number was not supporting you 2")
    } else {
        setTimeout(() =>{
            console.log("Yes I am done 2")
            resolve("Anmol 2")
        }, 1000);
    }
})

prom1.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})

let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
}) // if any one of the promise is rejected then it will be rejected and if both are resolved then it will be resolved. And fir hi value return hogi agar dono resolve hue, vrna return nhi hogi.

let p4 = Promise.allSettled([prom1, prom2])
p4.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
}) // agar dono resolve hue to resolved return hoga, agar dono reject hue to rejected return hoga, aur agar ek resolved hua aur ek rejected hua to dono ka status return hoga.
// means chahe resolve ho ya reject dono ka status to return hoga hi hoga. But jo resolve hua uski value return hogi or jo reject hua uska reason return hoga.

let p5 = Promise.race([prom1, prom2])
p5.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
}) // jo pehle resolve ya reject hoga uska result return hoga. Agar prom2 pehle resolve hua to prom1 ka result ignore ho jayega, aur agar prom1 pehle reject hua to prom2 ka result ignore ho jayega.