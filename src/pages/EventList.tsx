import { useNavigate } from "@solidjs/router";
import { Component, For, JSX } from "solid-js";
import { eventbriteEvents } from "../mockdata/MockEventbrite";

const TableRow: Component<{
  eventId: string;
  eventName: string;
  eventDates: string;
  onClickHandler: JSX.EventHandlerUnion<HTMLTableRowElement, MouseEvent>;
}> = (props) => {
  return (
    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      data-id={props.eventId}
      onClick={props.onClickHandler}
    >
      <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div class="text-lg font-bold">{props.eventName}</div>
        <div class="text-sm md:hidden">{props.eventDates}</div>
      </td>
      <td class="px-6 py-4 hidden md:table-cell font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div class="text-sm">{props.eventDates}</div>
      </td>
    </tr>
  );
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dateSuffix = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

function formatEventDates(start: Date, end: Date) {
  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = sameYear && start.getMonth() === end.getMonth();
  let dates =
    days[start.getDay()] +
    " - " +
    days[end.getDay()] +
    ", " +
    months[start.getMonth()] +
    " " +
    start.getDate() +
    dateSuffix[start.getDate() % 10];
  if (!sameYear) {
    dates += ", " + start.getFullYear();
  }
  dates += " - ";
  if (!sameMonth) {
    months[end.getMonth()] + " ";
  }
  dates +=
    end.getDate() + dateSuffix[end.getDate() % 10] + ", " + end.getFullYear();
  return dates;
}

export const EventList: Component<{}> = (props) => {
  const navigate = useNavigate();
  const handleClick: JSX.EventHandlerUnion<HTMLTableRowElement, MouseEvent> = (
    browserEvent
  ) => {
    let eventId = browserEvent.currentTarget.dataset.id;
    if (eventId) {
      navigate(`/e/${eventId}/`);
    }
  };
  return (
    <div class="container mx-auto p-3 py-0">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Select Eventbrite Event
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Select the event you wish to manage from the list below. If you
              need to create a new event, please do this within Eventbrite and
              it will be listed here automatically.
            </p>
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Event
              </th>
              <th scope="col" class="px-6 py-3 hidden md:table-cell">
                Dates
              </th>
            </tr>
          </thead>
          <tbody>
            <For each={eventbriteEvents}>
              {(eventbriteEvent) => {
                const start = new Date(eventbriteEvent["start"]["utc"]);
                const end = new Date(eventbriteEvent["end"]["utc"]);
                const strDates = formatEventDates(start, end);
                return (
                  <TableRow
                    eventId={eventbriteEvent["id"]}
                    eventName={eventbriteEvent["name"]["html"]}
                    eventDates={strDates}
                    onClickHandler={handleClick}
                  />
                );
              }}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
};
