function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));

 // Merge sort  

 function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));


  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  console.log(quickSort([10, 7, 8, 9, 1, 5]));

  
  function binarySearch(arr, x) {
    let start = 0, end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === x) {
        return mid;
      } else if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  console.log(binarySearch([2, 3, 4, 10, 40], 10));

//   3. Dynamic Programming
function fibonacci(n) {
    let memo = [0, 1];
    for (let i = 2; i <= n; i++) {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
  }
  
  console.log(fibonacci(10));

  
  function longestCommonSubsequence(s1, s2) {
    const m = s1.length, n = s2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    return dp[m][n];
  }
  
  console.log(longestCommonSubsequence('AGGTAB', 'GXTXAYB'));

  
//   4. Graph Algorithms

function dfs(graph, start) {
    let visited = new Set();
    let stack = [start];
  
    while (stack.length > 0) {
      let vertex = stack.pop();
  
      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
  
        let neighbors = graph[vertex];
        for (let neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    }
  }
  
  const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
  };
  
  dfs(graph, 'A');

  
  function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
  
    while (queue.length > 0) {
      let vertex = queue.shift();
  
      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
  
        let neighbors = graph[vertex];
        for (let neighbor of neighbors) {
          queue.push(neighbor);
        }
      }
    }
    console.log('queue', queue);
  }
  
  const graph1 = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
  };
  
  bfs(graph1, 'F');
  
//   5. Backtracking

// a. N queens probolm
function solveNQueens(n) {
    let result = [];
    let board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function isSafe(row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
      }
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
      }
      for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
      }
      return true;
    }
    
    function solve(row) {
      if (row === n) {
        result.push(board.map(row => row.join('')));
        return;
      }
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
          board[row][col] = 'Q';
          solve(row + 1);
          board[row][col] = '.';
        }
      }
    }
    
    solve(0);
    return result;
  }
  
  console.log(solveNQueens(4));
  


  // for more visit this link     -----    https://chatgpt.com/c/42df813c-82a8-4e45-b7b0-57baff7b2335
  // https://chatgpt.com/c/42df813c-82a8-4e45-b7b0-57baff7b2335