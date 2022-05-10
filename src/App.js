const e = React.createElement;
const App = () => { 
    // createElement(element, props/attribs of elements, child of elements)
    return e(
    "div",
    {},
    e("h1", {}, "Adopt Me!")
    );
};
// Component Hierarchy : Root => (App : div => h1 )
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(e(App));