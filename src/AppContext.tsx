import {
  createSignal,
  createContext,
  useContext,
  Component,
  JSXElement,
} from "solid-js";

const AppContext = createContext();

export const CounterProvider: Component<{
  count: number;
  children: JSXElement;
}> = (props) => {
  const [count, setCount] = createSignal(props.count || 0),
    counter = [
      count,
      {
        increment() {
          setCount((c) => c + 1);
        },
        decrement() {
          setCount((c) => c - 1);
        },
      },
    ];

  return (
    <AppContext.Provider value={counter}>{props.children}</AppContext.Provider>
  );
};

export function useCounter() {
  return useContext(AppContext);
}
