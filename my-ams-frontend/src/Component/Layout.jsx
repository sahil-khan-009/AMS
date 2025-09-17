import Navbar from '../Component/Navbar.jsx';
import Hero from '../Component/Hero.jsx';
import Program from '../Component/Program.jsx';
import Aboutus from '../Component/Aboutus.jsx';
import Services from '../Component/Services.jsx';
import Appointmentstep from '../Component/Appointmentstep.jsx';
import Contactus from '../Component/Contactus.jsx';
import { Outlet } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext.jsx';
import { useEffect } from 'react';




const Layout = () => {


const { navBarConfig, SetNavBarConfig}=useAppointment();


useEffect(()=>{
    SetNavBarConfig(true);
},[])


    return (
        <>
            <Navbar />
            <Hero />
            <Program />
            <Aboutus />
            <Services />
            <Appointmentstep />
            <Contactus />
            <Outlet />
        </>
    );
};

export default Layout;
