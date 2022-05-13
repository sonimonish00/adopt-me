import React from 'react';
import ReactDOM from 'react-dom';
// Alternative - import { createRoot } from 'react-dom/client'; // Then remove ReactDOM Below
import Pet from './Pet';

const e = React.createElement;
const App = () => {
  // createElement(element, props/attribs of elements, child of elements)
  return e("div", {}, [
    e("h1", {}, "Adopt Me!"),
    e(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    e(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    e(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};
// Component Hierarchy : Root => (App : div => h1 )
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(e(App));
