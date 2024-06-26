'use client';
import Head from 'next/head';
import Escudo from '@/app/ui/escudoParana';
import styles from './ui/Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { useEffect } from 'react';
import LogoMuni from './ui/logoMuni';

export default function Page() {  

        const[textDni,setTextDni] = useState(Number);
        const[textUsuario,setUsuario] = useState(String);

    
        useEffect(() => {
          valoresPreSeteados();
        }, []);
  
        function valoresPreSeteados(){
            setTextDni(38054313),
            setUsuario("PETRAGLIA FRANCO");
        }
          {/* <Head>
            revisar por qué no me lo muestra como foto y titulo de pestaña
             ahora me muestra localhost:3000/dashboard/listaTurnos 
            <title>Listado de Turnos</title>
            <Escudo />
            </Head> */} 

    return (
      
      <div >

        <header className={styles.header}>
          <LogoMuni />
          <h1 className={styles.title}>
            Registro de Conducir
          </h1>
            <div className="btn-group">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {textUsuario}
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Perfil</a></li>
                <li><a className="dropdown-item" href="#">Tramites</a></li>
                <li><a className="dropdown-item" href="#">Cerrar Sesion</a></li>
              </ul>
            </div>            
            <div className={styles.lineaAzul}></div>
        </header>

        <main className={styles.body}>
          
          <div className='container-lg '>
          <button className={`m-3 ${styles.botones}`}>Nuevo tramite</button>
          <button className={`${styles.botones}`}>Mis tramites</button>
          <div className="alert alert-secondary alert-dismissible fade show m-5" role="alert">
          Sr./Sra. <strong> ACA Colocar nombre y apellido del Usuario </strong>: <br />
              Según nuestros datos, tiene un registro que vence el <strong> aca colocar vencimiento carnet</strong> y posee la/s clase/s: <br />
              <strong> aca colocar categorias carnet</strong> <br />
              <strong> aca colocar si el usuario posee multas, en el caso de tenerlas que lo redirija para solucionarla</strong><br />
  
              Si usted necesita descargar el certificado de libre deuda, haga clic <a href="">aquí</a>. <br />
  
              Para solicitar el turno, haga clic <a href="">aquí</a>.
  
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
            
          
          <div className={styles.sellados}><h2 color='#0070f3'>Sellados - {textDni}</h2></div>
              
          El usuario puede redirigirse, con autologin, desde Mi Pna hacia el nuevo sistema del registro.
          El sistema debe informarle:
          Datos de la licencia actual: Clases, fecha de vencimiento.
          Si tiene multas o no.
          Iniciar un nuevo tramite:
          Solo mostrarles los tramite que puede realizar según edad y/o clases q tiene
          Pagar sellado.
          Redirigir al formulario del CENAT.
          Solicitar turno para ir al registro
          Si tiene celular registrado, enviarle por Muni información del turno solicitado y un numero de gestión.
          </div>
          
        </main>
  
        <footer className={styles.footer}>
          <h6>© Municipalidad de Paraná - Dirección General de Sistemas y Telecomunicaciones - 0.7.6</h6>
        </footer>
  
      </div>
    )
}