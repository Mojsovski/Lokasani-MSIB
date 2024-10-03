import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Logotype from "../../../assets/icon/Logotype.svg";
import logoHome from "../../../assets/icon/home.svg";
import logoArtickel from "../../../assets/icon/receipt.svg";
import logoTransaksi from "../../../assets/icon/money.svg";
import logoUser from "../../../assets/icon/person.svg";
import logoAgent from "../../../assets/icon/support_agent.svg";
import logoLogOut from "../../../assets/icon/Logout.svg";
import logoEmail from "../../../assets/icon/email.svg";
import logoSetting from "../../../assets/icon/settings.svg";
import warningImage from "../../../assets/img/warningOut.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLogout = () => {
    Swal.fire({
      title: "Yakin Mau Keluar?",
      text: "Semoga Kembali lagi! Jangan lupa simpan perubahan kamu",
      imageUrl: warningImage,
      imageWidth: 180,
      imageHeight: 180,
      showCancelButton: true,
      confirmButtonText: "Keluar Akun",
      cancelButtonText: "Batal",
      buttonsStyling: false,
      customClass: {
        title: "text-lg font-bold mb-1",
        text: "text-base font-normal",
        confirmButton:
          "w-full max-w-md px-44 py-1 bg-[#3653B0] hover:bg-blue-500 text-white rounded-full",
        cancelButton:
          "w-full max-w-md mt-1 py-1 bg-[#FF3B3B] hover:bg-red-400 text-white rounded-full",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/";
        Swal.fire("Berhasil Keluar!", "", "success");
      }
    });
  };

  return (
    <div
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-[250px] bg-[#253E8D] h-screen transition-transform ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
    >
      <div className="h-full px-4 overflow-y-auto  pt-16 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-8">
            <img src={Logotype} className="w-12 me-3" />
            <span className="self-center text-xl font-medium whitespace-nowrap text-[#E6E6E6]">
              SUPER ADMIN
            </span>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/superAdmin/homeSuperAdmin"}
                className="flex items-center py-2 px-4  text-gray-900 rounded-lg hover:bg-[#768DD5] group "
              >
                <img src={logoHome} className="w-[25px] h-8 " />
                <span className="ms-3 text-[#E6E6E6]">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/superAdmin/artikel"}
                className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-[#768DD5] "
              >
                <img src={logoArtickel} className="w-[25px] h-8 " />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">
                  Artikel
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/superadmin/transaksi"}
                className="flex items-center py-2 px-4 text-gray-900 rounded-lg  hover:bg-[#768DD5] "
              >
                <img src={logoTransaksi} className="w-[25px] h-8" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">
                  Transaksi
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/superAdmin/dataUser"}
                className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-[#768DD5] "
              >
                <img src={logoUser} className="w-[25px] h-8" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">
                  Data user
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/superadmin/pusatbantuan"}
                className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-[#768DD5] "
              >
                <img src={logoAgent} className="w-[25px] h-8 " />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6] ">
                  Pusat Bantuan
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="pb-16">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/superAdmin/pengaturan"}
                className="flex items-center py-2 px-4 text-gray-900 rounded-lg  hover:bg-[#768DD5] "
              >
                <img src={logoSetting} className="w-[25px] h-8" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">
                  Pengaturan
                </span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-[#768DD5] "
                onClick={handleLogout} // Add onClick event for logout
              >
                <img src={logoLogOut} className="w-[25px] h-8" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`fixed top-4 left-4 cursor-pointer block sm:hidden`}
        onClick={toggleMenu}
      >
        {showMenu ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" className="z-100" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;