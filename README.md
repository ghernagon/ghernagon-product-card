# ghernagon-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Gerardo Hernandez

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ghernagon-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({ reset, isMaxCountReached, count, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```