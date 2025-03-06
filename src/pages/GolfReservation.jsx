import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { GOLF_TIME_TABLE } from '../constants/GOLF_TABLE';
import { getListItem, setListItem } from '../shared/lib/localStorage';
import { golfReservationTable } from '../store/atoms';

export const GolfReservation = () => {
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

    navigate('/profile');
  };

  const handleModalBackgroundClick = () => {
    setIsReservationModal(false);
    setIsStandByModal(false);
  };
  return (
    <main className="w-screen">
      <section className="py-5 px-9 flex flex-col gap-1">
        <p className="font-bold text-2xl">{params.zoneId}번 타석 예약 선택</p>
        <p className="text-sm opacity-50">
          예약이 필요하시면 시간 선택 후 등록을 눌러주세요.
        </p>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-1">
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
              className={`p-1 w-10/12 text-center text-xl font-semibold rounded-md border bg-white ${
                isReservation && `bg-brown`
              }`}
            >
              {el.timeRange}
            </p>
          );
        })}
      </section>
      {isStandByModal && (
        <main className="fixed top-0 left-0 w-screen h-screen">
          <div
            onClick={handleModalBackgroundClick}
            className="fixed top-0 left-0 bg-black opacity-30 z-10 w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-300 z-20 transform -translate-x-1/2 -translate-y-1/2">
            대기모달
          </div>
        </main>
      )}
      {isReservationModal && (
        <main className="fixed top-0 left-0 w-screen h-screen">
          <div
            onClick={handleModalBackgroundClick}
            className="fixed top-0 left-0 bg-black opacity-30 z-10 w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-300 z-20 transform -translate-x-1/2 -translate-y-1/2">
            <p>
              {clikedHour.current} : 00 ~ {clikedHour.current} : 55
            </p>
            <p>등록하시겠습니까?</p>
            <button onClick={handleReservationClick}>예약하기</button>
          </div>
        </main>
      )}
    </main>
  );
};
