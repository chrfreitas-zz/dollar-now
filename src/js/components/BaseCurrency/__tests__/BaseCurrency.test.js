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
        const BaseCurrencyWrapper = shallow(<BaseCurrency/>);
        expect(BaseCurrencyWrapper.exists()).toBeTruthy();
    });

    it('should match with snapshot', () => {
        const BaseCurrencySnapshot = renderer.create(<BaseCurrency>1 USD</BaseCurrency>).toJSON();
        expect(BaseCurrencySnapshot).toMatchSnapshot();
    });
})


