import { Logo, Menu } from "../Molecule";
import { Img } from "../Atoms";

import "./styles/header.scss";

export default function Header({ title }) {
  return (
    <div className="header">
      <Logo title={title} />
      <Img path={Menu} className="header__img" />
    </div>
  );
}
