// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// promise ke settle hone ka mtlb resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch ke andr ye fake api ka url hai, online mil jaaega.

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', { // by default fetch method is GET, but we can change it to POST, PUT, DELETE etc.
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() // x.json() is also a promise, so we need to await it as well to get the actual data. And ye x.json() method is used to parse the response data as JSON, because fetch returns a Response object, and we need to convert it to JSON format to work with it easily in JavaScript.
    // data chunks me aaega and fir use parse karke hme ek complete data milega. Await nhi krenge to sirf promise milega, na hi json na hi text milega.
    // apne x.text() bhi use kar sakte hai, agar hume text format me data chahiye to. But json() method is more commonly used when working with APIs that return JSON data.
    return data
}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()  // await use krne ke liye async ke andr hona chahiye.

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()

 

// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
 
// })