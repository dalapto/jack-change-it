import React from 'react';
import { ASSETS_FOLDER } from '../constants';

function CardImage({ src, ...dependencies }): React.JSX.Element {
	if (process.env.NODE_ENV == 'prod') {
		src = `/jack-change-it${src}`; // in prod image path is different, this ensures images load
	}
	return <img src={src} draggable="false" style={{ height: 'inherit', width: 'inherit' }} {...dependencies} />;
}

export default CardImage;
