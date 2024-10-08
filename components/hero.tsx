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
      
      <SocialIcon url="https://react-social-icons.com" network="youtube"  style={{ height: 40, width: 40,}}/>
      <SocialIcon url="https://react-social-icons.com" network="instagram" style={{ height: 40, width: 40 }} />
      <SocialIcon url="https://react-social-icons.com" network="twitter" style={{ height: 40, width: 40 }}/>
      <SocialIcon url="https://react-social-icons.com" network="facebook" style={{ height: 40, width: 40 }}/>
      <SocialIcon url="https://react-social-icons.com" network="tiktok" bgColor="purple" style={{ height: 40, width: 40 }}/>
    </div> 
    
 
    </div>
      <Separator className="my-0   space-y-10 " />
     
      <div className="grid grid-cols-3 gap-4  border-t items-center ">
      <div className="col-span-3 md:col-span-1 max-w-sm rounded overflow-hidden shadow-lg">
  <Image        src={banner}
                        width={1300}
                        height={100}

                        alt="Picture of the author"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

<div className="col-span-3 md:col-span-1 max-w-sm rounded overflow-hidden shadow-lg">
  <Image        src={banner}
                        width={1300}
                        height={100}

                        alt="Picture of the author"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
<div className="col-span-3 md:col-span-1 max-w-sm rounded overflow-hidden shadow-lg">
  <Image        src={banner}
                        width={1300}
                        height={100}

                        alt="Picture of the author"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

</div>
</>
  );
}
