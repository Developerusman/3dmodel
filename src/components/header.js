import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'><a href="https://skrobaki.com/">Skrobaki.</a></div>
        <nav>
          <ul>
            <li>
              <a href='/'>All copyrights by Usman Developer</a>
            </li>
            <li>
              <a href='https://usmandeveloper.com/my-works'>UD - All Projects</a>
            </li>
            {/* <li>
              <a href='/'>solutions</a>
            </li> */}
            <li>
              <a href='https://usmandeveloper.com/'>Powerd by Usman developer</a>
            </li>
            {/* <li className='btn'>
              <a href='/'>order</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
