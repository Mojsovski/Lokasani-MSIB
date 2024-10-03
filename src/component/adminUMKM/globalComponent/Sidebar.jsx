/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TransactionIcon from "../../../assets/icon/transaction.svg";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../../assets/img/logo_admin.png";

function Sidebar() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <button
        onClick={openSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-5 text-sm text-white rounded-lg sm:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 w-[255px] h-screen transition-transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        id="logo-sidebar"
      >
        <div className="h-screen px-3 py-3 overflow-y-auto bg-[#253E8D]">
          <h2
            href="https://flowbite.com/"
            className="flex items-center pl-2.5 mb-9 mt-6"
          >
            <img src={logo} className="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
            <span className="custom-font font-medium pt-2 text-white">
              CREATOR.
            </span>
            <svg
              className="block h-6 w-6 ml-20 text-white cursor-pointer hover:text-blue-500 md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              onClick={openSidebar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </h2>

          <div className="mx-2 mb-10">
            <a href="/adminumkm/tambahproduct" className="cursor-pointer flex items-center justify-center py-3 p-2 rounded-full text-white bg-[#768DD5]">
              Tambahkan Produk
            </a>
          </div>

          <div className="flex flex-col space-y-[30vh]">
            <div className="mx-3">
              <ul className="space-y-3">
                <li>
                  <a href="/adminumkm" className="cursor-pointer text-sm flex items-center px-2 py-1 text-white rounded-sm hover:bg-gray-700 group">
                    <HomeIcon fontSize="small" />
                    <span className="flex-1 ml-3 whitespace-nowrap ">Home</span>
                  </a>
                </li>
                <li>
                  <a href="/adminumkm/daftarproduct" className="cursor-pointer text-sm  flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                    <ShoppingCartIcon fontSize="small" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Produk
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/adminumkm/daftarpesanan" className="cursor-pointer text-sm  flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                    <EventNoteIcon fontSize="small" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Pesanan
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/adminumkm/daftartransaksi" className="cursor-pointer text-sm  flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                    <img
                      src={TransactionIcon}
                      alt="Transaction"
                      className="w-5 h-5"
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Transaksi
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mx-3 ">
              <ul className="space-y-3">
                <li>
                  <a className="cursor-pointer text-sm  flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                    <PersonIcon fontSize="small" />
                    <span className="flex-1 ml-3 whitespace-nowrap">Akun</span>
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer text-sm  flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                    <LogoutIcon fontSize="small" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Logout
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;