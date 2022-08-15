import { useEffect, useRef, useState } from "react";

const useDebounce = (callback, time) => {};

const fetchAgeByName = (name) => {
  return fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json());
};

const App = () => {
  const [result, setResult] = useState(null);

  const onSearch = (value) => {
    fetchAgeByName(value).then((data) => {
      setResult(data);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search bar"
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
      {result ? (
        <div style={{ padding: 16 }}>
          The age for <b>{result.name}</b> is <b>{result.age}</b> and there is{" "}
          <b>{result.count}</b> people with this name.
        </div>
      ) : null}
    </div>
  );
};

export default App;
