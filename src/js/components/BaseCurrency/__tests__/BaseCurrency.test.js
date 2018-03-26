import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import BaseCurrency from './../BaseCurrency';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

describe('BaseCurrency', () => {
    it('should return true', () => {
        const wrapper = shallow(<BaseCurrency/>);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should match with snapshot', () => {
        const snapshot = renderer.create(<BaseCurrency>1 USD</BaseCurrency>).toJSON();
        expect(snapshot).toMatchSnapshot();
    });
})


