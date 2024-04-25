import Image from 'next/image'
import logoMuni from '../../public/customers/logoMuni.png';

export default function LogoMuni() {
  return (
    <Image alt="Logo Municipalidad de Parana" src={logoMuni} />
  );
}
