const BinaryTree = require("./BinaryTree");
const arr = [35, 18, 7, 3, 12, 26, 22, 24, 30, 68, 99];
const bt = new BinaryTree();
arr.forEach(data => {
  bt.insert(data);
});

bt.dfsInorder();
bt.dfsPreorder();
bt.dfsPostorder();
bt.bfs();
console.log("search 68");
console.log(bt.search(68).data);
console.log("delete 18");
console.log(bt.delete(18).data);
bt.dfsInorder();
