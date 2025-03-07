import React from 'react';
import { useNavigate } from 'react-router';
import { currentHour } from '../shared/lib/getTime';
import { GOLF_TIME_TABLE } from '../constants/GOLF_TABLE';
import { getGolfRepairTable, getGolfReservationTable } from '../store/atoms';

export const GolfZone = ({ zoneId }) => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = React.useState(false);

  const golfReservationTable = getGolfReservationTable();
  const golfRepairTable = getGolfRepairTable();

  const isUse = React.useRef(false);
  const availableSlots = React.useRef(GOLF_TIME_TABLE.length);

  const handleZoneClick = () => {
    if (isRepair) {
      setIsModal(true);
    } else {
      navigate(`/golf/${zoneId}`);
    }
  };

  golfReservationTable?.forEach((el) => {
    if (el.zoneId === zoneId) {
      availableSlots.current--;
      if (el.hour === currentHour) {
        isUse.current = true;
      }
    }
  });

  const isRepair = golfRepairTable.some((el) => el.zoneId === zoneId);

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      {isModal && (
        <main className="fixed top-0 left-0 w-screen h-screen z-10">
          <div className="fixed top-0 left-0 bg-black opacity-70 z-10 w-full h-full" />
          <div className="absolute top-1/2 left-1/2 w-10/12 flex flex-col items-center justify-center rounded-2xl h-40 bg-white z-20 transform -translate-x-1/2 -translate-y-1/2 ">
            <p className="text-sm pt-1 pb-5">수리중인 타석입니다.</p>
            <button
              onClick={closeModal}
              className="bg-green-light mt-3 py-3 px-10 rounded-2xl"
            >
              확인
            </button>
          </div>
        </main>
      )}
      <figure
        id="timeRange"
        className={`relative h-24 border rounded-2xl  ${
          isRepair ? 'bg-brown' : ''
        } ${isUse.current ? 'bg-green-light' : ''} ${
          !isRepair && !isUse.current ? 'bg-white-border' : ''
        }
      `}
        onClick={handleZoneClick}
      >
        <p className="pt-2 pl-2 font-bold text-xs">{zoneId}번</p>
        <p className="absolute top-1/2 left-1/2 -translate-1/2 w-full text-center text-sm font-bold">
          {isUse.current && '이용 중'} {isRepair && '수리 중'}
          {!isUse.current && !isRepair && '이용 가능'}
        </p>
        <p className="absolute bottom-2 w-full text-center text-xs ">
          예약 가능 타임: {availableSlots.current}
        </p>
      </figure>
    </>
  );
};
