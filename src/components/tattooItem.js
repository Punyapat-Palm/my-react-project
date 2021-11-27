import "./TattooItem.css";

function TattooItem(props) {
  const { tattoo, onPicClick } = props;
  return (
    <div className="tattoo-item">
      <img
        src={tattoo.imgURL}
        onClick={() => {
          onPicClick(tattoo);
        }}
      />
      <h4>{tattoo.title}</h4>
    </div>
  );
}

export default TattooItem;
