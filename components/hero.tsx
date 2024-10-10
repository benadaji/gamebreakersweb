import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import banner from "../../gamebreakerz/app/webbanne.png";
import Image from "next/image";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";


export default function Header() {
  return (
   <> <div className="flex flex-col border-b  items-center ">
           <Image
                        src={banner}
                        width={1300}
                        height={100}

                        alt="Picture of the author"
                      />

                      
      {/* <div className="flex gap-8 justify-center items-center">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a>
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The fastest way to build apps with{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase
        </a>{" "}
        and{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Next.js
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
    </div>
    <div className="flex flex-col space-y-8 items-center ">   
    <div className=" flex flex-col md:block   space-x-6 ">
       <h1 > <b> CONNECT WITH US ONLINE </b> </h1> 
       </div>
    <div className=" absolute flex-row md:block   space-x-6 ">
      
      <SocialIcon url="https://m.youtube.com/channel/UClamQvL2S7235rinADDlFUQ" network="youtube"  style={{ height: 40, width: 40,}}/>
      <SocialIcon url="https://www.instagram.com/gamebreakerspod/" network="instagram" style={{ height: 40, width: 40 }} />
      <SocialIcon url="https://twitter.com/gamebrkpod" network="twitter" style={{ height: 40, width: 40 }}/>
      <SocialIcon url="" network="facebook" style={{ height: 40, width: 40 }}/>
      <SocialIcon url="https://www.tiktok.com/@gamebreakerspod?_r=1&_d=dk446mhdg4fgl2&sec_uid=MS4wLjABAAAAgcsPAhH32bEyEo64RZVltB1l0E5CmaWJDOV0Ug6VHzXld8kEoK5rXPurhCZhRJ1M&share_author_id=7300985576763802629&sharer_language=en&source=h5_m&u_code=eb3da88bfc9g3c&timestamp=1728483818&user_id=7300985576763802629&sec_user_id=MS4wLjABAAAAgcsPAhH32bEyEo64RZVltB1l0E5CmaWJDOV0Ug6VHzXld8kEoK5rXPurhCZhRJ1M&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7423654498818606854&share_link_id=3816f43c-9d66-4936-b0ac-7604ba25c4a8&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1" network="tiktok" bgColor="purple" style={{ height: 40, width: 40 }}/>
    </div> 
    
 
    </div>
      <Separator className="my-0   space-y-10 " />
     

      <div className="w-full rounded overflow-hidden space-y-20 ">
      <h1 > <b> </b> </h1> 
</div>
      <div className="grid grid-cols-3 gap-[20px]   justify-items-center ">
      

 


      <div className="col-span-3 md:col-span-1  rounded overflow-hidden shadow-lg">
       
      <iframe className="w-full h-96" src="https://www.youtube.com/embed/3ZotJ7yukL8?si=NmwYR8zXwBUvaVH3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">1 v 1 Competition</div>
    <p className="text-gray-700 text-base  dark:text-white ">
    In a thrilling 1v1 competition, two skilled opponents face off in a battle of strategy and agility...    </p>
  </div>
  <a href="/one-v-one">
  <div className=" flex justify-end px-5 pt-4 pb-4 ">
  <button className="bg-transparent hover:bg-blue-500  dark:text-white  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
 Learn More 
</button>

  </div>
  </a>
</div>

<div className="col-span-3 md:col-span-1 rounded overflow-hidden shadow-lg items-center">
  <iframe className="w-full h-96"  src="https://www.youtube.com/embed/ds1sAptVxIQ?si=7f8NQ9ABl_zW4unb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Football Podcast</div>
    <p className="text-gray-700  dark:text-white text-base">
    In this engaging soccer podcast, hosts discuss the latest match highlights, player performances...   </p>
  </div>
  <a href="/podcast">
  <div className=" flex justify-end px-5 pt-4 pb-4 ">
  <button className="bg-transparent  dark:text-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
 Learn More 
</button>
  </div>
  </a>
</div>
<div className="col-span-3 md:col-span-1 rounded overflow-hidden shadow-lg items-center">
<iframe className="w-full h-96" src="https://www.youtube.com/embed/3ZotJ7yukL8?si=NmwYR8zXwBUvaVH3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">3 v 3 BBall Competition</div>
    <p className="text-gray-700  dark:text-white  text-base">
    Teams displayed exceptional skill and teamwork in their quest for victory. Fast breaks...
    </p>
  </div>
  <a href="/three-v-three">
  <div className=" flex justify-end px-5 pt-4 pb-4  " >
  <button className="bg-transparent  dark:text-white   hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
 Learn More 
</button>
  </div>
  </a>
</div>

</div>


</>
  );
}
