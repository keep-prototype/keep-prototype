import { getItem, getListItem } from '../shared/lib/localStorage';

export const golfReservationTable = getListItem('golfReservationTable');

export const golfRepairTable = getListItem('golfRepairTable');

export const userInfo = {
  userName: getItem('userName'),
  aptName: getItem('aptName'),
  aptDong: getItem('aptDong'),
  aptHo: getItem('aptHo'),
};

export const getUserInfo = () => {
  const userInfo = {
    userName: getItem('userName'),
    aptName: getItem('aptName'),
    aptDong: getItem('aptDong'),
    aptHo: getItem('aptHo'),
  };

  return userInfo;
};
