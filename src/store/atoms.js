import { getItem, getListItem } from '../shared/lib/localStorage';

export const getGolfReservationTable = () =>
  getListItem('golfReservationTable');

export const getGolfRepairTable = () => getListItem('golfRepairTable');

export const getUserInfo = () => {
  const userInfo = {
    userName: getItem('userName'),
    aptName: getItem('aptName'),
    aptDong: getItem('aptDong'),
    aptHo: getItem('aptHo'),
  };

  return userInfo;
};
