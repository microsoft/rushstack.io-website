

console.log('Starting docsite.js');

interface IJsonNode {
  title: string;
  url?: string;
  subitems: IJsonNode[];
}

interface INode {
  liElement: HTMLElement;
  childNodes: INode[];

  // defined if childNodes.length > 0
  ulElement: HTMLElement | undefined;

  // defined if the group is expanded
  expanded: boolean;
}

const rootNodes: INode[] = [];

function updateNavNode(node: INode): void {
  if (node.ulElement) {
    if (node.expanded) {
      node.liElement.className = 'navtree-li navtree-li-expanded';
      node.ulElement.className = 'navtree-ul-expanded';
    } else {
      node.liElement.className = 'navtree-li navtree-li-collapsed';
      node.ulElement.className = 'navtree-ul-collapsed';
    }
  } else {
    node.liElement.className = 'navtree-li';
  }
}

function renderNavNodes(nodes: INode[], jsonNodes: IJsonNode[], parentUlElement: HTMLElement): void {

  for (const jsonNode of jsonNodes) {
    const expandable: boolean = jsonNode.subitems && jsonNode.subitems.length > 0;

    const liElement: HTMLElement = document.createElement('li');

    if (expandable) {
      liElement.innerHTML = '<svg class="navtree-expander"><use xlink:href="#icon-expander"></use></svg>';
    } else {
      liElement.innerHTML = '<svg class="navtree-expander"></svg>';
    }

    liElement.append(jsonNode.title);

    parentUlElement.appendChild(liElement);

    const node: INode = {
      liElement: liElement,
      childNodes: [],
      ulElement: undefined,
      expanded: false
    };
    nodes.push(node);

    if (expandable) {
      const ulElement: HTMLElement = document.createElement('ul');
      node.ulElement = ulElement;
      parentUlElement.appendChild(ulElement);

      renderNavNodes(node.childNodes, jsonNode.subitems, ulElement);
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

      renderNavNodes(rootNodes, jsonNodes, navRootUl);

      console.log('End renderNavTree()');
    })
    .catch(function(e) {
      console.log('ERROR: Failed to fetch navigation: '+ e.toString());
    });
}

window.addEventListener("load", renderNavTree);
console.log('End docsite.js');
