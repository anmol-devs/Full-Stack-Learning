// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises" // why fs/promises? Because fs/promises is a promise-based version of the fs module, which allows us to use async/await instead of callbacks. It makes the code cleaner and easier to read.
import fsn from "fs"       // fs module is used to check if the folder with the name of the extension exists or not, and to create the folder if it does not exist
import path from "path" // path module is used to join the basepath and the extension to create the path of the folder

const basepath = "D:\\VS Code\\My Code\\Full Stack Web Development\\Exercises\\Exercise_15"

let files = await fs.readdir(basepath) // type: module (in package.json) is used to enable ES6 modules in Node.js, which allows us to use import and export statements instead of require and module.exports. It also allows us to use top-level await, which means we can use await outside of an async function. This is useful because we can use await to wait for the readdir function to complete before moving on to the next line of code. And __dirname is not available in ES6 modules, so we have to use import.meta.url to get the current file path and then use path.dirname to get the directory name of the current file. But since we are using a hardcoded path, we don't need to use import.meta.url and path.dirname. We simply put the path of the directory we want to read as an argument to the readdir function. The readdir function returns an array of file names in the directory, which we store in the files variable.

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1] // item.split(".").length - 1 gives the last element of the array which is the extension of the file
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        if (fsn.existsSync(path.join(basepath, ext))) { // existsSync checks if the folder with the name of the extension exists or not, and path.join joins the basepath and the extension to create the path of the folder
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item)) // old path to new path, in second argument, ext is the name of the folder and item is the name of the file, so it moves the file to the folder with the name of the extension
        }
        else {
            fs.mkdir(ext) // if the folder with the name of the extension does not exist, create it and run the rename function to move the file to this directory
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}