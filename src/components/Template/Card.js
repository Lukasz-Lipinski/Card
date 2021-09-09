import { Content, Header, Footer } from "../Organism";
import { useState } from "react";
import { Description } from "../Atoms";
import Styles from "./cardStyles.module.css";

const text =
  "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.";

export default function Card(props) {
  const { title, intro } = props;
  const [show, setShow] = useState("-hidden");

  const showMore = () => {
    show === "-hidden" ? setShow("-showed") : setShow("-hidden");
  };

  return (
    <div className={Styles.card}>
      <Header title={title} />
      <Content intro={intro} />
      <Footer show={showMore} className={show} />

      {show === "-showed" ? (
        <Description className={Styles.descStyle} text={text} />
      ) : null}
    </div>
  );
}
