import { useNavigate } from 'react-router';

export const Home = () => {
  const navigate = useNavigate();
  const handleGolfClick = () => {
    navigate('/golf');
  };
  return (
    <main>
      <section>
        <figure onClick={handleGolfClick}>
          <p>골프</p>
        </figure>
      </section>
    </main>
  );
};
