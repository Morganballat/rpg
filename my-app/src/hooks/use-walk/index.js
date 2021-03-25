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

	function walk(direction) {
		setDirection(() => {
			return directions[direction];
		});
		console.log('directions direction in walk func', directions[direction]);
		if (directions[direction] === direction) {
			move(direction);
			return directions[direction];
		}
		setStep((previous) => (previous < maxSteps - 1 ? previous + 1 : 0));
	}
	console.log('in walk, position state', position);

	function move(direction) {
		console.log('modifier', modifier[direction].x);
		setPosition(() => ({
			x: position.x + modifier[direction].x,
			y: position.y + modifier[direction].y,
		}));
	}

	return {
		direction,
		walk,
		step,
		position,
	};
}
