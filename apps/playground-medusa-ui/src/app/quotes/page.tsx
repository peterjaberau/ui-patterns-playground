import CTAButton from '@/ui/quote-app/general/CTAButton';
import QouteSection from '@/ui/quote-app/quote-section/QuoteSection';
import { Container } from '@medusajs/ui';

const MainPage = async ({ searchParams }: { searchParams: { category: string | string[] | undefined } }) => {
  const { category } = await searchParams;

  return (
    <Container className="flex flex-row gap-4">
      <CTAButton />
      <QouteSection category={searchParams.category} />
    </Container>
  );
};

export default MainPage;
