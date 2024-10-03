/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import TransactionIcon from "../../assets/icon/transaction.svg";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../../assets/img/logo_admin.png";

function Sidebar() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [myEvent, setMyEvent] = useState(true);
  const [helpCenter, setHelpCenter] = useState(true);
  const [kataPengunjung, setKataPengunjung] = useState(true);
  const openSidebar = () => {
    setSidebar(!sidebar);
  };

  const openMyEvent = () => {
    setMyEvent(!myEvent);
  };

  const openHelpCenter = () => {
    setHelpCenter(!helpCenter);
  };

  const openKataPengunjung = () => {
    setKataPengunjung(!kataPengunjung);
  };

  return (
    <>
      <button
        onClick={openSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-5 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
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
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        id="logo-sidebar"
      >
        <div className="h-screen px-3 py-4 overflow-y-auto bg-[#253E8D]">
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
            <a
              onClick={() => {
                navigate("/adminevent/newevent/");
              }}
              className="cursor-pointer flex items-center justify-center py-3 p-2 text-white rounded-full bg-[#768DD5]"
            >
              + Add New Event
            </a>
          </div>

          <div className="flex flex-col space-y-[15vh]">
            <div className="mx-3">
              <ul className="space-y-1">
                <li>
                  <a
                    onClick={() => {
                      navigate("/adminevent/");
                    }}
                    className="cursor-pointer text-sm flex items-center px-2 py-1 text-white rounded-sm hover:bg-gray-700 group"
                  >
                    <HomeIcon fontSize="small" />
                    <span className="flex-1 ml-3 whitespace-nowrap ">Home</span>
                  </a>
                </li>
                <li onClick={openMyEvent}>
                  <a className="cursor-pointer text-sm  flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                    <EventIcon fontSize="small" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      My Event
                    </span>
                    {myEvent ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowUpIcon />
                    )}
                  </a>
                </li>
                <div className={`${myEvent ? `hidden` : `block w-full`}`}>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/adminevent/newevent/");
                      }}
                      className="cursor-pointer text-xs flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ml-8 whitespace-nowrap">
                        Tambah Event Baru
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/adminevent/myevent/");
                      }}
                      className="cursor-pointer text-xs flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ml-8 whitespace-nowrap">
                        Event Aktif
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/adminevent/myevent/");
                      }}
                      className="cursor-pointer text-xs flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ml-8 whitespace-nowrap">
                        Event Lalu
                      </span>
                    </a>
                  </li>
                </div>
                <li>
                  <a
                    onClick={() => {
                      navigate("/adminevent/transaksi");
                    }}
                    className="cursor-pointer text-sm  flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group"
                  >
                    <img
                      src={TransactionIcon}
                      alt="Transaction"
                      className="w-5 h-5"
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Transaction
                    </span>
                  </a>
                </li>
                <li onClick={openHelpCenter}>
                  <a className="cursor-pointer text-sm  flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                    <SupportAgentIcon fontSize="small" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Help Center
                    </span>
                    {helpCenter ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowUpIcon />
                    )}
                  </a>
                </li>
                <div className={`${helpCenter ? `hidden` : `block w-full`}`}>
                  <li>
                    <a className="cursor-pointer text-xs flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                      <span className="flex-1 ml-8 whitespace-nowrap">
                        Edukasi
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/adminevent/chat/");
                      }}
                      className="cursor-pointer text-xs flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ml-8 whitespace-nowrap">
                        Bantuan
                      </span>
                    </a>
                  </li>
                </div>
                <li onClick={openKataPengunjung}>
                  <a className="cursor-pointer text-sm  flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                    <ForumIcon fontSize="small" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Kata Pengunjung
                    </span>
                    {kataPengunjung ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowUpIcon />
                    )}
                  </a>
                </li>
                <div
                  className={`${
                    kataPengunjung ? `hidden` : `block w-full absolute`
                  }`}
                >
                  <li>
                    <a className="cursor-pointer text-xs flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                      <span className="flex-1 ml-8 whitespace-nowrap">
                        Chat Pengunjung
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer text-xs flex items-center px-2 py-1 rounded-sm text-white hover:bg-gray-700 group">
                      <span className="flex-1 ml-8 whitespace-nowrap">
                        Ulasan Pengunjung
                      </span>
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="mx-3">
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
