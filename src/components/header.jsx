import { Instagram, Menu, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-[#F2F1EC]/80 backdrop-blur border-b border-neutral-300/70">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src="src/assets/dotdotdot_logo.png" alt="logo" className="h-8" />
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
            <Link className="hover:text-black" to="/spaces">창작 공간들</Link>
            <a className="hover:text-black" href="#">행사 일정</a>
            <a className="hover:text-black" href="#">이벤트 정보</a>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-neutral-600">
          <a 
          aria-label="instagram" 
          href="https://www.instagram.com/3point_incheon/" 
          className="p-3 hover:text-black">
            <img
             src="src/assets/ig_logo.jpg"
             alt="instagram"
             className="w-5 h-5"
             />
             </a>

            <a
            href="https://blog.naver.com/ifacpr"
            className="p-8 hover:text-black">
                <img
                src="src/assets/blog_logo.png"
                alt="global"
                className="w-7 h-7"
                />
            </a>
          <button className="px-3 py-1.5 rounded-full border border-neutral-300 text-xs hover:bg-white">공식 사이트</button>
          <button className="md:hidden p-2"><Menu /></button>
        </div>
      </div>
    </header>
  );
}
