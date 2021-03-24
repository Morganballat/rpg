import React from 'react';

import Actor from '../Actor';
import useKeyPress from '../../hooks/use-key-press';
import useWalk from '../../hooks/use-walk';

export default function Player({ caracter }) {
	const { direction, step, walk, position } = useWalk(3);
	const data = {
		h: 32,
		w: 32,
	};

	const directions = {
		down: 0,
		left: 1,
		right: 2,
		up: 3,
	};

	useKeyPress((e) => {
		walk(e.key.replace('Arrow', '').toLowerCase());

		if (directions.hasOwnProperty(direction)) console.dir(direction);
		e.preventDefault();
	});

	return (
		<Actor
			sprite={caracter}
			data={data}
			step={step}
			direction={direction}
			position={position}
		/>
	);
}
