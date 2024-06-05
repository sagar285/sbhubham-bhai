// // "use client"
// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import * as FaIcons from 'react-icons/fa';
// // // import { FaHome, FaInfoCircle, FaImages, FaMapMarkerAlt, FaVirtualReality, FaDownload, FaPhone } from 'react-icons/fa';

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <nav className="bg-white shadow-md fixed w-full z-10">
// //        {/* Mobile Navbar  */}
// //       <div className="md:hidden flex justify-between items-center p-4">
// //         {/* Logo */}
// //         <div className="flex flex-col">
// //           <span>Godrej</span>
// //           <span>Ananda</span>
// //           <span>Bengaluru</span>
// //         </div>
// //         {/* Toggle Button */}
// //         <button
// //           type="button"
// //           className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
// //           aria-label="toggle menu"
// //           onClick={toggleMenu}
// //         >
// //           <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
// //             {isMenuOpen ? (
// //               <path
// //                 fillRule="evenodd"
// //                 clipRule="evenodd"
// //                 d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
// //               />
// //             ) : (
// //               <path
// //                 fillRule="evenodd"
// //                 d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
// //               />
// //             )}
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Desktop Navbar */}
// //       <div className="hidden md:flex justify-between items-center p-4">
// //         {/* Logo */}
// //         <div className="flex items-center">
// //           <div className="flex flex-col mr-4">
// //             <span>Godrej</span>
// //             <span>Ananda</span>
// //             <span>Bengaluru</span>
// //           </div>
// //         </div>

// //         {/* Sections */}
// //         <div className="flex space-x-4">
// //           {/* Add your sections here */}
// //           <Link href="/section1">
// //             <div className="flex items-center hover:text-gray-600">
// //               <FaIcons.FaHome className="text-xl" />
// //               <span className="ml-2">Section 1</span>
// //             </div>
// //           </Link>
// //           {/* Add more sections as needed */}
// //           <Link href="/section2">
// //             <div className="flex items-center hover:text-gray-600">
// //               <FaIcons.FaInfoCircle className="text-xl" />
// //               <span className="ml-2">Section 2</span>
// //             </div>
// //           </Link>
// //           <Link href="/section3">
// //             <div className="flex items-center hover:text-gray-600">
// //               <FaIcons.FaImages className="text-xl" />
// //               <span className="ml-2">Section 3</span>
// //             </div>
// //           </Link>
// //           <Link href="/section4">
// //             <div className="flex items-center hover:text-gray-600">
// //               <FaIcons.FaMapMarkerAlt className="text-xl" />
// //               <span className="ml-2">Section 4</span>
// //             </div>
// //           </Link>
// //           <Link href="/section5">
// //             <div className="flex items-center hover:text-gray-600">
// //               <FaIcons.FaVirtualReality className="text-xl" />
// //               <span className="ml-2">Section 5</span>
// //             </div>
// //           </Link>
// //           <Link href="/section6">
// //             <div className="flex items-center hover:text-gray-600">
// //               <FaIcons.FaDownload className="text-xl" />
// //               <span className="ml-2">Section 6</span>
// //             </div>
// //           </Link>
// //         </div>

