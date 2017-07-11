import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

function setup(props) {
    return shallow(<App {...props} />);
}

it('renders without crashing', () => {
    setup();
});

it('renders as expected', () => {
    const component = renderer.create(
        <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});