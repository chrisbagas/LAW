FROM python:3.9-slim-buster

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /django

# Copy requirements.txt file to container and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the rest of the application code to the container
COPY . .

# Expose port 8000 for the Gunicorn server
EXPOSE 8000

# Run Gunicorn server when the container starts
CMD ["run", "python3", "manage.py", "runserver", "0.0.0.0:8000"]