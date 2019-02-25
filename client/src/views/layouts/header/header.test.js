import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import { navLinks } from './header'
import {Button} from "@material-ui/core";

describe("navLinks", () => {

    it('renders', () => {

        const button = shallow(<Button/>);
        expect(button.exists()).toBe(true);

    });

    it('has right names for links', () => {
        expect(navLinks[0]['name']).toEqual('About');
        expect(navLinks[1]['name']).toEqual('Events');
        expect(navLinks[2]['name']).toEqual('Members');
        expect(navLinks[3]['name']).toEqual('Gallery');
        expect(navLinks[4]['name']).toEqual('Shop');
    });

});


