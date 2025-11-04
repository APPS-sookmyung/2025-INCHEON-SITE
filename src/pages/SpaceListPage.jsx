import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PlaceCardDefault from '@/components/cards/PlaceCardDefault';
import PlaceCardHover from '@/components/cards/PlaceCardHover';
import OpenStudioSection from '../components/sections/OpenStudioSection';
import Section from '@/components/layout/Section';
import {PLACES} from '@/data/places';

// className 유틸리티 함수
const cx = (...classes) => classes.filter(Boolean).join(' ');

const ListPage = () => {
  // responsive columns: match Tailwind breakpoints used in the grid
  const [cols, setCols] = useState(() => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w >= 1024) return 3; // lg
    if (w >= 640) return 2; // sm
    return 1;
  });

  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      const next = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
      setCols(next);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <Section textureOnly>
      <div className='mx-auto max-w-6xl px-5 py-12'>
        {/* 그리드 라인 */}
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0'>
          {PLACES.map((p, i) => {
            const COLS = cols;
            const col = (i % COLS) + 1;
            const row = Math.floor(i / COLS) + 1;
            const rows = Math.ceil(PLACES.length / COLS);
            const isLastRow = row === rows;
            const isLastItem = i === PLACES.length - 1; // 전체 마지막 아이템
            const isIncompleteLastRow = isLastItem && col < COLS; // 마지막 행이 불완전한 경우

            // 다음 행 같은 열에 아이템이 없으면 이 열의 마지막
            const nextRowSameCol = i + COLS; // 다음 행 같은 열의 인덱스
            const isLastInColumn = nextRowSameCol >= PLACES.length;

            return (
              <Card
                key={`${p.id}-${i}`}
                place={p}
                id={p.id}
                isFirstCol={col === 1}
                isLastRow={isLastRow}
                isLastInColumn={isLastInColumn}
                isIncompleteLastRow={isIncompleteLastRow}
              />
            );
          })}
        </section>
        <OpenStudioSection />
      </div>
    </Section>
  );
};

// 카드
function Card({
  place,
  id,
  isFirstCol,
  isLastRow,
  isLastInColumn,
  isIncompleteLastRow,
}) {
  const navigate = useNavigate();

  if (!place) return null;

  const handleClick = () => {
    if (id) {
      navigate(`/space/${id}`);
    }
  };

  return (
    <article
      onClick={handleClick}
      className={cx(
        'relative isolate cursor-pointer transition-all duration-500',
        'min-h-[294px] overflow-visible group'
      )}>
      {/* 호버 시 배경 색상 */}
      {place.hoverBgColor && (
        <div
          className='absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 rounded-[20px]'
          style={{
            backgroundColor: place.hoverBgColor,
          }}
        />
      )}

      {/* 그리드 라인 */}
      <div className='pointer-events-none absolute inset-0'>
        {/* 모든 카드에 상단선 */}
        <div className='absolute top-0 h-px bg-type-body left-[7.5px] right-[7.5px]' />
        {/* 마지막 행이 아니면서 열의 마지막인 경우에만 하단선 */}
        {!isLastRow && isLastInColumn && (
          <div className='absolute bottom-0 h-px bg-type-body left-[7.5px] right-[7.5px]' />
        )}
        {/* 세로: 첫 번째 열 제외하고만 */}
        {!isFirstCol && (
          <div className='absolute left-0 w-px bg-type-body top-[7.5px] bottom-[7.5px]' />
        )}
        {/* 불완전한 마지막 행(2열로 끝나는 경우)에만 오른쪽 세로선 추가 */}
        {isIncompleteLastRow && (
          <div className='absolute right-0 w-px bg-type-body top-[7.5px] bottom-[7.5px]' />
        )}
      </div>

      {/* 호버 전 상태 */}
      <PlaceCardDefault place={place} />

      {/* 호버 후 상태 */}
      <PlaceCardHover place={place} />
    </article>
  );
}

export default ListPage;
