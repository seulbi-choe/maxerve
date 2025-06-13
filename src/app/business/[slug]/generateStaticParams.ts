// ✅ app/business/[slug]/generateStaticParams.ts
import businessData from '../../data/businesses';
export async function generateStaticParams() {
  return Object.keys(businessData).map(slug => ({ slug }));
}