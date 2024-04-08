import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <section className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/icons/logo.svg'
          alt='yoom_logo'
          width={32}
          height={32}
          className='max-sm:size-10'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>
          Yoom
        </p>
      </Link>
      <div className='flex-between gap-5'>
        {/* Clerk - user management */}
        <MobileNav />
      </div>
    </section>
  );
};

export default Navbar;
