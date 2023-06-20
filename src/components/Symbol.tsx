import { JSXElement, ParentComponent, ParentProps } from "solid-js";

/**
 * Renders a symbol in a symbol font.  Currently this is configured
 * to use the Material Symbols font from Google.  You can use any
 * of the symbol names from here: https://fonts.google.com/icons
 * as the content of the tag.
 *
 * For example:
 *     <Symbol>settings</Symbol>
 *
 * Alternatively you can use the codepoint like:
 *     <Symbol>&#e5d2;</Symbol>
 * @param props No properties are expected except children.
 * @returns
 */
export const Symbol: ParentComponent<{
  class?: string;
  children: JSXElement;
}> = (props) => {
  return <span class={"font-symbol " + props.class}>{props.children}</span>;
};

export default Symbol;
