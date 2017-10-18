import React from 'react';

import Enzyme, {shallow} from 'enzyme';
import Message from "../index";
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({adapter: new Adapter()});

describe('Messages', () => {
    it('renders without crashing', () => {
        shallow(<Message/>);
    });

    it('should apply css class to message text', () => {
        const message = {
            id: 1, message: 'abcd'
        };
        const renderedItem = shallow(<Message {...message} />);
        expect(renderedItem.find('.message-text')).toHaveLength(1);
    });

    it('should apply css class to message text', () => {
        const message = {
            id: 1, timestamp:'2016-11-09T05:04:58Z'
        };
        const renderedItem = shallow(<Message {...message} />);
        expect(renderedItem.find('.message-time')).toHaveLength(1);
    });
});


