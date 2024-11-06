import styles from './NavBar.module.css';
import MenuLink from '../MenuLink';
import BuySmcCard from '../card/buy-smc-card/buy-smc-card';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <img src="/img/logo.png" alt="Logo" className={styles.navbarImage} />
        <div className={styles.navbarDiv}>
          <MenuLink to="/">
            <p className={styles.navbarText}>Home</p>
          </MenuLink>

          <MenuLink to="/produtos">
            <p className={styles.navbarText}>Produtos</p>
          </MenuLink>

          <MenuLink to="/doacao">
            <p className={styles.navbarText}>Doação</p>
          </MenuLink>

          <MenuLink to="/sobre">
            <p className={styles.navbarText}>Sobre</p>
          </MenuLink>

          {/* Novo Link para a página de Login */}
          <MenuLink to="/login">
            <p className={styles.navbarText}>Login</p>
          </MenuLink>
        </div>
      </div>
      <div className={styles.buySmcContainer}>
        <BuySmcCard />
      </div>
    </div>
  );
};

export default NavBar;
