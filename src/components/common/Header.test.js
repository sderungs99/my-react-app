import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

function setup(props) {
    return shallow(<Header {...props} />);
}

it('renders without crashing', () => {
    setup();
});

it('renders as expected', () => {
    const component = renderer.create(
        <Header />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});