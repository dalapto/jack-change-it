import React from 'react';

function PlayingCard({ className, children }): React.JSX.Element {
	const [frontFacing, setFrontFacing] = React.useState(true);
	const frontChild = children[0];
	const backChild = children[1];

	return (
		<div
			className={className}
			onClick={() => {
				setFrontFacing((value) => {
					return !value;
				});
			}}
		>
			{frontFacing ? frontChild : backChild}
		</div>
	);
}

export default PlayingCard;
