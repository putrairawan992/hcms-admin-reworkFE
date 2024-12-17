# Gunakan image Node.js resmi dengan versi Alpine untuk build
FROM node:20-alpine

# Set working directory di dalam container
WORKDIR /app

# Perbarui npm ke versi terbaru
RUN npm install -g npm@latest

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi (misalnya untuk aplikasi Next.js)
RUN npm run build

# Tentukan port yang digunakan aplikasi
EXPOSE 3000

# Jalankan aplikasi di container
CMD ["npm", "run", "start"]
