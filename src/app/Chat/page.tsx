import Link from 'next/link';
import Image from 'next/image';
import styles from '../../css/chat.module.css';
import Footer from '../components/Footer';

const Chat: React.FC = () => {
  return (
    <>
      <Image 
        src="/img/LOGO-PORTO-AUTOAJUDA.png" 
        alt="Logo Porto Autoajuda" 
        className={styles.logoAutoajuda} 
        width={400} 
        height={100} 
      />

      <div className={styles.content}>
        <div className={styles.chatContainer}>
          <ul className={styles.messageListBot}>
            <div className={styles.bot}>
              <Image src="/img/robo-icon.png" className={styles.botIcon} alt="Icone Rôbo" width={40} height={40} />
              <label>Porto</label>
            </div>
            <p className={styles.messageBot}>
              Olá, sou a Inteligência Artificial da Porto Seguro que vai te ajudar! Qual seria o problema do seu carro?
            </p>
          </ul>

          <ul className={styles.messageListUser}>
            <div className={styles.user}>
              <label>Você</label>
              <Image src="/img/user-icon.png" className={styles.userIcon} alt="Icone Usuário" width={40} height={40} />
            </div>
            <li className={styles.messageBot}>Meu carro não está ligando.</li>
          </ul>

          <div className={styles.search}>
            <input type="text" placeholder="Digite aqui..." />
            <i className={`bi bi-arrow-right ${styles.arrowIcon}`}></i>
          </div>
        </div>

        <Link href="/integrantes" className={styles.integrantesLink}>
          <h1>Integrantes</h1>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Chat;