import React from 'react';
import { shallow } from 'enzyme';
import {HeroLogo, HeroSection} from './styles'
import NotFound from './notfound'

describe("Not Found", () => {

    let notfound;
    beforeEach(() => notfound = shallow(<NotFound />));

    it('renders', () => {
        expect(notfound.exists()).toBe(true);
    });

    // it('is not authenticated', () => {
    //     console.log(notfound.props);
    //     expect(notfound.props.isAuthenticated).toBeFalsy();
    // });

    it('should\'nt render a div', () => {
        expect(notfound.find('div').length).toEqual(0);
    });

    it('renders without changing', () => {
        expect(notfound).toMatchSnapshot();
        // console.log(notfound.debug());
    });

    it('should have js implementation', () => {
        // console.log(notfound.debug());

        expect(notfound.find('.js')).toBeTruthy();
    });

    // it('should render Hidden Components', () => {
    //     console.log(notfound.debug());
    //
    //     expect(notfound.contains(<Hidden/>));
    // });

    it('should render a HeroSection', () => {
        expect(notfound.contains(<HeroSection/>));

    });

    it('should display HeroLogo', () => {
        // console.log(notfound.debug());

        expect(notfound.contains(<HeroLogo />));
    });

});