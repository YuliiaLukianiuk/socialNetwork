import React from 'react';
import SamuraiJSApp from "./App";
import * as ReactDOM from "react-dom";


test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
