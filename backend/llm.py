# from openai import OpenAI
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Ładowanie .env
load_dotenv(dotenv_path="backend/.env")

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("🚨 Brakuje GEMINI_API_KEY w pliku .env!")

genai.configure(api_key=api_key)
model = genai.GenerativeModel("models/gemini-2.0-flash")

async def generate_text(prompt: str, style: str) -> str:
    full_prompt = f"""Based on a user's writing style:

{style}

Generate text based on this style responding to request:
"{prompt}"
"""
    response = model.generate_content(full_prompt)

    if response and hasattr(response, "text"):
        return response.text
    return "Answer could not be generated."