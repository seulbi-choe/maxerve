'use client';
import { useState } from 'react';
import Link from 'next/link';
import { menu } from './menu';
import styles from "./MobileMenuButton.module.css"
export default function MobileMenu () {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = ()=> {
    setIsOpen(isOpen => !isOpen);
  };
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const handleSubmenu = ()=>{
    setIsSubmenuOpen(isSubmenuOpen => !isSubmenuOpen);
  };
  return(
    <div className="w-full h-full relative">
      <button className={styles.MenuOpenBtn} onClick={handleMenu}>
        <span className={styles.openBar}></span>
        <span className={styles.openBar}></span>
        <span className={styles.openBar}></span>
      </button>
      <div className={`p-7 absolute bg-gray-333 w-full max-w-[400px] top-0 right-0 h-screen transition-all duration-400 ease-out ${isOpen ? "" : "translate-x-[100%]"}`}>
        <button className={styles.MenuCloseBtn} onClick={handleMenu}>
          <span className={styles.closeBar}></span>
          <span className={styles.closeBar}></span>
        </button>
        <ul className='pt-14'>
          {menu.map((link)=>(
            <li className='border-t border-gray555'>
              <button onClick={handleSubmenu} className="leading-[62px] px-5 text-white font-medium flex justify-between items-center w-full">{link.name}
                <span className='w-[15px] h-[15px] inline-block border-t border-r rotate-135 mb-[10px]'></span>
              </button>
              {link.subLinks && (
                <ul className="submenu bg-gray-ddd">
                  {link.subLinks.map((sub)=>(
                    <li className='border-b-white border-b-1'>
                      <Link href="/inc" className="leading-[44px] text-sm text-[14px] px-8 font-medium inline-block w-full">{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className='border-t border-gray555'>
            <button onClick={handleSubmenu} className="leading-[62px] px-5 text-white font-medium flex justify-between items-center w-full">회사소개
              <span className='w-[15px] h-[15px] inline-block border-t border-r rotate-135 mb-[10px]'></span>
            </button>
            <ul className="submenu bg-gray-ddd">
              <li className='border-b-white border-b-1'>
                <Link href="/inc" className="leading-[44px] text-sm text-[14px] px-8 font-medium inline-block w-full">CEO</Link>
              </li>
              <li className='border-b-white border-b-1'>
                <Link href="/inc/ci" className="leading-[44px]  text-sm text-[14px] px-8 font-medium">CI</Link>
              </li>
              <li className='border-b-white border-b-1'>
                <Link href="/inc/info" className="leading-[44px]  text-sm text-[14px] px-8 font-medium">회사개요</Link>
              </li>
              <li className='border-b-white border-b-1'>
                <Link href="/inc/history" className="leading-[44px]  text-sm text-[14px] px-8 font-medium">회사연혁</Link>
              </li>
              <li className='border-b-white border-b-1'>
                <Link href="/inc/group" className="leading-[44px]  text-sm text-[14px] px-8 font-medium">조직도</Link>
              </li>
              <li>
                <Link href="/inc/location" className="leading-[44px]  text-sm text-[14px] px-8 font-medium">찾아오시는 길</Link>
              </li>
            </ul>
          </li>
          <li><Link href="/business/business01">사업영역</Link></li>
          <li><Link href="/business/business01">커뮤니티</Link></li>
          <li><Link href="/business/business01">자료실</Link></li>
          <li><Link href="/business/business01">채용정보</Link></li>
        </ul>
      </div>
    </div>
  )
}