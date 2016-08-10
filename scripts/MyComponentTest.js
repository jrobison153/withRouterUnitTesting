'use strict';

var expect = require('chai').expect;
var MyComponent = require('./MyComponent.jsx');
var MyComponentWithRouter = require('./MyComponentWithRouter.jsx');
var React = require('react');
import {shallow} from 'enzyme';

/* jshint expr:true */

describe('With Router HoC Enzyme Compatiblity Tests', () => {

    var myComponentWrapper;
    var expectedCopy = 'I will displayed';

    describe('Given a component not wrapped by the withRouter HOC', () => {

        beforeEach(() => {

            myComponentWrapper = shallow(<MyComponent/>);
        });

        describe('When it is rendered', () => {

            it('Then the text copy is rendered', () => {

                var copyWrapper = myComponentWrapper.find('#copy');

                expect(copyWrapper.text()).to.equal(expectedCopy);
            });
        });
    });

    describe('Given a component that is wrapped by the withRouter HOC', () => {

        beforeEach(() => {

            myComponentWrapper = shallow(<MyComponentWithRouter/>);
        });

        describe('When it is rendered', () => {

            it('Then the text copy is rendered', () => {

                var copyWrapper = myComponentWrapper.find('#copy');

                expect(copyWrapper.text()).to.equal(expectedCopy);
            });
        });
    });
});