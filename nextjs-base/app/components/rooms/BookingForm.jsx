"use client"


import { Input } from "@/components/ui/input"
import Counter from "../Counter"
import { useState } from "react"
import * as React from "react"
import { addDays, format } from "date-fns"

import { DateRange } from "react-day-picker"
import { CalendarIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"


export default function BookingForm({ maxGuests, roomId, price }) {
    const [guests, setGuests] = useState(1)
    const [date, setDate] = useState({
        from: new Date,
        to: new Date,
    })

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append('guests', guests)
        formData.append('range', date)

        const resp = await fetch('/api/booking', {
            method: 'POST',
            body: formData
        })
    }

    return (
        <form onSubmit={handleSubmit} className="container mb-[200px] p-[200px]">
           
           
            <div className="flex gap-y-4 flex-col">
                <input hidden name="roomId" value={roomId} type="text" />
                <Input name="fio" type="text" placeholder="Ваше ФИО" />
                <Input name="phone" type="text" placeholder="Ваш телефон" />
                <Input name="email" type="text" placeholder="Ваш Email" />
                <Input name="passport" type="text" placeholder="Серия и номер паспорта" />
            </div>
            <Button className="mt-20 ">Купить курс</Button>

        </form>
    )
}
