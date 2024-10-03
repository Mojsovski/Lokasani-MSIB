import React from "react";
import Testi1 from "../../assets/img/testi1.jpg";
import Testi2 from "../../assets/img/testi2.jpg";
import Testi3 from "../../assets/img/testi3.jpg";
import Testi4 from "../../assets/img/testi4.jpg";
// import Testi5 from "../../assets/img/dlapp2.png";

function Testimoni() {
  return (
    <>
      {" "}
      <div className=" h-[1080px] mx-auto py-14 pr-28 relative bg-blue-900 ">
        <div className="self-stretch h-full w-full flex-row justify-center items-center inline-flex  relative space-x-16 ">
          <div className="w-[800px] h-[500px] bg-white rounded-tr-[80px] rounded-br-[80px]  ">
            <div className="p-20 space-y-8">
              <h3 className="  text-5xl font-extrabold text-black leading-normal ">
                TESTIMONI
              </h3>
              <div className=" text-zinc-800 text-2xl font-normal leading-9">
                Dengarkan pengalaman mereka, temukan inspirasi Anda
              </div>
              <div className="flex-row inline-flex gap-6">
                <div className="w-20 h-20 rounded-full bg-blue-800"></div>
                <div className="w-20 h-20 rounded-full bg-blue-800"></div>
              </div>
            </div>
          </div>
          <div className=" w-full flex-row justify-end items-center inline-flex gap-7 ">
            {/* col 1*/}
            <div className="flex-col space-y-10  ">
              {/* new card */}
              <div className=" w-72 bg-white rounded-3xl p-7 space-y-2">
                <div className="w-16 h-16 relative mb-5">
                  <h3 className=" text-9xl">"</h3>
                </div>
                <div className="w-28 h-7  bg-indigo-200 rounded-3xl gap-1  justify-center inline-flex ">
                  <div className=" text-xs font-normal leading-none inline-flex items-center">
                    Product Creator
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="self-stretch text-justify text-zinc-900 text-base font-normal leading-normal">
                    Sebagai penjual produk seni lokal, kehadiran Lokasani ini
                    membuat proses penjualan menjadi lebih mudah dan efisien.
                    Saya sangat senang melihat produk seni kami diakui oleh
                    banyak orang melalui platform ini
                  </p>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-12 h-12 rounded-full flex justify-center items-center">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={Testi1}
                      alt="Testimoni"
                    />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-semibold leading-normal">
                      Nayla
                    </div>
                    <div className="self-stretch text-zinc-900 text-xs font-normal leading-none">
                      Padang, Sumatra Barat
                    </div>
                  </div>
                </div>
              </div>
              {/* end new card */}
            </div>
            {/* end col */}
            {/* col 2*/}
            <div className="flex-col space-y-10 ">
              {/* new card */}
              <div className=" w-72 bg-white rounded-3xl p-7 space-y-2">
                <div className="w-16 h-16 relative mb-5">
                  <h3 className=" text-9xl">"</h3>
                </div>
                <div className="w-28 h-7  bg-indigo-200 rounded-3xl gap-1  justify-center inline-flex ">
                  <div className=" text-xs font-normal leading-none inline-flex items-center">
                    Product Creator
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="self-stretch text-justify text-zinc-900 text-base font-normal leading-normal">
                    Musik adalah bahasa universal, dan Lokasani ini memberikan
                    panggung yang adil untuk seniman lokal. Terima kasih atas
                    dukungan yang luar biasa!
                  </p>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-12 h-12 rounded-full flex justify-center items-center">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={Testi2}
                      alt="Testimoni"
                    />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-semibold leading-normal">
                      Julio Well
                    </div>
                    <div className="self-stretch text-zinc-900 text-xs font-normal leading-none">
                      Tasik, Jawa Barat
                    </div>
                  </div>
                </div>
              </div>
              {/* end new card */}
              {/* new card */}
              <div className=" w-72 bg-white rounded-3xl p-7 space-y-2">
                <div className="w-16 h-16 relative mb-5">
                  <h3 className=" text-9xl">"</h3>
                </div>
                <div className="w-28 h-7  bg-indigo-200 rounded-3xl gap-1  justify-center inline-flex ">
                  <div className=" text-xs font-normal leading-none inline-flex items-center">
                    Product Creator
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="self-stretch text-justify text-zinc-900 text-base font-normal leading-normal">
                    Berjualan di Lokasani ini benar-benar memberikan dampak
                    positif pada bisnis saya. saya merasa terbantu dengan adanya
                    Lokasani ini.
                  </p>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-12 h-12 rounded-full flex justify-center items-center">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={Testi3}
                      alt="Testimoni"
                    />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-semibold leading-normal">
                      Alexandra
                    </div>
                    <div className="self-stretch text-zinc-900 text-xs font-normal leading-none">
                      Jakarta Selatan
                    </div>
                  </div>
                </div>
              </div>
              {/* end new card */}
            </div>
            {/* end col */}
            {/* col 3*/}
            <div className="flex-col space-y-10 ">
              {/* new card */}
              <div className=" w-72 bg-white rounded-3xl p-7 space-y-2">
                <div className="w-16 h-16 relative mb-5">
                  <h3 className=" text-9xl">"</h3>
                </div>
                <div className="w-28 h-7  bg-indigo-200 rounded-3xl gap-1  justify-center inline-flex ">
                  <div className=" text-xs font-normal leading-none inline-flex items-center">
                    Product Creator
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="self-stretch text-justify text-zinc-900 text-base font-normal leading-normal">
                    Dengan Lokasani Creator saya jadi punya wadah untuk
                    mencurahkan seluruh kreativitas yang saya dan tim saya
                    miliki. Thank u Lokasani
                  </p>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-12 h-12 rounded-full flex justify-center items-center">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={Testi1}
                      alt="Testimoni"
                    />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-semibold leading-normal">
                      Kylie
                    </div>
                    <div className="self-stretch text-zinc-900 text-xs font-normal leading-none">
                      Bandung, Jawa Barat
                    </div>
                  </div>
                </div>
              </div>
              {/* end new card */}
              {/* new card */}
              <div className=" w-72 bg-white rounded-3xl p-7 space-y-2">
                <div className="w-16 h-16 relative mb-5">
                  <h3 className=" text-9xl">"</h3>
                </div>
                <div className="w-28 h-7  bg-indigo-200 rounded-3xl gap-1  justify-center inline-flex ">
                  <div className=" text-xs font-normal leading-none inline-flex items-center">
                    Product Creator
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="self-stretch text-justify text-zinc-900 text-base font-normal leading-normal">
                    Sangat senang bermitra dengan Lokasani untuk menjual produk
                    seni lokal kami. Kami merasakan dampak positif pada
                    penjualan dan visibilitas produk kami. Terimakasih Lokasani.
                  </p>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-12 h-12 rounded-full flex justify-center items-center">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={Testi4}
                      alt="Testimoni"
                    />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-semibold leading-normal">
                      Gojo Saeppuloh
                    </div>
                    <div className="self-stretch text-zinc-900 text-xs font-normal leading-none">
                      Bekasi
                    </div>
                  </div>
                </div>
              </div>
              {/* end new card */}
            </div>
            {/* end col */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimoni;
