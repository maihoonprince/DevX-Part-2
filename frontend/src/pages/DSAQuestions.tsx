import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DSAQuestion {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  description: string;
  javaCode: string;
  pythonCode: string;
}

const questionsPerPage = 10;

const DSAQuestions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const dsaQuestions: DSAQuestion[] = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Arrays",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      javaCode: `
// Time Complexity: O(n)
// Space Complexity: O(n)
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    
    // Iterate through the array
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        
        // Check if complement exists in map
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        
        // Add current number to map
        map.put(nums[i], i);
    }
    return new int[] {};
}`,
      pythonCode: `
# Time Complexity: O(n)
# Space Complexity: O(n)
def two_sum(nums: List[int], target: int) -> List[int]:
    num_map = {}  # value -> index
    
    # Enumerate through the list
    for i, num in enumerate(nums):
        complement = target - num
        
        # Check if complement exists
        if complement in num_map:
            return [num_map[complement], i]
            
        # Add current number to map
        num_map[num] = i
    
    return []`
    },
    {
      id: 2,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      javaCode: `
// Time Complexity: O(n)
// Space Complexity: O(n)
public boolean isValid(String s) {
    // Use stack to keep track of opening brackets
    Stack<Character> stack = new Stack<>();
    
    // Map to store matching bracket pairs
    Map<Character, Character> brackets = new HashMap<>();
    brackets.put(')', '(');
    brackets.put('}', '{');
    brackets.put(']', '[');
    
    // Iterate through each character
    for (char c : s.toCharArray()) {
        // If it's a closing bracket
        if (brackets.containsKey(c)) {
            // Get matching opening bracket from top of stack
            char topElement = stack.empty() ? '#' : stack.pop();
            
            // Check if brackets match
            if (topElement != brackets.get(c)) {
                return false;
            }
        } else {
            // Push opening bracket to stack
            stack.push(c);
        }
    }
    
    // String is valid if stack is empty
    return stack.isEmpty();
}`,
      pythonCode: `
# Time Complexity: O(n)
# Space Complexity: O(n)
def is_valid(s: str) -> bool:
    # Initialize stack for keeping track of opening brackets
    stack = []
    
    # Dictionary to store bracket pairs
    brackets = {")": "(", "}": "{", "]": "["}
    
    # Iterate through each character
    for char in s:
        # If it's a closing bracket
        if char in brackets:
            # Pop the top element if stack is not empty, else assign dummy value
            top_element = stack.pop() if stack else '#'
            
            # Check if brackets match
            if brackets[char] != top_element:
                return False
        else:
            # Push opening bracket to stack
            stack.append(char)
    
    # String is valid if stack is empty
    return len(stack) == 0`
    },
    {
      id: 3,
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Dynamic Programming",
      description: "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.",
      javaCode: `
// Time Complexity: O(n)
// Space Complexity: O(1)
public int maxSubArray(int[] nums) {
    // Initialize variables to track current and maximum sum
    int currentSum = nums[0];
    int maxSum = nums[0];
    
    // Start from second element
    for (int i = 1; i < nums.length; i++) {
        // Choose between starting new subarray or extending existing one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update maximum sum if current sum is larger
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}`,
      pythonCode: `
# Time Complexity: O(n)
# Space Complexity: O(1)
def max_subarray(nums: List[int]) -> int:
    # Initialize current and maximum sum with first element
    current_sum = max_sum = nums[0]
    
    # Iterate through array starting from second element
    for num in nums[1:]:
        # Choose between starting new subarray or extending existing one
        current_sum = max(num, current_sum + num)
        # Update maximum sum if current sum is larger
        max_sum = max(max_sum, current_sum)
    
    return max_sum`
    },
    {
      id: 4,
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
      category: "Linked List",
      description: "Merge two sorted linked lists and return it as a sorted list.",
      javaCode: `
// Time Complexity: O(n + m)
// Space Complexity: O(1)
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    // Create dummy node to avoid edge cases
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    // Compare nodes from both lists
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // Append remaining nodes
    current.next = l1 == null ? l2 : l1;
    
    return dummy.next;
}`,
      pythonCode: `
# Time Complexity: O(n + m)
# Space Complexity: O(1)
def merge_two_lists(l1: ListNode, l2: ListNode) -> ListNode:
    # Create dummy node to avoid edge cases
    dummy = ListNode(0)
    current = dummy
    
    # Compare nodes from both lists
    while l1 and l2:
        if l1.val <= l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    
    # Append remaining nodes
    current.next = l1 if l1 else l2
    
    return dummy.next`
    },
    {
      id: 5,
      title: "Reverse Linked List",
      difficulty: "Easy",
      category: "Linked List",
      description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      javaCode: `
