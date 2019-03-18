import React from 'react';
import {shallow} from "enzyme/build";
import { Route, Redirect } from 'react-router';
import ProtectedRoute from './ProtectedRoute'

describe('Protected Route', () => {

    let proute;
    beforeEach(() => proute = shallow(<ProtectedRoute isAuthenticated={true} />));

    it('renders', () => {

        expect(proute.exists()).toBe(true);
    });



    it('renders without changing', () => {
        expect(proute).toMatchSnapshot();
        // console.log(proute.debug());
    });



    it('should have js implementation', () => {
        // console.log(proute.debug());

        expect(proute.find('.js')).toBeTruthy();
    });

    it('should render a Route component', () => {
        expect(proute.find(<Route/>)).toBeTruthy();
    })

});

