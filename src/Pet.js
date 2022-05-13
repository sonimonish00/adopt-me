import React from 'react';

const e = React.createElement;
const Pet = (props) => {
    return e("div", {}, [
        e("h1", {}, props.name),
        e("h2", {}, props.animal),
        e("h2", {}, props.breed),
    ]);
};

export default Pet;