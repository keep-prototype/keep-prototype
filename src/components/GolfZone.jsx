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
      alert('수리중입니다.');
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

  return (
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
  );
};