// Time Complexity: O(n)
// Space Complexity: O(1)
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    // Iterate through list
    while (current != null) {
        // Store next node
        ListNode next = current.next;
        // Reverse pointer
        current.next = prev;
        // Move prev and current one step forward
        prev = current;
        current = next;
    }
    
    return prev;
}`,
      pythonCode: `
# Time Complexity: O(n)
// Space Complexity: O(1)
def reverse_list(head: ListNode) -> ListNode:
    prev = None
    current = head
    
    # Iterate through list
    while current:
        # Store next node
        next_node = current.next
        # Reverse pointer
        current.next = prev
        # Move prev and current one step forward
        prev = current
        current = next_node
    
    return prev`
    },
    {
      id: 6,
      title: "Climbing Stairs",
      difficulty: "Easy",
      category: "Dynamic Programming",
      description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      javaCode: `
public int climbStairs(int n) {
    if (n <= 2) return n;
    
    int[] dp = new int[n + 1];
    dp[1] = 1;
    dp[2] = 2;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}`,
      pythonCode: `
def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
        
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
        
    return dp[n]`
    },
    {
      id: 7,
      title: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      category: "Arrays",
      description: "Given an array prices where prices[i] is the price of a given stock on the ith day, find the maximum profit you can achieve.",
      javaCode: `
public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    
    for (int price : prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
}`,
      pythonCode: `
def max_profit(prices: List[int]) -> int:
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
        
    return max_profit`
    },
    {
      id: 8,
      title: "Symmetric Tree",
      difficulty: "Easy",
      category: "Binary Trees",
      description: "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
      javaCode: `
public boolean isSymmetric(TreeNode root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
}

private boolean isMirror(TreeNode left, TreeNode right) {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    
    return (left.val == right.val)
        && isMirror(left.left, right.right)
        && isMirror(left.right, right.left);
}`,
      pythonCode: `
def is_symmetric(root: TreeNode) -> bool:
    def is_mirror(left: TreeNode, right: TreeNode) -> bool:
        if not left and not right:
            return True
        if not left or not right:
            return False
            
        return (left.val == right.val
            and is_mirror(left.left, right.right)
            and is_mirror(left.right, right.left))
            
    if not root:
        return True
    return is_mirror(root.left, root.right)`
    },
    {
      id: 9,
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium",
      category: "Binary Trees",
      description: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
      javaCode: `
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            currentLevel.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        result.add(currentLevel);
    }
    
    return result;
}`,
      pythonCode: `
def level_order(root: TreeNode) -> List[List[int]]:
    if not root:
        return []
        
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
        result.append(current_level)
        
    return result`
    },
    {
      id: 10,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      category: "Linked Lists",
      description: "Given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
      javaCode: `
public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    
    PriorityQueue<ListNode> queue = new PriorityQueue<>((a, b) -> a.val - b.val);
    
    // Add first node of each list to the queue
    for (ListNode list : lists) {
        if (list != null) {
            queue.offer(list);
        }
    }
    
    ListNode dummy = new ListNode(0);
    ListNode tail = dummy;
    
    while (!queue.isEmpty()) {
        tail.next = queue.poll();
        tail = tail.next;
        
        if (tail.next != null) {
            queue.offer(tail.next);
        }
    }
    
    return dummy.next;
}`,
      pythonCode: `
def merge_k_lists(lists: List[ListNode]) -> ListNode:
    if not lists:
        return None
        
    # Create heap
    heap = []
    
    # Add first node of each list to heap
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst.val, i, lst))
            
    dummy = ListNode(0)
    curr = dummy
    
    while heap:
        val, i, node = heapq.heappop(heap)
        curr.next = node
        curr = curr.next
        
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
            
    return dummy.next`
    },
    {
      id: 11,
      title: "LRU Cache",
      difficulty: "Medium",
      category: "Design",
      description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      javaCode: `
class LRUCache {
    class Node {
        int key, value;
        Node prev, next;
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Map<Integer, Node> cache;
    private Node head, tail;
    private int capacity, size;
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap<>();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            moveToHead(node);
            return node.value;
        }
        return -1;
    }
    
    public void put(int key, int value) {
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            node.value = value;
            moveToHead(node);
        } else {
            Node newNode = new Node(key, value);
            cache.put(key, newNode);
            addNode(newNode);
            size++;
            
            if (size > capacity) {
                Node tail = removeTail();
                cache.remove(tail.key);
                size--;
            }
        }
    }
    
    private void addNode(Node node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }
    
    private void removeNode(Node node) {
        Node prev = node.prev;
        Node next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    
    private void moveToHead(Node node) {
        removeNode(node);
        addNode(node);
    }
    
    private Node removeTail() {
        Node res = tail.prev;
        removeNode(res);
        return res;
    }
}`,
      pythonCode: `
