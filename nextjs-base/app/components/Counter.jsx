'use client'

import { Button } from "@/components/ui/button"




export default function Counter({ maxGuest, setGuests, guests }) {


  let max_guest = 300
  if (maxGuest) {
    max_guest = maxGuest
  }

  return (

    <div>
      <div className="flex items-center gap-x-5">

        <Button
          className="w-5"
          type="button"
          onClick={() => {
            if (guests > 1)
              setGuests(guests - 10)
          }}>-</Button>

        <span>{guests}</span>

        <Button
          className="w-5"
          type="button"
          onClick={() => {
            if (guests < max_guest)
              setGuests(guests + 10)
          }}>+</Button>
      </div>

    </div>

  )
}
