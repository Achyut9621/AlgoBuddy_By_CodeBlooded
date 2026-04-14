import requests

API_KEY = "your_api_key"
model = "gemini-1.5-flash"  
url = f"https://generativelanguage.googleapis.com/v1/models/{model}:generateContent?key={API_KEY}"

data = {
    "contents": [
        {"parts": [{"text": "Hello"}]}
    ]
}
response = requests.post(url, json=data)

print("Status Code:", response.status_code)
print("Response:", response.json())
