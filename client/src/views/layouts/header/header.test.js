import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './header';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import DesktopNav from "./DesktopNav";

describe("Header", () => {

    let header;
    beforeEach(() => header = shallow(<Header />));

    it('renders', () => {

        expect(header.exists()).toBe(true);
    });

    it('is not authenticated', () => {
        expect(header.props.isAuthenticated).toBeFalsy();
    });

    it('should\'nt render a div', () => {
        expect(header.find('div').length).toEqual(0);
    });

    it('renders without changing', () => {
        expect(header).toMatchSnapshot();
        // console.log(header.debug());
    });

    it('should render Hidden Components', () => {
        expect(header.contains(<Hidden/>));
        // console.log(header.debug());
    });

    it('should render a toolbar', () => {
        expect(header.contains(<Toolbar/>));

    });

    it('should have js implementation', () => {
        // console.log(header.debug());

        expect(header.find('.js')).toBeTruthy();
    });


    it('should display navLinks', () => {
        // console.log(header.debug());

        expect(header.contains(<DesktopNav isAuthenticated={false} routes={[]} />));
    });

});