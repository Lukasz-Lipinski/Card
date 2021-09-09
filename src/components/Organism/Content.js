import { Img, Description } from "../Atoms";

const src = "https://material-ui.com/static/images/cards/paella.jpg";

const p = {
  color: "grey",
  fontSize: 16
};

const container = {
  display: "flex",
  flexFlow: "column",
  marginBlock: 15
};

export default function Content({ intro }) {
  return (
    <div style={container}>
      <Img path={src} />
      <Description style={p} text={intro} />
    </div>
  );
}
