# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Függőségek másolása és telepítése
COPY package*.json ./
RUN npm ci

# Forráskód másolása
COPY . .

# Környezeti változók beállítása
ARG CONTACT_EMAIL
ARG RESEND_API_KEY
ENV CONTACT_EMAIL=$CONTACT_EMAIL
ENV RESEND_API_KEY=$RESEND_API_KEY

# Alkalmazás buildelése
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Csak a szükséges fájlok másolása
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Környezeti változók beállítása
ARG CONTACT_EMAIL
ARG RESEND_API_KEY
ENV CONTACT_EMAIL=$CONTACT_EMAIL
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV NODE_ENV=production
ENV PORT=3000

# Alkalmazás portjának megnyitása
EXPOSE 3000

# Alkalmazás indítása
CMD ["node", "server.js"]