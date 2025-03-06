import { useNavigate } from 'react-router';
import React from 'react';
import { currentHour } from '../shared/lib/getTime';
import { GOLF_TIME_TABLE } from '../constants/GOLF_TABLE';
import { golfRepairTable, golfReservationTable } from '../store/atoms';

export const GolfZone = ({ zoneId }) => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = React.useState(false);

  const isUse = React.useRef(false);
  const availableSlots = React.useRef(GOLF_TIME_TABLE.length);

  const handleZoneClick = () => {
    if (isRepair) {
      alert('수리중입니다.');
    } else {
      navigate(`/golf/${zoneId}`);
    }
  };

  golfReservationTable.forEach((el) => {
    if (el.zoneId === zoneId) {
      availableSlots.current--;
      if (el.hour === currentHour) {
        isUse.current = true;
      }
    }
  });

  const isRepair = golfRepairTable.some((el) => el.zoneId === zoneId);

  return (
    <figure id="timeRange" onClick={handleZoneClick}>
      <p className={isRepair ? `text-red-400` : ``}>
        {zoneId}구역 {isUse.current && '이용중'} {availableSlots.current}자리
        남음
      </p>
    </figure>
  );
};
