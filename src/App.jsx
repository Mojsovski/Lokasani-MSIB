import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditEvent from './pages/adminEvent/editevent';
import AdminEvent from './pages/adminEvent/Index'
import Transaksi from './pages/adminEvent/transaksi'
import MyEvent from './pages/adminEvent/myevent'
import Payout from './pages/adminEvent/payout'
import Marchandise from './pages/adminEvent/marchandise'
import PengunjungTable from './component/adminEvent/tabelpengunjung'
import TiketTerjualTable from './component/adminEvent/tabelterjual'
import MerchTable from './component/adminEvent/tabelmerch'
import NewEvent from "./pages/adminEvent/newevent";
import DraftEvent from "./pages/adminEvent/draftevent";
import Chat from "./pages/adminEvent/chat";
import HomeSuperAdmin from './pages/superadmin/dashboard/HomeSuperAdmin'
import DataUser from './pages/superadmin/dataUser/DataUser'
import DaftarAdminEvent from './pages/superadmin/dataUser/DaftarAdminEvent'
import DaftarAdminUmkm from './pages/superadmin/dataUser/DaftarAdminUmkm'
import DaftarPengguna from './pages/superadmin/dataUser/DaftarPengguna'
import VerifikasiAkun from './pages/superadmin/dataUser/VerifikasiAkun'
import SuperAdminArtikel from './pages/superadmin/artikel/index'
import SuperAdminKelolaArtikel from './pages/superadmin/artikel/KelolaArtikel'
import SuperAdminAddArtikel from './pages/superadmin/artikel/Add'
import RegisterOrganisasi from './pages/register/organisasi/Index'
import CompleteFormOrganisasi from './pages/register/organisasi/CompleteForm'
import RegisterToko from './pages/register/toko/Index'
import CompleteFormToko from './pages/register/toko/CompleteForm'
import Pengaturan from './pages/superadmin/pengaturan/Pengaturan'
import TransaksiUMKM from './pages/adminUMKM/Transaction'
import Landing from "./pages/landingpage/index"
import React from "react";
import Login from "./pages/login";
import HomeAdminUMKM from "./pages/adminUMKM/Home";
import TambahProductAdminUMKM from './pages/adminUMKM/TambahProduct'
import DaftarPesananAdmimUMKM from './pages/adminUMKM/DaftarPesanan'
import DaftarProduct from './pages/adminUMKM/DaftarProduct'
import TransaksiSuperadmin from './pages/superadmin/transaksi/index'
import PayoutSuperadmin from './pages/superadmin/transaksi/Payout'
import PusatBantuan from "./pages/superadmin/pusatBantuan/PusatBantuan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<EditEvent/>} path='/adminevent/editevent'/> 
        <Route element={<Chat />} path="/adminevent/chat" />
        <Route element={<HomeSuperAdmin/>} path='/superadmin/homeSuperAdmin'/>
        <Route element={<DataUser/>} path='/superadmin/dataUser'/>
        <Route element={<DaftarAdminEvent/>} path='/superadmin/daftarAdminEvent'/>
        <Route element={<DaftarAdminUmkm/>} path='/superadmin/daftarAdminUmkm'/>
        <Route element={<DaftarPengguna/>} path='/superadmin/daftarPengguna'/>
        <Route element={<AdminEvent/>} path='/adminevent'/>
        <Route element= {<Marchandise/>} path='/adminevent/marchandise'/>
        <Route element= {<PengunjungTable/>} path='/adminevent/tabelpengunjung'/>
        <Route element= {<TiketTerjualTable/>} path='/adminevent/tabelterjual'/>
        <Route element= {<MerchTable/>} path='/adminevent/tabelmerch'/>
        <Route element={<DraftEvent/>} path='/adminevent/draft'/>
        <Route element={<EditEvent/>} path='/adminevent/editevent'/>
        <Route element ={<Transaksi/>} path='/adminevent/transaksi'/>
        <Route element={<MyEvent/>} path='/adminevent/myevent'/>
        <Route element= {<Payout/>} path='/adminevent/payout'/>
        <Route element={<NewEvent />} path="/adminevent/newevent" />
        <Route element={<VerifikasiAkun/>} path='/superadmin/verifikasiAkun'/>
        <Route element={<SuperAdminArtikel/>} path='/superadmin/artikel'/>
        <Route element={<SuperAdminKelolaArtikel/>} path='/superadmin/kelolaartikel'/>
        <Route element={<SuperAdminAddArtikel/>} path='/superadmin/addartikel'/>
        <Route element={<Pengaturan/>} path='/superadmin/pengaturan'/>
        <Route element={<HomeAdminUMKM />} path="/adminumkm" />
        <Route element={<DaftarProduct/>} path='/adminumkm/daftarproduct'/>
        <Route element={<TambahProductAdminUMKM/>} path='/adminumkm/tambahproduct'/>
        <Route element={<DaftarPesananAdmimUMKM/>} path='/adminumkm/daftarpesanan'/>
        <Route element={<TransaksiUMKM/>} path='/adminumkm/daftartransaksi'/>
        <Route element={<Login/>} path="/auth/login"/>
        <Route element={<RegisterOrganisasi/>} path='/auth/register/organisasi'/>
        <Route element={<CompleteFormOrganisasi/>} path='/auth/register/organisasi/form'/>
        <Route element={<RegisterToko/>} path='/auth/register/toko'/>
        <Route element={<CompleteFormToko/>} path='/auth/register/toko/form'/>
        <Route element={<TransaksiSuperadmin/>} path='/superadmin/transaksi'/>
        <Route element={<Landing/>} path="/"/>
        <Route element={<PayoutSuperadmin/>} path='/superadmin/transaksi/payout'/>
        <Route element={<PusatBantuan />} path="/superadmin/pusatbantuan" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
