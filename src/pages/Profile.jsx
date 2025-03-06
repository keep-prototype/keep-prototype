import React from 'react';
import { removeItem } from '../shared/lib/localStorage';
import { golfReservationTable, userInfo } from '../store/atoms';

export const Profile = () => {
  const submitLogout = () => {
    removeItem('userName');
    removeItem('aptName');
    removeItem('aptDong');
    removeItem('aptHo');

    window.location.reload();
  };

  console.log(userInfo);

  const userInfoRef = React.useRef();

  return (
    <main>
      <p>{userInfo.userName}님 환영합니다.</p>
      <p>아파트: {userInfo.aptName}</p>
      <p>동: {userInfo.aptDong}</p>
      <p>호수: {userInfo.aptHo}</p>
      <p>예약 내역</p>
      {golfReservationTable.map((el, index) => {
        return (
          <p key={index}>
            {el.zoneId}관 {el.hour}시~{el.hour + 1}시 예약
          </p>
        );
      })}
      <p>대기 내역</p>
      <button onClick={submitLogout}>로그아웃</button>
    </main>
  );
};
