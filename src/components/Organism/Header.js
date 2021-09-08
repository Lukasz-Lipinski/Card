import { Logo, Menu } from "../Molecule";
import { Img } from "../Atoms";

import Styles from "./styles/header.module.css";

export default function Header(props) {
  return (
    <div className={Styles.container}>
      <Logo title={props.title} />
      <Img path={Menu} className={Styles.img} />
    </div>
  );
}
