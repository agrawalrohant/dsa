// question --> https://www.scaler.com/academy/mentee-dashboard/class/52332/assignment/problems/9327/?navref=cl_pb_nv_tb

module.exports = {
  solve: function (A, B) {
    const maxn = 100009;
    let visited = new Array(maxn);
    let recStack = new Array(maxn);
    let adj = new Array(maxn).fill([]);
    for (let i = 0; i <= A; i++) {
      visited[i] = 0;
      recStack[i] = 0;
    }
    for (let i = 0; i < maxn; i++) {
      adj[i] = [];
    }
    for (let i = 0; i < B.length; i++) {
      adj[B[i][0]].push(B[i][1]);
    }
    for (let i = 1; i <= A; i++) {
      if (visited[i] == 0 && DFS(i)) return 1;
    }
    return 0;

    function DFS(v) {
      if (visited[v] == 0) {
        // Mark the current node as visited and part of recursion stack
        visited[v] = 1;
        recStack[v] = 1;

        // Recur for all the vertices adjacent to this vertex
        for (let i = 0; i < adj[v].length; i++) {
          let w = adj[v][i];
          if (!visited[w] && DFS(w)) return true;
          else if (recStack[w]) return true;
        }
      }
      recStack[v] = 0; // remove the vertex from recursion stack
      return false;
    }
  },
};
