// import React from 'react'
// import "./Topbar.css"
// import { Link } from 'react-router-dom';
// // import { BrowserRouter } from "react-router-dom"
// import * as Icons from "react-icons/fa"
// import { navbaritems } from './Topbaritems';


// function Topbar() {
//   return (
//     <>
//       <nav className='navbar'>
//         <Link className='navbar-logo'>
//           Solun <Icons.FaTree />
//         </Link>
//       </nav>
//       <ul className='nav-items'>
//         {navbaritems.map(item => {
//           return (
//           <li key={item.id} className={item.cName}>
//             <Link to={item.path}>{item.title}</Link>
//           </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Topbar;

// import React from 'react';
// import "./Topbar.css";
// import { Link } from 'react-router-dom';
// import * as Icons from "react-icons/fa";
// import { navbaritems } from './Topbaritems';

// function Topbar() {
//   return (
//     <nav className='navbar'>
//       <div className='navbar-left'>
//         <Link to="/" className='navbar-logo'>
//           Solun <Icons.FaTree />
//         </Link>
//       </div>
//       <ul className='nav-items'>
//         {navbaritems.map(item => (
//           <li key={item.id} className={item.cName}>
//             <Link to={item.path}>{item.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Topbar;



// import React from 'react';
// import "./Topbar.css";
// import * as Icons from "react-icons/fa";
// import {logo} from "../../assets/Saloon 82-01.png";
// import { navbaritems } from './Topbaritems';

// function Topbar() {
//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-logo'>
//           {/* <img src={logo} alt="Solun" className="logo-img" /> */}
//           Solun <Icons.FaTree />
//         </div>
//       </nav>

//       <ul className='nav-items'>
//         {navbaritems.map(item => (
//           <li key={item.id} className={item.cName}>
//             <a href={item.path}>{item.title}</a>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Topbar;


import React from 'react'

function Topbar() {
  return (
    <div>Topbar</div>
  )
}

export default Topbar