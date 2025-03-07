import { GolfZone } from '../components/GolfZone';
import { GOLF_ZONE_TABLE } from '../constants/GOLF_TABLE';

export const Golf = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <p className="fixed top-5 w-full text-center text-2xl font-bold">
        타석예약
      </p>
      <section className="grid grid-cols-3 gap-2 w-screen px-4 pt-30">
        {GOLF_ZONE_TABLE?.map((el) => {
          return <GolfZone key={el} zoneId={el} />;
        })}
      </section>
    </main>
  );
};
