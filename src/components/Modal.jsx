export const Modal = ({}) => {
  return (
    <main className="fixed top-0 left-0 w-screen h-screen">
      <div className="fixed top-0 left-0 bg-black opacity-30 z-10 w-full h-full" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-300 z-20 transform -translate-x-1/2 -translate-y-1/2">
        <p>예약모달</p>
        <button>예약하기</button>
      </div>
    </main>
  );
};
