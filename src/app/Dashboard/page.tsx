import Link from 'next/link';
import Image from 'next/image';
import styles from '../../css/dashboard.module.css';
import Footer from '../components/Footer';

const Dashboard: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Image src="/img/LOGO-PORTO-AUTOAJUDA.png" alt="Logo Porto Autoajuda" className={styles.logo}  width={200} height={100}/>
        <button className={styles.hamburger}></button>
        <nav className={styles.navtop}>
          <Link href="#" className={styles.navlink}>Sobre nós</Link>
          <Link href="#" className={styles.navlink}>Blog</Link>
          <Link href="#" className={styles.navlink}>Ajuda</Link>
          <Link href="#" className={styles.navlink}>Contato</Link>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.textSection}>
          <h1>Seja bem-vindo/a (usuário)</h1>
          <p className={styles.secondaryText}>
            Nosso chatbot interativo coleta informações sobre os sintomas do seu carro para diagnosticar possíveis
            problemas e fornecer um orçamento estimado. Após o diagnóstico virtual, você pode agendar uma inspeção física
            em nossa oficina para resolver o problema detectado.
          </p>
          <p className={styles.highlightedText}>Conte conosco!</p>
          <Link href="#" className={styles.button}>Começar o diagnóstico</Link>
        </section>
        <Image src="/img/fotohomemazul.png" alt="Foto do homem" className={styles.sideImage}  width={706} height={945} quality={100}/>
      </main>

      <Footer />
    </>
  );
};

export default Dashboard;