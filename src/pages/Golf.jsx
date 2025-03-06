import { GolfZone } from '../components/GolfZone';
import { GOLF_ZONE_TABLE } from '../constants/GOLF_TABLE';

export const Golf = () => {
  return (
    <main>
      <section>
        {GOLF_ZONE_TABLE.map((el) => {
          return <GolfZone key={el} zoneId={el} />;
        })}
      </section>
    </main>
  );
};
