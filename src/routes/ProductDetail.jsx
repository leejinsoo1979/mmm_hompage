import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';

function clean(value) {
  if (value == null || typeof value === 'object') {
    return '';
  }

  return String(value).replace(/\s+/g, ' ').trim();
}

function getProductIdFromRoute(rest = '') {
  const parts = rest.split('/').filter(Boolean).map(decodeURIComponent);
  return parts[parts.length - 1] || '';
}

function getProductName(product) {
  return clean(product?.internal_type || product?.id_distinct || product?.product_id);
}

function getFinish(product) {
  return clean(product?.finish_name_en || product?.finish_prio1_en || product?.description_part_en);
}

function getDescription(product) {
  return clean(`${clean(product?.description_en)} ${getFinish(product)}`);
}

function getImage(product) {
  return clean(product?.product_image);
}

function toDetailPath(product) {
  const parts = [
    clean(product?.serie_name),
    clean(product?.productgroup_en_filter_1),
    clean(product?.type_en),
    getFinish(product),
    clean(product?.product_id),
  ].filter(Boolean);

  return `/products/detail/${parts.map(encodeURIComponent).join('/')}`;
}

function swatchColor(product) {
  const finish = getFinish(product).toLowerCase();

  if (finish.includes('black')) return '#111';
  if (finish.includes('bronze')) return '#9a7a62';
  if (finish.includes('gold')) return '#c5a55b';
  if (finish.includes('champagne')) return '#d3c8a3';
  if (finish.includes('white')) return '#f3f0ea';
  if (finish.includes('nickel')) return '#d8d6cf';
  if (finish.includes('stainless') || finish.includes('steel')) return '#c9c9c9';
  return '#bdb7ac';
}

function ProductImage({ product }) {
  const [failed, setFailed] = useState(false);
  const image = getImage(product);
  const label = clean(product?.product_id);

  if (!image || failed) {
    return <div className="pd-missing-image">{label}</div>;
  }

  return <img src={image} alt={label} loading="lazy" onError={() => setFailed(true)} />;
}

function ProductLinks({ label, value, to }) {
  if (!value) {
    return null;
  }

  return (
    <>
      <div>{label}:</div>
      <div className="hlink">
        <Link to={to || '/products/Catalogue'}>
          <span data-hover={value}>{value}</span>
        </Link>
      </div>
    </>
  );
}

