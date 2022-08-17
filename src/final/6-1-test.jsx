import { useEffect, useReducer, useRef, useState } from "react";

function asyncReducer(state, action) {
  switch (action.type) {
    case "pending": {
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      return { status: "resolved", data: action.data, error: null };
    }
    case "rejected": {
      return { status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const useAsync = (defaultPromise) => {
  const [state, dispatch] = useReducer(reducer, {
    status: "idle",
    data: null,
    error: null,
  });

  const run = (promise) => {
    dispatch({ state: "pending" });

    return promise()
      .then((value) => {
        dispatch({
          type: "resolved",
          value,
        });
        return value;
      })
      .catch((error) => {
        dispatch({
          type: "rejected",
          error,
        });
        return Promise.reject(error);
      });
  };

  useEffect(() => {
    if (defaultPromise) {
      run(defaultPromise);
    }
  }, [defaultPromise]);

  const isIdle = state.status === "idle";
  const isPending = state.status === "pending";
  const isSuccess = state.status === "success";
  const isError = state.status === "error";

  return {
    run,
    data: state.data,
    error: state.error,
    isIdle,
    isPending,
    isSuccess,
    isError,
  };
};

const App = () => {
  const [names, setNames] = useState([]);
  const { run, data, error, isIdle, isPending, isSuccess, isError } =
    useAsync();

  const input = useRef(null);

  const onSubmit = () => {
    const value = input.current.value;
    run(fetch(`https://api.agify.io/?name=${value}`).then((res) => res.json()));
  };

  return (
    <div>
      <div className="vertical-stack">
        <input ref={input} placeholder="Name" />

        <button onClick={() => onSubmit()}>Check age</button>
      </div>
      {isError ? (
        <div>Something went wrong: {JSON.stringify(error)}</div>
      ) : null}
      {isIdle ? <div>Enter a name to check its age</div> : null}
      {isPending ? <div>Loading...</div> : null}
      {isSuccess ? (
        <div>
          {data.name} is {data.age} years old
        </div>
      ) : null}
    </div>
  );
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "SET_AGE": {
      return {
        name: action.name,
        age: action.age,
        probability: action.probability,
      };
    }
    case "SET_GENDER": {
      return {
        name: state.name,
        gender: action.gender,
        probability: action.probability,
      };
    }
  }
};

const Test = () => {
  const [state, dispatch] = useReducer(reducer2, {});
  const [type, setType] = useState(() => localStorage.getItem("NAME_TYPE")); // or "GENDER"
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("NAME_TYPE", type);
  }, [type]);

  useEffect(() => {
    if (type) {
      onSubmit();
    }
  }, []);

  const onSubmit = () => {
    const name = inputRef.current.value;

    if (!name) {
      setError("Name is required");
      return;
    }

    localStorage.setItem("NAME", name);

    if (!type) {
      setError("Please select a type");
      return;
    }

    setIsLoading(true);

    if (type === "AGE") {
      fetch(`https://api.agify.io/?name=${name}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SET_AGE",
            name: data.name,
            age: data.age,
            probability: data.probability,
          });
        })
        .catch((e) => {
          setError("Something went wrong");
        })
        .finally(() => {
          setIsLoading(false);
        });

      return;
    }
    if (type === "GENDER") {
      fetch(`https://api.genderize.io/?name=${name}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SET_GENDER",
            name: data.name,
            gender: data.gender,
            probability: data.probability,
          });
        })
        .catch((e) => {
          setError("Something went wrong");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <div className="vertical-stack">
        <div>
          <input
            type="radio"
            name="type"
            value="AGE"
            checked={type === "AGE"}
            onChange={() => setType("AGE")}
          />
          <label>Age</label>
        </div>
        <div>
          <input
            type="radio"
            name="type"
            value="GENDER"
            checked={type === "GENDER"}
            onChange={() => setType("GENDER")}
          />
          <label>Gender</label>
        </div>
        <input
          ref={inputRef}
          defaultValue={localStorage.getItem("NAME")}
          placeholder="Name"
        />
        <button onClick={() => onSubmit()}>Update Name</button>
      </div>

      {isLoading ? <div>Loading...</div> : null}
      {state?.age ? (
        <p>
          {state.name} have {state.probability} to be {state.age}
        </p>
      ) : null}
      {state?.gender ? (
        <p>
          {state.name} have {state.probability} to be a {state.gender}
        </p>
      ) : null}
      {error ? <div>{error}</div> : null}
    </div>
  );
};

export default Test;
