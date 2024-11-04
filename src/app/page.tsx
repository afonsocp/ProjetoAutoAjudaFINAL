import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './../css/home.module.css';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Image src="/img/logo-porto-autoajuda.png" alt="logotop-portoseguro" className={styles.portologorodape} width={200} height={100} />
        <button className={styles.hamburguer}></button>
        <div className={styles.navtop}>
          <nav className={styles.nav}>
            <Link href="#" className={styles.navlink}>Sobre nós</Link>
            <Link href="#" className={styles.navlink}>Blog</Link>
            <Link href="#" className={styles.navlink}>Ajuda</Link>
            <Link href="#" className={styles.navlink}>Contato</Link>
          </nav>
        </div>
      </header>

      <div className={styles.maincontent}>
        <div className={styles.textoprincipal}>
          <h1 className={styles.subtitulo}>Agendar a manutenção do seu carro ficou mais fácil</h1>
          <p className={styles.segundafrase}>
          Oferecemos um serviço online que permite aos clientes agendar a manutenção de seus veículos de forma conveniente. Utilizando inteligência artificial, garantimos um diagnóstico preciso e rápido do problema do veículo, proporcionando um orçamento transparente e confiável antes mesmo de levá-lo à oficina.
          </p>
          <p className={styles.terceirafrase}>Simples, rápido e confiável.</p>
          <Link href="/Login" className={styles.button}>Solicite o serviço</Link>
        </div>
        <Image src="/img/fotomulherazul.png" alt="fotomulher" className={styles.imagemdireita} width={586} height={879} quality={100}/>
      </div>
      <Footer />
    </>
  );
};

export default Home;