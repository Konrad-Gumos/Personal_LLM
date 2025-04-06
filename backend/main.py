from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from backend.llm import generate_text

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Zgódź się na połączenia z Reacta
    allow_methods=["*"],                     # Pozwól na GET, POST itd.
    allow_headers=["*"]                      # Pozwól na custom nagłówki
)

class GenerateRequest(BaseModel):
    style_examples: str
    prompt: str

@app.post("/generate")
async def generate(req: GenerateRequest):
    print('endpoint odpalony',flush=True)
    response = await generate_text(req.prompt, req.style_examples)
    print('result:',response,flush=True)
    return {"generated": response}
