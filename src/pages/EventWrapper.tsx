import { Route, Routes, A, Outlet } from "@solidjs/router";
import { Component } from "solid-js";
import { EventDashboard } from "./EventDashboard";

export const EventWrapper: Component<{}> = (props) => {
  return (
    <div class="container mx-auto">
      <Outlet />
    </div>
  );
};
