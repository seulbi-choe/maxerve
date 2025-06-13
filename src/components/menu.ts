export type Menu = {
  name: string;
  href?: string;
  subLinks?: { name: string; href: string }[];
};

export const menu: Menu[] =  [
  // { name: 'Home', href: '/' },
  { 
    name: '회사소개', 
    subLinks: [
      {name: "CEO", href: "/inc"},
      {name: "CI", href: "/inc/ci"},
      {name: "회사개요", href: "/inc/info"},
      {name: "회사연혁", href: "/inc/history"},
      {name: "조직도", href: "/inc/group"},
      {name: "찾아오시는 길", href: "/inc/location"},
    ]
  },
  { name: '사업영역',
    subLinks: [
      {name: "시설관리", href: '/business/business01'},
      {name: "보안관리", href: '/business/business02'},
    ]
  },
  { name: '커뮤니티', href: '/community' },
  { name: '자료실', href: '/dataroom' },
  { name: '채용정보', href: '/recruit' },
]