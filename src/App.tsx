import { A, Route, Routes, useLocation } from "@solidjs/router";
import { Component, createEffect } from "solid-js";
import { useAppContext } from "./AppContext";
import Logo from "./assets/BadgeventLogo.svg";
import Button from "./components/Button";
import Symbol from "./components/Symbol";
import { Administration } from "./pages/Administration";
import Colors from "./pages/Colors";
import { EventDashboard } from "./pages/EventDashboard";
import { EventList } from "./pages/EventList";
import { EventWrapper } from "./pages/EventWrapper";
import ButtonGroup from "./components/ButtonGroup";

const App: Component = () => {
  const location = useLocation();
  const appContext = useAppContext();

  createEffect(() => {
    if (location.pathname.startsWith("/e")) {
      appContext.setView("Events");
    } else if (location.pathname.startsWith("/admin")) {
      appContext.setView("Administration");
    } else {
      appContext.setView("Home");
    }
  });

  return (
    <div class="">
      <header class="nav relative container mx-auto p-3">
        <div class="flex items-center">
          <div class="grow pt-2">
            <A href="/" class="mr-2 text-sm inline-block">
              <img
                src={Logo}
                class="flex-none h-10 md:h-14"
                alt="Badgevent Logo"
              />
            </A>
          </div>

          <ButtonGroup>
            <Button navigateTo="/e" location="Events">
              <Symbol class="text-3xl">&#xE53F;</Symbol>
            </Button>
            <Button navigateTo="/admin" location="Administration">
              <Symbol class="text-3xl">&#xE8B8;</Symbol>
            </Button>
          </ButtonGroup>

          <div class="relative ml-2 inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span class="font-mono text-gray-600 dark:text-gray-300">RJ</span>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/admin" component={Administration} />
        <Route path="/e" component={EventList} />
        <Route path="/e" component={EventWrapper}>
          <Route path="/:eventid" component={EventDashboard as Component<{}>} />
        </Route>
        <Route path="/colors" component={Colors} />
      </Routes>
    </div>
  );
};

export default App;
