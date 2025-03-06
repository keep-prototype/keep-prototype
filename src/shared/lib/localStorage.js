export const getItem = (key) => {
  const value = localStorage.getItem(key);
  return value;
};

export const getListItem = (key) => {
  const listValue = JSON.parse(localStorage.getItem(key));
  return listValue;
};

export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};
export const setListItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const userInfo = {
  aptName: getItem('aptName'),
  aptNumber: getItem('aptNumber'),
};

export const isAuth = getItem('aptName') !== null;
