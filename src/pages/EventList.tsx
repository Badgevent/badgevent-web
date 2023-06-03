import { Component } from "solid-js";
import { A } from "@solidjs/router";

export const EventList: Component<{}> = (props) => {
  return (
    <div class="container mx-auto">
      {" "}
      <h3>Event Selection</h3>
      <ol class="bg-unsaturated-blue">
        <li class="">
          <A href="/e/AF2023" class="underline">
            Event 1
          </A>
        </li>
      </ol>
    </div>
  );
};
