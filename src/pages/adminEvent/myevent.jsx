import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/adminEvent/Sidebar';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from '../../assets/img/user.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function MyEvent() {
  
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  const handleClick = (tab) => {
    setActiveTab(tab);

  };

  return (
    <section>
        <Sidebar/>

        <main className="sm:ml-64 bg-[#F2F2F2] h-screen">

            {/* header start */}
            <div className="bg-white flex items-center justify-between py-7 rounded-sm">
              <div className='pl-5'>
                <h1 className='text-3xl font-bold'>My Event</h1>
              </div>
              <div>
                <div className="flex items-center">
                  <div className='flex mr-16 gap-x-6'>
                      <a className='cursor-pointer'>
                        <TextsmsIcon className='text-[#253E8D]'/>
                      </a>
                      <a className='cursor-pointer'>
                        <NotificationsActiveIcon className='text-[#253E8D]'/>
                      </a>
                      <a href="">
                        <img className="w-6 h-6 rounded-full" src={user} alt="Rounded avatar"/>
                      </a>
                  </div>
                </div>
              </div>
            </div>
            {/* header end */}

            {/* content start */}
            <div className='bg-white'>
            <div className="grid grid-cols-1 gap-1 p-3">
            <div className="col-span-1 bg-[#C2CDEF] p-7 rounded-md relative">
              <span className='text-3xl font-bold'>Nama Event</span>
              <div className="flex items-center">
                <div className="rounded-full bg-green-500 w-3 h-3"></div>
                <span className="text-3xl font-bold text-sm ml-2"> Aktif</span>
              </div>
              <div className='absolute top-2 right-2 mr-16 mt-5'>
                <a className='cursor-pointer'>
                <TextsmsIcon style={{ fontSize: 40, color: '#253E8D' }}/>
                </a>
              </div>
            </div>
          </div>

              <div className="grid grid-cols-3 gap-3 p-3">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative ring-[#666666] ring-1">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#E8644B] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <ArrowForwardIosIcon/>
                </button>
                <div className="flex flex-col justify-between p-2">
                  <div className="absolute left-2 top-1/2 bg-[#E8644B] mt-4 w-2 h-12 transform -translate-y-1/2"></div>
                  <div className='mt-14'>
                    <span className="text-[#999999] text-sm mt-10">Total Income (Rp)</span><br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">35.440.000</span><br />
                    <div className="text-sm flex items-center">
                      <ArrowUpwardIcon className='text-green-500'/>
                      <span className="text-[#5CB85C]">+2%</span>
                      <span className='text-[#999999] ml-1'>dari bulan lalu</span>
                    </div> 
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative  ring-[#666666] ring-1">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#E8644B] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <ArrowForwardIosIcon/>
                </button>
                <div className="flex flex-col justify-between p-2">
                  <div className="absolute left-2 top-1/2 bg-[#E8644B] mt-4 w-2 h-12 transform -translate-y-1/2"></div>
                  <div className='mt-14'>
                    <span className="text-[#999999] text-sm mt-10">Total Income (Rp)</span><br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">35.440.000</span><br />
                    <div className="text-sm flex items-center">
                      <ArrowUpwardIcon className='text-green-500'/>
                      <span className="text-[#5CB85C]">+2%</span>
                      <span className='text-[#999999] ml-1'>dari bulan lalu</span>
                    </div> 
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative ring-[#666666] ring-1">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#E8644B] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <ArrowForwardIosIcon/>
                </button>
                <div className="flex flex-col justify-between p-2">
                  <div className="absolute left-2 top-1/2 bg-[#E8644B] mt-4 w-2 h-12 transform -translate-y-1/2"></div>
                  <div className='mt-14'>
                    <span className="text-[#999999] text-sm mt-10">Total Income (Rp)</span><br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">35.440.000</span><br />
                    <div className="text-sm flex items-center">
                      <ArrowUpwardIcon className='text-green-500'/>
                      <span className="text-[#5CB85C]">+2%</span>
                      <span className='text-[#999999] ml-1'>dari bulan lalu</span>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="grid grid-cols-1 gap-1 p-3">
                <style>
                  {`
                    .tab {
                      cursor: pointer;
                      padding: 1rem;
                    }

                    .tab.active {
                      border-bottom: 2px solid #0053AD; /* Ganti warna sesuai keinginan Anda */
                    }
                  `}
                </style>
                <div className="col-span-1 bg-[#C2CDEF] p-7 rounded-md relative">
                  <div className="flex items-center bg-[#FEF7FF] rounded-md">
                    <div
                      className={`tab ${activeTab === 'ticket' ? 'active' : ''}`}
                      onClick={() => handleClick('ticket')}
                    >
                      Tiket
                    </div>
                    <div
                      className={`tab ${activeTab === 'merchandise' ? 'active' : ''}`}
                      onClick={() => handleClick('merchandise')}
                    >
                      Marchandise
                    </div>
                    <div
                      className={`tab ${activeTab === 'visitor' ? 'active' : ''}`}
                      onClick={() => handleClick('visitor')}
                    >
                      Pengunjung
                    </div>
                    <div className="ml-auto p-2">
                      <button className="bg-[#253E8D] text-white py-2 px-4 rounded-md">
                        + Download Event Aktif
                      </button>
                    </div>
                  </div>

                <div className="col-span-1 p-3 bg-white rounded-md shadow-md relative mt-4">
                <ul className="list-none p-0 m-0">
                    <li className="flex justify-between bg-gray- items-center border-b border-gray-200 py-1">
                    <span className='text-3xl font-bold text-sm w-1/6'>#ID</span>
                    <span className='text-3xl font-bold text-sm w-1/6'>Tanggal</span>
                    <span className='text-3xl font-bold text-sm w-1/6'>Nama Pembeli</span>
                    <span className='text-3xl font-bold text-sm w-1/6'>Jenis</span>
                    <span className='text-3xl font-bold text-sm w-1/6'>Pembayaran</span>
                    <span className='text-3xl font-bold text-sm w-1/6'>Status</span>
                    <span className='text-3xl font-bold text-sm w-1/6'>Aksi</span>
                    </li>
                    {/* Tambahkan item-item transaksi di sini */}
                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=' w-1/6'>1</span>
                    <span className=' w-1/6'>2023-11-29</span>
                    <span className=' w-1/6'>John Doe</span>
                    <span className=' w-1/6'>tiket</span>
                    <span className=' w-1/6'>Rp.100.00</span>
                    <span className=' w-1/6'>Lunas</span>
                    <span className=' w-1/6'>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>
                </ul>
               </div>
              </div>
             </div>
          </div>
      </main>
  </section>
  )
}

export default MyEvent