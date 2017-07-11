import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HomePage from './HomePage';

function setup(props) {
    return shallow(<HomePage {...props} />);
}

it('renders without crashing', () => {
    setup();
});

it('renders as expected', () => {
    const component = renderer.create(
        <HomePage />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('adds up button clicks correctly', () => {
    let wrapper = setup();
    let currentClickCounter = wrapper.instance().state.clickCounter;
    let expectedClickCounter = currentClickCounter + 1;
    wrapper.instance().handleClick();
    expect(wrapper.instance().state.clickCounter).toBe(expectedClickCounter);
});