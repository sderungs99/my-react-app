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
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('adds up button clicks correctly', () => {
    const wrapper = setup();
    const expectedClickCounter = wrapper.instance().state.clickCounter + 1;
    wrapper.instance().handleClick();
    expect(wrapper.instance().state.clickCounter).toBe(expectedClickCounter);
});