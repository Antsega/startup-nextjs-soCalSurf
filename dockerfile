# Use an official Node.js runtime as a parent image
FROM node:16.8-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the Next.js app
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
