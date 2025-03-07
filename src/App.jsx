import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';

import { Golf } from './pages/Golf';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { Menu } from './pages/Menu';

import { getItem, setListItem } from './shared/lib/localStorage';
import { GolfReservation } from './pages/GolfReservation';
import {
  GOLF_REPAIR_TABLE,
  GOLF_RESERVATION_TABLE,
} from './constants/GOLF_TABLE';
import { MyReservation } from './pages/MyReservation';
import { BottomBar } from './widgets/BottomBar';
import { BackButton } from './shared/components/BackButton';

function App() {
  const location = useLocation();
  const [isAuth, setIsAuth] = React.useState();

  React.useEffect(() => {
    const isFirst = getItem('golfReservationTable') === null || undefined;
    setIsAuth(getItem('aptName') !== null);

    if (isFirst) {
      setListItem('golfReservationTable', GOLF_RESERVATION_TABLE);
      setListItem('golfRepairTable', GOLF_REPAIR_TABLE);
    }
  }, [location.pathname]);

  return (
    <>
      <BottomBar />
      {location.pathname !== '/' && <BackButton />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="golf" element={isAuth ? <Golf /> : <Login />} />
        <Route path="golf/:zoneId" element={<GolfReservation />} />
        <Route path="menu" element={<Menu />} />
        <Route path="profile" element={isAuth ? <Profile /> : <Login />} />
        <Route path="login" element={<Login />} />
        <Route
          path="profile/my-reservation"
          element={isAuth ? <MyReservation /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
