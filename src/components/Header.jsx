import styles from "./Header.module.css";
// import bg from "../assets/bg-header.png";
const Header = () => {
 return (
  <header>
   <div className={styles.content}>
    <h1 className={styles.titulo}>Studio Manzatto Esmalteria</h1>
    <h2 className={styles.subTitulo}>
     Elegância e beleza nas pontas dos dedos
    </h2>
   </div>
   <section className={styles.enfeite}>
    <p>Sua cor, seu brilho, sua identidade.</p>
   </section>
  </header>
 );
};

export default Header;
