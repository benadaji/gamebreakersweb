import Hero from "../components/hero";
// import
import Image from "next/image";
import banner from "../../gamebreakerz/app/webbanne.png";
import gphoto from "../../gamebreakerz/app/1V1POST.jpg";


// import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import ConnectSupabaseSteps from "../components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "../components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "../utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <Hero />
      <div className="flex-1 flex flex-col gap-6 mt-16 mb-20 px-4">
      <div className="grid grid-cols-2 gap-4   items-center ">
      <div className="col-span-2 md:col-span-1  rounded overflow-hidden ">
      <Image
                        src={gphoto}
                      className="w-full rounded-3xl items-center"

                        alt="Picture of the author"
                      />
      </div>
          <div className="col-span-2 md:col-span-1   justify-items-end">
           <div className="flex-1 flex flex-col full  p-4  shadow-card sm:p-6 md:p-8 dark:border-gray-700 items-end">
          <form className="space-y-5  items-end" action="#">
            <h2 className="font-mono text-3xl italic font-medium text-purple-600 dark:text-purple-600 items-end"><b>
              Subscribe Now </b>
            </h2>
            <h1 className="top-0 text-5xl font-mono font-medium text-gray-900 dark:text-white items-end">
              To Our Newsletter
            </h1>
            <div >
              <label
                // for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                // for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your phone Number
              </label>
              <input
                type="number"
                name="password"
                id="phnum"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
           
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
Subscribe            </button>
            
          </form>
        </div>        </div>


        


        </div>
        {/* {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
      </div>
     
    </>
  );
}
