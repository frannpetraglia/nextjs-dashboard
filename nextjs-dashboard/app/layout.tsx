{/*Sin uso, luego eliminar*/}
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Escudo from './ui/escudoParana';
import Head from 'next/head';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
              <Head>
            {/*revisar por qué no me lo muestra como foto y titulo de pestaña*/}
            {/* ahora me muestra localhost:3000/dashboard/listaTurnos */}
          <title>Listado de Turnos</title>
          <Escudo />
        </Head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
