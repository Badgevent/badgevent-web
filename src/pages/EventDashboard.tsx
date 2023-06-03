import { Component, JSX } from "solid-js";

interface MyParentComponent<P = { children: JSX.Element }>
  extends Component<P> {}

export const EventDashboard: MyParentComponent = (props: {
  children: JSX.Element;
}) => {
  return <div class="">{props.children}</div>;
};
