# Menggunakan image Node.js sebagai base image
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Menyalin file package.json dan package-lock.json
COPY package*.json ./

# Menginstall dependensi
RUN npm install --production

# Menyalin sisa aplikasi
COPY . .

# Build aplikasi Next.js
RUN npm run build

# -----------------------------------------------
# Stage untuk menjalankan aplikasi
# -----------------------------------------------
FROM node:18 AS runner

# Set working directory
WORKDIR /app

# Menyalin hasil build dari stage builder
COPY --from=builder /app ./

# Mengatur port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan aplikasi
CMD ["npm", "start"]
