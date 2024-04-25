import SideNav from '@/app/ui/dashboard/sidenav';
import 'bootstrap/dist/css/bootstrap.min.css';

 
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex h-screen">
          <header>
          <title>Listado de Turnos</title>
        </header>
      <div className="w-64 bg-gray-200">
        <SideNav />
      </div>
      <div className="flex-grow p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}


