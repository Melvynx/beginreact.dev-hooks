// 🦁 add useState import
// import { useState } from "react";

const App = () => {
  // 🦁 Remplace le name par un state
  let name = "";

  const handleChange = (event) => {
    // 🦁 Update le state avec la nouvelle valeur
    // 💡 `event.target.value`
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        // 🦁 Ajoute la valeur
        // 🦁 Ajoute le onChange pour update le state quand la valeur change
      />
      <p>{name ? `Hello ${name}` : "Write your name"}</p>
    </div>
  );
};

export default App;
