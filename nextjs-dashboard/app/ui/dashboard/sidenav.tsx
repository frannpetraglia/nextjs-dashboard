import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import LogoMuni from '@/app/ui/logoMuni';
import { PowerIcon } from '@heroicons/react/24/outline';
import styles from '../Home.module.css';


export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-3 py-4 md:px-2 bg-gray-200">
      <Link href="/" className={ `mb-2 flex items-center justify-center rounded-md bg-blue-600 p-4 md:h-20 md:mb-4 ${styles.nav}`} >
        <div className="w-32 text-white md:w-40">
          <LogoMuni />
        </div>
      </Link>
      <NavLinks />
      <form>
        <button className={`flex items-center justify-center h-8 rounded-md p-3 text-md font-medium text-white border-black ${styles.nav}`}>
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Cerrar Sesion</div>
        </button>
      </form>
    </div>
  );
}
