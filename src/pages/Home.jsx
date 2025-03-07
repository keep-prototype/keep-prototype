import { useLocation, useNavigate } from 'react-router';
import { GolfIcon } from '../shared/icons/GolfIcon';
import { FitnessCenterIcon } from '../shared/icons/FitnessCenterIcon';
import { ReadingRoom } from '../shared/icons/ReadingRoom';
import { CommunityIcon } from '../shared/icons/CommunityIcon';
import { getUserInfo } from '../store/atoms';

import React from 'react';

export const Home = () => {
  const userInfo = getUserInfo();

  const navigate = useNavigate();
  const handleGolfClick = () => {
    navigate('/golf');
  };

  return (
    <main className="flex flex-col items-center">
      <section className="w-screen flex flex-col pt-5 pl-5 pb-5">
        <p className="text-xl font-bold">
          {userInfo.userName && userInfo.userName + '님 '}안녕하세요!
        </p>
        <p className="text-md text-neutral-400">
          이용하실 메뉴를 클릭해주세요.
        </p>
      </section>
      <section className="w-screen flex flex-col items-center gap-5">
        <div className="flex gap-5">
          <figure
            className="w-40 h-40 bg-green-light rounded-2xl"
            onClick={handleGolfClick}
          >
            <GolfIcon />
          </figure>
          <figure className="w-40 h-40 bg-green-light rounded-2xl">
            <FitnessCenterIcon />
          </figure>
        </div>
        <div className="flex gap-5">
          <figure className="w-40 h-40 bg-green-light rounded-2xl">
            <ReadingRoom />
          </figure>
          <figure className="w-40 h-40 bg-green-light rounded-2xl">
            <CommunityIcon />
          </figure>
        </div>
      </section>

      <section className="p-3 w-10/12 border rounded-2xl mt-5 bg-white-border">
        <h1 className="text-lg text-neutral-500 font-semibold border-b bg-white-border">
          공지 사항
        </h1>
        <article className="mt-2 flex flex-col gap-1">
          <p>📢 커뮤니티 시설 이용 안내</p>
          <p>⏰ 운영 시간 및 예약 필수 안내</p>
          <p>🚫 외부인 출입 및 무단 이용 금지 안내</p>
          <p>🧹 이용 후 정리 정돈 및 시설 보호</p>
          <p>📸 CCTV 운영 및 위반 시 이용 제한</p>
          <p>🍽️ 음식물 반입 및 소란 행위 금지</p>
          <p>📞 문의: 관리사무소 ([031-000-0000])</p>
        </article>
      </section>
    </main>
  );
};
