import React from 'react';

function CardImage({ src, side = 'back', id = '' }): React.JSX.Element {
	return <img src={src} className={side} id={id} draggable="false" alt="Jocker" style={{ height: 'inherit', width: 'inherit' }} />;
}

export default CardImage;
