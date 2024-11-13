import styles from "./Navbar.module.css";
import Logo from "../assets/logo.png";
function App() {
 return (
  <div className={styles.nav}>
   <img className={styles.logo} src={Logo} alt="Logo da Studio Manzatto" />
   <div>
    <ul className={styles.listNav}>
     <a href="">
      <li>Agendar</li>
     </a>
     <a href="#servicos">
      <li>Serviços</li>
     </a>
     <a href="#contato">
      <li>Contato</li>
     </a>
    </ul>
   </div>
  </div>
 );
}

export default App;
