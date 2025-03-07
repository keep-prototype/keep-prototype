import React from 'react';

import { useNavigate } from 'react-router';

import { GolfIcon } from '../shared/icons/GolfIcon';
import { FitnessCenterIcon } from '../shared/icons/FitnessCenterIcon';
import { ReadingRoom } from '../shared/icons/ReadingRoom';
import { CommunityIcon } from '../shared/icons/CommunityIcon';
import { getUserInfo } from '../store/atoms';

export const Home = () => {
  const userInfo = getUserInfo();

  const navigate = useNavigate();
  const handleGolfClick = () => {
    navigate('/golf');
  };

  return (
    <main className="flex flex-col items-center w-screen h-screen overflow-hidden">
      <section className="h-20">
        <img
          className="w-full h-full"
          src="https://room-critic-s3.s3.ap-northeast-2.amazonaws.com/KEE_BIT_LOGO.png"
          alt=""
        />
      </section>
      <section className="w-screen flex flex-col items-center gap-5">
        <div className="flex w-full gap-5 px-7 pt-5">
          <figure
            className="w-1/2 py-3 bg-green-light rounded-2xl flex flex-col items-center justify-center gap-2"
            onClick={handleGolfClick}
          >
            <GolfIcon />
            <p className="text-xl font-bold text-neutral-600">골프</p>
          </figure>
          <figure className="w-1/2 bg-green-light rounded-2xl flex flex-col items-center justify-center gap-2">
            <FitnessCenterIcon />
            <p className="text-xl font-bold text-neutral-600">헬스</p>
          </figure>
        </div>
        <div className="flex gap-5 w-full px-7">
          <figure className="w-1/2 py-3 bg-green-light rounded-2xl flex flex-col items-center justify-center gap-2">
            <ReadingRoom />
            <p className="text-xl font-bold text-neutral-600">독서실</p>
          </figure>
          <figure className="w-1/2 py-3 bg-green-light rounded-2xl flex flex-col items-center justify-center gap-2">
            <CommunityIcon />
            <p className="text-xl font-bold text-neutral-600">커뮤니티</p>
          </figure>
        </div>
      </section>

      <section className="p-3 w-10/12 border rounded-2xl mt-5 bg-white-border">
        <h1 className="text-lg text-neutral-500 font-semibold border-b bg-white-border">
          공지 사항
        </h1>
        <article className="mt-2 flex flex-col gap-1 w-full h-20 overflow-scroll">
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
