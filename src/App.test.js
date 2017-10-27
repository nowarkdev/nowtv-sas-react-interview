import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow} from 'enzyme';

import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('adds a new message at the top', () => {
    const renderedItem = shallow(<App/>);

    const btn = renderedItem.find('button');
    btn.simulate('click');


    expect(renderedItem.state('messages').length).toBe(1);
});

