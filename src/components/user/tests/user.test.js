import React from 'react';

import Enzyme, {shallow} from 'enzyme';
import User from "../index";
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({adapter: new Adapter()});

describe('Users', () => {
    it('renders without crashing', () => {
        shallow(<User/>);
    });

    it('should render the image with attributes set', () => {
        const user = {
            id: 1, avatar: 'abcd', email:'email', name:'name'
        };
        const renderedItem = shallow(<User {...user} />);
        expect(renderedItem.find('img').props().src).toEqual('abcd');
        expect(renderedItem.find('img').props().title).toEqual('email');
        expect(renderedItem.find('img').props().alt).toEqual('name');
    });

    it('should render the image with src set to default if avatar doesn\'t exist', () => {
        const user = {
            id: 1,  email:'email', name:'name'
        };
        const renderedItem = shallow(<User {...user} />);
        expect(renderedItem.find('img').props().src).toEqual('https://www.techgeekx.com/image/user-dummy-pic.png');
    });

});


