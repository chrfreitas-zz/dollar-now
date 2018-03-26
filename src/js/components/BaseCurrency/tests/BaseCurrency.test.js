import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import BaseCurrency from './../BaseCurrency';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
});

describe('BaseCurrency', () => {
    it('should return true', () => {
        const BaseCurrencyTest = shallow(<BaseCurrency/>);
        expect(BaseCurrencyTest.exists()).toBeTruthy();
    });

    it('should to match with snapshot', () => {
        const BaseCurrencyTest = renderer.create(<BaseCurrency>1 USD</BaseCurrency>).toJSON();
        expect(BaseCurrencyTest).toMatchSnapshot();
    });
})


