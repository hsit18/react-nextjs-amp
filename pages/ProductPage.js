import Head from "next/head";

export const config = { amp: true };

export default function ProductPage() {
  return (
    <div>
      <Head>
        <title>Product Browse Page</title>
        <script async src="https://cdn.ampproject.org/v0.js"></script>

        <script
          async
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-list"
          src="https://cdn.ampproject.org/v0/amp-list-0.1.js"
        ></script>
        <script
          async
          custom-template="amp-mustache"
          src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
        ></script>
        <script
          async
          custom-element="amp-form"
          src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-fit-text"
          src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-sidebar"
          src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-bind"
          src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-lightbox"
          src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-selector"
          src="https://cdn.ampproject.org/v0/amp-selector-0.1.js"
        ></script>
        <link
          rel="canonical"
          href="https://amp.dev/documentation/examples/e-commerce/product_browse_page/index.html"
        />        
      </Head>

      <amp-sidebar id="drawermenu" layout="nodisplay">
        <a href="/documentation/examples/e-commerce/product_browse_page">
          Products
        </a>
        <a href="#">Fruit</a>
        <a href="#">Vegetable</a>
        <a href="#">More</a>
      </amp-sidebar>
      <div class="header">
        <div class="menu-wrap">
          <a id="sample-menu" on="tap:drawermenu.toggle">
            <amp-img
              srcset="https://playground.amp.dev/static/samples/img/ic_menu_black_1x_web_24dp.png 1x, https://playground.amp.dev/static/samples/img/ic_menu_black_2x_web_24dp.png 2x"
              width="24"
              height="24"
              alt="navigation"
            ></amp-img>
          </a>
          <input
            name="search"
            type="text"
            placeholder="Search"
            on="change:AMP.setState({
            products: {
            listSrc: '/documentation/examples/api/products?searchProduct='+ event.value +'&sort='+ products.sortChoiceValue +'&searchColor='+ products.searchColor +'&_=RANDOM',
            searchProduct: event.value
          }});
            input-debounced:
              AMP.setState({
                autosuggest: {
                  query: event.value,
                  showDropdown: event.value
                }
              }),
            autosuggest-list.show;
            tap:
              AMP.setState({
                autosuggest: {
                  query: autosuggest.query == null ? '' : autosuggest.query,
                  showDropdown: 'true'
                }
              }),
              autosuggest-list.show"
            data-amp-bind-value="autosuggest.query || ''"
            value
          />
          <input type="submit" value="Search" />

          <amp-list
            width="auto"
            height="600"
            layout="fixed-height"
            src="https://playground.amp.dev/documentation/examples/api/products?sort=price-descendent&searchColor=all&_=RANDOM'"
            data-amp-src="products.listSrc"
            binding="no"
            class="grid"
            data-amp-replace="RANDOM"
          >
            <template type="amp-mustache">
              <a class="products" href="#">
                <amp-img
                  width="150"
                  height="100"
                  alt="{{name}}"
                  src="https://playground.amp.dev{{img}}"
                ></amp-img>
                <p class="name">{`{{ name }}`}</p>
                <p class="star">{`{{ stars }}`}</p>
                <p class="price">${`{{ price }}`}</p>
              </a>
            </template>
          </amp-list>
        </div>
      </div>
    </div>
  );
}
