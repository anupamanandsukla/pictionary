import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'
import Permission from '../components/Permission';
import RouteNames from '../constant/RouteNames';
import Modal from '../components/Modal';
import Location from '../components/Location';



const Layout = () => {
    const location = useLocation()
    const [navigatedPaths, setNavigatedPaths] = useState([]);
    const [animationClasses, setanimationClasses] = useState('')

    const navigate = useNavigate()
    let camerabg = ['/pan_capture', '/selfie_capture']
    const [browserErr1, setBrowserErr1] = useState("");
    const [browserErr2, setBrowserErr2] = useState("");

    useEffect(() => {
        // Get stored paths from sessionStorage or initialize an empty array
        const storedPaths = sessionStorage.getItem('navigatedPaths');
        const pathsArray = storedPaths ? JSON.parse(storedPaths) : [];

        // Create an object containing from and to paths
        const navigationData = {
            from: pathsArray.length > 0 ? pathsArray[0].to : null,
            to: location.pathname,
        };

        // Add the navigation data object to the pathsArray
        const updatedPaths = [navigationData, ...pathsArray];
        // Update state with the updatedPaths
        setNavigatedPaths(updatedPaths);

        // Store updatedPaths in sessionStorage
        sessionStorage.setItem('navigatedPaths', JSON.stringify(updatedPaths));
    }, [location.pathname]);

    useEffect(() => {
        let cls = navigatedPaths.length < 2 ? 'animate-fade-down' :
            location.pathname === navigatedPaths[1]?.from ? 'animate-fade-right ' : 'animate-fade-left'
        setanimationClasses(cls)
        setTimeout(() => {
            setanimationClasses("")
        }, 2000);
    }, [navigatedPaths.length])


    

    

    useEffect(() => {
        
        sessionStorage.clear()
     }, []);

    return (
        <div>
            <Modal
                type='loader'
                showModal={false}
                className='bg-transparent'
                handleClose={() => { }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M12 1a11 11 0 1011 11A11 11 0 0012 1zm0 19a8 8 0 118-8 8 8 0 01-8 8z"
                        opacity="0.25"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M10.72 19.9a8 8 0 01-6.5-9.79 7.77 7.77 0 016.18-5.95 8 8 0 019.49 6.52A1.54 1.54 0 0021.38 12h.13a1.37 1.37 0 001.38-1.54 11 11 0 10-12.7 12.39A1.54 1.54 0 0012 21.34a1.47 1.47 0 00-1.28-1.44z"
                    >
                        <animateTransform
                            attributeName="transform"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                        ></animateTransform>
                    </path>
                </svg>
                <div className='absolute left-1/2 -translate-x-2/4 z-50 text-white'>
                    Verifying details
                </div>
            </Modal>
            <main
                style={{
                    height: "100vh",
                    height: "100svh",
                    height: "100dvh",
                }}
                className={`relative flex flex-col mx-auto ${animationClasses} animate-once animate-duration-700 animate-ease-in-out animate-normal animate-fill-both align-middle`}
            >
                    <Outlet />
                    
            </main>
        </div>
    )
}

export default Layout