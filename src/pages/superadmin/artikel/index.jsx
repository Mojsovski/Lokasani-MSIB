/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsIcon from "@mui/icons-material/Textsms";
import VisibilityIcon from "@mui/icons-material/Visibility";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import PlaceImage from "../../../assets/img/placeimage-artikel.png";

function index() {
  const navigate = useNavigate();
  return (
    <section>
      <Sidebar />
      <Navbar title="Artikel" />

      {/* content start */}
      <div className="pt-[114px] h-screen sm:ml-[316px]">
        <div className="flex flex-row justify-center items-center gap-x-10 px-4">
          <div className=" w-56 h-[150px] flex justify-center-center flex-col gap-y-3 pt-3">
            <div
              onClick={() => {
                navigate("/superadmin/addartikel");
              }}
              className="bg-[#F3B502] hover:bg-amber-500 rounded-[16px] h-[50px] flex items-center justify-center gap-x-2 cursor-pointer"
            >
              <EditIcon fontSize="small" className="text-white" />
              <span className="text-white text-sm font-medium">
                Tulis Artikel
              </span>
            </div>
            <div
              onClick={() => {
                navigate("/superadmin/kelolaartikel");
              }}
              className="bg-[#3653B0] hover:bg-blue-900 rounded-[16px] h-[50px] flex items-center justify-center cursor-pointer"
            >
              <span className="text-white text-sm font-medium">
                Kelola Artikel
              </span>
            </div>
          </div>
          <div className="bg-slate-200 w-52 h-[150px] rounded-[16px] pl-3">
            <div className="ml-3">
              <FavoriteIcon fontSize="large" className="text-[#FF3B3B] mt-3" />
              <div className="flex">
                <div className="h-17 bg-[#3653B0] w-2 mt-4 mb-1"></div>
                <div className="flex flex-col mt-3 ml-3">
                  <span className="">Feedback</span>
                  <span className="font-semibold text-[35px]">76</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 w-52 h-[150px] rounded-[16px] pl-4">
            <VisibilityIcon fontSize="large" className="text-[#339981] mt-3" />
            <div className="flex">
              <div className="h-17 bg-[#3653B0] w-2 mt-4 mb-1"></div>
              <div className="flex flex-col mt-3 ml-3">
                <span>Pembaca</span>
                <span className="font-semibold text-[35px]">76</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 w-52 h-[150px] rounded-[16px] pl-4">
            <QuestionAnswerIcon
              fontSize="large"
              className="text-[#FF3B3B] mt-3"
            />
            <div className="flex">
              <div className="h-17 bg-[#3653B0] w-2 mt-4 mb-3"></div>
              <div className="flex flex-col mt-3 ml-3">
                <span>Laporan</span>
                <span className="font-semibold text-[40px]">76</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 mx-auto pl-6 w-[95%] bg-slate-200 rounded-[10px] pb-4 mb-3">
          <div>
            <h1 className="pt-3 font-semibold text-2xl">Artikel terbaru</h1>
          </div>
          <div className="pt-2 grid grid-cols-3 2xl:grid-cols-4 gap-y-5 px-auto">
            <div className="w-[250px]">
              <img src={PlaceImage} width={250} alt="" />
              <h1 className="font-semibold text-sm mt-2 ml-1">
                Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
              </h1>
              <div className="ml-1 mt-3 flex items-center text-[#999999]">
                <VisibilityIcon fontSize="small" />
                &nbsp;<span>12</span>
                <FavoriteIcon fontSize="small" className="ml-3" />
                &nbsp;<span>8</span>
                <h1 className="ml-6 text-sm">12 November 2023</h1>
              </div>
            </div>
            <div className="w-[250px]">
              <img src={PlaceImage} width={250} alt="" />
              <h1 className="font-semibold text-sm mt-2 ml-1">
                Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
              </h1>
              <div className="ml-1 mt-3 flex items-center text-[#999999]">
                <VisibilityIcon fontSize="small" />
                &nbsp;<span>12</span>
                <FavoriteIcon fontSize="small" className="ml-3" />
                &nbsp;<span>8</span>
                <h1 className="ml-6 text-sm">12 November 2023</h1>
              </div>
            </div>
            <div className="w-[250px]">
              <img src={PlaceImage} width={250} alt="" />
              <h1 className="font-semibold text-sm mt-2 ml-1">
                Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
              </h1>
              <div className="ml-1 mt-3 flex items-center text-[#999999]">
                <VisibilityIcon fontSize="small" />
                &nbsp;<span>12</span>
                <FavoriteIcon fontSize="small" className="ml-3" />
                &nbsp;<span>8</span>
                <h1 className="ml-6 text-sm">12 November 2023</h1>
              </div>
            </div>
            <div className="w-[250px]">
              <img src={PlaceImage} width={250} alt="" />
              <h1 className="font-semibold text-sm mt-2 ml-1">
                Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
              </h1>
              <div className="ml-1 mt-3 flex items-center text-[#999999]">
                <VisibilityIcon fontSize="small" />
                &nbsp;<span>12</span>
                <FavoriteIcon fontSize="small" className="ml-3" />
                &nbsp;<span>8</span>
                <h1 className="ml-6 text-sm">12 November 2023</h1>
              </div>
            </div>
            <div className="w-[250px]">
              <img src={PlaceImage} width={250} alt="" />
              <h1 className="font-semibold text-sm mt-2 ml-1">
                Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
              </h1>
              <div className="ml-1 mt-3 flex items-center text-[#999999]">
                <VisibilityIcon fontSize="small" />
                &nbsp;<span>12</span>
                <FavoriteIcon fontSize="small" className="ml-3" />
                &nbsp;<span>8</span>
                <h1 className="ml-6 text-sm">12 November 2023</h1>
              </div>
            </div>
            <div className="w-[250px]">
              <img src={PlaceImage} width={250} alt="" />
              <h1 className="font-semibold text-sm mt-2 ml-1">
                Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
              </h1>
              <div className="ml-1 mt-3 flex items-center text-[#999999]">
                <VisibilityIcon fontSize="small" />
                &nbsp;<span>12</span>
                <FavoriteIcon fontSize="small" className="ml-3" />
                &nbsp;<span>8</span>
                <h1 className="ml-6 text-sm">12 November 2023</h1>
              </div>
            </div>
            <div className="w-[250px]">
              <img src={PlaceImage} width={250} alt="" />
              <h1 className="font-semibold text-sm mt-2 ml-1">
                Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
              </h1>
              <div className="ml-1 mt-3 flex items-center text-[#999999]">
                <VisibilityIcon fontSize="small" />
                &nbsp;<span>12</span>
                <FavoriteIcon fontSize="small" className="ml-3" />
                &nbsp;<span>8</span>
                <h1 className="ml-6 text-sm">12 November 2023</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content end */}
    </section>
  );
}

export default index;
