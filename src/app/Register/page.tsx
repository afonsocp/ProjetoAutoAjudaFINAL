'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../css/register.module.css';
import Footer from '../components/Footer';
import PasswordField from '../components/PasswordField';
import DatePickerField from '../components/DatePickerField';

const Register: React.FC = () => {
  
  const [name, setName] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    const registerData = {
      name,
      cpfCnpj,
      email,
      password,
      confirmPassword,
      birthdate,
      gender,
      phone,
    };

    console.log(registerData);

    window.location.href = '/Dashboard'
  };

  return (
    <>
      <Image
        src="/img/LOGO-PORTO-AUTOAJUDA.png"
        alt="logotopportoseguro"
        className={styles.logoAutoajuda}
        width={400}
        height={100}
      />
      <main className={styles.loginRegister}>
        <form className={`${styles.container} ${styles.containerRegister}`} onSubmit={handleRegister}>
          <h1 className={styles.tituloRegister}>Crie sua Conta</h1>
          <h2 className={styles.subtituloRegister}>Preencha seus dados pessoais para continuar.</h2>
          <div className={styles.formRegister}>
            <input
              className={styles.inputNomeRegister}
              type="text"
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className={styles.inputEmailRegister}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <DatePickerField value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            <select
              className={styles.inputGeneroRegister}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Selecione o Gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
            <input
              className={styles.inputCpfRegister}
              type="text"
              placeholder="CPF ou CNPJ"
              value={cpfCnpj}
              onChange={(e) => setCpfCnpj(e.target.value)}
              required
            />
            <input
              className={styles.inputCelularRegister}
              type="tel"
              placeholder="Celular"
              pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              title="Formato esperado: DDXXXXXYYYY"
            />
            <PasswordField
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordField
              placeholder="Confirme sua Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className={styles.buttonRegister}>
              Cadastrar
              <i className={`bi bi-arrow-right ${styles.setaDireita}`}></i>
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Register;
