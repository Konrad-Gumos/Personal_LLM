# from openai import OpenAI
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Ładowanie .env
load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-pro")

async def generate_text(prompt: str, style: str) -> str:

    print(prompt)
    print(style)

    full_prompt = f"""Na podstawie poniższego stylu wypowiedzi użytkownika:

{style}

Wygeneruj tekst odpowiadający temu stylowi, odpowiadając na prośbę:
"{prompt}"
"""

    print(full_prompt, flush=True)

    response = await model.generate_content_async(full_prompt)

    if response and hasattr(response, "text"):
        return response.text
    return "Nie udało się wygenerować odpowiedzi"