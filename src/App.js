import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" /> */}
    </div>
  );
};

// Component Hierarchy : Root => (App : div => h1 )
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
