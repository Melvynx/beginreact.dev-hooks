import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const useDebounce = (callback, time) => {
  const timeoutRef = useRef(null);

  const onDebounce = (...args) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, time);
  };

  return onDebounce;
};

const useRenderCount = () => {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  return renderCountRef;
};

const fetchAgeByName = (name) => {
  return fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json());
};

const App = () => {
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);
  const renderCountRef = useRenderCount();

  const onSearch = useDebounce(() => {
    fetchAgeByName(inputRef.current.value).then((data) => {
      setResult(data);
    });
  }, 500);

  return (
    <div>
      <input
        ref={(ref) => {
          inputRef.current = ref;
        }}
        type="text"
        placeholder="Search bar"
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
        The component render {renderCountRef.current} times
      </div>
    </div>
  );
};

export default App;
