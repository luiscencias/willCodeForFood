import React from 'react';
import {shallow} from "enzyme/build";
import { Zoom } from 'react-slideshow-image';
import MobileNav from './MobileNav';


describe('MobileNav', () => {

    let mobileNav;
    beforeEach(() => mobileNav = shallow(<MobileNav />));

    it('renders', () => {

        expect(mobileNav.exists()).toBe(true);
    });

    it('renders without changing', () => {
        expect(mobileNav).toMatchSnapshot();
        // console.log(mobileNav.debug());
    });

    it('should render Zoom component', () => {
        expect(mobileNav.contains(<Zoom scale={.4}/>));   //scale is required
        // console.log(mobileNav.debug());
    });

    it('should render an img element', () => {

        expect(mobileNav.contains(<img/>));
    });


    it('should have js implementation', () => {
        // console.log(mobileNav.debug());

        expect(mobileNav.find('.js')).toBeTruthy();
    });
    
});