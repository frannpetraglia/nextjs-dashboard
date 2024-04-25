import Image from 'next/image'
import escudoParana from '../../public/customers/escudoParana.jpg';

export default function Escudo() {
  return (
    <Image alt="Escudo de Parana" src={escudoParana} className="h-120 w-120" />
  );
}
