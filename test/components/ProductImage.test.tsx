import React from 'react';
import renderer from 'react-test-renderer';
import {ProductImage, ProductCard} from '../../src/components';
import {product2} from '../data/products';


describe('Test in <ProductImage />', () => {
    it('should render component with no image', () => {
        const wrapper = renderer.create(
                <ProductImage img={'https://logicalidea.co/wp-content/uploads/2022/06/React.js-Cheat-Sheet.jpg'} />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should show component with original image', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});