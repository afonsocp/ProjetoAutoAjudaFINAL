import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../css/footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <Image
          src="/img/logo-porto.png"
          alt="logoportorodape"
          className={styles.portologorodape}
          width={100}
          height={50}
        />
        <p className={styles.textorodape}>Acompanhe a Porto nas redes sociais</p>
        <ul className={styles.socialicons}>
          <li>
            <Link href="https://www.facebook.com/porto">
              <Image src="/img/redes-sociais/FACEBOOK 1.png" alt="facebook" width={13} height={25} />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/porto">
              <Image src="/img/redes-sociais/instagram.png" alt="instagram" width={24} height={25} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/porto/">
              <Image src="/img/redes-sociais/linkedin 1.png" alt="linkedin" width={25} height={25} />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/portoseguro">
              <Image src="/img/redes-sociais/youtube.png" alt="youtube" width={29} height={20} />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/portoseguro">
              <Image src="/img/redes-sociais/twitter 1.png" alt="twitter" width={27} height={28} />
            </Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@portoseguro">
              <Image src="/img/redes-sociais/tiktok 1.png" alt="tiktok" width={20} height={23} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;