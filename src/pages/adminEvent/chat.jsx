/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../../component/adminEvent/Sidebar";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import user from "../../assets/img/user.svg";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function Chat() {
  return (
    <section>
      <Sidebar />

      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
        {/* header start */}
        <div className="bg-white flex items-center justify-between py-7 rounded-sm">
          <div className="pl-5">
            <h1 className="text-3xl font-bold">Chat</h1>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex mr-16 gap-x-6">
                <a className="cursor-pointer">
                  <TextsmsIcon className="text-[#253E8D]" />
                </a>
                <a className="cursor-pointer">
                  <NotificationsActiveIcon className="text-[#253E8D]" />
                </a>
                <a href="">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={user}
                    alt="Rounded avatar"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* header end */}
        {/* content start */}
        <section className="bg-white rounded-md flex m-4 p-4">
          <div className="w-4/12 bg-white pt-2">
            <div className="flex">
              <div className="flex items-center w-10/12 relative mr-4">
                <SearchIcon className="ml-3 cursor-pointer absolute" />
                <input
                  type="text"
                  name="name"
                  placeholder="Cari di Lokasani"
                  className="w-full py-1 pl-12 bg-[#F2F2F2] rounded-full"
                />
              </div>
              <div className="bg-[#768DD5] rounded-full cursor-pointer hover:bg-[#3653B0] h-7 flex items-center justify-center mr-3 w-7">
                <FilterListIcon className="text-white" />
              </div>
            </div>
            <div className="flex justify-center gap-x-2 mt-4">
              <button className="bg-[#3653B0] py-2 px-3 text-sm rounded-full text-white">
                Belum Dibaca
              </button>
              <button className="bg-[#CCCCCC] py-2 px-3 text-sm rounded-full text-white">
                Belum Dijawab
              </button>
              <button className="bg-[#CCCCCC] py-2 px-3 text-sm rounded-full text-white">
                Selesai
              </button>
            </div>
            <div className="pr-2 pt-3 rounded-md">
              <div className="overflow-y-auto h-[60vh]">
                <div className="flex justify-between items-center mt-4 shadow-xl px-1 rounded-md py-2 bg-slate-300 mr-3 gap-x-3">
                  <div className="w-2/12 flex justify-center items-center">
                    <AccountCircleIcon fontSize="large" />
                  </div>
                  <div className="w-7/12">
                    <h1 className="font-semibold">Nama Pengguna</h1>
                    <h1 className="text-sm">Chat</h1>
                  </div>
                  <div className="flex items-center justify-center flex-col w-2/12">
                    <div className="w-7 h-7 bg-[#162146] flex items-center justify-center text-white rounded-full">
                      50
                    </div>
                    <div className="text-xs">00:00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 shadow-xl px-1 rounded-md py-2 bg-slate-300 mr-3 gap-x-3">
                  <div className="w-2/12 flex justify-center items-center">
                    <AccountCircleIcon fontSize="large" />
                  </div>
                  <div className="w-7/12">
                    <h1 className="font-semibold">Nama Pengguna</h1>
                    <h1 className="text-sm">Chat</h1>
                  </div>
                  <div className="flex items-center justify-center flex-col w-2/12">
                    <div className="w-7 h-7 bg-[#162146] flex items-center justify-center text-white rounded-full">
                      50
                    </div>
                    <div className="text-xs">00:00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 shadow-xl px-1 rounded-md py-2 bg-slate-300 mr-3 gap-x-3">
                  <div className="w-2/12 flex justify-center items-center">
                    <AccountCircleIcon fontSize="large" />
                  </div>
                  <div className="w-7/12">
                    <h1 className="font-semibold">Nama Pengguna</h1>
                    <h1 className="text-sm">Chat</h1>
                  </div>
                  <div className="flex items-center justify-center flex-col w-2/12">
                    <div className="w-7 h-7 bg-[#162146] flex items-center justify-center text-white rounded-full">
                      50
                    </div>
                    <div className="text-xs">00:00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 shadow-xl px-1 rounded-md py-2 bg-slate-300 mr-3 gap-x-3">
                  <div className="w-2/12 flex justify-center items-center">
                    <AccountCircleIcon fontSize="large" />
                  </div>
                  <div className="w-7/12">
                    <h1 className="font-semibold">Nama Pengguna</h1>
                    <h1 className="text-sm">Chat</h1>
                  </div>
                  <div className="flex items-center justify-center flex-col w-2/12">
                    <div className="w-7 h-7 bg-[#162146] flex items-center justify-center text-white rounded-full">
                      50
                    </div>
                    <div className="text-xs">00:00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 shadow-xl px-1 rounded-md py-2 bg-slate-300 mr-3 gap-x-3">
                  <div className="w-2/12 flex justify-center items-center">
                    <AccountCircleIcon fontSize="large" />
                  </div>
                  <div className="w-7/12">
                    <h1 className="font-semibold">Nama Pengguna</h1>
                    <h1 className="text-sm">Chat</h1>
                  </div>
                  <div className="flex items-center justify-center flex-col w-2/12">
                    <div className="w-7 h-7 bg-[#162146] flex items-center justify-center text-white rounded-full">
                      50
                    </div>
                    <div className="text-xs">00:00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 shadow-xl px-1 rounded-md py-2 bg-slate-300 mr-3 gap-x-3">
                  <div className="w-2/12 flex justify-center items-center">
                    <AccountCircleIcon fontSize="large" />
                  </div>
                  <div className="w-7/12">
                    <h1 className="font-semibold">Nama Pengguna</h1>
                    <h1 className="text-sm">Chat</h1>
                  </div>
                  <div className="flex items-center justify-center flex-col w-2/12">
                    <div className="w-7 h-7 bg-[#162146] flex items-center justify-center text-white rounded-full">
                      50
                    </div>
                    <div className="text-xs">00:00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 shadow-xl px-1 rounded-md py-2 bg-slate-300 mr-3 gap-x-3">
                  <div className="w-2/12 flex justify-center items-center">
                    <AccountCircleIcon fontSize="large" />
                  </div>
                  <div className="w-7/12">
                    <h1 className="font-semibold">Nama Pengguna</h1>
                    <h1 className="text-sm">Chat</h1>
                  </div>
                  <div className="flex items-center justify-center flex-col w-2/12">
                    <div className="w-7 h-7 bg-[#162146] flex items-center justify-center text-white rounded-full">
                      50
                    </div>
                    <div className="text-xs">00:00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 shadow-xl px-1 rounded-md py-2 bg-slate-300 mr-3 gap-x-3">
                  <div className="w-2/12 flex justify-center items-center">
                    <AccountCircleIcon fontSize="large" />
                  </div>
                  <div className="w-7/12">
                    <h1 className="font-semibold">Nama Pengguna</h1>
                    <h1 className="text-sm">Chat</h1>
                  </div>
                  <div className="flex items-center justify-center flex-col w-2/12">
                    <div className="w-7 h-7 bg-[#162146] flex items-center justify-center text-white rounded-full">
                      50
                    </div>
                    <div className="text-xs">00:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-8/12 bg-[#CCCCCC] h-[77vh] flex flex-col justify-between">
            <div className="flex justify-between items-center shadow-xl px-1 py-2 bg-white gap-x-3">
              <div className="w-2/12 flex justify-center items-center">
                <AccountCircleIcon fontSize="large" />
              </div>
              <div className="w-10/12">
                <h1 className="font-semibold">Nama Pengguna</h1>
                <h1 className="text-xs text-[#0063F7]">Online</h1>
              </div>
              <div className="flex items-center justify-center flex-col w-1/12">
                <InfoIcon />
              </div>
            </div>
            <div className="mt-3">
              <div className="px-3 flex flex-col">
                <div className="bg-white w-[50vh] p-2 rounded-md">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="bg-[#C2CDEF] w-[50vh] self-end p-2 rounded-md">
                  <h1>Lorem ipsum dolor sit.</h1>
                </div>
              </div>
            </div>
            <div className="bg-white py-3">
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="Tulis pesan di sini"
                  className="bg-[#EBEFF9] py-1 px-3 w-9/12 rounded-full ml-3 text-[15px]"
                />
                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#3653B0] mr-6">
                  <ArrowForwardIosIcon className="text-white" />
                </div>
              </div>
              <div className="pl-2 mt-2">
                <EmojiEmotionsIcon
                  fontSize="small"
                  className="text-[#768DD5] mr-1 cursor-pointer hover:text-[#3653B0]"
                />
                <ImageIcon
                  fontSize="small"
                  className="text-[#768DD5] mr-1 cursor-pointer hover:text-[#3653B0]"
                />
                <AttachFileIcon
                  fontSize="small"
                  className="text-[#768DD5] mr-1 cursor-pointer hover:text-[#3653B0]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* end content */}
      </main>
    </section>
  );
}

export default Chat;
