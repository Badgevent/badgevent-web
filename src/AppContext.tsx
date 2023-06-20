import {
  Accessor,
  Component,
  JSXElement,
  Setter,
  createContext,
  createSignal,
  useContext,
} from "solid-js";

type AppContext = {
  view: Accessor<string>;
  setView: Setter<string>;
  count: Accessor<number>;
  setCount: Setter<number>;
};

const AppContext = createContext<AppContext>();

export const AppContextProvider: Component<{
  view?: string;
  count?: number;
  children: JSXElement;
}> = (props) => {
  const [view, setView] = createSignal<string>(props.view || "Home");
  const [count, setCount] = createSignal<number>(props.count || 0);
  const context: AppContext = {
    view: view,
    setView: setView,
    count: count,
    setCount: setCount,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext) as AppContext;
}
