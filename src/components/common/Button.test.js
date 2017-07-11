import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';

const mockProps = {
    buttonLabel: "Test Button",
    onClick() {}
};

function setup(props) {
    return shallow(<Button {...props} />);
}

it('renders without crashing', () => {
    setup(mockProps);
});

it('renders as expected', () => {
    const component = renderer.create(
        <Button {...mockProps}/>
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

it('binds the onClick handler', () => {
    const spy = jest.spyOn(mockProps, 'onClick');
    let wrapper = setup(mockProps);
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
});