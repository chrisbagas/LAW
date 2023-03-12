FROM node:15.13-alpine
WORKDIR /react

COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose port 3000 for the application to listen on
EXPOSE 3000

# Start the application when the container is started
CMD ["npm", "start"]