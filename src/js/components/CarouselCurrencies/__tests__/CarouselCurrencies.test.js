import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import CarouselCurrencies from './../CarouselCurrencies';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

describe('CarouselCurrencies', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<CarouselCurrencies />);
    });

    it('should match with snapshot', () => {
        const snapshot = renderer.create(<CarouselCurrencies />);
        expect(snapshot).toMatchSnapshot();
    });

    it('should return less than 20 when movement is positive', () => {
        expect(wrapper.instance().changePosition(+1, 20)).toBeLessThan(20);
    });

    it('should return greater than 20 when movement is negative', () => {
        expect(wrapper.instance().changePosition(-1, 20)).toBeGreaterThan(20);
    });

    it('should return greater than 20 when movement is negative', () => {
        const currencies = [
            {
                code: 'EUR',
                value: '1,18',
                active: false
            },
            {
                code: 'BRL',
                value: '3,25',
                active: true
            },
            {
                code: 'CAD',
                value: '0,95',
                active: false
            }
        ];

        const expected = [
            {
                code: 'EUR',
                value: '1,18',
                active: false
            },
            {
                code: 'BRL',
                value: '3,25',
                active: false
            },
            {
                code: 'CAD',
                value: '0,95',
                active: true
            }
        ];

        expect(wrapper.instance().changeActiveItem(1, currencies)).toEqual(expected);
    });

    it('shoudl return true to disable button up', () => {
        const currencies = [
            {
                code: 'EUR',
                value: '1,18',
                active: true
            },
            {
                code: 'BRL',
                value: '3,25',
                active: false
            },
            {
                code: 'CAD',
                value: '0,95',
                active: false
            }
        ];

        expect(wrapper.instance().isButtonUpDisabled(-1, currencies)).toBeTruthy();
    });

    it('shoudl return true to disable button down', () => {
        const currencies = [
            {
                code: 'EUR',
                value: '1,18',
                active: false
            },
            {
                code: 'BRL',
                value: '3,25',
                active: false
            },
            {
                code: 'CAD',
                value: '0,95',
                active: true
            }
        ];

        expect(wrapper.instance().isButtonDownDisabled(1, currencies)).toBeTruthy();
    })

});


