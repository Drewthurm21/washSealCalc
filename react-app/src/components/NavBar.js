
import React from 'react';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav className="container mx-auto text-4xl">
      <div className="flex justify-self-center justify-center max-w-2xl mx-auto">
        <div className='mx-7'>
          <a href='/' exact={true} activeClassName='active'>
            Home
          </a>
        </div>
        <div className='mx-7'>
          <a href='/areacalc' exact={true} activeClassName='active'>
            Area Calculator
          </a>
        </div>
        {/* <div>
          <a href='/login' exact={true} activeClassName='active'>
            Login
          </a>
        </div>
        <div>
          <LogoutButton />
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
