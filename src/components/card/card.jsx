import { useState } from "react";
import "./card.css";

const Card = (props) => {
  const {
    item: { url, name, description },
    innerRef,
    provided,
  } = props;

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((prev) => !prev);
  };
  return (
    <div
      className="cardWrapper"
      onClick={handleClick}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
    >
      <div className="name">{name}</div>
      <div className="cardContent">
        <div className="imageWrapper">
          <img src={url} alt={name} className="image" />
        </div>
        <div className={`description ${isShown ? "shown" : ""}`}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
