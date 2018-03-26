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
        const ButtonWrapper = shallow(<Button>Hi!</Button>);
        expect(ButtonWrapper.exists()).toBeTruthy();
    });

    it('should return Hi! when pass like children', () => {
        const ButtonWrapper = shallow(<Button>Hi!</Button>);
        expect(ButtonWrapper.prop('children')).toBe("Hi!");
    });

    it('should match with snapshot', () => {
        const ButtonSnapshot = renderer.create(<Button>Hi!</Button>);
        expect(ButtonSnapshot).toMatchSnapshot();
    })
})


