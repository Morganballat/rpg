import React from 'react';
import Sprites from '../Sprites';

export default function Actor({
	sprite,
	data,
	position,
	step = 0,
	direction = 0,
}) {
	const { h, w } = data;
	console.log('position in actor', position);
	return (
		<Sprites
			image={sprite}
			position={position}
			data={{
				x: step * w,
				y: direction * h,
				w,
				h,
			}}
		/>
	);
}
