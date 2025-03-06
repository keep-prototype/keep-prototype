import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { OptionIcon } from '../shared/icons/OptionIcon';
import { HomeIcon } from '../shared/icons/HomeIcon';
import { UserIcon } from '../shared/icons/UserIcon';

export const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const handleMenuClick = () => {
    navigate('/menu');
  };
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <section className="fixed bottom-0 left-0 w-screen h-18 flex items-center justify-between px-8">
      <div
        onClick={handleMenuClick}
        className={`flex flex-col items-center justify-center gap-1 ${
          pathname === '/menu' ? 'text-green-light' : 'text-neutral-400'
        } `}
      >
        <OptionIcon />
        <button>menu</button>
      </div>
      <div
        onClick={handleHomeClick}
        className={`flex flex-col items-center justify-center gap-1 ${
          pathname === '/' ? 'text-green-light' : 'text-neutral-400'
        } `}
      >
        <HomeIcon />
        <button>home</button>
      </div>
      <div
        onClick={handleProfileClick}
        className={`flex flex-col items-center justify-center gap-1 ${
          pathname === '/profile' ? 'text-green-light' : 'text-neutral-400'
        } `}
      >
        <UserIcon />
        <button>profile</button>
      </div>
    </section>
  );
};
