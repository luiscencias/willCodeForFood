import React from 'react';
import Gallery from './gallery';
import {shallow} from "enzyme/build";
import { Zoom } from 'react-slideshow-image';


describe('Gallery', () => {

    let gallery;
    beforeEach(() => gallery = shallow(<Gallery />));

    it('renders', () => {

        expect(gallery.exists()).toBe(true);
    });

    // it('is not authenticated', () => {
    //     expect(gallery.props.isAuthenticated).toBeFalsy();
    // });

    it('should render 2 div', () => {
        expect(gallery.find('div').length).toEqual(2);
    });

    it('renders without changing', () => {
        expect(gallery).toMatchSnapshot();
        // console.log(gallery.debug());
    });

    it('should render Zoom component', () => {
        expect(gallery.contains(<Zoom scale={.4}/>));   //scale is required
        // console.log(gallery.debug());
    });

    it('should render an img element', () => {

        expect(gallery.contains(<img/>));
    });

    // it('should render a toolbar', () => {
    //     expect(gallery.contains(<Toolbar/>));
    //
    // });

    it('should have js implementation', () => {
        // console.log(gallery.debug());

        expect(gallery.find('.js')).toBeTruthy();
    });


    // it('should display navLinks', () => {
    //     // console.log(gallery.debug());
    //
    //     expect(gallery.contains(<DesktopNav isAuthenticated={false} routes={[]} />));
    // });

});

