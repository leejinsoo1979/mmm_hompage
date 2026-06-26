import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';
import { holdAppBoot, releaseAppBootBeforePaint } from '../utils/appBoot.js';

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

function getName(product) {
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

function getDetailPath(product) {
  const parts = [
    clean(product?.serie_name),
    clean(product?.productgroup_en_filter_1),
    clean(product?.type_en),
    getFinish(product),
    clean(product?.product_id),
  ].filter(Boolean);

  return `/products/detail/${parts.map(encodeURIComponent).join('/')}`;
}

function getCataloguePath(params) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (clean(value)) {
      search.set(key, clean(value));
    }
  });
  search.set('nooverlay', 'true');
  return `/products/Catalogue?${search.toString()}`;
}

function getFinishColor(product) {
  const finish = getFinish(product).toLowerCase();

  if (finish.includes('black')) return '#000000';
  if (finish.includes('light bronze')) return '#bc9d88';
  if (finish === 'bronze' || finish.includes(' bronze')) return '#836e58';
  if (finish.includes('champagne')) return '#cbc7af';
  if (finish.includes('gold')) return '#c9a24b';
  if (finish.includes('white')) return '#f4f1ea';
  if (finish.includes('stainless') || finish.includes('steel')) return '#cccccc';
  if (finish.includes('nickel')) return '#d2d0c9';
  return '#cccccc';
}

function isLocalStylesheetReady(node) {
  try {
    if (!node.sheet) {
      return false;
    }

    void node.sheet.cssRules;
    return true;
  } catch {
    return false;
  }
}

function waitForStylesheet(node) {
  if (!node.href || node.rel.toLowerCase() !== 'stylesheet') {
    return Promise.resolve();
  }

  const stylesheetUrl = new URL(node.href, window.location.href);
  if (stylesheetUrl.origin !== window.location.origin) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let settled = false;

    function done() {
      if (!settled) {
        settled = true;
        window.clearInterval(poll);
        node.removeEventListener('load', done);
        node.removeEventListener('error', done);
        resolve();
      }
    }

    const poll = window.setInterval(() => {
      if (isLocalStylesheetReady(node)) {
        done();
      }
    }, 50);

    if (isLocalStylesheetReady(node)) {
      done();
      return;
    }

    node.addEventListener('load', done, { once: true });
    node.addEventListener('error', done, { once: true });
  });
}

function useLegacyDetailStyles() {
  const [stylesReady, setStylesReady] = useState(false);

  useEffect(() => {
    holdAppBoot();
    setStylesReady(false);

    let cancelled = false;
    const links = [
      {
        id: 'legacy-detail-framework-css',
        href: '/application/themes/ztheme/dist/css/framework.min.css',
      },
      {
        id: 'legacy-detail-fontawesome-css',
        href: '/concrete/css/fontawesome/all.css',
      },
      {
        id: 'legacy-detail-typekit-css',
        href: 'https://use.typekit.net/kgl3zjy.css',
      },
    ];

    const nodes = links.map(({ id, href }) => {
      const existing = document.getElementById(id);
      if (existing) {
        return existing;
      }

      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = href;
      link.dataset.productDetailStyle = 'true';
      document.head.appendChild(link);
      return link;
    });

    Promise.all(nodes.map(waitForStylesheet)).then(() => {
      if (!cancelled) {
        setStylesReady(true);
      }
    });

    return () => {
      cancelled = true;
      document
        .querySelectorAll('link[data-product-detail-style="true"]')
        .forEach((link) => link.remove());
    };
  }, []);

  return stylesReady;
}

function BrandLogo() {
  return (
    <div className="logo">
      <Link to="/" aria-label="made make material home" className="brand-logo-text">
        <span>made</span>
        <span>make</span>
        <span>material</span>
      </Link>
    </div>
  );
}

const navItems = [
  { path: '/products/Catalogue#category-hardware', label: 'hardware', hoverLabel: '하드웨어' },
  { path: '/products/Catalogue#category-pannel', label: 'pannel', hoverLabel: '패널' },
  { path: '/products/Catalogue#category-presbevel', label: 'pressbevel', hoverLabel: '프레스베벨' },
  { path: '/products/Catalogue#category-antipress', label: 'antipress', hoverLabel: '안티프레스' },
  { path: '/products/Catalogue#category-bathmatch', label: 'bathmatch', hoverLabel: '바스매치' },
  { path: '/products/Catalogue#category-stable-core', label: 'stable core', hoverLabel: '스테이블 코어' }
];

