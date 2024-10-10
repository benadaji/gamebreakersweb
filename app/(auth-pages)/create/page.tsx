// 'use client';

import { SupabaseClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from '../../../utils/supabase/server';
import supabase from "../../../utils/config";


interface Player {
  id: number;
  name: string;
  description: string;
}

export default async function Create() {
  // const [players, setPlayers] = useState<Player[]>([]);
  // const supabase = createClient();


  const { data: players } = await supabase.from("Players").select();

    
  


  // const getPlayers = async () => {
  //   const { data, error } = await supabase.from('Players').select('*');
  //   if (error) {
  //     console.error('Error fetching data:', error.message);
  //   } else {
  //     setPlayers(data as Player[]);
  //     console.log(data)
  //   }
  // };

  // useEffect(() => {
  //   getPlayers();
  //   console.log(players);
  // }, []);

  return (
    <>
      <Head>
        <title>Players</title>
      </Head>
      <div className="container mx-auto mt-8 max-w-[560px]">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Players</h1>
          <Link
            className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2 duration-200"
            href="/create"
          >
            Create New
          </Link>
        </div>

        <pre>{JSON.stringify(players, null, 2)}</pre>
        <ul> 
          {/* {players.map((player) => (
            <li key={player.id} className="py-2 flex justify-between w-full">
              <span>
                <strong>{player.name}</strong> - {player.description}
              </span>
              <span className="flex gap-2">
                <Link className="text-blue-700 underline hover:no-underline" href={`/${player.id}/edit`}>
                  Edit
                </Link>
                <Link className="text-red-500 underline hover:no-underline" href={`/${player.id}/delete`}>
                  Delete
                </Link>
              </span>
            </li>
          ))}
          {players.length < 1 && <div className="py-2">No data</div>} */} 
        </ul>
      </div>
    </>
  );
}
