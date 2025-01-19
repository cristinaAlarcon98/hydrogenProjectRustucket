import {Money} from '@shopify/hydrogen';

/**
 * @param {{
 *   price?: MoneyV2;
 *   compareAtPrice?: MoneyV2 | null;
 * }}
 */
export function ProductPrice({price, compareAtPrice}) {
  return (
    <div
      className="product-price"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {compareAtPrice ? (
        <div>
          {price ? <Money data={price} as="span" className="price" /> : null}
          <s>
            <Money data={compareAtPrice} as="h2" className="price" />
          </s>
        </div>
      ) : price ? (
        <Money data={price} className="price" as="h2" />
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}

/** @typedef {import('@shopify/hydrogen/storefront-api-types').MoneyV2} MoneyV2 */
