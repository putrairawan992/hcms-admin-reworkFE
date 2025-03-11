# Gunakan Node.js versi resmi berbasis Debian sebagai base image untuk build
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package.json package-lock.json ./

# Instal dependencies
RUN npm install

# Salin seluruh project ke dalam container
COPY . .

# Jalankan linting untuk memastikan kode sesuai standar (opsional)
RUN npm run lint || echo "Linting skipped"

# Build aplikasi untuk produksi
RUN npm run build

# Gunakan Node.js versi resmi untuk runtime
FROM node:18

# Set working directory
WORKDIR /app

# Salin build dari tahap builder
COPY --from=builder /app /app

# Instal hanya dependencies produksi
RUN npm install --production

# Expose port yang akan digunakan
EXPOSE 3000

# Command default untuk menjalankan aplikasi
CMD ["npm", "start"]
