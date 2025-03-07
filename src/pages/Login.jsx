import React from 'react';
import { useNavigate } from 'react-router';
import { setItem } from '../shared/lib/localStorage';

export const Login = () => {
  const [userName, setUserName] = React.useState('');
  const [aptName, setAptName] = React.useState('');
  const [aptDong, setAptDong] = React.useState('');
  const [aptHo, setAptHo] = React.useState('');
  const navigate = useNavigate();

  const submitLogin = () => {
    setItem('userName', userName);
    setItem('aptName', aptName);
    setItem('aptDong', aptDong);
    setItem('aptHo', aptHo);

    navigate('/');
  };

  React.useEffect(() => {
    navigate('/login');
  }, []);

  return (
    <main className="w-screen h-screen">
      <div className="h-1/3 flex items-center justify-center bg-green-light">
        <img
          className="h-full"
          src="https://room-critic-s3.s3.ap-northeast-2.amazonaws.com/KEE_BIT_LOGO_BG.png"
          alt="logo"
        />
      </div>
      {/* <p className="font-bold text-2xl pt-8 pb-5 px-5">키빗! 시작해봐요!</p> */}
      <form className="pt-10 w-full px-5 flex flex-col gap-5 text-lg">
        <input
          className="border w-full p-2.5 rounded-lg border-neutral-300 focus:ring-2 focus:ring-lime-200"
          w-full
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          type="text"
          placeholder="성함을 입력해주세요."
        />
        <input
          onChange={(event) => setAptName(event.target.value)}
          className="border w-full p-3 rounded-lg border-neutral-300"
          value={aptName}
          type="text"
          placeholder="아파트 이름을 입력해주세요."
        />
        <div className="flex gap-3">
          <input
            onChange={(event) => setAptDong(event.target.value)}
            className="border w-full p-3 rounded-lg border-neutral-300"
            value={aptDong}
            type="text"
            placeholder="아파트 동"
          />
          <input
            onChange={(event) => setAptHo(event.target.value)}
            className="border w-full p-3 rounded-lg border-neutral-300"
            value={aptHo}
            type="text"
            placeholder="아파트 호수"
          />
        </div>
        <button
          className="w-full p-2.5 rounded-lg bg-green-light text-green"
          type="button"
          onClick={submitLogin}
        >
          등록
        </button>
      </form>
    </main>
  );
};
