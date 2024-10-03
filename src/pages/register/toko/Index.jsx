/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bgLogin from "../../../assets/img/bg-register.png";
import lokasaniLogo from "../../../assets/img/lokasani-logo-register.png";
import googleIcon from "../../../assets/img/google-icon-register.png";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);

  const handleAgreement = () => {
    setIsAgreementChecked(!isAgreementChecked);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-screen bg-[#253E8D]">
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              className="absolute w-full h-full py-14 object-cover"
              src={bgLogin}
              alt=""
            />
            <img
              className="absolute w-[250px] h-auto"
              src={lokasaniLogo}
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 h-screen px-[5%] flex items-center justify-center">
          <div className="w-11/12">
            <div className="mt-[20px] mb-8">
              <h1 className="font-black text-4xl tracking-wide custom-font-register mb-5">
                HALO KAMU!
              </h1>
              <p className="font-extralight text-lg">
                Daftarin toko kamu, yuk!
              </p>
            </div>
            <div className="flex gap-5 mb-[36px]">
              <div className="w-full flex justify-center items-center gap-4 border border-gray-300 hover:bg-blue-100 outline outline-1 outline-slate-300 rounded-lg py-1 cursor-pointer">
                <img className="w-6 h-6" src={googleIcon} alt="" />
                <p className="font-bold text-xl">Google</p>
              </div>
            </div>
            <div className="flex justify-center items-center mb-[36px]">
              <div className="w-full h-[2px] rounded-full bg-gray-300"></div>
              <p className="block w-[350px] mx-1 font-semibold text-gray-400 text-sm">
                Atau daftar dengan
              </p>
              <div className="w-full h-[2px] rounded-full bg-gray-300"></div>
            </div>
            <div className="mb-4">
              <form action="">
                <div className="mb-[12px] relative">
                  <label
                    className="block font-semibold text-sm text-[#768DD5]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <EmailIcon
                    fontSize="medium"
                    className="absolute left-0 mt-3 ml-2 text-[#3653B0]"
                  />
                  <input
                    className="p-2 pl-10 w-full rounded-lg bg-[#F2F2F2] mt-1 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="email..."
                  />
                </div>
                <div className="mb-[40px] relative">
                  <label
                    className="block font-semibold text-sm text-[#768DD5]"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <LockIcon
                    fontSize="medium"
                    className="absolute left-0 mt-3 ml-2 text-[#3653B0]"
                  />
                  <button
                    onClick={handleShowPassword}
                    className="absolute right-0 mr-3 mt-3 text-[#3653B0]"
                  >
                    {showPassword == false ? (
                      <VisibilityOffIcon fontSize="medium" />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </button>
                  <input
                    className="p-2 pl-10 w-full rounded-lg mt-1 bg-[#F2F2F2] focus:outline-none"
                    id="password"
                    type={`${showPassword == false ? `password` : `text`}`}
                    placeholder="password..."
                  />
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="agreement"
                    type="checkbox"
                    className="hidden"
                    onChange={handleAgreement}
                    checked={isAgreementChecked}
                  />
                  <label
                    htmlFor="agreement"
                    className="cursor-pointer select-none outline outline-4 flex items-center justify-center w-4 h-4 border-4 rounded-full transition-all duration-300 mr-2 outline-[#84ADFF]"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isAgreementChecked ? "bg-[#84ADFF]" : "bg-transparent"
                      }`}
                    ></div>
                  </label>
                  <span className="text-gray-700 text-medium">
                    Saya menyetujui syarat & ketentuan
                  </span>
                </div>
                <button
                  className="w-full py-2 px-3 rounded-full text-white text-xl font-semibold bg-[#3653B0]"
                  type="submit"
                >
                  Daftar
                </button>
              </form>
            </div>
            <div className="text-center text-sm">
              <p className="font-base">
                Sudah punya akun?{" "}
                <a
                  onClick={() => navigate("/auth/login")}
                  className="text-gray-400 hover:underline"
                >
                  Masuk disini
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
