import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import Button from '@mui/material/Button';
import {HomeComponent} from '../components/HomeComponent';
import {useNavigate} from 'react-router-dom';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({...deferredData, ...criticalData});
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context}) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <div className="home">
      <HomeComponent data={data}></HomeComponent>
      {/* <FeaturedCollection collection={data.featuredCollection} /> */}
    </div>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
export function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery | null>;
 * }}
 */
export function RecommendedProducts({products}) {
  const navigate = useNavigate();
  return (
    <div className="recommended-products">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5rem',
                marginTop: '5rem',
              }}
            >
              {response && (
                <>
                  <div style={{height: '500px', position: 'relative'}}>
                    <img
                      src="../../public/assets/dough-membership.jpg"
                      alt={response.products.nodes[0].title || 'Product Image'}
                      style={{height: '100%', objectFit: 'cover'}}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '90%',
                        left: '57%',
                        transform: 'translate(-90%, -57%)',
                      }}
                    >
                      <Button
                        className="red-button"
                        onClick={() =>
                          navigate(
                            `/products/${response.products.nodes[0].handle}`,
                          )
                        }
                      >
                        JOIN NOW
                      </Button>
                    </div>
                  </div>
                  <div style={{height: '500px', position: 'relative'}}>
                    <img
                      src="../../public/assets/margherita-membership.jpg"
                      alt={response.products.nodes[1].title || 'Product Image'}
                      style={{height: '100%', objectFit: 'cover'}}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '90%',
                        left: '57%',
                        transform: 'translate(-90%, -57%)',
                      }}
                    >
                      <Button
                        className="red-button"
                        onClick={() =>
                          navigate(
                            `/products/${response.products.nodes[1].handle}`,
                          )
                        }
                      >
                        JOIN NOW
                      </Button>
                    </div>
                  </div>

                  <div style={{height: '500px', position: 'relative'}}>
                    <img
                      src="../../public/assets/supreme-membership.jpg"
                      alt={response.products.nodes[2].title || 'Product Image'}
                      style={{height: '100%', objectFit: 'cover'}}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '90%',
                        left: '57%',
                        transform: 'translate(-90%, -57%)',
                      }}
                    >
                      <Button
                        className="red-button"
                        onClick={() =>
                          navigate(
                            `/products/${response.products.nodes[2].handle}`,
                          )
                        }
                      >
                        JOIN NOW
                      </Button>
                    </div>
                  </div>

                  {/* Add more divs and img tags for each product as needed */}
                </>
              )}
            </div>
          )}
        </Await>
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                    <div key={product.id} style={{height: '300px'}}>
                      <Image
                        data={product.images.nodes[0]}
                        aspectRatio="1/1"
                        sizes="(min-width: 45em) 20vw, 50vw"
                        style={{height: '100%', objectFit: 'cover'}}
                      />
                    </div>
                    // <Link
                    //   key={product.id}
                    //   className="recommended-product"
                    //   to={`/products/${product.handle}`}
                    // >
                    //   <Image
                    //     data={product.images.nodes[0]}
                    //     aspectRatio="1/1"
                    //     sizes="(min-width: 45em) 20vw, 50vw"
                    //   />
                    //   <h4>{product.title}</h4>
                    //   <small>
                    //     <Money data={product.priceRange.minVariantPrice} />
                    //   </small>
                    // </Link>
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense> */}
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
