import CardServico from "./CardServico";
import ManicureImg from "../assets/manicure.png";
import PedicureImg from "../assets/pedicure.png";
import PlasticaImg from "../assets/plastica.png";
import UnhaGelImg from "../assets/unhagel.png";
import styles from "./CardServico.module.css";
const Servicos = () => {
 return (
  <section id="servicos">
   <ul className={styles.lista}>
    <CardServico title="Manicure" img={ManicureImg} />
    <CardServico title="Pedicure" img={PedicureImg} />
    <CardServico title="Unhas em Gel" img={UnhaGelImg} />
    <CardServico title="Plástica dos Pés" img={PlasticaImg} />
   </ul>

   <button className={styles.btn}>
    <a
     href="https://api.whatsapp.com/send?phone=+5527988432497&text=Ol%C3%A1%2C+gostaria+de+agendar+um+hor%C3%A1rio"
     target="_blank"
    >
     Agendar
    </a>
   </button>
  </section>
 );
};

export default Servicos;
