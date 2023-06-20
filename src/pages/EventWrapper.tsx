import {
  Route,
  Routes,
  A,
  Outlet,
  useParams,
  useNavigate,
} from "@solidjs/router";
import { Component } from "solid-js";
import { EventDashboard } from "./EventDashboard";
import { eventbriteEvents } from "../mockdata/MockEventbrite";

export const EventWrapper: Component<{}> = (props) => {
  const navigate = useNavigate();
  let eventName = "Unknown Event";
  eventbriteEvents.forEach((eventbriteEvent) => {
    if (eventbriteEvent["id"] == useParams().eventid) {
      eventName = eventbriteEvent["name"]["html"];
    }
  });
  const handleOnClick = () => {
    navigate("/e");
  };
  return (
    <div class="container mx-auto p-3 py-0">
      <span
        id="badge-dismiss-default"
        class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
      >
        {eventName}
        <button
          type="button"
          class="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
          data-dismiss-target="#badge-dismiss-default"
          aria-label="Remove"
        >
          <svg
            aria-hidden="true"
            class="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleOnClick}
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Remove badge</span>
        </button>
      </span>
      <Outlet />
    </div>
  );
};
