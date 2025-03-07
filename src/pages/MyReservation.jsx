import { getUserInfo } from '../store/atoms';
import { getListItem, setListItem } from '../shared/lib/localStorage';
import { useState } from 'react';
export const MyReservation = () => {
  const userInfo = getUserInfo();

  const [reservations, setReservations] = useState(
    getListItem('golfReservationTable') || []
  );
  const [isCancelModal, setIsCancelModal] = useState(false); // 취소모달
  const [selectedReservation, setSelectedReservation] = useState(null); //내 예약중 선택된 예약

  // 취소 버튼 클릭시 모달 열기
  const handleCancelClick = (zoneId, hour) => {
    setSelectedReservation({ zoneId, hour });
    setIsCancelModal(true);
  };

  // 모달 닫기
  const handleModalBackgroundClick = () => {
    setIsCancelModal(false);
    setSelectedReservation(null);
  };

  // 확인 버튼 클릭시 예약을 삭제하는것
  const confirmCancelReservation = () => {
    if (!selectedReservation) return;

    const updatedReservations = reservations.filter(
      (el) =>
        !(
          el.zoneId === selectedReservation.zoneId &&
          el.hour === selectedReservation.hour
        )
    );

    setReservations([...updatedReservations]); // 상태 업데이트 ->(UI 반영)
    setListItem('golfReservationTable', updatedReservations); // localStorage 업데이트

    setIsCancelModal(false);
    setSelectedReservation(null);
  };

  // const handleCancelClick = (zoneId, hour) => {
  //   const updateReservations = reservations.filter(
  //     (el) => !(el.zoneId === zoneId && el.hour === hour)
  //   );
  //   setReservations([...updateReservations]);

  //   console.log([...updateReservations])
  //   console.log(updateReservations)
  //   setListItem('golfReservationTable', updateReservations);
  //   // setReservations()
  // };

  return (
    <main className="w-screen h-screen">
      <section className="px-10 pt-5 pb-7 text-center">
        <p className="font-bold text-xl">{userInfo.userName}님의 예약</p>
        <p className="font-sm text-neutral-500">
          예약 변경과 취소를 할 수 있습니다.
        </p>
      </section>
      <section className="flex flex-col gap-2 w-full">
        {reservations.map((el, index) => {
          return (
            <article key={index} className="flex gap-3 px-8 w-full">
              <figure className="w-full py-3 px-7 flex justify-between text-center text-xl font-semibold rounded-xl border bg-green-light">
                <p>{el.zoneId}관</p>
                <p>
                  {el.hour} : 00 ~ {el.hour} : 55
                </p>
              </figure>
              <div className="min-w-fit">
                <button
                  className="h-full flex items-center justify-center border px-3 rounded-xl border-neutral-600"
                  onClick={() => handleCancelClick(el.zoneId, el.hour)}
                >
                  취소
                </button>
              </div>
            </article>
          );
        })}
      </section>
      {isCancelModal && (
        <main className="fixed top-0 left-0 w-screen h-screen">
          <div
            onClick={handleModalBackgroundClick}
            className="fixed top-0 left-0 bg-black opacity-70 z-10 w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 w-10/12 flex flex-col items-center justify-center rounded-2xl h-40 bg-white z-20 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-brown text-2xl font-semibold">
              {selectedReservation?.hour} : 00 ~ {selectedReservation?.hour} :
              55
            </p>
            <p className="text-sm pt-1 pb-5">예약을 취소하시겠습니까?</p>
            <div className="w-full flex items-center justify-between px-10 font-bold">
              <button
                className="bg-red-300 text-black py-3 px-10 rounded-2xl"
                onClick={confirmCancelReservation}
              >
                확인
              </button>
              <button
                className="bg-white-border border py-3 px-10 rounded-2xl font-bold"
                onClick={handleModalBackgroundClick}
              >
                취소
              </button>
            </div>
          </div>
        </main>
      )}
      <div className="h-40" />
    </main>
  );
};
