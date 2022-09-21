import clsx from 'clsx';
import { createContext, useContext, useReducer, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggle = () =>
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));

  const setLight = () => setTheme('light');
  const setDark = () => setTheme('dark');

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  const values = { theme, isDark, isLight, setLight, setDark, toggle };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const ThemedLayout = ({ children }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={clsx('theme-app', { 'dark-theme-app': isDark })}>
      {children}
    </div>
  );
};

const ForceLightMode = () => {
  const { setLight } = useContext(ThemeContext);
  return <button onClick={() => setLight()}>Force light</button>;
};

const ForceDarkMode = () => {
  const { setDark } = useContext(ThemeContext);
  return <button onClick={() => setDark()}>Force dark</button>;
};

const ToggleMode = () => {
  const { toggle, isDark } = useContext(ThemeContext);
  return <button onClick={toggle}>{isDark ? '🌞' : '🌙'}</button>;
};

const CurrentModeInfo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      Current theme: <b>{theme}</b>
    </div>
  );
};

const App = () => {
  const [count, increment] = useReducer((curr) => curr + 1, 0);
  return (
    <div>
      <p>Not in dark mode</p>
      <button onClick={increment}>{count}</button>
      <ThemeProvider>
        <ThemedLayout>
          <ToggleMode />

          <h1>Articles</h1>
          <h3>What is useContext ?</h3>
          <p>
            useContext is used to pass data through the component tree without
            having to pass props down manually at every level.
          </p>
          <hr />
          <CurrentModeInfo />
          <div style={{ marginTop: 32 }}>
            <ForceLightMode />
            <ForceDarkMode />
          </div>
        </ThemedLayout>
      </ThemeProvider>
    </div>
  );
};

export default App;
