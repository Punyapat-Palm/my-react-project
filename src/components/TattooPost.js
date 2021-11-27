import tattoos from "../data/tattoos";
import "./TattooPost.css";

function TattooPost(props) {
  const { tattoo, onBgClick } = props;
  return (
    <div className="tattoo-post">
      <div className="tattoo-bg" onClick={onBgClick}>
        <div className="tattoo-content">
          <img src={tattoo.imgURL} alt="" />
          <h4>{tattoo.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default TattooPost;
