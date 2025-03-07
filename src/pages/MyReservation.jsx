import { getGolfReservationTable, getUserInfo } from '../store/atoms';

export const MyReservation = () => {

  const golfReservationTable = getGolfReservationTable();
  const userInfo = getUserInfo();

  return (
    <main className="w-screen h-screen">
      <section className="px-10 pt-10 pb-7">
        <p className="font-bold text-xl">{userInfo.userName}님의 예약</p>
        <p className="font-sm text-neutral-500">
          예약 변경과 취소를 할 수 있습니다.
        </p>
      </section>
      <section className="flex flex-col gap-2 w-full">
        {golfReservationTable?.map((el, index) => {
          return (
            <article key={index} className="flex gap-3 px-8 w-full">
              <figure className="w-full py-3 px-7 flex justify-between text-center text-xl font-semibold rounded-xl border bg-green-light">
                <p>{el.zoneId}관</p>
                <p>
                  {el.hour} : 00 ~ {el.hour} : 55
                </p>
              </figure>
              <div className="min-w-fit">
                <button className="h-full flex items-center justify-center border px-3 rounded-xl border-neutral-600">
                  취소
                </button>
              </div>
            </article>
          );
        })}
      </section>
      <div className="h-40" />
    </main>
  );
};
