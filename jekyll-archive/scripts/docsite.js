var rootNodes = [];
function getUrlForComparison(url) {
    // remove leading/trailing slashes, convert to uppercase
    return url.replace(/^\/+/, '')
        .replace(/\/+$/, '')
        .toLocaleUpperCase();
}
function updateNavNode(node) {
    var liClassName = 'navtree-li';
    if (node.ulElement) {
        if (node.expanded) {
            liClassName += ' navtree-li-expanded';
            node.ulElement.className = 'navtree-ul-expanded';
        }
        else {
            liClassName += ' navtree-li-collapsed';
            node.ulElement.className = 'navtree-ul-collapsed';
        }
    }
    if (node.currentPage) {
        liClassName += ' navtree-li-current';
    }
    node.liElement.className = liClassName;
}
function renderNavNodes(nodes, jsonNodes, parentUlElement, parentNode, currentPageUrl) {
    var _loop_1 = function (jsonNode) {
        var expandable = jsonNode.subitems && jsonNode.subitems.length > 0;
        var liElement = document.createElement('li');
        var titleContainerElement = liElement;
        var currentPage = false;
        if (expandable) {
            liElement.innerHTML = '<svg class="navtree-expander"><use xlink:href="#icon-expander"></use></svg>';
        }
        else {
            liElement.innerHTML = '<svg class="navtree-expander"></svg>';
            if (jsonNode.url) {
                var linkElement = document.createElement('a');
                linkElement.href = jsonNode.url;
                liElement.appendChild(linkElement);
                titleContainerElement = linkElement;
                var jsonNodeUrl = getUrlForComparison(jsonNode.url);
                if (jsonNodeUrl === currentPageUrl) {
                    currentPage = true;
                    // expand all the parent nodes
                    for (var current = parentNode; current !== undefined; current = current.parentNode) {
                        current.expanded = true;
                    }
                }
            }
        }
        titleContainerElement.append(jsonNode.title);
        parentUlElement.appendChild(liElement);
        var node = {
            parentNode: parentNode,
            childNodes: [],
            liElement: liElement,
            ulElement: undefined,
            expanded: false,
            currentPage: currentPage
        };
        nodes.push(node);
        if (expandable) {
            var ulElement = document.createElement('ul');
            node.ulElement = ulElement;
            parentUlElement.appendChild(ulElement);
            if (jsonNode.url) {
                // Our design doesn't allow a container to have a hyperlink; create a virtual child node
                var virtualNode = {
                    title: '(members)',
                    url: jsonNode.url,
                    subitems: []
                };
                renderNavNodes(node.childNodes, [virtualNode], ulElement, node, currentPageUrl);
            }
            renderNavNodes(node.childNodes, jsonNode.subitems, ulElement, node, currentPageUrl);
        }
        updateNavNode(node);
        if (expandable) {
            liElement.onclick = function () {
                node.expanded = !node.expanded;
                updateNavNode(node);
            };
        }
    };
    for (var _i = 0, jsonNodes_1 = jsonNodes; _i < jsonNodes_1.length; _i++) {
        var jsonNode = jsonNodes_1[_i];
        _loop_1(jsonNode);
    }
}
function renderNavTree() {
    var navRootUl = document.getElementById('nav-root-ul');
    if (!navRootUl) {
        // The "nav-root-ul" element doesn't exist, so use Jekyll navigation instead
        return;
    }
    console.log('Loading navigation');
    fetch('/assets/nav_api.json')
        .then(function (response) {
        return response.json();
    })
        .then(function (jsonNodes) {
        var currentPageUrl = getUrlForComparison(document.location.pathname);
        renderNavNodes(rootNodes, jsonNodes, navRootUl, undefined, currentPageUrl);
    })["catch"](function (e) {
        console.log('ERROR: Failed to fetch navigation: ' + e.toString());
    });
}
window.addEventListener("load", renderNavTree);
