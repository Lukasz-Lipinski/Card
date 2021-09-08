import { Img } from "../Atoms";
import { Serce, Share, Arrow } from "../Molecule";

import Styles from "./styles/footer.module.css";

export default function Footer(props) {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftContainer}>
        <Img path={Serce} className={Styles.img} />
        <Img path={Share} className={Styles.img} />
      </div>
      <div className={Styles.rightContainer}>
        <button className={Styles.button} onClick={props.show}>
          <Img path={Arrow} className={Styles.img} />
        </button>
      </div>
    </div>
  );
}
