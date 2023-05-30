import { A, Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import logo from "./logo.svg";
import { Administration } from "./pages/Administration";
import { EventDashboard } from "./pages/EventDashboard";
import { EventWrapper } from "./pages/EventWrapper";
import { EventList } from "./pages/EventList";

const App: Component = () => {
  return (
    <div class="">
      <header class="nav relative container mx-auto px-2 py-6">
        <div class="flex items-center">
          <div class="flex-none pt-2">
            <A href="/" class="mr-2 text-sm inline-block">
              <img src={logo} class="flex-none h-8 w-8" alt="logo" />
            </A>
          </div>
          <div class="grow mx-2 text-xl font-bold">Badgevent</div>
          <div class="bg-blue-300 rounded-2xl rounded-r-none p-2">
            <A href="/e" class="mx-2 text-sm">
              Events
            </A>
          </div>
          <div class="bg-gray-300 rounded-2xl rounded-l-none p-2">
            <A href="/admin" class="mx-2 text-sm">
              Administration
            </A>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/admin" component={Administration} />
        <Route path="/e" component={EventList} />
        <Route path="/e" component={EventWrapper}>
          <Route path="/:eventid" component={EventDashboard} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
