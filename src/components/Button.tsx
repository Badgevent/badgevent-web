import { useLocation, useNavigate } from "@solidjs/router";
import { JSXElement, ParentComponent } from "solid-js";
import Symbol from "../components/Symbol";
import { useAppContext } from "../AppContext";

export const Button: ParentComponent<{
  class?: string;
  location?: string;
  navigateTo: string;
  children: JSXElement;
}> = (props) => {
  const navigate = useNavigate();
  const appContext = useAppContext();
  return (
    <button
      type="button"
      onclick={() => navigate(props.navigateTo)}
      data-ui={appContext.view() === props.location ? "selected" : ""}
      class={
        props.class ||
        "px-2 py-1/2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 data-selected:bg-blue-200 dark:data-selected:bg-blue-700"
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