class LRUCache:
    def __init__(self, capacity: int):
        self.cache = {}
        self.capacity = capacity
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head
        
    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._move_to_head(node)
            return node.value
        return -1
        
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.value = value
            self._move_to_head(node)
        else:
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add_node(new_node)
            
            if len(self.cache) > self.capacity:
                lru = self._pop_tail()
                del self.cache[lru.key]
                
    def _add_node(self, node):
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node
        
    def _remove_node(self, node):
        prev = node.prev
        new = node.next
        prev.next = new
        new.prev = prev
        
    def _move_to_head(self, node):
        self._remove_node(node)
        self._add_node(node)
        
    def _pop_tail(self):
        res = self.tail.prev
        self._remove_node(res)
        return res`
    },
    {
      id: 12,
      title: "Number of Islands",
      difficulty: "Medium",
      category: "Graphs",
      description: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
      javaCode: `
public int numIslands(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    
    int count = 0;
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
}

private void dfs(char[][] grid, int i, int j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] != '1') return;
    
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}`,
      pythonCode: `
def numIslands(self, grid: List[List[str]]) -> int:
    if not grid:
        return 0
        
    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                self.dfs(grid, i, j)
                count += 1
    return count
    
def dfs(self, grid, i, j):
    if i<0 or j<0 or i>=len(grid) or j>=len(grid[0]) or grid[i][j] != '1':
        return
    
    grid[i][j] = '0'
    self.dfs(grid, i+1, j)
    self.dfs(grid, i-1, j)
    self.dfs(grid, i, j+1)
    self.dfs(grid, i, j-1)`
    },
    {
      id: 13,
      title: "Rotate Image",
      difficulty: "Medium",
      category: "Arrays",
      description: "You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise).",
      javaCode: `
public void rotate(int[][] matrix) {
    int n = matrix.length;
    
    // transpose matrix
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    // reverse each row
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n/2; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j];
            matrix[i][n-1-j] = temp;
        }
    }
}`,
      pythonCode: `
def rotate(self, matrix: List[List[int]]) -> None:
    n = len(matrix)
    
    # transpose matrix
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # reverse each row
    for i in range(n):
        matrix[i].reverse()`
    },
    {
      id: 14,
      title: "Course Schedule",
      difficulty: "Medium",
      category: "Graphs",
      description: "There are a total of numCourses courses you have to take. Some courses may have prerequisites. Return true if you can finish all courses.",
      javaCode: `
public boolean canFinish(int numCourses, int[][] prerequisites) {
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < numCourses; i++) {
        adj.add(new ArrayList<>());
    }
    
    for (int[] pre : prerequisites) {
        adj.get(pre[1]).add(pre[0]);
    }
    
    int[] visited = new int[numCourses];
    
    for (int i = 0; i < numCourses; i++) {
        if (visited[i] == 0 && !dfs(adj, visited, i)) {
            return false;
        }
    }
    return true;
}

private boolean dfs(List<List<Integer>> adj, int[] visited, int v) {
    if (visited[v] == 1) return false;
    if (visited[v] == 2) return true;
    
    visited[v] = 1;
    for (int next : adj.get(v)) {
        if (!dfs(adj, visited, next)) {
            return false;
        }
    }
    visited[v] = 2;
    return true;
}`,
      pythonCode: `
def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
    adj = [[] for _ in range(numCourses)]
    for course, pre in prerequisites:
        adj[pre].append(course)
    
    visited = [0] * numCourses
    
    def dfs(v):
        if visited[v] == 1: return False
        if visited[v] == 2: return True
        
        visited[v] = 1
        for next_course in adj[v]:
            if not dfs(next_course):
                return False
        visited[v] = 2
        return True
    
    for i in range(numCourses):
        if visited[i] == 0 and not dfs(i):
            return False
    return True`
    },
    {
      id: 15,
      title: "Word Break",
      difficulty: "Medium",
      category: "Dynamic Programming",
      description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
      javaCode: `
