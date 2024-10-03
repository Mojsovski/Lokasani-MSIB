import React from 'react';
import Sidebar from '../../../component/superadmin/globalComponent/Sidebar';
import Navbar from '../../../component/superadmin/globalComponent/Navbar';
import CardUser from '../../../component/superadmin/globalComponent/CardUser';
import RevenueChart from '../../../component/superadmin/dashboard/RevenueChart';
const HomeSuperAdmin = () => {
  const usersData = [
    { name: 'Pengguna', quantity: 10 },
    { name: 'Admin Event', quantity: 15 },
    { name: 'Admin UMKM', quantity: 8 },
    { name: 'Pengunjung', quantity: 20 },
  ];

  const revenueData = {
    pengguna: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 400, 650],
    adminUMKM: [50, 80, 100, 120, 150, 180, 200, 220, 250, 280, 200, 320],
    adminEvent: [30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195],
    pengunjung: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750],
  };

  return (
    <div className='bg-[#F2F2F2]'>
      <Sidebar />
      <Navbar title="SuperAdmin" />
      <div className="px-4 py-28 sm:ml-[266px]">
        <div className='grid w-full gap-6 px-10 md:grid-cols-4 pb-9'>
          {usersData.map((pengguna, index) => (
            <CardUser key={index} name={pengguna.name} quantity={pengguna.quantity} />
          ))}
        </div>
        <div className='mx-10 p-10 rounded-lg bg-white'>
          <p className='text-4xl font-bold text-gray-900 pb-2'>Revenue</p>
          <RevenueChart data={revenueData} />
        </div>
      </div>
    </div>
  );
};

export default HomeSuperAdmin;
