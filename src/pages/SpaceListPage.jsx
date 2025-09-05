import { ArrowDownRight } from 'lucide-react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer'
import listPageBg from '../assets/ListPageBg.png'
import {useRef} from 'react';


// district 조건과 같이 화살표 색상 설정
function getDistrictTextColor(region, district) {
    const key = `${region}|${district}`;
    const clasName=districtColors[key];

    const match=clasName?.match(/text-\[#([0-9a-fA-F]{6})\]/);
    return match? `#${match[1]}`: 'text-neutral-600';
}

// className 유틸리티 함수
const cx = (...classes) => classes.filter(Boolean).join(' ');

const districtColors={
    "미추홀구|인천 남구": "border-[#7268FF] text-[#7268FF]",
    "중구|인천": "border-[#4DAB4E] text-[#4DAB4E]",
    "동구|인천": "border-[#F4A301] text-[#F4A301]",
}


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
        <div className="min-h-svh flex flex-col bg-[#FAFAF7] text-[#1A1A1A]">
          <Header />
      
          <main
            className="flex-grow bg-cover bg-bottom bg-contain"
            style={{ backgroundImage: `url(${listPageBg})` }}
          >
            <div className="mx-auto max-w-6xl px-5 py-12">
              {/* 그리드 라인 */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-neutral-300">
                {items.map((p) => (
                  <Card key={p.id} place={p} />
                ))}
              </section>
            </div>
          </main>
      
          <Footer />
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
        <div className="absolute left-3 bottom-3 z-10 flex items-center gap-2 text-[11px] font-black group-hover:text-white transition-colors break-keep">
            {/* region은 공통 스타일 */}
            <Badge>{place.region.toUpperCase()}</Badge>

             {/* district는 region + district 조합 색상 */}
            <Badge region={place.region} district={place.district}>
                {place.district}
            </Badge>
        </div>

        
        
        {/* 우측하단: 자세히 보기 */}
        <a
        href="#"
        className="absolute right-3 bottom-3 z-10 inline-flex items-center gap-1.5 text-[11px] text-neutral-600 group-hover:text-white transition-colors"
        style={{ color: getDistrictTextColor(place.region, place.district) }}
        >
         <ArrowDownRight size={25} />
        </a>
        </article>
        );
        }
        
        
        // 배지
        function Badge({ children, region, district }) {
            const key=`${region}|${district}`;
            const colorClass=
                districtColors[key] || "bg-[#000000] text-[#FFFFFF] border-neutral-200 transition-colors group-hover:bg-transparent group-hover:text-white group-hover:border-white";
        
            return(
                <span
                    className={cx(
                        "px-2.5 py-1 rounded-full border text-[11px]",colorClass
                    )}
                >
                    {children}
                </span>
            );
        }


export default ListPage;