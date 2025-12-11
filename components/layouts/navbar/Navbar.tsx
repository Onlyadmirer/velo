import DekstopNav from "./dekstop/DekstopNav";
import MobileNav from "./mobile/MobileNav";

function Navbar() {
  return (
    <div className=' py-4 border-b z-100 sticky top-0 bg-secondary border-neutral-300 '>
      <div className='hidden lg:block'>
        <DekstopNav />
      </div>
      <div className='lg:hidden'>
        <MobileNav />
      </div>
    </div>
  );
}

export default Navbar;
