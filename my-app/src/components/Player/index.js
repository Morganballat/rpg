import React from 'react';

import Actor from '../Actor';
import useKeyPress from '../../hooks/use-key-press';
import useWalk from '../../hooks/use-walk';

export default function Player({ caracter }) {
	const { direction, step, walk, position } = useWalk(3);
	console.log('position in player', position);
	const data = {
		h: 32,
		w: 32,
	};

	useKeyPress((e) => {
		walk(e.key.replace('Arrow', '').toLowerCase());

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
