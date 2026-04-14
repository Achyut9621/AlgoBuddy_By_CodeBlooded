import React, { useState } from "react";

const codeSnippets = {
  Python: `# Stack using list
stack = []
stack.append(1)  # push
stack.append(2)
print(stack.pop())  # pop
print(stack[-1])   # peek`,
  
  Java: `import java.util.*;
class StackOps {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        System.out.println(stack.pop()); // pop
        System.out.println(stack.peek()); // peek
    }
}`,

  C: `#include <stdio.h>
#define MAX 100
int stack[MAX], top = -1;
void push(int x) { if (top < MAX-1) stack[++top] = x; }
int pop() { return (top >= 0) ? stack[top--] : -1; }
int peek() { return (top >= 0) ? stack[top] : -1; }
int main() {
    push(1); push(2);
    printf("%d\\n", pop());
    printf("%d\\n", peek());
    return 0;
}`,

  "C++": `#include <iostream>
#include <stack>
using namespace std;
int main() {
    stack<int> st;
    st.push(1);
    st.push(2);
    cout << st.top() << endl; st.pop();
    cout << st.top() << endl;
    return 0;
}`
};

export default function StackCodeTabs() {
  const [selectedLang, setSelectedLang] = useState("Python");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mt-8">
      {/* Language buttons */}
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
          className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-[#00FFFF] text-black rounded-md hover:bg-[#00CCCC] transition"
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
