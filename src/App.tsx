import {
  A,
  Route,
  Routes,
  useLocation,
  useMatch,
  useNavigate,
} from "@solidjs/router";
import { Component, createSignal, createEffect } from "solid-js";
import { Administration } from "./pages/Administration";
import { EventDashboard } from "./pages/EventDashboard";
import { EventWrapper } from "./pages/EventWrapper";
import { EventList } from "./pages/EventList";
import Logo from "./assets/BadgeventLogo.svg";
import { Colors } from "./pages/Colors";

const App: Component = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [view, setView] = createSignal<string>("Home");

  createEffect(() => {
    if (location.pathname.startsWith("/e")) {
      setView("Events");
    } else if (location.pathname.startsWith("/admin")) {
      setView("Administration");
    } else {
      setView("Home");
    }
  });

  return (
    <div class="">
      <header class="nav relative container mx-auto px-2 py-6">
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

          {/* <div class="grow mx-2 text-xl font-bold">Badgevent</div> */}

          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onclick={() => navigate("/e")}
              data-ui={view() === "Events" ? "selected" : ""}
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 data-selected:bg-blue-200 dark:data-selected:bg-blue-700"
            >
              Events
            </button>
            <button
              type="button"
              onclick={() => navigate("/admin")}
              data-ui={view() === "Administration" ? "selected" : ""}
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 data-selected:bg-blue-200 dark:data-selected:bg-blue-700"
            >
              Admin
            </button>
          </div>

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
