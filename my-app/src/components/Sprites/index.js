import React from 'react';

export default function Sprites({ image, data, position }) {
	const { y, x, h, w } = data;
	console.log(position.y);
	console.log(position.x);
	return (
		<div
			style={{
				position: 'absolute',
				top: `${position.y}`,
				left: `${position.x}`,
				height: `${h}px`,
				width: `${w}px`,
				backgroundImage: `url(${image})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: `-${x}px -${y}px`,
			}}
		/>
	);
}
