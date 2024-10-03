import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/adminEvent/Sidebar';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from '../../assets/img/user.svg';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Payout() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [payoutData, setPayoutData] = useState([]);
  const [filteredPayoutData, setFilteredPayoutData] = useState([]);
  const [activeButton, setActiveButton] = useState('semua');
  const [selectedDetail, setSelectedDetail] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://657af72e394ca9e4af1331c9.mockapi.io/payout');
      const data = await response.json();
      setPayoutData(data);
      setFilteredPayoutData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`https://657af72e394ca9e4af1331c9.mockapi.io/payout/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Jika penghapusan berhasil, perbarui data
        fetchData();
      } else {
        console.error('Error deleting data:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleExportButtonClick = () => {
    console.log('Mengekspor:', selectedDate);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    const filteredData = payoutData.filter((item) => button === 'semua' || item.status === button);
    setFilteredPayoutData(filteredData);
  };

  const handleDetailClick = (id) => {
    const detail = payoutData.find((item) => item.id === id);
    setSelectedDetail(detail);
  };

  const closeDetail = () => {
    setSelectedDetail(null);
  };

  return (
    <section>
      <Sidebar />

      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
        <div className="bg-white flex items-center justify-between py-7 rounded-sm">
          <div className='pl-5'>
            <h1 className='text-3xl font-bold'>Payout</h1>
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

        <div className='flex items-center justify-between rounded-sm'>
          <div className="flex items-center ">
            {['semua', 'belum diajukan', 'tertunda', 'selesai', 'gagal'].map((button) => (
              <button
                key={button}
                style={{
                  backgroundColor: activeButton === button ? '#3653B0' : '#ccc',
                  color: 'white',
                  padding: '6px 12px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  borderRadius: '4px',
                  margin: '2px',
                }}
                onClick={() => handleButtonClick(button)}
              >
                {button.charAt(0).toUpperCase() + button.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <div className="flex justify-end items-center mr-2 border-2 border-black">
              <h1 className="font-semibold">Tampilkan</h1>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Tanggal/bulan"
                className="bg-white text-[#3653B0] p-2 py-2 rounded-md outline outline-black outline-1 ml-2"
              />
            </div>
            <button
              className="bg-[#243775] text-white py-[6px] px-4 rounded-md m-2 flex items-center"
              onClick={handleExportButtonClick}
            >
              Export
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-1 p-4'>
          <div className="col-span-1 bg-white p-3 rounded-md shadow-md relative">
            <ul className="list-none p-0 m-0">
              <li className="flex justify-between items-center border-b border-gray-200 py-1">
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>#ID</span>
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Tanggal</span>
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Nama Event</span>
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Total Pendapatan</span>
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Status Payout</span>
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Aksi</span>
              </li>

              {filteredPayoutData.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                  <span className="text-[#3653B0] w-1/6">{item.id}</span>
                  <span className="text-[#3653B0] w-1/6">{item.tanggal}</span>
                  <span className="text-[#3653B0] w-1/6">{item.nama_event}</span>
                  <span className="text-[#3653B0] w-1/6">
                    {typeof item.total_pendapatan === 'string' && item.total_pendapatan.trim() !== '' ? (
                      <span>{item.total_pendapatan}</span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </span>
                  <span className={`text-${item.status === 'belum diajukan' ? 'blue-500' : item.status === 'tertunda' ? 'red-500' : item.status === 'selesai' ? 'green-500' : item.status === 'gagal' ? 'red-400' : 'black'} w-1/6`}>{item.status}</span>
                  <span className="text-[#3653B0] w-1/6">
                    <InfoOutlinedIcon onClick={() => handleDetailClick(item.id)} />
                    <button
                    onClick={() => handleDeleteClick(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <DeleteOutlineIcon />
                  </button>

                  </span>
                  
                  {selectedDetail && selectedDetail.id === item.id && (
                    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md">
                      <p>ID: {selectedDetail.id}</p>
                      <p>Tanggal: {selectedDetail.tanggal}</p>
                      <p>Nama Event: {selectedDetail.nama_event}</p>
                      <p>Total Pendapatan: {selectedDetail.total_pendapatan}</p>
                      <p>Status Payout: {selectedDetail.status}</p>
                      <button onClick={closeDetail} className='bg-blue-700 w-full rounded-md text-white'>Tutup</button>
                    </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Payout;