// //         {/* Pre-register and Phone */}
// //         <div className="flex items-center space-x-4">
// //           <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
// //             Pre-register
// //           </button>
// //           <a href="tel:+919122496252" className="flex items-center hover:text-gray-600">
// //             <FaIcons.FaPhone className="text-xl" />
// //             <span className="ml-2">+91 92249 65252</span>
// //           </a>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden">
// //           <div className="px-4 pb-4 space-y-2">
// //             {/* Add your sections here */}
// //             <Link href="/section1">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaHome className="text-xl" />
// //                 <span className="ml-2">Section 1</span>
// //               </div>
// //             </Link>
// //             {/* Add more sections as needed */}
// //             <Link href="/section2">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaInfoCircle className="text-xl" />
// //                 <span className="ml-2">Section 2</span>
// //               </div>
// //             </Link>
// //             <Link href="/section3">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaImages className="text-xl" />
// //                 <span className="ml-2">Section 3</span>
// //               </div>
// //             </Link>
// //             <Link href="/section4">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaMapMarkerAlt className="text-xl" />
// //                 <span className="ml-2">Section 4</span>
// //               </div>
// //             </Link>
// //             <Link href="/section5">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaVirtualReality className="text-xl" />
// //                 <span className="ml-2">Section 5</span>
// //               </div>
// //             </Link>
// //             <Link href="/section6">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaDownload className="text-xl" />
// //                 <span className="ml-2">Section 6</span>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// "use client"
// import React,{useState} from 'react'
// import * as FaIcons from 'react-icons/fa';
// import { FaHome, FaInfoCircle, FaImages, FaMapMarkerAlt, FaVirtualReality, FaDownload, FaPhone } from 'react-icons/fa';
// const Navbar = () => {
//       const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//     return (
//     <nav className="bg-white shadow-md fixed w-full z-10">
//       {/* Mobile Navbar  */}
//      <div className="md:hidden flex justify-between items-center p-4">
//        {/* Logo */}
//        <div className="flex flex-col">
//          <span>Godrej</span>
//          <span>Ananda</span>
//          <span>Bengaluru</span>
//        </div>
//        {/* Toggle Button */}
//        <button
//          type="button"
//          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
//        aria-label="toggle menu"
//          onClick={toggleMenu}
//        >
//          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
//            {isMenuOpen ? (              <path                fillRule="evenodd"
//                clipRule="evenodd"
//                 d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
//               />
//             ) : (
//               <path
//                 fillRule="evenodd"
//                 d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
//               />
//            )}
//          </svg>
//         </button>
//       </div>

//       {/* Desktop Navbar */}
//      <div className="hidden md:flex justify-between items-center p-4">
//        {/* Logo */}
//        <div className="flex items-center">
//          <div className="flex flex-col mr-4">
//            <span>Godrej</span>
//             <span>Ananda</span>
//             <span>Bengaluru</span>
//          </div>
//        </div>
//         {/* Sections */}
//         <div className="flex space-x-4">
//           {/* Add your sections here */}
//          <Link href="/section1">
//            <div className="flex items-center hover:text-gray-600">
//             <FaIcons.FaHome className="text-xl" />
//              <span className="ml-2">Section 1</span>
//            </div>
//          </Link>
//          {/* Add more sections as needed */}
//          <Link href="/section2">
//            <div className="flex items-center hover:text-gray-600">
//               <FaIcons.FaInfoCircle className="text-xl" />
//              <span className="ml-2">Section 2</span>
//             </div>
//           </Link>
//           <Link href="/section3">
//            <div className="flex items-center hover:text-gray-600">
//              <FaIcons.FaImages className="text-xl" />
//              <span className="ml-2">Section 3</span>
//            </div>          </Link>
//          <Link href="/section4">
//            <div className="flex items-center hover:text-gray-600">
//              <FaIcons.FaMapMarkerAlt className="text-xl" />
//              <span className="ml-2">Section 4</span>
//            </div>          </Link>          <Link href="/section5">            <div className="flex items-center hover:text-gray-600">              <FaIcons.FaVirtualReality className="text-xl" />              <span className="ml-2">Section 5</span>            </div>          </Link>          <Link href="/section6">            <div className="flex items-center hover:text-gray-600">              <FaIcons.FaDownload className="text-xl" />              <span className="ml-2">Section 6</span>            </div>          </Link>        </div>

