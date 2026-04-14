import React, { useState } from "react";
import CopyButton from "../../components/CopyButton";


const codeSnippets = {
  
  
  Python: `# Insertion
arr = [1, 2, 4, 5]
arr.insert(2, 3)  # insert 3 at index 2
print(arr)

# Deletion
arr.remove(4)  # remove element with value 4
print(arr)

# Searching
x = 5
if x in arr:
    print(f"{x} found at index", arr.index(x))
else:
    print(f"{x} not found")`,

  Java: `// Insertion, Deletion, Searching
import java.util.*;
class ArrayOps {
    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>(Arrays.asList(1, 2, 4, 5));
        
        // Insertion
        arr.add(2, 3);
        System.out.println(arr);
        
        // Deletion
        arr.remove(Integer.valueOf(4));
        System.out.println(arr);
        
        // Searching
        int x = 5;
        if (arr.contains(x)) {
            System.out.println(x + " found at index " + arr.indexOf(x));
        } else {
            System.out.println(x + " not found");
        }
    }
}`,

  C: `#include <stdio.h>
int main() {
    int arr[10] = {1, 2, 4, 5};
    int size = 4;

    // Insertion at index 2
    for (int i = size; i > 2; i--) {
        arr[i] = arr[i - 1];
    }
    arr[2] = 3;
    size++;

    // Printing array
    for (int i = 0; i < size; i++) printf("%d ", arr[i]);
    printf("\\n");

    // Deletion of element 4
    int delIndex = -1;
    for (int i = 0; i < size; i++) {
        if (arr[i] == 4) { delIndex = i; break; }
    }
    if (delIndex != -1) {
        for (int i = delIndex; i < size - 1; i++) {
            arr[i] = arr[i + 1];
        }
        size--;
    }
    for (int i = 0; i < size; i++) printf("%d ", arr[i]);
    printf("\\n");

    // Searching for element 5
    int found = 0;
    for (int i = 0; i < size; i++) {
        if (arr[i] == 5) { printf("5 found at index %d\\n", i); found = 1; break; }
    }
    if (!found) printf("5 not found\\n");

    return 0;
}`,

  "C++": `#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int> arr = {1, 2, 4, 5};

    // Insertion
    arr.insert(arr.begin() + 2, 3);
    for (int x : arr) cout << x << " ";
    cout << "\\n";

    // Deletion
    arr.erase(remove(arr.begin(), arr.end(), 4), arr.end());
    for (int x : arr) cout << x << " ";
    cout << "\\n";

    // Searching
    int x = 5;
    auto it = find(arr.begin(), arr.end(), x);
    if (it != arr.end())
        cout << x << " found at index " << distance(arr.begin(), it) << "\\n";
    else
        cout << x << " not found\\n";

    return 0;
}`
};

export default function CodeTabs() {
  const [selectedLang, setSelectedLang] = useState("Python");

  const codeToCopy = codeSnippets[selectedLang];

  return (
    <div className="mt-8">
      {/* Language Tabs */}
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

      {/* Code Block */}
      <div className="relative bg-[#1E1E1E] rounded-lg overflow-x-auto">
        {/* Copy Button */}
        <div className="absolute top-2 right-2">
          <CopyButton textToCopy={codeToCopy} />
        </div>

        <pre className="p-4 text-sm text-[#00FFFF]">
          <code>{codeToCopy}</code>
        </pre>
      </div>
    </div>
  );
}