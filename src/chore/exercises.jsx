/**
 * DO NOT UPDATE
 * This is the exercise objets that will be used to create the exercises.
 */

import UseState from '../exercise/1-use-state/Exercise1';
import UseEffect from '../exercise/2-use-effect/Exercise2';
import Form from '../exercise/3-form/Exercise3';
// Exercise 1
import Solution1Exercise1 from '../final/1-1';
import Solution1Exercise2 from '../final/1-2';
import Solution1Exercise3 from '../final/1-3';
import Solution1Exercise4 from '../final/1-4';
// Exercise 2
import Solution2Exercise1 from '../final/2-1';
import Solution2Exercise2 from '../final/2-2';
import Solution2Exercise3 from '../final/2-3';
import Solution2Exercise4 from '../final/2-4';
import Solution2Exercise5 from '../final/2-5';
import Solution2Exercise6 from '../final/2-6';
// Exercise 3
import Solution3Exercise1 from '../final/3-1';
import Solution3Exercise2 from '../final/3-2';
import Solution3Exercise3 from '../final/3-3';
import Solution3Exercise4 from '../final/3-4';
import Solution3Exercise5 from '../final/3-5';

export const EXERCISES = [
  {
    name: '1-use-state',
    parts: {
      exercise: <UseState />,
      solutions: [
        <Solution1Exercise1 key={1} />,
        <Solution1Exercise2 key={2} />,
        <Solution1Exercise3 key={3} />,
        <Solution1Exercise4 key={4} />,
      ],
    },
  },
  {
    name: '2-use-effect',
    parts: {
      exercise: <UseEffect />,
      solutions: [
        <Solution2Exercise1 key={1} />,
        <Solution2Exercise2 key={2} />,
        <Solution2Exercise3 key={3} />,
        <Solution2Exercise4 key={4} />,
        <Solution2Exercise5 key={5} />,
        <Solution2Exercise6 key={6} />,
      ],
    },
  },
  {
    name: '3-form',
    parts: {
      exercise: <Form />,
      solutions: [
        <Solution3Exercise1 key={1} />,
        <Solution3Exercise2 key={2} />,
        <Solution3Exercise3 key={3} />,
        <Solution3Exercise4 key={4} />,
        <Solution3Exercise5 key={5} />,
      ],
    },
  },
];
