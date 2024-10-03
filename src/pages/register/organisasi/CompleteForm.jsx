/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import lokasaniLogo from "../../../assets/img/lokasani-logo-register.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import Swal from "sweetalert2";

const CompleteForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [outletName, setOutletName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressId, setAddressId] = useState("");
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [showAgreementWarning, setShowAgreementWarning] = useState(false);

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (!isAgreementChecked) {
      setShowAgreementWarning(true);
      return;
    }
    setShowAgreementWarning(false);
    const newData = {
      outlet_name: outletName,
      email: email,
      phone_number: phoneNumber,
      password: password,
      address_id: addressId,
      role: {
        role: "EVENT CREATOR",
      },
    };
    try {
      const response = await axios.post("", newData);

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Berhasil Registrasi",
          confirmButtonText: "OK",
        });
        console.log("Data berhasil ditambahkan:", response.data);
        navigate("/auth/login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal Registrasi",
        confirmButtonText: "OK",
      });
    }
    console.log(newData);
  };

  const { state } = location;
  const { email, password } = state;
  const handleAgreement = () => {
    setIsAgreementChecked(!isAgreementChecked);
  };

  return (
    <>
      <div className="w-screen h-screen flex custom-bg-register-organisasi">
        <div className="w-1/2 h-screen">
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              className="absolute w-[250px] h-auto"
              src={lokasaniLogo}
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 h-screen px-[5%] flex items-center justify-center bg-white">
          <div className="w-11/12">
            <div className="mt-[20px] mb-8">
              <h1 className="font-black text-4xl tracking-wide custom-font-register mb-5">
                HALO KAMU!
              </h1>
              <p className="font-extralight text-lg">
                Lengkapi data organisasimu dulu ya~
              </p>
            </div>
            <div className="mb-4">
              <form onSubmit={handleSumbit}>
                <div className="mb-[12px] relative">
                  <label
                    className="block font-semibold text-sm text-[#768DD5]"
                    htmlFor="nama"
                  >
                    Nama organisasi
                  </label>
                  <PersonOutlineIcon
                    fontSize="medium"
                    className="absolute left-0 mt-3 ml-2 text-[#3653B0]"
                  />
                  <input
                    className="p-2 pl-10 w-full rounded-lg bg-[#F2F2F2] mt-1 focus:outline-none"
                    id="nama"
                    type="text"
                    name="outletName"
                    required
                    placeholder="Nama organisasi"
                    onChange={(e) => setOutletName(e.target.value)}
                  />
                </div>
                <div className="mb-[12px] relative">
                  <label
                    className="block font-semibold text-sm text-[#768DD5]"
                    htmlFor="nomer"
                  >
                    Nomer handphone
                  </label>
                  <PhoneIcon
                    fontSize="medium"
                    className="absolute left-0 mt-3 ml-2 text-[#3653B0]"
                  />
                  <input
                    className="p-2 pl-10 w-full rounded-lg bg-[#F2F2F2] mt-1 focus:outline-none"
                    id="nomer"
                    name="phoneNumber"
                    type="text"
                    required
                    placeholder="Nomer handphone"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="mb-[50px] relative">
                  <label
                    className="block font-semibold text-sm text-[#768DD5]"
                    htmlFor="alamat"
                  >
                    Alamat organisasi
                  </label>
                  <LocationOnIcon
                    fontSize="medium"
                    className="absolute left-0 mt-3 ml-2 text-[#3653B0]"
                  />
                  <input
                    className="p-2 pl-10 w-full rounded-lg bg-[#F2F2F2] mt-1 focus:outline-none"
                    id="alamat"
                    type="text"
                    name="addressId"
                    required
                    placeholder="Alamat organisasi"
                    onChange={(e) => setAddressId(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
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
                  <label
                    className="text-gray-700 text-medium"
                    htmlFor="agreement"
                  >
                    Saya menyetujui syarat & ketentuan
                  </label>
                </div>
                {showAgreementWarning && (
                  <p className="text-red-500 text-xs ml-6">
                    Harap menyetujui persyaratan pendaftaran.
                  </p>
                )}
                <button
                  className="w-full py-2 px-3 mt-2 rounded-full text-white text-xl font-semibold bg-[#3653B0]"
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

export default CompleteForm;
