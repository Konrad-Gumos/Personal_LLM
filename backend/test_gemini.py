import google.generativeai as genai

genai.configure(api_key="AIzaSyAFVEN907ZZXwadabmltnj9vz4DNgjheoQ")

model = genai.GenerativeModel("models/gemini-2.0-flash")
response = model.generate_content("Powiedz coś miłego.")
print(response.text)
