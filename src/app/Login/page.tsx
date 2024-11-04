"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../../css/login.module.css";
import Footer from "../components/Footer";
import { useState } from "react";

const Login: React.FC = () => {
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const loginData = {
      cpfCnpj,
      senha,
    };

    console.log(loginData);

    window.location.href = '/Dashboard'
  };

  return (
    <>
      <Image
        src="/img/LOGO-PORTO-AUTOAJUDA.png"
        alt="logotop-portoseguro"
        className={styles.logoAutoajuda}
        width={400}
        height={100}
      />
      <main className={styles.login}>
        <form className={styles.container} onSubmit={handleSubmit}>
          <h1 className={styles.titulo}>Acesse sua Conta</h1>
          <h2 className={styles.subtitulo}>
            Preencha seus dados de acesso para continuar.
          </h2>
          <div className={styles.form}>
            <input
              className={styles.inputCpf}
              type="text"
              placeholder="CPF ou CNPJ"
              value={cpfCnpj}
              onChange={(e) => setCpfCnpj(e.target.value)}
              required
            />
            <input
              className={styles.inputSenha}
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button type="submit" className={styles.buttonLogin}>
              Entrar
              <i className={`bi bi-arrow-right ${styles.setaDireita}`}></i>
            </button>
          </div>
          <h1 className={styles.tituloBaixo}>
            Ainda não tem sua conta Porto Seguro?
          </h1>
          <Link href="/Register" className={styles.subtituloBaixo}>
            Crie uma agora mesmo :)
          </Link>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
