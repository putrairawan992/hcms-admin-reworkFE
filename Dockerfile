# Gunakan image Node.js sebagai base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package.json package-lock.json ./

# Instal dependencies, termasuk devDependencies agar semua modul tersedia
RUN npm install

# Tambahkan instalasi modul tambahan jika diperlukan
RUN npm install tailwindcss sharp

# Salin seluruh project ke dalam container
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Expose port yang akan digunakan
EXPOSE 3000

# Command default untuk menjalankan aplikasi
CMD ["npm", "start"]
