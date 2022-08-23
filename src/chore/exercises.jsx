/**
 * DO NOT UPDATE
 * This is the exercise objets that will be used to create the exercises.
 */

// Exercises
import UseState1 from "../exercise/1-use-state/Exercise1-1.jsx";
import UseState5 from "../exercise/1-use-state/Exercise1-5.jsx";
import UseEffect from "../exercise/2-use-effect/Exercise2";
import UseRef from "../exercise/3-use-ref/Exercise3";
import UseContext from "../exercise/4-use-context/Exercise4";
import UseReducer from "../exercise/5-use-reducer/Exercise5";
import FullExercise from "../exercise/6-custom-hooks/Exercise6";
import Render1 from "../exercise/6-understand-render/Exercise6-1.jsx";
import Render2 from "../exercise/6-understand-render/Exercise6-2.jsx";
import Render3 from "../exercise/6-understand-render/Exercise6-3.jsx";
import Render4 from "../exercise/6-understand-render/Exercise6-4.jsx";
import Render5 from "../exercise/6-understand-render/Exercise6-5.jsx";
// Markdown
import { ReactComponent as UseStateMarkdown } from "../exercise/1-use-state/Exercise1.md";
import { ReactComponent as UseEffectMarkdown } from "../exercise/2-use-effect/Exercise2.md";
import { ReactComponent as UseRefMarkdown } from "../exercise/3-use-ref/Exercise3.md";
// Exercise 1
import Solution1Exercise1 from "../final/1-1";
import Solution1Exercise2 from "../final/1-2";
import Solution1Exercise3 from "../final/1-3";
import Solution1Exercise4 from "../final/1-4";
import Solution1Exercise5 from "../final/1-5";
// Exercise 2
import Solution2Exercise1 from "../final/2-1";
import Solution2Exercise2 from "../final/2-2";
import Solution2Exercise3 from "../final/2-3";
import Solution2Exercise4 from "../final/2-4";
import Solution2Exercise5 from "../final/2-5";
import Solution2Exercise6 from "../final/2-6";
// Exercise 3
import Solution3Exercise1 from "../final/3-1";
import Solution3Exercise2 from "../final/3-2";
import Solution3Exercise3 from "../final/3-3";
// Exercise 4
// Exercise 5
import Solution5Exercise1 from "../final/5-1";
import Solution5Exercise2 from "../final/5-2";
import Solution5Exercise3 from "../final/5-3";
import Solution5Exercise4 from "../final/5-4";
// Exercise 6
import Solution6Exercise1 from "../final/6-1";
import Solution6Exercise2 from "../final/6-2";
import Solution6Exercise3 from "../final/6-3";
import Solution6Exercise4 from "../final/6-4";

export const EXERCISES = [
  {
    name: "1-use-state",
    parts: {
      exercises: [<UseState1 key={1} />, <UseState5 key={2} />],
      md: <UseStateMarkdown />,
      solutions: [
        <Solution1Exercise1 key={1} />,
        <Solution1Exercise2 key={2} />,
        <Solution1Exercise3 key={3} />,
        <Solution1Exercise4 key={4} />,
        <Solution1Exercise5 key={5} />,
      ],
    },
  },
  {
    name: "2-use-effect",
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
      ],
    },
  },
  {
    name: "3-use-ref",
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
    name: "4-context",
    parts: {
      exercise: <UseContext />,
      solutions: [],
    },
  },
  {
    name: "5-use-reducer",
    parts: {
      exercise: <UseReducer />,
      solutions: [
        <Solution5Exercise1 key={1} />,
        <Solution5Exercise2 key={2} />,
        <Solution5Exercise3 key={3} />,
        <Solution5Exercise4 key={4} />,
      ],
    },
  },
  {
    name: "6-mixed-exercises",
    parts: {
      exercise: <FullExercise />,
      solutions: [<Solution6Exercise1 key={1} />],
    },
  },
  {
    name: "6-react-exercises",
    parts: {
      exercises: [
        <Render1 key={1} />,
        <Render2 key={2} />,
        <Render3 key={3} />,
        <Render4 key={4} />,
        <Render5 key={5} />,
      ],
      solutions: [
        <Solution6Exercise1 key={1} />,
        <Solution6Exercise2 key={2} />,
        <Solution6Exercise3 key={3} />,
        <Solution6Exercise4 key={4} />,
      ],
    },
  },
];
