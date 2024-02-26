

import Link from 'next/link'
import React from 'react'




export default function RoomCard({ id, name, peopleMax, price, description, topic, author }) {


    return (
        <div className='border rounded-xl w-80 h-[350px] p-5 bg-slate-100 relative'>

            <p className='font-bold flex justify-end mb-5'>{name}</p>


            <p>Тема: {topic}</p>
            <p>Автор: {author}</p>
            <p>Описание: {description}</p>
            <p>Колличество покупателей: {peopleMax}</p>
            <p className='font-bold mb-5 '>Цена: {price}$</p>
            <div className='p-2 border flex mt-[100px] items-center justify-center hover:bg-blue-300 rounded-l'>
                <Link href={`/hotel/${id}`}>Купить курс</Link>
            </div>
        </div>
    )
}

