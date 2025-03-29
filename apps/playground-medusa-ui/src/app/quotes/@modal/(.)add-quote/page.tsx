'use client';
import { Dialog, DialogContent } from '@codefast/ui';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@codefast/ui';
import AddQuoteFormModal from '@/ui/quote-app/general/AddQuoteFormModal';

const AddQuoteModal = () => {
  const router = useRouter();
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className="lg:w-[700px]">
        <Card className="lg:w-[550px]">
          <CardHeader>
            <CardTitle className="text-xl">Add A Quote</CardTitle>
            <CardDescription className="text-xl">/quotes/@modal/(.)add-quote/page.tsx</CardDescription>
          </CardHeader>
          <CardContent>
            <AddQuoteFormModal />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuoteModal;
