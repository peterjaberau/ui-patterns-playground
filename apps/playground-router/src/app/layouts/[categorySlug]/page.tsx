import { getCategory } from '@/app/api/categories/getCategories';
import { GlobalPage } from '@/ui/global-page';
import { GlobalPageSection } from '@/ui/global-page-section';
import { SkeletonCard } from '@/ui/skeleton-card';

export default async function Page(props: { params: Promise<{ categorySlug: string }> }) {
  const params = await props.params;
  const category = await getCategory({ slug: params.categorySlug });

  return (
    <GlobalPage header={{ pageTitle: `All ${category.name}` }}>
      <GlobalPageSection grow={false} alignment="top" hasShadow={false} paddingSize="none">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </GlobalPageSection>
    </GlobalPage>
  );
}
