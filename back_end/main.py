from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from starlette.middleware.sessions import SessionMiddleware
from pydantic import BaseModel


class user_information(BaseModel):
    name: str
    email: str
    query: str


app = FastAPI()

origins = ["http://localhost:4200"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(SessionMiddleware, secret_key="super-secret-key")


@app.get("/")
def read_root(request: Request):
    session = request.session
    users = session.get("users_data", [])
    return users


@app.post("/add_user")
def add_user_data(request: Request, user_data: user_information):
    session = request.session

    users = session.get("users_data", [])

    users.append(user_data.dict())

    session["users_data"] = users
    return {"user": users}
