import clsx from 'clsx';
import { useCallback, useReducer, useState } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

const ThemeContext = createContext(null);

const useThemeContext = (selector) => {
  return useContextSelector(ThemeContext, selector);
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggle = useCallback(
    () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
    []
  );

  const setLight = useCallback(() => setTheme('light'), []);
  const setDark = useCallback(() => setTheme('dark'), []);

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  const values = { theme, isDark, isLight, setLight, setDark, toggle };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const ThemedLayout = ({ children }) => {
  const isDark = useThemeContext((state) => state.isDark);
  return (
    <div className={clsx('theme-app', { 'dark-theme-app': isDark })}>
      {children}
    </div>
  );
};

const ForceLightMode = () => {
  console.log('FORCE LIGHT MODE');
  // const setLight = useThemeContext((state) => state.setLight);
  return <button onClick={() => void 0}>Force light</button>;
};

const ForceDarkMode = () => {
  console.log('FORCE DARK MODE');

  const setDark = useContextSelector(ThemeContext, (values) => values.setDark);
  return <button onClick={() => setDark()}>Force dark</button>;
};

const ToggleMode = () => {
  const { toggle, isDark } = useThemeContext(({ toggle, isDark }) => ({
    toggle,
    isDark,
  }));
  return <button onClick={toggle}>{isDark ? '🌞' : '🌙'}</button>;
};

const CurrentModeInfo = () => {
  const theme = useThemeContext(({ theme }) => theme);
  return (
    <div>
      Current theme: <b>{theme}</b>
    </div>
  );
};

const App = () => {
  const [count, increment] = useReducer((curr) => curr + 1, 0);
  return (
    <div className="theme-global-app">
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
