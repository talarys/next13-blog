import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
  return (
    <div>
      <div>
        <Link href='/' className='text-[#ffffff]'>
          {/* <ArrowUturnLeftIcon className='h-7 w-7' /> */}
          Go Back To Website
        </Link>
      </div>

      <>{props.renderDefault()}</>
    </div>
  );
}

export default StudioNavbar;
