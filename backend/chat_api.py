import os

import requests
from flask import Blueprint, jsonify, request

chat_bp = Blueprint("chat_bp", __name__)


def local_chat_response(user_message):
    lower_message = user_message.lower()

    keyword_responses = {
        "array": "An array stores elements in contiguous memory and supports fast index-based access. Common operations are traversal, insertion, deletion, and searching.",
        "linked list": "A linked list is made of nodes where each node stores data and a pointer to the next node. It is good for insertions and deletions but slower for random access.",
        "stack": "A stack follows LIFO: last in, first out. Typical operations are push, pop, peek, and checking whether the stack is empty.",
        "queue": "A queue follows FIFO: first in, first out. Typical operations are enqueue, dequeue, and front/peek.",
        "tree": "A tree is a hierarchical data structure. In DSA, binary trees and binary search trees are common interview topics.",
        "graph": "A graph is made of vertices and edges. Core techniques include BFS, DFS, shortest path, and topological sort.",
        "sort": "Popular sorting algorithms include bubble sort, insertion sort, merge sort, quicksort, and heap sort. Their tradeoffs usually depend on time complexity, space, and stability.",
        "recursion": "Recursion solves a problem by calling the same function on smaller subproblems. A good recursive solution needs a clear base case and a shrinking recursive step.",
        "binary search": "Binary search works on sorted data. Compare with the middle element and discard half of the search space each step, giving O(log n) time.",
        "dynamic programming": "Dynamic programming is useful when a problem has overlapping subproblems and optimal substructure. Think in terms of state, transition, and base cases.",
    }

    for keyword, response in keyword_responses.items():
        if keyword in lower_message:
            return response

    return (
        "Local chatbot fallback is active because GEMINI_API_KEY is not set. "
        "I can still help with DSA topics like arrays, linked lists, stacks, trees, graphs, sorting, recursion, binary search, and dynamic programming."
    )


@chat_bp.route("/chat", methods=["POST"])
def chat():
    data = request.get_json() or {}
    user_message = data.get("message", "")
    gemini_api_key = os.getenv("GEMINI_API_KEY")

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    if not gemini_api_key:
        return jsonify({"response": local_chat_response(user_message), "source": "local"}), 200

    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
    payload = {"contents": [{"parts": [{"text": user_message}]}]}

    try:
        response = requests.post(
            url,
            params={"key": gemini_api_key},
            json=payload,
            timeout=30,
        )

        result = response.json()

        if response.status_code >= 400:
            return jsonify({"error_from_gemini": result}), response.status_code

        if "candidates" not in result:
            return jsonify({"error_from_gemini": result}), 500

        reply = result["candidates"][0]["content"]["parts"][0]["text"]
        return jsonify({"response": reply, "source": "gemini"}), 200
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500
