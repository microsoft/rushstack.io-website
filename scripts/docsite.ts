

console.log('Starting docsite.js');

interface IJsonNode {
  title: string;
  url?: string;
  subitems: IJsonNode[];
}

interface INode {
  parentNode: INode;
  childNodes: INode[];

  liElement: HTMLElement;

  // defined if childNodes.length > 0
  ulElement: HTMLElement | undefined;

  // defined if the group is expanded
  expanded: boolean;

  // true if this is the current page
  currentPage: boolean;
}

const rootNodes: INode[] = [];

function getUrlForComparison(url: string): string {
  // remove leading/trailing slashes, convert to uppercase
  return url.replace(/^\/+/, '')
    .replace(/\/+$/, '')
    .toLocaleUpperCase();
}

function updateNavNode(node: INode): void {
  let liClassName: string = 'navtree-li';

  if (node.ulElement) {
    if (node.expanded) {
      liClassName += ' navtree-li-expanded';
      node.ulElement.className = 'navtree-ul-expanded';
    } else {
      liClassName += ' navtree-li-collapsed';
      node.ulElement.className = 'navtree-ul-collapsed';
    }
  }

  if (node.currentPage) {
    liClassName += ' navtree-li-current';
  }

  node.liElement.className = liClassName;
}

function renderNavNodes(nodes: INode[], jsonNodes: IJsonNode[], parentUlElement: HTMLElement,
  parentNode: INode | undefined, currentPageUrl: string): void {

  for (const jsonNode of jsonNodes) {
    const expandable: boolean = jsonNode.subitems && jsonNode.subitems.length > 0;

    const liElement: HTMLElement = document.createElement('li');

    let titleContainerElement: HTMLElement = liElement;
    let currentPage: boolean = false;

    if (expandable) {
      liElement.innerHTML = '<svg class="navtree-expander"><use xlink:href="#icon-expander"></use></svg>';
    } else {
      liElement.innerHTML = '<svg class="navtree-expander"></svg>';

      if (jsonNode.url) {
        const linkElement: HTMLAnchorElement = document.createElement('a');
        linkElement.href = jsonNode.url;
        liElement.appendChild(linkElement);
        titleContainerElement = linkElement;

        const jsonNodeUrl: string = getUrlForComparison(jsonNode.url);
        if (jsonNodeUrl === currentPageUrl) {
          currentPage = true;

          // expand all the parent nodes
          for (let current = parentNode; current !== undefined; current = current.parentNode) {
            current.expanded = true;
          }
        }
      }
    }
    titleContainerElement.append(jsonNode.title);

    parentUlElement.appendChild(liElement);

    const node: INode = {
      parentNode,
      childNodes: [],
      liElement: liElement,
      ulElement: undefined,
      expanded: false,
      currentPage
    };
    nodes.push(node);

    if (expandable) {
      const ulElement: HTMLElement = document.createElement('ul');
      node.ulElement = ulElement;
      parentUlElement.appendChild(ulElement);

      if (jsonNode.url) {
        // Our design doesn't allow a container to have a hyperlink; create a virtual child node
        const virtualNode: IJsonNode = {
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
      liElement.onclick = () => {
        node.expanded = !node.expanded;
        updateNavNode(node);
      };
    }

  }
}

function renderNavTree(): void {
  console.log('Starting renderNavTree()');

  fetch('/assets/nav_api.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonNodes: IJsonNode[]) {
      console.log(JSON.stringify(jsonNodes));

      let navRootUl = document.getElementById('nav-root-ul');

      const currentPageUrl: string = getUrlForComparison(document.location.pathname);

      renderNavNodes(rootNodes, jsonNodes, navRootUl, undefined, currentPageUrl);

      console.log('End renderNavTree()');
    })
    .catch(function(e) {
      console.log('ERROR: Failed to fetch navigation: '+ e.toString());
    });
}

window.addEventListener("load", renderNavTree);
console.log('End docsite.js');
