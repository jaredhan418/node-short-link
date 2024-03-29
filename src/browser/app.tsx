import * as React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/app/component.js";
import { initI18n } from "./shared/i18n/index.js";

import "./styles.css";

initI18n();

let mountingDiv = document.body.getElementsByClassName(
  "site--app",
)[0] as HTMLDivElement;
if (mountingDiv == null) {
  mountingDiv = document.createElement("div");
  mountingDiv.setAttribute("class", "site--app");
  document.body.appendChild(mountingDiv);
}

const root = createRoot(mountingDiv);
root.render(<App />);
