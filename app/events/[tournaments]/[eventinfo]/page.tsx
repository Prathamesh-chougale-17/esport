import React from 'react'

const EventInfo = ({params}:{params:{eventinfo:string}}) => {
  return (
    <main className='bg-black'>{params.eventinfo}</main>
  )
}

export default EventInfo