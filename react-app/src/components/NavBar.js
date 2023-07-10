
import React from 'react';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const user = useSelector(state => state.session.user);

  return (
    <nav className="container mx-auto text-4xl">
      <div className="flex justify-self-center justify-center max-w-2xl mx-auto">
        <div className='mx-4'>
          <a href='/' exact={true} activeClassName='active'>
            Home
          </a>
        </div>
        {user &&
          <div className='mx-4'>
            <a href='/areacalc' exact={true} activeClassName='active'>
              Inventory
            </a>
          </div>}
        {!user ?
          <div className='mx-4'>
            <a href='/login' exact={true} activeClassName='active'>
              Login
            </a>
          </div>
          :
          <div className='mx-4'>
            <LogoutButton />
          </div>}
      </div>
    </nav>
  );
}

export default NavBar;
