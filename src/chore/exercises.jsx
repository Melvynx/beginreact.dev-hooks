/**
 * DO NOT UPDATE
 * This is the exercise objets that will be used to create the exercises.
 */

// Exercises
import UseState5 from '../exercise/1-use-state/01.extra.5.jsx';
import UseState1 from '../exercise/1-use-state/01.jsx';
import UseEffect from '../exercise/2-use-effect/02';
import UseRef from '../exercise/3-use-ref/03';
import UseContext from '../exercise/4-use-context/04';
import UseReducer from '../exercise/5-use-reducer/05';
import Render2 from '../exercise/6-understand-render/06.extra.2.jsx';
import Render3 from '../exercise/6-understand-render/06.extra.3.jsx';
import Render4 from '../exercise/6-understand-render/06.extra.4.jsx';
import Render5 from '../exercise/6-understand-render/06.extra.5.jsx';
import Render1 from '../exercise/6-understand-render/06.jsx';
// Markdown
import { ReactComponent as UseStateMarkdown } from '../exercise/1-use-state/01.md';
import { ReactComponent as UseEffectMarkdown } from '../exercise/2-use-effect/02.md';
import { ReactComponent as UseRefMarkdown } from '../exercise/3-use-ref/03.md';
import { ReactComponent as UseContextMarkdown } from '../exercise/4-use-context/04.md';
import { ReactComponent as UseReducerMarkdown } from '../exercise/5-use-reducer/05.md';
import { ReactComponent as RenderMarkdown } from '../exercise/6-understand-render/06.md';
// ExerciseProse 1
import Solution1Exercise1 from '../final/1-1';
import Solution1Exercise2 from '../final/1-2';
import Solution1Exercise3 from '../final/1-3';
import Solution1Exercise4 from '../final/1-4';
import Solution1Exercise5 from '../final/1-5';
import Solution1Exercise6 from '../final/1-6';
import Solution1Exercise7 from '../final/1-7';
// ExerciseProse 2
import Solution2Exercise1 from '../final/2-1';
import Solution2Exercise2 from '../final/2-2';
import Solution2Exercise3 from '../final/2-3';
import Solution2Exercise4 from '../final/2-4';
import Solution2Exercise5 from '../final/2-5';
import Solution2Exercise6 from '../final/2-6';
import Solution2Exercise7 from '../final/2-7';
import Solution2Exercise8 from '../final/2-8';
// ExerciseProse 3
import Solution3Exercise1 from '../final/3-1';
import Solution3Exercise2 from '../final/3-2';
import Solution3Exercise3 from '../final/3-3';
// ExerciseProse 4
import Solution4Exercise1 from '../final/4-1';
import Solution4Exercise2 from '../final/4-2';
import Solution4Exercise3 from '../final/4-3';
// import Solution4Exercise4 from '../final/4-4';
// ExerciseProse 5
import Solution5Exercise1 from '../final/5-1';
import Solution5Exercise2 from '../final/5-2';
import Solution5Exercise3 from '../final/5-3';
import Solution5Exercise4 from '../final/5-4';
import Solution5Exercise5 from '../final/5-5.bonus';
// ExerciseProse 6
import Solution6Exercise1 from '../final/6-1';
import Solution6Exercise2 from '../final/6-2';
import Solution6Exercise3 from '../final/6-3';
import Solution6Exercise4 from '../final/6-4';
import Solution6Exercise5 from '../final/6-5';

export const EXERCISES = [
  {
    name: '1-use-state',
    parts: {
      exercises: [<UseState1 key={1} />, <UseState5 key={2} />],
      md: <UseStateMarkdown />,
      solutions: [
        <Solution1Exercise1 key={1} />,
        <Solution1Exercise2 key={2} />,
        <Solution1Exercise3 key={3} />,
        <Solution1Exercise4 key={4} />,
        <Solution1Exercise5 key={5} />,
        <Solution1Exercise6 key={6} />,
        <Solution1Exercise7 key={7} />,
      ],
    },
  },
  {
    name: '2-use-effect',
    parts: {
      exercise: <UseEffect />,
      md: <UseEffectMarkdown />,
      solutions: [
        <Solution2Exercise1 key={1} />,
        <Solution2Exercise2 key={2} />,
        <Solution2Exercise3 key={3} />,
        <Solution2Exercise4 key={4} />,
        <Solution2Exercise5 key={5} />,
        <Solution2Exercise6 key={6} />,
        <Solution2Exercise7 key={7} />,
        <Solution2Exercise8 key={8} />,
      ],
    },
  },
  {
    name: '3-use-ref',
    parts: {
      exercise: <UseRef />,
      md: <UseRefMarkdown />,
      solutions: [
        <Solution3Exercise1 key={1} />,
        <Solution3Exercise2 key={2} />,
        <Solution3Exercise3 key={3} />,
      ],
    },
  },
  {
    name: '4-context',
    parts: {
      exercise: <UseContext />,
      md: <UseContextMarkdown />,
      solutions: [
        <Solution4Exercise1 key={1} />,
        <Solution4Exercise2 key={2} />,
        <Solution4Exercise3 key={3} />,
        // <Solution4Exercise4 key={4} />,
      ],
    },
  },
  {
    name: '5-use-reducer',
    parts: {
      exercise: <UseReducer />,
      md: <UseReducerMarkdown />,
      solutions: [
        <Solution5Exercise1 key={1} />,
        <Solution5Exercise2 key={2} />,
        <Solution5Exercise3 key={3} />,
        <Solution5Exercise4 key={4} />,
        <Solution5Exercise5 key={5} />,
      ],
    },
  },
  {
    name: '6-react-render',
    parts: {
      exercises: [
        <Render1 key={1} />,
        <Render2 key={2} />,
        <Render3 key={3} />,
        <Render4 key={4} />,
        <Render5 key={5} />,
      ],
      md: <RenderMarkdown />,
      solutions: [
        <Solution6Exercise1 key={1} />,
        <Solution6Exercise2 key={2} />,
        <Solution6Exercise3 key={3} />,
        <Solution6Exercise4 key={4} />,
        <Solution6Exercise5 key={5} />,
      ],
    },
  },
];
