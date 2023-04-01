// question --> https://www.scaler.com/academy/mentee-dashboard/class/52332/homework/problems/211/?navref=cl_pb_nv_tb

//  Definition for UndirectedGraphNode.
//	function UndirectedGraphNode(data) {
//	    this.label = data;
//	    this.neighbours = [];
//       }


module.exports = {
  //param A : root of the undirected graph.
  //Return the node denoting the root of the new clone graph.
  cloneGraph: function (A) {
    let map = new Map();
    return preOrder(A);

    function preOrder(root) {
      if (root == null) {
        return root;
      }
      if (map.has(root)) {
        return map.get(root);
      }
      let clone = new UndirectedGraphNode(root.label);
      map.set(root, clone);
      for (let i = 0; i < root.neighbors.length; i++) {
        let neighbor = root.neighbors[i];
        clone.neighbors.push(preOrder(neighbor));
      }
      return clone;
    }
  },
};
