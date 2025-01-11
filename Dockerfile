# Build Stage
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Prune devDependencies to reduce image size
RUN npm prune --production

# Production Stage
FROM node:18-slim AS runner

# Set working directory
WORKDIR /app

# Install tini for better process handling
RUN apt-get update && apt-get install -y tini && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy only necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Use tini as the entrypoint for better signal handling
ENTRYPOINT ["/usr/bin/tini", "--"]

# Start the Next.js application
CMD ["npm", "run", "start"]
