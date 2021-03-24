import { useState } from 'react';

export default function useWalk(maxSteps) {
	const [position, setPosition] = useState(0);
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
		console.dir(directions[direction]);
		setDirection((previous) => {
			if (directions[direction] === previous) move(direction);
			return directions[direction];
		});
		setStep((previous) => (previous < maxSteps - 1 ? previous + 1 : 0));
	}

	function move(direction) {
		setPosition((previous) => ({
			x: previous.x + modifier[direction].x,
			y: previous.y + modifier[direction].y,
		}));
	}
	return {
		walk,
		direction,
		step,
		position,
	};
}
