// import React, { useState } from 'react';
// import {Container, Button } from '@mui/material';
// import { keyframes } from '@emotion/react'
// import { Link } from 'react-scroll';
// // import Logo from '@/components/logo';
// // const LogoDark = '/assets/lucid/logo.svg';
// import { DrawerProvider } from "../contexts/drawer/drawer.provider"
// import MobileDrawer from './mobile-drawer.js';
// import menuItems from './header.data';


// export default function Header({ className }) {
//   const [currentPath, setCurrentPath] = useState("")
//   return (
//     <DrawerProvider>
//       <header style={styles.header} className={className} id="header">
//         <Container style={styles.container}>
//           {/* <Logo src={LogoDark} /> */}
          
//           <div style={styles.nav}>

//             { menuItems.map(({ path, label }, i) => (
//               <Link
//                 activeClass="active"
//                 to={path}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 key={i}
//               >
//                 {label}
//               </Link>
//             ))}
            
            
//           </div>

//           <Button
//             className="donate__btn"
//             color="secondary"
            
//             sx= { { borderRadius: 28 } }
//             aria-label="Get Started"
//           >
//             Get Started
//           </Button>

//           <MobileDrawer />
//         </Container>
//       </header>
//     </DrawerProvider>
//   );
// }

// const positionAnim = keyframes`
//   from {
//     position: fixed;
//     opacity: 1;
//   }

//   to {
//     position: absolute;
//     opacity: 1;
//     transition: all 0.4s ease;
//   }
// `;

// const styles = {
//   header: {
//     color: '#fff',
//     fontWeight: 'body',
//     py: 4,
//     width: '100%',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     backgroundColor: 'red',
//     // '#311e25',
//     // '#db9a64',
//     transition: 'all 0.4s ease',
//     animation: `${positionAnim} 0.4s ease`,
//     '.donate__btn': {
//       flexShrink: 0,
//       mr: [15, 20, null, null, 0],
//       ml: ['auto', null, null, null, 0],
//     },
//     '&.sticky': {
//       position: 'fixed',
//       backgroundColor: 'background',
//       color: '#000000',
//       boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
//       py: 3,
//       'nev > a': {
//         color: 'text',
//       },
//     },
//   },
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   nav: {
//     // display: 'Flex',
//     // justifyContent: 'space-between',
//     marginleft: '9px',
//     '@media screen and (min-width: 1024px)': {
//       display: 'block',
//     },
//     a: {
//       fontSize: 2,
//       fontWeight: 'body',
//       px: 5,
//       cursor: 'pointer',
//       lineHeight: '1.2',
//       transition: 'all 0.15s',
//       '&:hover': {
//         color: 'primary',
//       },
//       '&.active': {
//         color: 'primary',
//       },
//     },
//   },
// };


import { useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css'

function Header() {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        }
    },[])

    const isSticky = (e) => {
        const header = document.querySelector('.header-area');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('isSticky') : header.classList.remove('isSticky');   
    };
  return (
    
    <header>
        <div className="header-area" data-aos="fade-in">
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid ">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                    <Link to="home">
                                        <img src="img/logon.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <Link style={{cursor: "pointer"}} to="home"
                                                activeClass="active"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}>
                                                home</Link>
                                            </li>
                                            <li>
                                                <Link style={{cursor: "pointer"}} to="services" 
                                                    activeClass="active"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}>
                                                Services
                                                </Link>
                                            </li>                                            
                                            <li>
                                                <Link style={{cursor: "pointer"}} to="contact"
                                                    activeClass="active"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}>
                                                Contact
                                                </Link>
                                            </li>
                                            <li><a target="_blank" href="NNADI KEMAKOLAM DANIEL (1).pdf">Certificate</a></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="book_btn d-none d-lg-block">
                                        <Link style={{cursor: "pointer"}} to="contact"
                                            activeClass="active"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}>
                                             Let’s Talk
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
  )
}

export default Header

