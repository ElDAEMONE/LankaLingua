import React from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function Categories() {

    const navigate = useNavigate();

    return (
        
        <div class="grid grid-cols-3 gap-4 h-screen items-center">
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito' onClick={() => navigate('/works')}> WORK </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito' onClick={() => navigate('/literature')}> LITERATURE </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito' onClick={() => navigate('/research')}> RESEARCH </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito' onClick={() => navigate('/fiction')}> FICTION </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full text-2xl font-Nunito' onClick={() => navigate('/essay')}> ESSAYS </button>
            <button className='mx-auto cursor-pointer hover:shadow-xl hover:shadow-zinc-500 hover:animate-pulse w-full h-full flex justify-center items-center'> <BsFillPlusCircleFill size={50}/> </button>
        </div>
       
    )
}