const createNode = data => {
  return {
    data,
    leftNode: null,
    rightNode: null
  };
};

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let currentNode = this.root;
    let preNode = null;
    if (currentNode === null) {
      this.root = createNode(data);
      return;
    }
    while (currentNode !== null) {
      if (currentNode.data === data) break;
      if (currentNode.data > data) {
        preNode = currentNode;
        currentNode = currentNode.leftNode;
      } else {
        preNode = currentNode;
        currentNode = currentNode.rightNode;
      }
    }
    if (preNode.data > data) {
      preNode.leftNode = createNode(data);
    } else {
      preNode.rightNode = createNode(data);
    }
  }
  search(data) {
    let currentNode = this.root;
    while (currentNode !== null && currentNode.data !== data) {
      if (currentNode.data > data) {
        currentNode = currentNode.leftNode;
      } else {
        currentNode = currentNode.rightNode;
      }
      if (currentNode === null) console.log(`There is no ${data} in tree.`);
      return currentNode;
    }
  }
  delete(data) {
    // 탐색
    let parentNode = null;
    let matchedNode = this.root;
    while (matchedNode !== null && matchedNode.data !== data) {
      parentNode = matchedNode;
      if (matchedNode.data > data) {
        matchedNode = matchedNode.leftNode;
      } else {
        matchedNode = matchedNode.rightNode;
      }
      if (matchedNode === null) {
        console.log(`There is no ${data} in tree.`);
        return -1;
      }
    }
    if (matchedNode === null) return -1;
    // 1. 자식이 없음
    if (matchedNode.leftNode === null && matchedNode.rightNode === null) {
      if (parentNode.leftNode === matchedNode) parentNode.leftNode = null;
      if (parentNode.rightNode === matchedNode) parentNode.rightNode = null;
      return matchedNode;
    }
    // 2. 자식 둘 모두 존재
    if (matchedNode.leftNode !== null && matchedNode.rightNode !== null) {
      // 2.1. 오른쪽 서브트리에서 제일 작은 노드 선택
      let subParentNode = matchedNode;
      let minNode = matchedNode.rightNode;
      while (minNode.leftNode !== null) {
        subParentNode = minNode;
        minNode = minNode.leftNode;
      }
      // 2.2. 제일 작은 노드의 서브트리를 서브트리의 부모 노드에 연결
      if (subParentNode.leftNode === minNode) {
        subParentNode.leftNode = minNode.rightNode;
      } else {
        subParentNode.rightNode = minNode.rightNode;
      }
      // 2.3. 제일 작은 노드를 matched 노드 위치로 이동
      minNode.leftNode = matchedNode.leftNode;
      minNode.rightNode = matchedNode.rightNode;
      if (parentNode.leftNode === matchedNode) {
        parentNode.leftNode = minNode;
      } else {
        parentNode.rightNode = minNode;
      }

      matchedNode.leftNode = null;
      matchedNode.rightNode = null;
      return matchedNode;
    }
    // 3. 자식이 하나만 존재
    let childNode = null;
    if (matchedNode.rightNode !== null) {
      childNode = matchedNode.rightNode;
    } else {
      childNode = matchedNode.leftNode;
    }
    if (parentNode.leftNode === matchedNode) {
      parentNode.leftNode = childNode;
    } else {
      parentNode.rightNode = childNode;
    }

    matchedNode.leftNode = null;
    matchedNode.rightNode = null;
    return matchedNode;
  }
  bfs() {
    let path = "";
    const queue = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      let node = queue.shift();
      if (node.leftNode !== null) {
        queue.push(node.leftNode);
      }
      if (node.rightNode !== null) {
        queue.push(node.rightNode);
      }
      path += `${node.data} > `;
    }
    console.log(`bfs: ${path.substr(0, path.length - 2)}`);
  }
  dfsInorder() {
    let path = "";
    const inorder = node => {
      let currentNode = node;
      if (currentNode !== null) {
        inorder(currentNode.leftNode);
        path += `${currentNode.data} > `;
        inorder(currentNode.rightNode);
      }
    };
    inorder(this.root);
    console.log(`inorder: ${path.substr(0, path.length - 2)}`);
  }
  dfsPreorder() {
    let path = "";
    const preorder = node => {
      let currentNode = node;
      if (currentNode !== null) {
        path += `${currentNode.data} > `;
        preorder(currentNode.leftNode);
        preorder(currentNode.rightNode);
      }
    };
    preorder(this.root);
    console.log(`preorder: ${path.substr(0, path.length - 2)}`);
  }
  dfsPostorder() {
    let path = "";
    const postorder = node => {
      let currentNode = node;
      if (currentNode !== null) {
        postorder(currentNode.leftNode);
        postorder(currentNode.rightNode);
        path += `${currentNode.data} > `;
      }
    };
    postorder(this.root);
    console.log(`postorder: ${path.substr(0, path.length - 2)}`);
  }
}

module.exports = BinaryTree;
