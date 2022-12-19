import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { GruvboxDarkColors } from '../theme';

const { fg } = GruvboxDarkColors;

function StudioLogo(props: any) {
  return (
    <Link href='/' className={`text-[${fg}] flex items-center`}>
      <ArrowUturnLeftIcon className={`h-5 w-5 text-[${fg}] mx-2`} />
      Go Back To Website
    </Link>
  );
}

export default StudioLogo;
