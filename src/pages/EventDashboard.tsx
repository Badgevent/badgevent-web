import { useParams } from "@solidjs/router";
import { For, JSXElement, ParentComponent } from "solid-js";
import { eventbriteAttendees } from "../mockdata/MockEventbrite";

export const EventDashboard: ParentComponent<{
  class?: string;
  children: JSXElement;
}> = (props) => {
  return (
    <div class="">
      <h1>Dashboard</h1>
      {props.children}

      <For each={eventbriteAttendees}>
        {(eventbriteAttendee) => {
          return <div>{eventbriteAttendee["profile"]["name"]}</div>;
        }}
      </For>
    </div>
  );
};
