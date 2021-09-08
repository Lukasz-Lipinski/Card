import { Img, Description } from "../Atoms";
import ImgLogo from "./Znak.png";

const img = {
  width: "auto",
  height: 50
};

const p = {
  fontFamily: "Franklin Gothic Medium",
  fontSize: 18,
  color: "grey",
  marginInline: 20
};

const logo = {
  display: "flex",
  marginLeft: 5,
  marginRight: "auto",
  width: "auto"
};

export default function Logo(props) {
  return (
    <div style={logo}>
      <Img style={img} path={ImgLogo} />
      <Description style={p} text={props.title} />
    </div>
  );
}
