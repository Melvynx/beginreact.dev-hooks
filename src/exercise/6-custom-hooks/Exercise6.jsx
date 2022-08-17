import styles from "./Exercise6.module.css";
import { createContext, useReducer } from "react";
import { ShifumiCard } from "../../toolbox/components/shifumi-card/ShifumiCard.jsx";

const ShifumiContext = createContext();

const gameReducer = (state, action) => {
  return {};
};

const ShifumiContextProvider = ({ children }) => {
  const [game, dispatch] = useReducer(gameReducer, {});

  return (
    <ShifumiContext.Provider value={{}}>{children}</ShifumiContext.Provider>
  );
};

const ShifumiCards = ({ player }) => {
  const isBottom = player === "user";

  return (
    <div className={styles.shifumiCards}>
      <ShifumiCard
        type="paper"
        style={{
          transform: `translate(20px, ${isBottom ? "" : "-"}20px) rotate(${
            isBottom ? "-" : ""
          }10deg)`,
        }}
      />
      <ShifumiCard type="rock" style={{ transform: "rotate(0)" }} />
      <ShifumiCard
        type="scissors"
        style={{
          transform: `translate(-20px, ${isBottom ? "" : "-"}20px) rotate(${
            isBottom ? "" : "-"
          }10deg)`,
        }}
      />
    </div>
  );
};

const App = () => {
  return (
    <ShifumiContextProvider>
      <div className={styles.wrapper}>
        <ShifumiCards type="paper" />
        <ShifumiCards type="paper" player="user" />
      </div>
    </ShifumiContextProvider>
  );
};

export default App;
