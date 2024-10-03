import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import bgLogin from "../../assets/img/bg-login.png";
import googleIcon from "../../assets/icon/google-icon.png";
import lokasaniLogo from "../../assets/img/lokasani-logo.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const navigate = useNavigate();
  const [isTetapMasukChecked, setIsTetapMasukChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =useState("false")
  const [error, setError] = useState("")
  const [isLoading, setIsloading] = useState(false)

  const togglePasswordViibility = () => {
    setShowPassword(!showPassword);
  }

  const handleTetapMasukChange = () => {
    setIsTetapMasukChecked(!isTetapMasukChecked);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("submitting login request...")
    try {
      setIsloading(true)
      const response = await axios.post('https://lokasani.my.id/admin/login', {
        email: email,
        password: password
      });
      const token = response.data.data.token
      localStorage.setItem('token', token);
      
      const userRole = response.data.data.role.role.toLowerCase();
      if ( userRole == "product creator" ) {
        navigate("/adminumkm")
      } else if ( userRole == "event creator" ) {
        navigate("/adminevent")
      }else {
        navigate("/superadmin/homesuperadmin")
      }
      setIsloading(false)

    } catch (error) {
      setError(error.response.data.message)
      setIsloading(false)
    }
  };
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-screen bg-[#253E8D]">
          <div className="relative w-full h-full flex justify-center items-center">
            <img className="absolute w-full h-full py-14 object-cover" src={bgLogin} alt="" />
            <img className="absolute w-[250px] h-auto" src={lokasaniLogo} alt="" />
          </div>
        </div>
        <div className="w-1/2 h-full px-[5%] flex items-center">
          <div className="w-full">
            <div className="mb-[42px]">
              <h1 className="font-black text-4xl tracking-wide .custom-font mb-1">HALO LAGI KAMU!</h1>
              <p className="font-extralight text-lg">Lama tak berjumpa ya~</p>
            </div>
            <div className="flex gap-5 mb-[42px]">
              <div className="w-full flex justify-center items-center gap-4 border border-gray-300 rounded-lg py-2 cursor-pointer">
                <img className="w-6 h-6" src={googleIcon} alt="" />
                <p className="font-bold text-xl">Google</p>
              </div>
            </div>
            <div className="flex justify-center items-center mb-[42px]">
              <div className="w-full h-[2px] rounded-full bg-gray-300"></div>
              <p className="block w-[350px] mx-1 font-semibold text-gray-400 text-sm">Atau masuk dengan</p>
              <div className="w-full h-[2px] rounded-full bg-gray-300"></div>
            </div>
            <div className="mb-4">
              <form onSubmit={handleLogin}>
                <div className="mb-[12px]">
                  <label className="block font-semibold text-[#768DD5]" htmlFor="email">Email kamu</label>
                  <input
                    className="p-3 w-full rounded-lg bg-[#F2F2F2] focus:outline-none"
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-8">
                  <label className="block font-semibold text-[#768DD5]" htmlFor="password">Password</label>
                  <div className='flex justify-between relative'>
                    <input
                      className="p-3 w-full rounded-lg bg-[#F2F2F2] focus:outline-none"
                      id="password"
                      type={showPassword ? "password" : "text"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div onClick={togglePasswordViibility} className="absolute right-0 py-3 px-4">
                      {showPassword
                        ? <VisibilityOffIcon fontSize="medium" className="text-gray-600"/>
                        : <VisibilityIcon fontSize="medium" className="text-gray-600"/> 
                      }
                    </div>
                  </div>
                </div>
                {error && 
                  <div className="flex justify-center mb-5">
                    <p className="text-white w-fit block px-5 py-1 bg-red-400 rounded-lg">{error}</p>
                  </div>
                }
                
                <div className="flex items-center mb-2">
                  <input
                    id="tetapMasuk"
                    type="checkbox"
                    className="hidden"
                    onChange={handleTetapMasukChange}
                    checked={isTetapMasukChecked}
                  />
                  <label
                    htmlFor="tetapMasuk"
                    className="cursor-pointer select-none flex items-center justify-center w-7 h-7 border-4 rounded-full transition-all duration-300 mr-2 border-[#84ADFF]"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isTetapMasukChecked ? 'bg-[#84ADFF]' : 'bg-transparent'
                      }`}
                    ></div>
                  </label>
                  <span className="text-gray-700 text-lg">Biarkan saya tetap masuk</span>
                </div>
                <button className={`w-full p-3 rounded-full text-white text-xl font-semibold ${isLoading ? "bg-blue-400" : "bg-[#3653B0]"} `} type="submit">
                  {isLoading ?
                    "Tunggu Sebentar"
                    : "Login"
                  }
                </button>
              </form>
            </div>
            <div className="text-center">
              <p className="font-semibold">Belum punya akun? <a href="" className="text-gray-400 hover:underline">Daftar disini</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login