import clsx from 'clsx';
import { useReducer, useState } from 'react';

// 🦁 Crée un ThemeContext en utilisant `React.createContext`

// 🦁 Crée un ThemeProvider qui fait :
//  - `const [theme, setTheme] = useState('light');`
//  - fonction pour toggle le theme (dark => light et light => dark)
//  - fonction pour set le theme en light
//  - fonction pour set le theme en dark
//  - constante pour savoir si le thème est dark
//  - constante pour savoir si le thème est light
//  - définit une variables `values` qui contient toggle, setLight, setDark, isDark, isLight, theme
//  - retourne le `ThemeContext.Provider` avec `values` en props
//  - 💡 value={values}

const ThemedLayout = ({ children, isDark }) => {
  // 🦁 Supprime la props et remplace par le context en utilisant React.useContext de ThemeContext
  return (
    <div className={clsx('theme-app', { 'dark-theme-app': isDark })}>
      {children}
    </div>
  );
};

const ForceLightMode = ({ setLight }) => {
  // 🦁 Supprime la props et remplace par le context en utilisant React.useContext de ThemeContext
  return <button onClick={() => setLight()}>Force light</button>;
};

const ForceDarkMode = ({ setDark }) => {
  // 🦁 Supprime la props et remplace par le context en utilisant React.useContext de ThemeContext
  return <button onClick={() => setDark()}>Force dark</button>;
};

const ToggleMode = ({ toggle, isDark }) => {
  // 🦁 Supprime la props et remplace par le context en utilisant React.useContext de ThemeContext
  return <button onClick={toggle}>{isDark ? '🌞' : '🌙'}</button>;
};

const CurrentModeInfo = ({ theme }) => {
  // 🦁 Supprime la props et remplace par le context en utilisant React.useContext de ThemeContext
  return (
    <div>
      Current theme: <b>{theme}</b>
    </div>
  );
};

const ForceThemeButtons = ({ setTheme }) => (
  <div style={{ marginTop: 32 }}>
    {/* 🦁 Enlever les props */}
    <ForceLightMode setLight={() => setTheme('light')} />
    <ForceDarkMode setDark={() => setTheme('dark')} />
  </div>
);

const App = () => {
  const [count, increment] = useReducer((curr) => curr + 1, 0);
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <p>Not in dark mode</p>
      <button onClick={increment}>{count}</button>
      <ThemedLayout isDark={theme === 'dark'}>
        <ToggleMode
          toggle={() =>
            setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
          }
          isDark={theme === 'dark'}
        />

        <h1>Articles</h1>
        <h3>What is useContext ?</h3>
        <p>
          useContext is used to pass data through the component tree without
          having to pass props down manually at every level.
        </p>
        <hr />
        <CurrentModeInfo theme={theme} />
        <ForceThemeButtons setTheme={setTheme} />
      </ThemedLayout>
    </div>
  );
};

export default App;
