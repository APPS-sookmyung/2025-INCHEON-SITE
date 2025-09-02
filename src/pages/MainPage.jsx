import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="min-h-svh bg-[#FAFAF7] text-[#1A1A1A]">
      <main className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="text-4xl font-bold mb-8">인천 창작 공간</h1>
        <p className="text-lg text-neutral-600 mb-8">
          인천의 다양한 창작 공간들을 둘러보세요.
        </p>
        <Link 
          to="/spaces" 
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          창작 공간 보기
        </Link>
      </main>
    </div>
  );
};

export default MainPage;
