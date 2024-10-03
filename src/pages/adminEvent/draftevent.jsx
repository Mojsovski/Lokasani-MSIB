import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/adminEvent/Sidebar';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from '../../assets/img/user.svg';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DraftEvent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeButton, setActiveButton] = useState('All');
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  useEffect(() => {
  
    fetch('https://657c05c8394ca9e4af153c42.mockapi.io/draftevent')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

  const filteredEvents = events.filter((event) => {
    if (activeButton === 'All') {
      return true; // Tampilkan semua data jika tombol All diklik
    } else {
      return event.status.toLowerCase() === activeButton.toLowerCase();
    }
  });

  const handleDelete = (id) => {
    // Kirim permintaan delete ke API
    fetch(`https://657c05c8394ca9e4af153c42.mockapi.io/draftevent/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Filter events untuk menghilangkan event dengan ID yang dihapus
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  const handleEdit = (event) => {
    setEditEvent(event);
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setEditEvent(null);
  };

  const handleEditSubmit = async () => {
    let retryCount = 0;
    const maxRetries = 3; 
  
    while (retryCount < maxRetries) {
      try {
        const response = await fetch(`https://657c05c8394ca9e4af153c42.mockapi.io/draftevent/${editEvent.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editEvent),
        });
  
        if (response.ok) {
          const updatedEvent = await response.json();
          const updatedEvents = events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event));
          setEvents(updatedEvents);
          setIsEditModalOpen(false);
          setEditEvent(null);
          return; 
        }
      } catch (error) {
        console.error('Error updating data:', error);
      }
  
      retryCount += 1;
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
    }
  
    console.error('Max retries reached. Unable to update data.');
  };
  
  

  return (
    <section>
      <Sidebar />

      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
        <div className="bg-white flex items-center justify-between py-7 rounded-sm">
          <div className='pl-5'>
            <h1 className='text-3xl font-bold'>Event Tersimpan</h1>
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

        <div className='bg-white flex items-center justify-between rounded-sm p-2'>
          <div className="flex items-center ">
            {['All', 'Siarkan', 'Pending', 'Canceled'].map((button) => (
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
                {button}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <div className="flex justify-end items-center mr-2 ">
              <h1 className="font-semibold">Tampilkan</h1>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Tanggal/bulan"
                className="bg-white text-[#3653B0] p-2 py-2 rounded-md outline outline-black outline-1 ml-2"
              />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-1 p-4'>
          <div className="col-span-1 bg-white p-3 rounded-md shadow-md relative">
            <ul className="list-none p-0 m-0">
              <li className="flex justify-between items-center border-b border-gray-200 py-1">
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>#ID</span>
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Tanggal Diajukan</span>
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Nama Event</span>
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Status</span>
                <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Aksi</span>
              </li>

              {filteredEvents.map((event) => (
              <li key={event.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                <span className='text-[#3653B0] w-1/6'>{event.id}</span>
                <span className='text-[#3653B0] w-1/6'>{event.tanggal_diajukan}</span>
                <span className='text-[#3653B0] w-1/6'>{event.name}</span>
                <span
                  className='text-sm text-center w-1/6 rounded-md'
                  style={{
                    backgroundColor:
                      event.status === 'siarkan'
                        ? '#00FF00' 
                        : event.status === 'pending'
                        ? '#FFA500' 
                        : event.status === 'canceled'
                        ? '#FFC0CB' 
                        : '#ccc', 
                  }}
                >
                  {event.status}
                </span>
                <span className='text-[#3653B0] w-1/6'>
                  <span className='text-[#3653B0] w-1/6 cursor-pointer' onClick={() => handleEdit(event)}>
                    <EditIcon />
                  </span>
                  <span className='text-[#3653B0] w-1/6 cursor-pointer' onClick={() => handleDelete(event.id)}>
                    <DeleteOutlineIcon/>
                  </span>
                </span>
              </li>
            ))}

            </ul>
            
            {isEditModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-md">
                <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Nama Event</label>
                  <input
                    type="text"
                    name="name"
                    value={editEvent.name}
                    onChange={(e) => setEditEvent({ ...editEvent, name: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Tanggal Diajukan</label>
                  <input
                    type="text" 
                    name="tanggal_diajukan"
                    value={editEvent.tanggal_diajukan}
                    onChange={(e) => setEditEvent({ ...editEvent, tanggal_diajukan: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={editEvent.status}
                    onChange={(e) => setEditEvent({ ...editEvent, status: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  >
                    <option value="siarkan">Siarkan</option>
                    <option value="pending">Pending</option>
                    <option value="canceled">Canceled</option>
                  </select>
                </div>

                <div className="flex justify-end">
                  <button onClick={handleEditSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Submit
                  </button>
                  <button onClick={handleEditModalClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2">
                    Batal
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </main>
    </section>
  );
}

export default DraftEvent;