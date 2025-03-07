import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { GOLF_TIME_TABLE } from '../constants/GOLF_TABLE';
import { getListItem, setListItem } from '../shared/lib/localStorage';
import { getGolfReservationTable } from '../store/atoms';

export const GolfReservation = () => {
  const golfReservationTable = getGolfReservationTable();
  const params = useParams();
  const navigate = useNavigate();
  const currentZoneId = +params.zoneId;
  const [isReservationModal, setIsReservationModal] = React.useState(false);
  const [isStandByModal, setIsStandByModal] = React.useState(false);
  const clikedHour = React.useRef(null);

  const handleTimeClick = (hour) => {
    const isReservation = golfReservationTable.some(
      (el) => el.zoneId === currentZoneId && el.hour === hour
    );

    if (isReservation) {
      if (isReservationModal) setIsReservationModal(false);
      setIsStandByModal(true);
      clikedHour.current = hour;
    } else {
      if (isStandByModal) setIsStandByModal(false);
      setIsReservationModal(true);
      clikedHour.current = hour;
    }
  };

  const handleReservationClick = () => {
    const payload = {
      zoneId: currentZoneId,
      hour: clikedHour.current,
    };
    golfReservationTable.push(payload);

    setListItem('golfReservationTable', golfReservationTable);

    navigate('/profile/my-reservation');
  };

  const handleModalBackgroundClick = () => {
    setIsReservationModal(false);
    setIsStandByModal(false);
  };
  return (
    <main className="w-screen h-screen overflow-hidden">
      <section className="py-5 px-9 flex flex-col gap-1">
        <p className="font-bold text-2xl text-center">{params.zoneId}번 타석</p>
        <p className="text-sm opacity-50 text-center">
          예약이 필요하시면 시간 선택 후 등록을 눌러주세요.
        </p>
      </section>
      <section className="w-full flex flex-col items-center gap-2 overflow-scroll h-11/12 pt-1 pb-40">
        {GOLF_TIME_TABLE.map((el) => {
          const golfReservationTable = getListItem('golfReservationTable');
          const isReservation = golfReservationTable.some(
            (value) => value.zoneId === currentZoneId && value.hour === el.hour
          );
          return (
            <p
              onClick={() => {
                handleTimeClick(el.hour);
              }}
              key={el.hour}
              className={`p-2 w-10/12 text-center text-xl font-semibold rounded-xl border bg-white-border ${
                isReservation ? `bg-brown` : ''
              }`}
            >
              {el.timeRange}
            </p>
          );
        })}
      </section>
      {isStandByModal && (
        <main className="fixed top-0 left-0 w-screen h-screen ">
          <div
            onClick={handleModalBackgroundClick}
            className="fixed top-0 left-0 bg-black opacity-70 z-10 w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 w-10/12 flex flex-col items-center justify-center rounded-2xl h-40 bg-white z-20 transform -translate-x-1/2 -translate-y-1/2 ">
            <p className="text-brown text-2xl font-semibold">
              {clikedHour.current} : 00 ~ {clikedHour.current} : 55
            </p>
            {/* <p className="text-sm pt-1 pb-5">이미 예약이 완료된 타석입니다.</p> */}
            <p className="text-sm pt-1 pb-5">대기하시겠습니까?</p>
            <div className="w-full flex items-center justify-between px-10 font-bold">
              <button
                className="bg-green-light py-3 px-10 rounded-2xl"
                onClick={handleReservationClick}
              >
                확인
              </button>
              <button
                className="bg-white-border border py-3 px-10 rounded-2xl font-bold"
                onClick={handleModalBackgroundClick}
              >
                취소
              </button>
            </div>
          </div>
        </main>
      )}
      {isReservationModal && (
        <main className="fixed top-0 left-0 w-screen h-screen ">
          <div
            onClick={handleModalBackgroundClick}
            className="fixed top-0 left-0 bg-black opacity-70 z-10 w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 w-10/12 flex flex-col items-center justify-center rounded-2xl h-40 bg-white z-20 transform -translate-x-1/2 -translate-y-1/2 ">
            <p className="text-brown text-2xl font-semibold">
              {clikedHour.current} : 00 ~ {clikedHour.current} : 55
            </p>
            <p className="text-sm pt-1 pb-5">등록하시겠습니까?</p>
            <div className="w-full flex items-center justify-between px-10 font-bold">
              <button
                className="bg-green-light py-3 px-10 rounded-2xl"
                onClick={handleReservationClick}
              >
                확인
              </button>
              <button
                className="bg-white-border border py-3 px-10 rounded-2xl font-bold"
                onClick={handleModalBackgroundClick}
              >
                취소
              </button>
            </div>
          </div>
        </main>
      )}
    </main>
  );
};
