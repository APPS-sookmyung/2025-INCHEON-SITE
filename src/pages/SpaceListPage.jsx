import { ArrowDownRight, Instagram, Search, Menu } from 'lucide-react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

// className 유틸리티 함수
const cx = (...classes) => classes.filter(Boolean).join(' ');



const ListPage = () => {
    const navigate = useNavigate();
    const items = useMemo(() => [
        { id: "1", title: "작업장 ‘봄’", region: "미추홀구", district: "인천 남구", image: "src/assets/coverimage/cover_ex.png" },
        { id: "2", title: "(주) 위드달", region: "미추홀구", district: "인천 남구", image: "src/assets/coverimage/cover_ex.png" },
        { id: "3", title: "코드아트", region: "미추홀구", district: "인천 남구", image: "src/assets/coverimage/cover_ex.png" },
        { id: "4", title: "주식회사 한울소리", region: "미추홀구", district: "인천 남구", image: "src/assets/coverimage/cover_ex.png" },
        { id: "4", title: "공간인공빛", region: "중구", district: "인천", image: "src/assets/coverimage/cover_ex.png" },
        { id: "5", title: "공예루틴", region: "중구", district: "인천", image: "src/assets/coverimage/cover_ex.png" },
        { id: "6", title: "모이소", region: "중구", district: "인천", image: "src/assets/coverimage/cover_ex.png" },
        { id: "7", title: "올라 아트컴퍼니", region: "중구", district: "인천", image: "src/assets/coverimage/cover_ex.png" },
        { id: "8", title: "창작집단 <발아>", region: "중구", district: "인천", image: "src/assets/coverimage/cover_ex.png" },
        { id: "9", title: "카츠오리진 연구소", region: "중구", district: "인천", image: "src/assets/coverimage/cover_ex.png" },
        { id: "10", title: "어벙또벙 이야기 수선점", region: "동구", district: "인천", image: "src/assets/coverimage/cover_ex.png" },
    ], []);

    return (
        <div className="min-h-svh bg-[#FAFAF7] text-[#1A1A1A]">
        <Header />
        
        
        {/* 콘텐츠 */}
        <main className="mx-auto max-w-6xl px-5 py-12">
       
        
        
        {/* 그리드 라인 */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-neutral-300">
        {items.map((p) => (
        <Card key={p.id} place={p} />
        ))}
        </section>
        </main>
        
        
        <footer className="mt-8 border-t border-neutral-300 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} 점점 (Demo). All rights reserved.
        </footer>
        </div>
        );
        }
        
        
        // 카드
        function Card({ place }) {
        return (
        <article
        className={cx(
        "relative isolate bg-white overflow-hidden",
        "min-h-[220px] group transition-colors border-r border-b border-neutral-300"
        )}
        >
        {/* 배경 이미지 */}
        <div
        aria-hidden
        className="absolute inset-0 z-0 bg-center bg-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{ backgroundImage: `url(${place.image})` }}
        />
        <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(to_top,rgba(0,0,0,.45),rgba(0,0,0,.1),transparent)]"
        />
        
        
        {/* 상단: 타이틀만 */}
        <div className="relative z-10 px-4 pt-3 pb-6">
        <h3 className="text-3xl font-black tracking-tight text-neutral-900 group-hover:text-white transition-colors break-keep">
        {place.title}
        </h3>
        </div>
        
        
        {/* 좌측하단: 배지 */}
        <div className="absolute left-3 bottom-3 z-10 flex items-center gap-2 text-[11px]">
        <Badge tone="chip">{place.region.toUpperCase()}</Badge>
        <Badge tone="chip">{place.district}</Badge>
        </div>
        
        
        {/* 우측하단: 자세히 보기 */}
        <a
        href="#"
        className="absolute right-3 bottom-3 z-10 inline-flex items-center gap-1.5 text-[11px] text-neutral-600 group-hover:text-white transition-colors"
        >
         <ArrowDownRight size={14} />
        </a>
        </article>
        );
        }
        
        
        // 배지
        function Badge({ children, tone = "neutral" }) {
        let classes = "";
        if (tone === "soft") classes = "bg-emerald-500/10 text-emerald-700 border-emerald-600/20";
        else if (tone === "chip") classes = "bg-black/80 text-white border-black/0 group-hover:bg-white group-hover:text-black transition-colors";
        else classes = "bg-neutral-100 text-neutral-700 border-neutral-200";
        return <span className={cx("px-2.5 py-1 rounded-full border text-[11px]", classes)}>{children}</span>;
        }

export default ListPage;