import Image from "next/image";
// YE HOGYI IMAGE COMPONENT KI BAAT.
// Ye image component apne ko optimization provide krta hai. img tag ka use krenge to image ka size jyada hoga but agar apne image component ka use krenge to image ka size kaafi kam ho jaaega. And ye image componet aspect ratio ko by default maintain krta hai. Apno ko vaise to width and height ko specify krna hi padta hai, but agar na krna chahe to apne fill ka bhi use kr skte hai, but iske saath container ko position krna pdega.
// Apne ko host name ko configure krna pdega next.config.js file me. And apne ko iske liye apne ko images ke andar remote pattern krke config krna pdega like we did in next.confi.js file.
// Apne official nextjs ke documentation me check kr skte hai kaise configure krna hai.

export default function Home() {
  return (
     <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-cover" fill={true} src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
     </div>
  );
}



// Ye image component apne ko optimization provide krta hai. Jaise ki image ka size, format, quality, etc. Ye apne ko lazy loading ka feature bhi provide krta hai. Ye apne ko responsive images ka feature bhi provide krta hai. Ye apne ko automatic resizing ka feature bhi provide krta hai. Ye apne ko automatic format conversion ka feature bhi provide krta hai. Ye apne ko automatic quality adjustment ka feature bhi provide krta hai. Ye apne ko automatic caching ka feature bhi provide krta hai. Ye apne ko automatic CDN ka feature bhi provide krta hai. Ye apne ko automatic placeholder ka feature bhi provide krta hai. Ye apne ko automatic blur-up effect ka feature bhi provide krta hai. Ye apne ko automatic priority loading ka feature bhi provide krta hai. Ye apne ko automatic preloading ka feature bhi provide krta hai. Ye apne ko automatic prefetching ka feature bhi provide krta hai. Ye apne ko automatic preconnect ka feature bhi provide krta hai. Ye apne ko automatic dns-prefetching ka feature bhi provide krta hai. Ye apne ko automatic prerendering ka feature bhi provide krta hai. Ye apne ko automatic prefetching of linked pages ka feature bhi provide krta hai. Ye apne ko automatic prefetching of linked assets ka feature bhi provide krta hai. Ye apne ko automatic prefetching of linked scripts ka feature bhi provide krta hai. Ye apne ko automatic prefetching of linked stylesheets ka feature bhi provide krta hai. Ye apne ko automatic prefetching of linked fonts ka feature bhi provide krta hai. Ye apne ko automatic prefetching of linked images ka feature bhi provide krta hai.