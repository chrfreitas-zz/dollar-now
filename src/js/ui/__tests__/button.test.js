import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import { Button } from './../button';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

describe('Button', () => {
    it('should return true', () => {
        const wrapper = shallow(<Button>Hi!</Button>);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should return Hi! when pass like children', () => {
        const wrapper = shallow(<Button>Hi!</Button>);
        expect(wrapper.prop('children')).toBe("Hi!");
    });

    it('should match with snapshot', () => {
        const snapshot = renderer.create(<Button>Hi!</Button>);
        expect(snapshot).toMatchSnapshot();
    })
})


