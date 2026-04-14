import React, { useState } from "react";

const notesData = {
  basics_of_DSA:`Data Definition
Data Definition defines a particular data with the following characteristics.

Atomic − Definition should define a single concept.

Traceable − Definition should be able to be mapped to some data element.

Accurate − Definition should be unambiguous.

Clear and Concise − Definition should be understandable.

Data Object
Data Object represents an object having a data.

Data Type
Data type is a way to classify various types of data such as integer, string, etc. which determines the values that can be used with the corresponding type of data, the type of operations that can be performed on the corresponding type of data. There are two data types −

Built-in Data Type
Derived Data Type
Built-in Data Type
Those data types for which a language has built-in support are known as Built-in Data types. For example, most of the languages provide the following built-in data types.

Integers
Boolean (true, false)
Floating (Decimal numbers)
Character and Strings
Derived Data Type
Those data types which are implementation independent as they can be implemented in one or the other way are known as derived data types. These data types are normally built by the combination of primary or built-in data types and associated operations on them. For example −

List
Array
Stack
Queue
Basic Operations
The data in the data structures are processed by certain operations. The particular data structure chosen largely depends on the frequency of the operation that needs to be performed on the data structure.

Traversing
Searching
Insertion
Deletion
Sorting
Merging`,
  Array: `
# Array

Array is a collection of items of the same variable type that are stored at contiguous memory locations. It is one of the most popular and simple data structures used in programming.

Basic terminologies of Array
Array Index: In an array, elements are identified by their indexes. Array index starts from 0.
Array element: Elements are items stored in an array and can be accessed by their index.
Array Length: The length of an array is determined by the number of elements it can contain. 
Memory representation of Array
In an array, all the elements are stored in contiguous memory locations. So, if we initialize an array, the elements will be allocated sequentially in memory. This allows for efficient access and manipulation of elements.
## Operations on Array

- Traversing
- Insertion
- Deletion
- Searching
- Sorting

## Advantages

- Random access (constant time)
- Easy to implement

## Disadvantages

- Fixed size (static array)
- Costly insertion/deletion

## Code Example (Insertion in Array in C++)
\`\`\`cpp
void insert(int arr[], int n, int key, int capacity, int index) {
    if (n >= capacity) return;
    for (int i = n-1; i >= index; i--)
        arr[i+1] = arr[i];
    arr[index] = key;
}
\`\`\`
`,

  "Linked List": `
# Linked List

A linked list is a linear data structure where each element is a separate object. Each element (node) of a list is comprising of two items - the data and a reference to the next node.

## Types

- Singly Linked List
- Doubly Linked List
- Circular Linked List

## Advantages

- Dynamic size
- Ease of insertion/deletion

## Disadvantages

- No random access
- Extra memory for pointer

## Code Example (Singly Linked List Node in C++)
\`\`\`cpp
struct Node {
    int data;
    Node* next;
};
\`\`\`
`,
};

export default function Notes() {
  const [selectedTopic, setSelectedTopic] = useState("Array");

  return (
    <div style={{ display: "flex", maxWidth: 900, margin: "auto", padding: 20 }}>
      <nav
        style={{
          width: 200,
          borderRight: "1px solid #ccc",
          paddingRight: 10,
          marginRight: 20,
        }}
      >
        <h3>DSA Topics</h3>
        {Object.keys(notesData).map((topic) => (
          <p
            key={topic}
            style={{
              cursor: "pointer",
              fontWeight: selectedTopic === topic ? "bold" : "normal",
              color: selectedTopic === topic ? "#007bff" : "black",
            }}
            onClick={() => setSelectedTopic(topic)}
          >
            {topic}
          </p>
        ))}
      </nav>
      <article style={{ flex: 1, whiteSpace: "pre-wrap" }}>
        <MarkdownRenderer markdown={notesData[selectedTopic]} />
      </article>
    </div>
  );
}

function MarkdownRenderer({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: markdown
          .replace(/^# (.*$)/gim, "<h1>$1</h1>")
          .replace(/^## (.*$)/gim, "<h2>$1</h2>")
          .replace(/^\`\`\`cpp([\s\S]*?)\`\`\`/gim, (match, code) =>
            `<pre style="background:#f4f4f4;padding:10px;border-radius:5px;"><code>${code}</code></pre>`
          )
          .replace(/^\- (.*$)/gim, "<li>$1</li>")
          .replace(/\n/g, "<br />"),
      }}
    />
  );
}



