'use client';
import { useState } from 'react';
import Link from 'next/link';
import { menu } from './menu';
import styles from "./MobileMenuButton.module.css"
export default function MobileMenu () {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = ()=> {
    setIsOpen(false);
  };

  // 1. 서브메뉴 상태관리
  // 2. 
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<number | null>(null);
  //코드 수정해야 함
  const handleSubmenu = (index: number)=>{
    setIsSubmenuOpen((prev) => (prev === index ? null : index));
    console.log(index)
  };


  return(
    <div className="w-full h-full absolute">

      <div className={`p-7 absolute bg-gray-333 w-full max-w-[400px] top-0 right-0 h-screen transition-all duration-400 ease-out ${isOpen ? "" : "translate-x-[100%]"}`}>
        <button className={styles.MenuCloseBtn} onClick={handleMenu}>
          <span className={styles.closeBar}></span>
          <span className={styles.closeBar}></span>
        </button>
        {/* 메뉴 오픈 */}
        <ul className='pt-14'>
          {menu.map((link, index)=>(
            <li key={link.name} className='border-t border-gray555 last:border-b'>
              {/* 1Depth */}
              <button onClick={()=>handleSubmenu(index)} className="leading-[62px] px-5 text-white font-medium flex justify-between items-center w-full cursor-pointer">{link.name}
                <span className='w-[15px] h-[15px] inline-block border-t border-r rotate-135 mb-[10px]'></span>
              </button>
              {/* 2Depth */}
              {link.subLinks && (
                <ul className={`overflow-hidden transition-all duration-500 ease-in bg-gray-ddd ${isSubmenuOpen === index ? "max-h-80 delay-250" : "max-h-0"}`}>
                  {link.subLinks.map((sub)=>(
                    <li key={sub.name} className='border-b-white border-b-1'>
                      <Link onClick={handleMenu} href={sub.href} className="leading-[44px] text-sm text-[14px] px-8 font-medium inline-block w-full">{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}