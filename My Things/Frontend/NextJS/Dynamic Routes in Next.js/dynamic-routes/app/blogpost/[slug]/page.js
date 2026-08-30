// blog/page.js waala saare blogs ka page hai, or blogpost/[slug]/page.js waala har ek blog ka page hai, jisme slug ke hisaab se content fetch karna hai. slug ek variable hai jo har ek blog ke liye alag hoga. isliye humne [slug] ka use kiya hai. ye Next.js ka feature hai jisme hum dynamic routes create kar sakte hai.


export default function Page({ params }) {
    // throw new Error("error hai")
    // fetch your blog post by its slug
    let languages = ["python", "javascript", "java", "cpp", "cs"]
    if(languages.includes(params.slug)){ // languages.includes means ki agar params.slug languages array me hai to true return karega, otherwise false return karega. isliye humne if condition me languages.includes(params.slug) likha hai. agar ye true hai to niche ka code execute hoga, otherwise else block execute hoga.
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <div>Post not found</div>
    }
    // return <div>My Post: {params.slug}</div> // without if-else condition, just an example.
  }