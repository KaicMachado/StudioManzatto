import styles from "./Informacoes.module.css";
import WhatsappLogo from "../assets/whats-logo.jpg";
import InstaLogo from "../assets/insta-logo.jpg";
import Mapa from "./Mapa";
const Informacoes = () => {
 return (
  <section id="contato" className={styles.container}>
   <div className={styles.infos}>
    <div className={styles.infoContent}>
     <p className={styles.title}>Redes Sociais</p>
     <ul className={styles.redesLista}>
      <a href="https://api.whatsapp.com/send?phone=+5516992332187&text=Ol%C3%A1%2C+gostaria+de+agendar+um+hor%C3%A1rio+de+unha+com+a+Andreia">
       <li>
        <img className={styles.logo} src={WhatsappLogo} alt="Logo Whatsapp" />
       </li>
      </a>
      <a href="https://www.instagram.com/andreiamanzattonails/">
       <li>
        <img className={styles.logo} src={InstaLogo} alt="Logo Instagram" />
       </li>
      </a>
     </ul>
    </div>
    <div className={styles.infoContent}>
     <p className={styles.title}>Endereço</p>
     <span>Avenida Beira Mar, Praia do Morro</span>
    </div>
   </div>
   <div className={styles.loc}>
    <p className={styles.title}>Localização</p>
    <div className={styles.mapa}>
     <Mapa />
    </div>
   </div>
  </section>
 );
};

export default Informacoes;
