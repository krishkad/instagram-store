
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductTabsProps {
  description: string;
  specifications: Record<string, string>;
  shipping: string;
  returns: string;
}

const ProductTabs = ({ description, specifications, shipping, returns }: ProductTabsProps) => {
  return (
    <div className="mb-16">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-blush/30">
          <TabsTrigger value="description" className='max-sm:text-xs'>Description</TabsTrigger>
          <TabsTrigger value="specifications" className='max-sm:text-xs'>Specifications</TabsTrigger>
          <TabsTrigger value="shipping" className='max-sm:text-xs'>Shipping & Returns</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-truffle leading-relaxed">{description}</p>
          </div>
        </TabsContent>
        
        <TabsContent value="specifications" className="mt-8">
          <div className="space-y-4">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-gray-200 last:border-0">
                <span className="font-medium text-charcoal">{key}</span>
                <span className="text-truffle text-right max-w-xs">{value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="shipping" className="mt-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-charcoal mb-2">Shipping Information</h4>
              <p className="text-truffle">{shipping}</p>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-2">Return Policy</h4>
              <p className="text-truffle">{returns}</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;