public boolean wordBreak(String s, List<String> wordDict) {
    Set<String> dict = new HashSet<>(wordDict);
    boolean[] dp = new boolean[s.length() + 1];
    dp[0] = true;
    
    for (int i = 1; i <= s.length(); i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && dict.contains(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length()];
}`,
      pythonCode: `
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    word_set = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    
    return dp[len(s)]`
    },
    {
      id: 30,
      title: "Minimum Window Substring",
      difficulty: "Hard",
      category: "Strings",
      description: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
      javaCode: `
public String minWindow(String s, String t) {
    if (s.length() == 0 || t.length() == 0) return "";
    
    Map<Character, Integer> dictT = new HashMap<>();
    for (char c : t.toCharArray()) {
        dictT.put(c, dictT.getOrDefault(c, 0) + 1);
    }
    
    int required = dictT.size();
    int l = 0, r = 0;
    int formed = 0;
    
    Map<Character, Integer> windowCounts = new HashMap<>();
    int[] ans = {-1, 0, 0}; // length, left, right
    
    while (r < s.length()) {
        char c = s.charAt(r);
        windowCounts.put(c, windowCounts.getOrDefault(c, 0) + 1);
        
        if (dictT.containsKey(c) && windowCounts.get(c).intValue() == dictT.get(c).intValue()) {
            formed++;
        }
        
        while (l <= r && formed == required) {
            c = s.charAt(l);
            
            if (ans[0] == -1 || r - l + 1 < ans[0]) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }
            
            windowCounts.put(c, windowCounts.get(c) - 1);
            if (dictT.containsKey(c) && windowCounts.get(c).intValue() < dictT.get(c).intValue()) {
                formed--;
            }
            
            l++;
        }
        
        r++;
    }
    
    return ans[0] == -1 ? "" : s.substring(ans[1], ans[2] + 1);
}`,
      pythonCode: `
def minWindow(self, s: str, t: str) -> str:
    if not t or not s:
        return ""
    
    dict_t = Counter(t)
    required = len(dict_t)
    
    # Filter all the characters from s into a new list along with their index
    filtered_s = [(i, char) for i, char in enumerate(s) if char in dict_t]
    
    l, r = 0, 0
    formed = 0
    window_counts = {}
    
    ans = float("inf"), None, None
    
    while r < len(filtered_s):
        character = filtered_s[r][1]
        window_counts[character] = window_counts.get(character, 0) + 1
        
        if window_counts[character] == dict_t[character]:
            formed += 1
        
        while l <= r and formed == required:
            character = filtered_s[l][1]
            
            # Save smallest window until now
            end = filtered_s[r][0]
            start = filtered_s[l][0]
            if end - start + 1 < ans[0]:
                ans = (end - start + 1, start, end)
            
            window_counts[character] -= 1
            if window_counts[character] < dict_t[character]:
                formed -= 1
            l += 1    
        
        r += 1    
    return "" if ans[0] == float("inf") else s[ans[1]: ans[2] + 1]`
    }
  ];

  const totalPages = Math.ceil(dsaQuestions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = dsaQuestions.slice(startIndex, endIndex);
  const toggleQuestion = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Top 100 DSA Interview Questions</h1>
            <p className="text-gray-600 text-lg mb-8">
              Master the most important Data Structures and Algorithms questions with detailed explanations
              and code samples in Java and Python.
            </p>
          </div>

          <div className="space-y-6">
            {currentQuestions.map(question => <Card key={question.id} className="transform transition-all duration-300 hover:shadow-lg animate-fade-in-slow">
                <CardHeader className="cursor-pointer" onClick={() => toggleQuestion(question.id)}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {question.id}. {question.title}
                      </CardTitle>
                      <div className="flex gap-2 mt-2">
                        <span className={`text-sm px-2 py-1 rounded-full ${question.difficulty === "Easy" ? "bg-green-100 text-green-700" : question.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
                          {question.difficulty}
                        </span>
                        <span className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                          {question.category}
                        </span>
                      </div>
                    </div>
                    {expandedQuestion === question.id ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
                  </div>
                </CardHeader>

                {expandedQuestion === question.id && <CardContent className="animate-accordion-down">
                    <div className="space-y-4">
                      <p className="text-gray-700">{question.description}</p>
                      
                      <Tabs defaultValue="java" className="w-full">
                        <TabsList>
                          <TabsTrigger value="java">Java</TabsTrigger>
                          <TabsTrigger value="python">Python</TabsTrigger>
                        </TabsList>
                        <TabsContent value="java">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <code>{question.javaCode}</code>
                          </pre>
                        </TabsContent>
                        <TabsContent value="python">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <code>{question.pythonCode}</code>
                          </pre>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </CardContent>}
              </Card>)}
          </div>

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className={currentPage === 1 ? "pointer-events-none opacity-50" : ""} />
              </PaginationItem>
              
              {Array.from({
              length: totalPages
            }, (_, i) => i + 1).map(page => <PaginationItem key={page}>
                  <PaginationLink href="#" onClick={() => setCurrentPage(page)} isActive={currentPage === page}>
                    {page}
                  </PaginationLink>
                </PaginationItem>)}

              <PaginationItem>
                <PaginationNext href="#" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <Footer />
    </div>;
};

export default DSAQuestions;
