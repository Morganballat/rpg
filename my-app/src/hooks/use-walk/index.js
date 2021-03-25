import { useState } from 'react';

export default function useWalk(maxSteps) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [direction, setDirection] = useState(0);
	const [step, setStep] = useState(0);

	const directions = {
		down: 0,
		left: 1,
		right: 2,
		up: 3,
	};

	const stepSize = 16;

	const modifier = {
		down: { x: 0, y: stepSize },
		left: { x: -stepSize, y: 0 },
		right: { x: stepSize, y: 0 },
		up: { x: 0, y: -stepSize },
	};

	function move(direction) {
		console.log('modifier', modifier[direction].x);
		setPosition((prev) => ({
			x: prev.x + modifier[direction].x,
			y: prev.y + modifier[direction].y,
		}));
	}

	function walk(direction) {
		setDirection((previous) => {
			console.log('previousp', previous);

			if (directions[direction] === previous) move(direction);

			return directions[direction];
		});
		console.log('directions direction in walk func', directions[direction]);
		console.log(direction);

		setStep((previous) => (previous < maxSteps - 1 ? previous + 1 : 0));
	}
	console.log('in walk, stepstate', step);
	console.log('in walk, position state', position);

	return {
		direction,
		walk,
		step,
		position,
	};
}
