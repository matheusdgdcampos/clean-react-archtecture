import { Spinner, LoginHeader, Footer } from '@/presentation/components';
import styles from './style.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginHeader />
      <form className={styles.form}>
        <h2>Login</h2>
        <div className={styles.inputWrapp}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={styles.status}>⛔</span>
        </div>
        <div className={styles.inputWrapp}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={styles.status}>⛔</span>
        </div>
        <button className={styles.submit} type="submit">
          Entrar
        </button>
        <span className={styles.link}>Criar conta</span>
        <div className={styles.errorWrapp}>
          <Spinner className={styles.spinner} />
          <span className={styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
