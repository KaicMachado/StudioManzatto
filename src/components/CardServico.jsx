import styles from "./CardServico.module.css";
/* eslint-disable react/prop-types */
const CardServico = ({ title, img }) => {
 return (
  <li className={styles.card}>
   <h2>{title}</h2>
   <img
    className={styles.imgCard}
    src={img}
    alt={`Foto de ilustração de ${title}`}
   />
  </li>
 );
};

export default CardServico;
