import { Category } from "@/components/shop/Category";
import { ListProducts } from "@/components/shop/ListProducts";

function page() {
  return (
    <div className='py-6 px-6 max-w-7xl mx-auto lg:px-12'>
      <Category />
      <ListProducts />
    </div>
  );
}

export default page;
