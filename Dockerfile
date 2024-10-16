# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies including tailwindcss
RUN npm install tailwindcss
RUN npm install --production

# Copy the rest of your application code
COPY . .

# Build your application
RUN npm run build

# Expose the desired port (if applicable)
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
