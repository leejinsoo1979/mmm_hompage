(function() {
    function normalize(pathname) {
        return pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    }

    function routeFor(path, search) {
        var lower = path.toLowerCase();

        if (
            path === '/' ||
            path === '/collection' ||
            path === '/collection/' ||
            path === '/products/Catalogue' ||
            path === '/products/Catalogue/' ||
            path === '/inspiration/references' ||
            path === '/inspiration/references/' ||
            path === '/for-professionals' ||
            path === '/for-professionals/'
        ) {
            return null;
        }

        if (lower.indexOf('/collection/') === 0) {
            return '/collection/';
        }

        if (lower === '/products/catalogue' || lower.indexOf('/products/catalogue/') === 0) {
            return '/products/Catalogue/' + (search || '');
        }

        if (lower.indexOf('/inspiration/') === 0) {
            return '/inspiration/references/';
        }

        if (lower === '/for-professionals' || lower.indexOf('/for-professionals/') === 0) {
            return '/for-professionals/';
        }

        return false;
    }

    document.addEventListener('click', function(event) {
        var link = event.target.closest('a[href]');
        var href;
        var url;
        var path;
        var route;

        if (!link) {
            return;
        }

        href = link.getAttribute('href');

        if (!href || href === '#' || href.indexOf('#') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) {
            return;
        }

        if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0) {
            event.preventDefault();
            return;
        }

        url = new URL(href, window.location.origin);

        if (url.origin !== window.location.origin) {
            event.preventDefault();
            return;
        }

        path = normalize(url.pathname);
        route = routeFor(path, url.search);

        if (route === false) {
            event.preventDefault();
            return;
        }

        if (route) {
            event.preventDefault();
            window.location.href = route;
        }
    }, true);
}());
