import React from "react";
import "./CardImage.css";

function CardImage({ src, ...delegated }): React.JSX.Element {
	if (process.env.NODE_ENV == "prod") {
		src = `/jack-change-it${src}`; // in prod image path is different, this ensures images load
	}
	return <img className="card-image" src={src} draggable="false" style={{ height: "inherit", width: "inherit" }} {...delegated} />;
}

export default CardImage;
