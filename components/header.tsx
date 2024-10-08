import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function HomeHeader() {
  return (
    <>
    <div className="hidden md:block">
        <Button asChild size="sm" variant={"ghost"} className="slate-200">
        <Link href="/podcast">Podcast</Link>
        </Button>
        <Button asChild size="sm" variant={"ghost"} className="slate-200">
        <Link href="/one-v-one">1 v 1 </Link>
        </Button>
        <Button asChild size="sm" variant={"ghost"} className="slate-200">
        <Link href="/three-v-three">3 v 3</Link>
        </Button>
        <Button asChild size="sm" variant={"ghost"} className="slate-200">
        <Link href="/football-league">Football League </Link>
        </Button>
        <Button asChild size="sm" variant={"ghost"} className="slate-200">
        <Link href="/talent-management">Talent Management</Link>
        </Button>
        <Button asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Sign up</Link>
        </Button>
    </div>




    <div className="block md:hidden">
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Menu/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
      <DropdownMenuItem >
        <Link href="/podcast">Podcast</Link>
      </DropdownMenuItem>
      <DropdownMenuItem >
         <Link href="/one-v-one">1 v 1 </Link>     
      </DropdownMenuItem>
      <DropdownMenuItem >       
         <Link href="/three-v-three">3 v 3</Link>
      </DropdownMenuItem>
      <DropdownMenuItem >
        <Link href="/football-league">Football League </Link>
    </DropdownMenuItem>
    <DropdownMenuItem >
         <Link href="/talent-management">Talent Management</Link>
    </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
    </>
  )
}

