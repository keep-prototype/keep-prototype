import React from 'react';
import { removeItem } from '../shared/lib/localStorage';
import { golfReservationTable, userInfo } from '../store/atoms';
import { UserProfileIcon } from '../shared/icons/UserProfileIcon';
import { RightButtonIcon } from '../shared/icons/RightButtonIcon';
import { useNavigate } from 'react-router';

export const Profile = () => {
  const navigate = useNavigate();
  const submitLogout = () => {
    removeItem('userName');
    removeItem('aptName');
    removeItem('aptDong');
    removeItem('aptHo');

    window.location.reload();
  };
  const redirectMyReservation = () => {
    navigate('/profile/my-reservation');
  };

  return (
    <main className="flex flex-col">
      <section className="flex flex-col items-center gap-5">
        <p className="text-2xl font-bold pt-10">프로필</p>
        <UserProfileIcon />
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-xl font-bold">{userInfo.userName}</p>
          <p className="text-sm text-neutral-400">
            {userInfo.aptName} {userInfo.aptDong}동 {userInfo.aptHo}호
          </p>
        </div>
      </section>
      <section className="pt-7">
        <figure
          onClick={redirectMyReservation}
          className="border-b border-neutral-300 flex items-center justify-between pl-3 pr-4 py-5"
        >
          <button>내 예약</button>
          <RightButtonIcon />
        </figure>
        <figure className="border-b border-neutral-300 flex items-center justify-between pl-3 pr-4 py-5">
          <button onClick={submitLogout}>내 정보</button>
          <RightButtonIcon />
        </figure>
        <figure className="border-b border-neutral-300 flex items-center justify-between pl-3 pr-4 py-5">
          <button onClick={submitLogout}>로그아웃</button>
          <RightButtonIcon />
        </figure>
      </section>
    </main>
  );
};
