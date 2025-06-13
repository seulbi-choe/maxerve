import businessData from '../../data/businesses';
type MetadataProps = { params: { slug: string } };

export async function generateMetadata({ params }: MetadataProps) {
  const data = businessData[params.slug];
  return {
    title: data?.title || '사업영역',
    description: data?.description?.slice(0, 100) || '',
  };
}