import React from 'react';
import renderer from 'react-test-renderer';
import {ProductTitle, ProductCard} from '../../src/components';
import { product } from '../data/products';


describe('Test in <ProductTitle />', () => {
    it('should render component with custom title', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product Title"/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should show component with original title', () => {
        const wrapper = renderer.create(
                <ProductCard product={product}>
                    {
                        () => (
                                <ProductTitle />
                        )
                    }
                </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});