export default function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const productId = getProductIdFromRoute(params['*']);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        const response = await fetch('/zl/products.json');
        if (!response.ok) {
          throw new Error(`Failed to load products: ${response.status}`);
        }
        const data = await response.json();
        if (!cancelled) {
          setProducts(data);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError.message);
        }
      }
    }

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  const product = useMemo(
    () => products.find((item) => clean(item.product_id) === productId),
    [products, productId]
  );

  const finishVariants = useMemo(() => {
    if (!product) {
      return [];
    }

    return products
      .filter((item) => clean(item.id_distinct) === clean(product.id_distinct))
      .sort((a, b) => getFinish(a).localeCompare(getFinish(b)));
  }, [product, products]);

  const relatedProducts = useMemo(() => {
    if (!product) {
      return [];
    }

    const explicitIds = clean(product.related_products)
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean);

    return explicitIds
      .map((id) => products.find((item) => clean(item.product_id) === id))
      .filter(Boolean)
      .slice(0, 8);
  }, [product, products]);

  if (error) {
    return (
      <main className="react-detail pd-state">
        <h1>Product data failed to load</h1>
        <p>{error}</p>
        <button type="button" onClick={() => navigate('/products/Catalogue')}>BACK</button>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="react-detail pd-state">
        <p>Loading product</p>
        <h1>{productId || 'Product detail'}</h1>
      </main>
    );
  }

  const collection = clean(product.serie_name);
  const productGroup = clean(product.productgroup_en_filter_1);
  const type = clean(product.type_en);
  const finish = getFinish(product);
  const designer = clean(product.designer);
  const name = getProductName(product);
  const description = getDescription(product);
  const unit = clean(product.unit_en);

  return (
    <main className="react-detail ccm-page">
      <header className="pd-site-header">
        <Link className="pd-site-logo" to="/">FORMANI</Link>
        <nav>
          <Link to="/collection">Collections</Link>
          <Link to="/products/Catalogue">Products</Link>
          <Link to="/inspiration/references">Inspiration</Link>
          <Link to="/for-professionals">For professionals</Link>
        </nav>
      </header>

      <div id="product-detail">
        <div className="layout-grid product-detail product-detail__header">
          <div>
            <div className="product-detail__back">
              <button type="button" aria-label="Back to catalogue" onClick={() => navigate('/products/Catalogue')}>
                <svg className="arrow" viewBox="0 0 31 19.4" aria-hidden="true">
                  <path d="M31,9.9C31,9.8,31,9.6,31,9.5c0-0.1-0.1-0.1-0.1-0.2l-9.2-9.2c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7l8.3,8.3H0.5C0.2,9.2,0,9.4,0,9.7s0.2,0.5,0.5,0.5h28.8l-8.3,8.3c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1l9.2-9.2C30.9,10,30.9,10,31,9.9z" />
                </svg>
                <span>BACK</span>
              </button>
            </div>

            <div id="product-image-container" className="image-container">
              <div className="image-container__inner">
                <figure className="zl-picture__figure">
                  <picture className="zl-picture">
                    <ProductImage product={product} />
                  </picture>
                </figure>
              </div>
            </div>
          </div>

          <div>
            <h1 className="header-3 product-detail__internal-type">{name}</h1>

            <nav role="navigation" aria-label="breadcrumb">
              <ol className="breadcrumb">
                {collection && (
                  <li className="hlink">
                    <Link to={`/products/Catalogue?collection=${encodeURIComponent(collection)}&nooverlay=true`}>
                      <span data-hover={collection}>{collection}</span>
                    </Link>
                  </li>
                )}
                {productGroup && (
                  <li className="hlink">
                    <Link to={`/products/Catalogue?productgroup=${encodeURIComponent(productGroup)}&nooverlay=true`}>
                      <span data-hover={productGroup}>{productGroup}</span>
                    </Link>
                  </li>
                )}
                {type && (
                  <li className="hlink">
                    <Link to={`/products/Catalogue?type=${encodeURIComponent(type)}&nooverlay=true`}>
                      <span data-hover={type}>{type}</span>
                    </Link>
                  </li>
                )}
                {finish && (
                  <li className="hlink">
                    <Link to={`/products/Catalogue?finish=${encodeURIComponent(finish)}&nooverlay=true`}>
                      <span data-hover={finish}>{finish}</span>
                    </Link>
                  </li>
                )}
              </ol>
            </nav>

            <div className="product-detail__intro">
              <h2 className="product-detail__description">{description}</h2>
              <button type="button" className="toggle-wishlist">
                <span className="wishlist-heart" aria-hidden="true">♡</span>
                <span>Add to wishlist</span>
              </button>
            </div>

            <div className="product-detail__double">
              <div>
                <div>
                  <strong className="product-detail__sub-heading">Product info</strong>
                  <div className="product-detail__codes">
                    <div>Code:</div>
                    <div>{clean(product.product_id)}</div>
                    {unit && (
                      <>
                        <div>UNIT:</div>
                        <div>{unit}</div>
                      </>
                    )}
                  </div>
                  <div className="product-detail__links hlink">
                    <ProductLinks label="Collection" value={collection} to={`/products/Catalogue?collection=${encodeURIComponent(collection)}&nooverlay=true`} />
                    <ProductLinks label="Designer" value={designer} to={`/products/Catalogue?designer=${encodeURIComponent(designer)}&nooverlay=true`} />
                  </div>
                </div>

                <div>
                  <strong className="product-detail__sub-heading">Downloads</strong>
                  <div className="product-detail__downloads hlink">
                    <div><button type="button">Fact sheet</button></div>
                    {getImage(product) && (
                      <div>
                        <a href={getImage(product)} target="_blank" rel="noreferrer" download>
                          <span data-hover="Product photo">Product photo</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                {finishVariants.length > 0 && (
                  <div>
                    <strong className="product-detail__sub-heading">Finishes</strong>
                    <div className="finishes">
                      {finishVariants.map((item) => (
                        <Link key={clean(item.product_id)} className="finish-link" to={toDetailPath(item)} title={getFinish(item)}>
                          <div
                            className={clean(item.product_id) === clean(product.product_id) ? 'finish active' : 'finish'}
                            style={{ backgroundColor: swatchColor(item) }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <strong className="product-detail__sub-heading">Order sample for the product in this finish</strong>
                  <p>
                    <Link className="btn" to={`/sample-program-request-form/?sampleBron=${encodeURIComponent(clean(product.product_id))}`}>
                      Request Sample
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="layout-grid product-detail product-detail__footer layout-grid--mt0">
          <div>
            <h3 className="product-detail__collection-heading">
              {collection || 'FORMANI'} {designer && <span>by {designer}</span>}
            </h3>
            <p>{collection ? `${collection} collection` : 'Product collection'}</p>
            {collection && (
              <div className="hlink">
                <Link to={`/inspiration/Stories?refinementList%5Bserie_name%5D%5B0%5D=${encodeURIComponent(collection)}`}>
                  <span data-hover={`Related stories: ${collection}`}>Related stories: {collection}</span>
                </Link>
              </div>
            )}
          </div>

          {relatedProducts.length > 0 && (
            <div>
              <div className="product-detail__related-products">
                <h3>Related products</h3>
                <div className="related-products__list">
                  {relatedProducts.map((item) => (
                    <Link className="related-products-item" key={clean(item.product_id)} to={toDetailPath(item)}>
                      <div className="image-container">
                        <div className="image-container__inner">
                          <ProductImage product={item} />
                        </div>
                      </div>
                      <strong>{clean(item.product_id)}</strong>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
