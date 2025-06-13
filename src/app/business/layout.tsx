// ✅ app/business/layout.tsx
export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto">
      <nav className="border-b mb-6 py-4 flex gap-4 text-blue-600">
        <a href="/business/business01">시설관리</a>
        <a href="/business/business02">보안관리</a>
        <a href="/business/business03">미화관리</a>
        <a href="/business/business04">주차관리</a>
        <a href="/business/business05">소방관리</a>
        <a href="/business/business06">인프라관리</a>
        <a href="/business/business07">에너지관리</a>
        <a href="/business/business08">인재/인력파견</a>
      </nav>
      {children}
    </div>
  );
}