//         {/* Pre-register and Phone */}
//         <div className="flex items-center space-x-4">
//           <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
//             Pre-register
//           </button>
//           <a href="tel:+919122496252" className="flex items-center hover:text-gray-600">
// //             <FaIcons.FaPhone className="text-xl" />
// //             <span className="ml-2">+91 92249 65252</span>
// //           </a>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden">
// //           <div className="px-4 pb-4 space-y-2">
// //             {/* Add your sections here */}
// //             <Link href="/section1">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaHome className="text-xl" />
// //                 <span className="ml-2">Section 1</span>
// //               </div>
// //             </Link>
// //             {/* Add more sections as needed */}
// //             <Link href="/section2">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaInfoCircle className="text-xl" />
// //                 <span className="ml-2">Section 2</span>
// //               </div>
// //             </Link>
// //             <Link href="/section3">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaImages className="text-xl" />
// //                 <span className="ml-2">Section 3</span>
// //               </div>
// //             </Link>
// //             <Link href="/section4">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaMapMarkerAlt className="text-xl" />
// //                 <span className="ml-2">Section 4</span>
// //               </div>
// //             </Link>
// //             <Link href="/section5">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaVirtualReality className="text-xl" />
// //                 <span className="ml-2">Section 5</span>
// //               </div>
// //             </Link>
// //             <Link href="/section6">
// //               <div className="flex items-center hover:text-gray-600">
// //                 <FaIcons.FaDownload className="text-xl" />
// //                 <span className="ml-2">Section 6</span>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
//     </nav>
//    );
// }

// export default Navbar

"use client";
import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import PriceTable from './PriceTable';
import ImageGallery from './ImageGallery';

const Navbar = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage % 3) + 1);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 2 + 3) % 3 + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change the interval time (in milliseconds) here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-4/5 bg-blue-500">
        <div className="flex flex-row gap-5 p-4 bg-blue-700 text-white">
          <div className="font-bold">LOGO</div>
          <div className="flex flex-row space-x-4">
            <a className="flex items-center px-4 py-2 border-r border-white" href="/">
              <FaHome className="mr-2" />
              Home
            </a>
            <a className="flex items-center px-4 py-2 border-r border-white" href="/">
              <FaHome className="mr-2" />
              Profile
            </a>
            <a className="flex items-center px-4 py-2 border-r border-white" href="/">
              <FaHome className="mr-2" />
              Settings
            </a>
            <a className="flex items-center px-4 py-2 border-r border-white" href="/">
              <FaHome className="mr-2" />
              Notifications
            </a>
            <a className="flex items-center px-4 py-2" href="/">
              <FaHome className="mr-2" />
              Search
            </a>
          </div>
        </div>
        <div className="w-full mx-auto mt-5">
          <div className="relative">
            <div className="carousel">
              <img src={`https://source.unsplash.com/random/800x300?sig=${currentImage}`} alt={`Image ${currentImage}`} className="w-full object-cover h-300px" />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
              <button onClick={prevImage} className="bg-gray-800 text-white px-4 py-2 rounded-l">Prev</button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
              <button onClick={nextImage} className="bg-gray-800 text-white px-4 py-2 rounded-r">Next</button>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto mt-5 p-4 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Heading</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub aliquam mauris arcu, id blandit lectus dignissim at. Aliquam erat volutpat. Proin gravida mi quis orci interdum, ut tempor mauris maximus. Sed cursus erat sit amet faucibus consectetur. Quisque volutpat eget felis sit amet consequat. Curabitur nisi velit, fermentum in urna eget, tincidunt pharetra velit. Duis laoreet ex vel odio posuere, at vehicula nisl varius. Proin vehicula libero sed pulvinar aliquam.
          </p>
          <button className='bg-green-800 text-white'>Download BROICHURE</button>
        </div>
        <PriceTable/>
        <ImageGallery/>
        <ImageGallery/>
      </div>
      <div className="w-1/5 bg-green-500 p-4 text-white rounded-lg flex flex-col justify-between">
    {/* Sidebar Content */}
    Sidebar
  </div>
    </div>
  );
};

export default Navbar;






