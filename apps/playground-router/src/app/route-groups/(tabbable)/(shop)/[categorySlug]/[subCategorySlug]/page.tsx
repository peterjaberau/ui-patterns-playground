import { getCategory } from '@/app/api/categories/getCategories';
import { GlobalPage } from '@/ui/global-page';
import { SkeletonCard } from '@/ui/skeleton-card';
import { notFound } from 'next/navigation';

export default async function Page(props: { params: Promise<{ categorySlug: string; subCategorySlug: string }> }) {
  const params = await props.params;
  const category = await getCategory({ slug: params.subCategorySlug });

  return (
    <GlobalPage header={{ pageTitle: category.name }}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </GlobalPage>
  );
}
