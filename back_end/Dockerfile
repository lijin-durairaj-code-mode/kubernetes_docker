#BASE image
FROM python:3.11-slim
#HOME dir
WORKDIR /app
#COPY files
COPY requirements.txt .

#RUN 
RUN pip install -r /app/requirements.txt
COPY . .

#COMMAND
CMD ["uvicorn","main:app","--host","0.0.0.0","--port","8000"]