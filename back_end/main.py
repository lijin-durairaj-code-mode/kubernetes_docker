from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/user/{details}")
def read_item(details):
    print(details)
    return {"detaails": details}
