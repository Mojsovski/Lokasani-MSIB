import React from 'react'
import { Link } from 'react-router-dom'

const CardVerifikasi = ({}) => {
  return (
    <div className="flex flex-col w-full rounded-lg  gap-9">
      <div className='flex flex-col gap-5 w-full p-6 h-[200px] bg-white border border-gray-200 rounded-lg'>
      <p className="font-semibold text-gray-700 dark:text-gray-400">Menunggu Verifikasi</p>
      <h3 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 ">
        7
      </h3></div>
      <div className="w-full ">
      <Link to={"/superAdmin/verifikasiAkun"} className="bg-[#3653B0] hover:bg-[#768DD5] flex justify-center items-center text-white py-3 rounded-full"> <button>Verifikasi Sekarang</button> </Link></div>
    </div>
  )
}

export default CardVerifikasi