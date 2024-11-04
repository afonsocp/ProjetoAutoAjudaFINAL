import Link from 'next/link';
import Image from 'next/image';
import styles from '../../css/integrantes.module.css';
import Footer from '../components/Footer';

const Integrantes: React.FC = () => {
  return (
    <>
      <div className={styles.integrantesWrapper}>
        <Image 
          src="/img/LOGO-PORTO-AUTOAJUDA.png" 
          alt="Logo Porto Autoajuda" 
          className={styles.logoAutoajuda} 
          width={200} 
          height={100} 
        />
        <h1>Integrantes</h1>

        <div className={styles.mainContainer}>
          {[
            {
              name: 'Afonso Correia Pereira',
              rm: '557863',
              class: '1TDSA',
              image: '/img/foto-afonso.png',
              github: 'https://github.com/afonsocp',
            },
            {
              name: 'Kaique Richard Suzart',
              rm: '555607',
              class: '1TDSA',
              image: '/img/foto-kaique.png',
              github: 'https://github.com/KaiqueSuzart',
            },
            {
              name: 'Marina Yumi Kanadani',
              rm: '558404',
              class: '1TDSPX',
              image: '/img/fotomarina.png',
              github: 'https://github.com/makanadani',
            },
          ].map((member, index) => (
            <div key={index} className={styles.container}>
              <div className={styles.item}>
                <Image 
                  src={member.image} 
                  alt={`Foto de ${member.name}`} 
                  className={styles.photo} 
                  width={100} 
                  height={100} 
                  quality={100} 
                />
              </div>
              <div className={styles.info}>
                <h2>{member.name}</h2>
                <h2>RM: {member.rm}</h2>
                <h2>{member.class}</h2>
                <h2 className={styles.githubLink}>
                  <Link href={member.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </h2>
              </div>
            </div>
          ))}
          <Link href="https://github.com/afonsocp/ProjetoPortoAutoAjuda" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            Repositório GitHub
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Integrantes;