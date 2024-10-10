// import DeployButton from "@/components/deploy-button";
import DeployButton from "../components/deploy-button";
// import { EnvVarWarning } from "@/components/env-var-warning";
import { EnvVarWarning } from "../components/env-var-warning";
// import HeaderAuth from "@/components/header-auth";
// import { ThemeSwitcher } from "@/components/theme-switcher";
import { ThemeSwitcher } from "../components/theme-switcher";
// import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import logo from "../../gamebreakerz/app/logo.png";

import Link from "next/link";
import { motion } from "framer-motion";
import HomeHeader from '../components/header';

import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Game Breakers Sports Ng Ltd",
  description: "Bring Your A Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col  items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-1xl flex justify-between pl-08
                 pr-10 items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <a href="/">
                    <div className="mt-3">
                      <Image
                      
                        src={logo}
                        width={100}
                        height={100}
                        alt="Picture of the author"
                      />
                     
                    </div>
                    </a>
                   
                    
                  </div>
                   
                  <div className="items-end">
                    <HomeHeader/>
                    </div>
                  {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
                </div>
            
              </nav>
              <div className="flex flex-col gap-8 border-b max-w-1xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    benadaji
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
