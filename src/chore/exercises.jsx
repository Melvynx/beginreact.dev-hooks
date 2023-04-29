/**
 * DO NOT UPDATE
 * This is the exercise objets that will be used to create the exercises.
 */

// Exercises
import UseState1 from '../exercise/1-use-state/01.jsx';
// Markdown
import { ReactComponent as UseStateMarkdown } from '../exercise/1-use-state/01.md';
// ExerciseProse 1
import Solution1Exercise1 from '../final/1-1';
import Solution1Exercise2 from '../final/1-2';
import Solution1Exercise3 from '../final/1-3';
import Solution1Exercise4 from '../final/1-4';

export const EXERCISES = [
  {
    name: '1-use-state',
    parts: {
      exercise: <UseState1 key={1} />,
      md: <UseStateMarkdown />,
      solutions: [
        <Solution1Exercise1 key={1} />,
        <Solution1Exercise2 key={2} />,
        <Solution1Exercise3 key={3} />,
        <Solution1Exercise4 key={4} />,
      ],
    },
  },
];
