/*
📁 Next.js App Router 기반: 사업영역 페이지 구조 샘플
구성: /business/[slug] 페이지를 동적 라우팅 + 정적 생성 방식으로 구성
*/

// ✅ app/business/[slug]/page.tsx
import { notFound } from 'next/navigation';
import businessData from '../../data/businesses';

type Props = { params: { slug: string } };

export default function BusinessPage({ params }: Props) {
  const data = businessData[params.slug];

  if (!data) return notFound();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-700 leading-relaxed">{data.description}</p>
    </main>
  );
}
