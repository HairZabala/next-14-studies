import { CartCounter } from '@/features/shopping-cart/components/CartCounter';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Counter page',
};

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Products on your car.</span>
      <CartCounter value={20} />
    </div>
  );
}
