import { getCategories, getCategory } from '@/app/api/categories/getCategories';
import { ClickCounter } from '@/ui/click-counter';
import { GlobalLayoutSection } from '@/ui/global-layout-section';
import { TabGroup } from '@/ui/tab-group';

export default async function Layout(props: { children: React.ReactNode; params: Promise<{ categorySlug: string }> }) {
  const params = await props.params;

  const { children } = props;

  const category = await getCategory({ slug: params.categorySlug });
  const categories = await getCategories({ parent: params.categorySlug });

  return (
    <GlobalLayoutSection>
      <TabGroup
        path={`/route-groups/${category.slug}`}
        items={[
          {
            text: 'All',
          },
          ...categories.map((x) => ({
            text: x.name,
            slug: x.slug,
          })),
        ]}
        action={<ClickCounter />}
      />
      {children}
    </GlobalLayoutSection>
  );
}
