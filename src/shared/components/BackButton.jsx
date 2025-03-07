import { useNavigate } from 'react-router';
import { MdArrowBackIos } from 'react-icons/md';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBackClick} className="fixed top-6 left-6 z-10">
      <MdArrowBackIos />
    </button>
  );
};
