import React, { useState } from "react";

const codeSnippets = {
  Python: `# Binary Tree Traversal
class Node:
    def __init__(self, val): self.val, self.left, self.right = val, None, None

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=' ')
        inorder(root.right)

root = Node(1); root.left = Node(2); root.right = Node(3)
inorder(root)`,

  Java: `// Inorder traversal in Java
class Node { int val; Node left, right; Node(int v) { val = v; } }
class Tree {
    void inorder(Node root) {
        if (root != null) {
            inorder(root.left);
            System.out.print(root.val + " ");
            inorder(root.right);
        }
    }
    public static void main(String[] args) {
        Tree t = new Tree();
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        t.inorder(root);
    }
}`,

  C: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node *left, *right; };
void inorder(struct Node* node) {
    if (node) {
        inorder(node->left);
        printf("%d ", node->val);
        inorder(node->right);
    }
}
struct Node* newNode(int v) {
    struct Node* n = malloc(sizeof *n);
    n->val = v; n->left = n->right = NULL; return n;
}
int main() {
    struct Node* root = newNode(1);
    root->left = newNode(2); root->right = newNode(3);
    inorder(root);
    return 0;
}`,

  "C++": `#include <iostream>
using namespace std;
struct Node { int val; Node* left; Node* right; Node(int v):val(v),left(NULL),right(NULL){} };
void inorder(Node* root) {
    if (root) {
        inorder(root->left);
        cout << root->val << " ";
        inorder(root->right);
    }
}
int main() {
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    inorder(root);
    return 0;
}`
};

export default function TreeCodeTabs() {
  const [selectedLang, setSelectedLang] = useState("Python");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mt-8">
      <div className="flex space-x-2 mb-4">
        {Object.keys(codeSnippets).map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={`px-4 py-2 rounded-md font-medium transition ${
              selectedLang === lang
                ? "bg-[#00FFFF] text-black"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Code block with copy button */}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-3 py-1 text-xs rounded-md bg-[#00FFFF] text-black hover:bg-[#00cccc] transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        <pre className="bg-black text-[#00FFFF] p-4 rounded-lg overflow-x-auto text-sm">
          <code>{codeSnippets[selectedLang]}</code>
        </pre>
      </div>
    </div>
  );
}
