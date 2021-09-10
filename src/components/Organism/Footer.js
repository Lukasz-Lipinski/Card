import { Img } from "../Atoms";
import { Heart, Share, Arrow } from "../Molecule";

import "./styles/footer.scss";

export default function Footer(props) {
  const { show } = props;

  return (
    <div className="footer">
      <div className="footer--leftImages">
        <Img path={Heart} className="footer--leftImages__img" />
        <Img path={Share} className="footer--leftImages__img" />
      </div>
      <div className="footer--rightImages">
        <button className="footer--rightImages--btn" onClick={show}>
          <Img path={Arrow} className="footer--rightImages--btn__img" />
        </button>
      </div>
    </div>
  );
}
