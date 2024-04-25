'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home.module.css';
import {
  ArrowRightOnRectangleIcon,
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentIcon,
  IdentificationIcon,
  ScaleIcon,
  UserCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Log In', href: '/dashboard', icon: UserCircleIcon },
  {
    name: 'Cargar Datos',
    href: '/dashboard/cargaDatos',
    icon: IdentificationIcon,
  },
  { name: 'Verificar Multas', href: '/dashboard/verificarMultas', icon: ExclamationTriangleIcon },
  {
    name: 'Sellados', href: '/dashboard/sellados', icon: ClipboardDocumentIcon,
  },
  {
    name:'Sacar Turno', href: '/dashboard/sacarTurno', icon: ArrowRightOnRectangleIcon,
  }
];

export default function NavLinks() {
  const pathname = usePathname();
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center text-center gap-2 rounded-md p-3 text-md font-medium hover: text-black',
              {
                ' bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
