from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from backend.llm import generate_text

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Zgódź się na połączenia z Reacta
    allow_methods=["*"],                     # Pozwól na GET, POST itd.
    allow_headers=["*"]                      # Pozwól na custom nagłówki
)

class GenerateRequest(BaseModel):
    style_examples: str
    prompt: str

@app.post("/generate")
async def generate(req: GenerateRequest):
    response = await generate_text(req.prompt, req.style_examples)
    return {"generated": response}
