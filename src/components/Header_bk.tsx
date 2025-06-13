'use client';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import "../app/style.css"
export default function Header () {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    // const checkMobile = ()=> setIsMobile(window.innerWidth < 1024);
    // checkMobile();
    // window.addEventListener("resize", checkMobile);
    // return ()=> window.removeEventListener("resize", checkMobile);
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  },[])
  return (
    <header className="bg-white/75 hover:bg-white w-full fixed h-[55px] top-0 flex justify-between items-center">
      <h1 className="fixed left-[16px]">
        <a href="/">
          <img src="/logo.webp" alt="로고 이미지" width={125} height={35} />
        </a>
      </h1>
      {isMobile ? <MobileMenu/>:<DesktopMenu/>}

    </header>
  )
}