import { useNavigate } from 'react-router';
import { GolfIcon } from '../shared/icons/GolfIcon';
import { FitnessCenterIcon } from '../shared/icons/FitnessCenterIcon';
import { ReadingRoom } from '../shared/icons/ReadingRoom';
import { CommunityIcon } from '../shared/icons/CommunityIcon';
import { userInfo } from '../store/atoms';
import React, { useEffect } from 'react';

export const Home = () => {
  const userName = React.useRef();
  const navigate = useNavigate();
  const handleGolfClick = () => {
    navigate('/golf');
  };

  useEffect(() => {
    userName.current = userInfo.userName;
  }, []);

  return (
    <main className="">
      <section className="w-screen flex flex-col pt-10 pl-5 pb-5">
        <p className="text-xl font-bold">{userName.current}님 안녕하세요!</p>
        <p className="text-md text-neutral-400">이용하실 메뉴 클릭해주세요</p>
      </section>
      <section className="w-screen h-screen flex flex-col items-center gap-5">
        <div className="flex gap-5">
          <figure
            className="w-40 h-40 bg-green-light rounded-2xl"
            onClick={handleGolfClick}
          >
            <GolfIcon />
          </figure>
          <figure
            className="w-40 h-40 bg-green-light rounded-2xl"
            onClick={handleGolfClick}
          >
            <FitnessCenterIcon />
          </figure>
        </div>
        <div className="flex gap-5">
          <figure
            className="w-40 h-40 bg-green-light rounded-2xl"
            onClick={handleGolfClick}
          >
            <ReadingRoom />
          </figure>
          <figure
            className="w-40 h-40 bg-green-light rounded-2xl"
            onClick={handleGolfClick}
          >
            <CommunityIcon />
          </figure>
        </div>
      </section>
    </main>
  );
};