function Header({ detailPath }) {
  return (
    <>
      <BrandLogo />
      <div className="sticky-nav__short-links hlink">
        <a id="wishlist-nav-inlog" className="active formani-login-btn" href="#login"><span data-hover="Login">Login</span></a>
      </div>
      <header className="sticky-nav container-fluid">
        <nav>
          <div />
          <div className="sticky-nav__menu">
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <span data-hover={item.hoverLabel}>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky-nav__toggle">
            <div className="sticky-nav__language-switch hlink">
              {['EN', 'NL', 'IT', 'ES', 'FR', 'DE'].map((language) => (
                <Link key={language} to={detailPath} className="language-switch__item">
                  <span data-hover={language}>{language}</span>
                </Link>
              ))}
            </div>
            <div className="global-nav-menu-toggle">
              <div className="hamburger hamburger--squeeze">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

function ProductImage({ product, id }) {
  const [failed, setFailed] = useState(false);
  const src = getImage(product);
  const alt = clean(product?.product_id);

  if (!src || failed) {
    return <div className="product-image-fallback">{alt}</div>;
  }

  return <img id={id} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 31 19.4">
      <path className="a-fill" d="M31,9.9C31,9.8,31,9.6,31,9.5c0-0.1-0.1-0.1-0.1-0.2l-9.2-9.2c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7l8.3,8.3 H0.5C0.2,9.2,0,9.4,0,9.7s0.2,0.5,0.5,0.5h28.8l-8.3,8.3c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1l9.2-9.2 C30.9,10,30.9,10,31,9.9z" />
    </svg>
  );
}

export default function ProductDetail() {
  const stylesReady = useLegacyDetailStyles();

  const params = useParams();
  const navigate = useNavigate();
  const productId = getProductIdFromRoute(params['*']);
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);
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
          setProductsLoaded(true);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError.message);
          setProductsLoaded(true);
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

    return clean(product.related_products)
      .split(',')
      .map((id) => products.find((item) => clean(item.product_id) === id.trim()))
      .filter(Boolean)
      .slice(0, 8);
  }, [product, products]);

  useLayoutEffect(() => {
    if (!stylesReady || !productsLoaded) {
      return undefined;
    }

    return releaseAppBootBeforePaint();
  }, [productsLoaded, stylesReady]);

  if (!stylesReady || !productsLoaded) {
    return null;
  }

  if (error) {
    return (
      <div className="ccm-page ccm-page-id-345 product-detail-react product-detail-state">
        <h1 className="header-3">Product data failed to load</h1>
        <p>{error}</p>
        <button className="btn" type="button" onClick={() => navigate('/products/Catalogue')}>BACK</button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="ccm-page ccm-page-id-345 product-detail-react product-detail-state">
        <h1 className="header-3">{productId || 'Product detail'}</h1>
      </div>
    );
  }

  const collection = clean(product.serie_name);
  const productGroup = clean(product.productgroup_en_filter_1);
  const type = clean(product.type_en);
  const finish = getFinish(product);
  const designer = clean(product.designer);
  const unit = clean(product.unit_en);
  const detailPath = getDetailPath(product);

  return (
    <div className="ccm-page ccm-page-id-345 product-detail-react">
      <Header detailPath={detailPath} />
      <main>
        <div>
          <div id="product-detail">
            <div className="layout-grid product-detail product-detail__header">
              <div>
                <div className="product-detail__back">
                  <Arrow />
                  <div className="hlink">
                    <a
                      href="/products/Catalogue"
                      id="back-to-catalogus"
                      data-catalogue-path="/products/Catalogue"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate('/products/Catalogue');
                      }}
                    >
                      <span data-hover="BACK">BACK</span>
                    </a>
                  </div>
                </div>
                <div id="product-image-container" className="image-container">
                  <div className="image-container__incorrect-finish">Incorrect finish!</div>
                  <div className="image-container__inner">
                    <figure className="zl-picture__figure">
                      <picture className="zl-picture">
                        <ProductImage id="product-image" product={product} />
                      </picture>
                    </figure>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="header-3 product-detail__internal-type">{getName(product)}</h1>
                <nav role="navigation" aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    {collection && (
                      <li className="hlink">
                        <Link to={getCataloguePath({ collection })}><span data-hover={collection}>{collection}</span></Link>
                      </li>
                    )}
                    {productGroup && (
                      <li className="hlink">
                        <Link to={getCataloguePath({ collection, productgroup: productGroup })}><span data-hover={productGroup}>{productGroup}</span></Link>
                      </li>
                    )}
                    {type && (
                      <li className="hlink">
                        <Link to={getCataloguePath({ collection, productgroup: productGroup, type })}><span data-hover={type}>{type}</span></Link>
                      </li>
                    )}
                    {finish && (
                      <li className="hlink">
                        <Link to={getCataloguePath({ collection, productgroup: productGroup, type, finish })}><span data-hover={finish}>{finish}</span></Link>
                      </li>
                    )}
                  </ol>
                </nav>

                <div className="product-detail-react__intro">
                  <h2 className="product-detail__description">{getDescription(product)}</h2>
                  <div className="hlink toggle-wishlist" data-itemid={clean(product.product_id)}>
                    <div className={`wishlist-item-icon wishlist-item-icon__detailpage wishlist-item__${clean(product.product_id)}`}>
                      <i className="fa fa-shopping-cart product-detail-react__cart" aria-hidden="true" />
                    </div>
                    <span className="product-detail-react__wishlist"><span data-hover="Add to wishlist">Add to wishlist</span></span>
                  </div>
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
                        {collection && (
                          <>
                            <div>Collection:</div>
                            <div><Link to={getCataloguePath({ collection })}><span data-hover={collection}>{collection}</span></Link></div>
                          </>
                        )}
                        {designer && (
                          <>
                            <div>Designer:</div>
                            <div><Link to={getCataloguePath({ designer })}><span data-hover={designer}>{designer}</span></Link></div>
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <strong className="product-detail__sub-heading">Downloads</strong>
                      <div className="product-detail__downloads hlink">
                        <div><a href="#fact-sheet" id="renderPdf"><span data-hover="Fact sheet">Fact sheet</span></a></div>
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
                    <div>
                      <strong className="product-detail__sub-heading">Finishes</strong>
                      <div className="finishes">
                        {finishVariants.map((item) => (
                          <Link key={clean(item.product_id)} className="finish-link" to={getDetailPath(item)}>
                            <div
                              title={getFinish(item)}
                              className={clean(item.product_id) === clean(product.product_id) ? 'finish active' : 'finish'}
                              style={{ backgroundColor: getFinishColor(item) }}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong className="product-detail__sub-heading">Order sample for the product in this finish</strong>
                      <p>
                        <Link className="btn" to={`/sample-program-request-form/?sampleBron=${encodeURIComponent(clean(product.product_id))}`}>
                          Request Sample
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div><div /></div>
                </div>
              </div>
            </div>

            <div className="layout-grid product-detail product-detail__footer layout-grid--mt0">
              <div>
                <h3 className="product-detail__collection-heading">
                  {collection || 'made make material'} {designer && <span>by {designer}</span>}
                </h3>
                {collection === 'INC' && (
                  <p>The INC series is a total concept collection consisting of <strong>door</strong>, <strong>window</strong>, and <strong>furniture fittings.</strong></p>
                )}
                {collection && (
                  <div className="hlink">
                    <Link to={`/inspiration/Stories?refinementList%5Bserie_name%5D%5B0%5D=${encodeURIComponent(collection)}`}>
                      <span data-hover={`Related stories: ${collection}`}>Related stories: {collection}</span>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <div className="product-detail__related-products">
                  <h3>Related products</h3>
                  <div className="slider-controls">
                    <div className="slider-controls-btn slider-controls-btn__previous"><Arrow /></div>
                    <div className="slider-controls-btn slider-controls-btn__next"><Arrow /></div>
                  </div>
                  <div className="related-products__list related-products-slider">
                    {relatedProducts.map((item) => (
                      <Link className="related-products-item" key={clean(item.product_id)} to={getDetailPath(item)}>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
