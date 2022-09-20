import { useEffect, useRef, useState } from 'react';

const useDebounce = (callback, time) => {
  const debounce = useRef(null);

  const onDebounce = (...args) => {
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      callback(...args);
    }, time);
  };

  return onDebounce;
};

const useRenderCount = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return renderCount;
};

const fetchAgeByName = (name) => {
  return fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json());
};

const App = () => {
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);
  const renderCount = useRenderCount();

  const onSearch = useDebounce(() => {
    fetchAgeByName(inputRef.current.value).then((data) => {
      setResult(data);
    });
  }, 500);

  return (
    <div>
      <input
        type="text"
        placeholder="Search bar"
        ref={inputRef}
        onChange={() => {
          onSearch();
        }}
      />
      {result ? (
        <div style={{ padding: 16 }}>
          The age for <b>{result.name}</b> is <b>{result.age}</b> and there is{' '}
          <b>{result.count}</b> people with this name.
        </div>
      ) : null}
      <div style={{ color: 'red', padding: 16 }}>
        The component render ${renderCount.current} times
      </div>
    </div>
  );
};

export default App;
