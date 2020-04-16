트리

1. 계층구조
2. 접근 및 탐색에 적당한 속도(Array > Tree > Linked List)
3. 삽입 삭제에 적당한 속도(Linked List > Tree > Array)
4. 노드의 갯수에 제한이 없음

특징

1. 레벨이 l일때 노드의 최대 갯수는 2^(l-1)
2. 트리의 높이가 h일때, 노드의 최대 갯수는 2^h - 1
3. 노드의 갯수가 n일때, 트리의 최소 높이는 log2(n+1)

![](https://sites.google.com/site/sarvasite/_/rsrc/1247730465704/algorithms/trees/binarytree/BinaryTree.GIF)

Full Binary Tree

- 모든 노드의 자식노드가 0 또는 2인 경우
- leaf node의 갯수가 L, internal node의 갯수가 I일때, L = I + 1

Complete Binary Tree

- 마지막 level 이외의 모든 노드가 채워져 있고, 마지막 level의 노드는 왼쪽부터 채워져 있는 경우
- Complete Binary Tree는 Binary Heap을 구현할때 사용됨

Perfect Binary Tree

- 모든 internal node가 두개의 자식 노드를 가지고 있으며 모든 leaf노드의 level이 같은 경우

Balanced Binary Tree

- 대표적으로 AVL Tree, Red-Black Tree가 있다.
- AVL Tree
  - (TODO)
- Red-Black Tree
  - (TODO)
