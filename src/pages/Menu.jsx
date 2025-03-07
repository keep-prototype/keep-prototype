import { useNavigate } from 'react-router';
import { RightButtonIcon } from '../shared/icons/RightButtonIcon';
import { removeItem } from '../shared/lib/localStorage';

export const Menu = () => {
  const navigate = useNavigate();
  const submitLogout = () => {
    removeItem('userName');
    removeItem('aptName');
    removeItem('aptDong');
    removeItem('aptHo');

    navigate('/');
  };
  const redirectMyReservation = () => {
    navigate('/profile/my-reservation');
  };
  return (
    <main>
      <section className="h-20 flex items-center justify-center">
        <img
          className="h-full"
          src="https://room-critic-s3.s3.ap-northeast-2.amazonaws.com/KEE_BIT_LOGO.png"
          alt=""
        />
      </section>
      <section className="">
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
