import { JSXElement, ParentComponent } from "solid-js";

export const ButtonGroup: ParentComponent<{
  class?: string;
  children: JSXElement;
}> = (props) => {
  return (
    <div
      class={
        props.class ||
        "inline-flex border border-gray-200 dark:border-gray-600 rounded-2xl shadow-sm overflow-clip"
      }
      role="group"
    >
      {props.children}
    </div>
  );
};

export default ButtonGroup;
