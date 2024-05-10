import React from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function Categories() {
    return (
        
        <div class="grid grid-cols-3 gap-4 h-screen items-center">
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito'> WORK </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito'> LITERATURE </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito'> RESEARCH </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito'> FICTION </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito'> ESSAYS </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full flex justify-center items-center'> <BsFillPlusCircleFill size={50}/> </button>
        </div>
       
    )
}