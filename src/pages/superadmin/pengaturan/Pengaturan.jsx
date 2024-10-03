import React from "react";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import Akun from "../../../component/superadmin/pengaturan/Akun";
import Keamanan from "../../../component/superadmin/pengaturan/Keamanan";
import Notifikasi from "../../../component/superadmin/pengaturan/Notifikasi";

const Pengaturan = () => {

  return (
    <div className="bg-white">
      <Sidebar />
      <Navbar title="Pengaturan" />
      <div className="px-4 py-28 sm:ml-[266px]">
      <Akun/>
      <Keamanan/>
      <Notifikasi/>
        
      </div>
    </div>
  );
};

export default Pengaturan;
