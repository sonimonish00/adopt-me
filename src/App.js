import React from "react";
import ReactDOM from "react-dom";
// Alternative - import { createRoot } from 'react-dom/client'; // Then remove ReactDOM Below
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
    </div>
  );
};

// Component Hierarchy : Root => (App : div => h1 )
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
