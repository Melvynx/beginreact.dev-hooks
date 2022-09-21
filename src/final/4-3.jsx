import clsx from 'clsx';
import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from 'react';

const ThemeContext = createContext();
const ThemeDispatchContext = createContext();

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

const useThemeDispatchContext = () => {
  const context = useContext(ThemeDispatchContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggle = () =>
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));

  const setLight = () => setTheme('light');
  const setDark = () => setTheme('dark');

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  const values = useMemo(
    () => ({ theme, isDark, isLight }),
    [theme, isDark, isLight]
  );

  const dispatchValues = useMemo(() => ({ setLight, setDark, toggle }), []);

  return (
    <ThemeContext.Provider value={values}>
      <ThemeDispatchContext.Provider value={dispatchValues}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

const ThemedLayout = ({ children }) => {
  const { isDark } = useThemeContext();
  return (
    <div className={clsx('theme-app', { 'dark-theme-app': isDark })}>
      {children}
    </div>
  );
};

const ForceLightMode = () => {
  const { setLight } = useThemeDispatchContext();
  return <button onClick={() => setLight()}>Force light</button>;
};

const ForceDarkMode = () => {
  const { setDark } = useThemeDispatchContext();
  console.log('RERENDER');
  return <button onClick={() => setDark()}>Force dark</button>;
};

const ToggleMode = () => {
  const { isDark } = useThemeContext();
  const { toggle } = useThemeDispatchContext();

  return <button onClick={toggle}>{isDark ? '🌞' : '🌙'}</button>;
};

const CurrentModeInfo = () => {
  const { theme } = useThemeContext();
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
