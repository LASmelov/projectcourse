'use client'

import { Slider } from '@/components/ui/slider'
import React, { useState } from 'react'
import Counter from '../Counter'



export default function RoomFilter({ minPrice, maxPrice, setCourse }) {

    async function submitHandler(e) {
        e.preventDefault()
        const resp = await fetch('/api/rooms/getRooms', {
            method: 'POST',
            body: JSON.stringify({
                price: price,
                guests: guests
            })
        })
        const result = await resp.json()
        console.log(result);
        setCourse(result)

    }
    const [price, setPrice] = useState(maxPrice)
    const [guests, setGuests] = useState(1)

    return (
        <form onSubmit={submitHandler} className=' container w-full flex flex-col justify-between my-2 pt-[200px]'>
            <div className="w-1/3">
                <p className='font-bold mb-5'> Цена &lt; чем - {price}$</p>

                <Slider
                    onValueChange={(e) => { setPrice(e[0]) }}
                    defaultValue={[maxPrice]}
                    max={maxPrice}
                    min={minPrice}
                    step={1} />
                <p className='mt-5'>от {minPrice}$ до {maxPrice}$</p>
            </div>
            <div className="w-1/3 flex flex-col  mt-[40px]">
                <p className='text-xl ml-6 mb-3'>Покупателей</p>
                <Counter setGuests={setGuests} guests={guests} />
            </div>

            <div className='flex self-end w-20'>
                <button className='p-3 border'>Искать</button>
            </div>
        </form>
    )
}




