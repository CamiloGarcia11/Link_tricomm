# TRICOM Telecomunicaciones — Bio Link Page (Linktree)

Aplicación web ultra-optimizada tipo **Bio Link Page (Linktree)** para **TRICOM telecomunicaciones**, diseñada con arquitectura Clean Telecom Tech y optimizada específicamente para **reducir a cero el Fast Origin Transfer y minimizar al máximo el Data Transfer en Vercel**.

---

## ⚡ ¿Cómo se optimizó para Vercel (Fast Origin y Data Transfer)?

Vercel factura y aplica límites estrictos sobre dos métricas críticas:
1. **Fast Origin Transfer (Transferencia de Origen):** Ocurre cuando se ejecutan funciones serverless (SSR, APIs o el optimizador dinámico de imágenes `/_next/image`).
2. **Data Transfer (Ancho de banda saliente):** Total de megabytes/gigabytes enviados a los visitantes.

### Medidas de optimización implementadas:

| Optimización | Antes | Ahora | Impacto en Vercel |
| :--- | :--- | :--- | :--- |
| **Arquitectura de Despliegue** | SSR / Serverless functions | **Static HTML Export (`output: 'export'`)** | **0 invocaciones serverless.** Cero costo de compute y **0 Fast Origin Transfer** derivado de lambdas. |
| **Optimización de Logo** | PNG original sin procesar (253 KB) | **WebP pre-comprimido (8.1 KB) + PNG (11.1 KB)** | **Reducción del 97%** en peso de la imagen. |
| **Servicio de Imágenes** | Función Serverless `_next/image` | **Direct Static Serve con `<picture>`** | No consume cuota de Vercel Image Optimization ni genera origin calls. |
| **Motor de Animaciones** | Framer Motion (librería JS pesada ~40 KB) | **Animaciones CSS en GPU con `@keyframes`** | **0 KB de JavaScript en runtime**, animaciones fluidas a 120fps y FCP instantáneo. |
| **Tamaño de Ruta Next.js** | 54.5 KB de bundle inicial | **7.88 KB** | **Ahorro de ~85% de ancho de banda** por cada visitante. |
| **Cabeceras de Caché (`vercel.json`)** | Caché por defecto | `Cache-Control: public, max-age=31536000, immutable` | Vercel Edge CDN almacena los assets y los navegadores no vuelven a descargar nada en visitas repetidas. |

---

## 🚀 Características Principales

- **Framework:** Next.js 15 (App Router) con TypeScript y Static Export.
- **Estilos:** Tailwind CSS con paleta corporativa TRICOM (`#EA4F1D`, `#7D8082`, `#1E293B`, `#25D366`).
- **Iconografía:** `lucide-react` y SVG oficial de WhatsApp.
- **Tipografía:** Google Fonts auto-hospedadas vía `next/font/google` (`Plus Jakarta Sans` e `Inter` en formato woff2).
- **Acciones Rápidas (UX):**
  - Botón principal de enlace directo a la API de WhatsApp con mensajes predeterminados personalizados.
  - Microbotón secundario de copia de número al portapapeles con micro-toast flotante de confirmación.
- **Canales Oficiales:**
  - 📍 **Sede Chinácota:** 315 670 3381
  - 📍 **Sede El Zulia:** 300 323 9896
  - 📍 **Sede Cúcuta:** 318 243 3579
  - ⚡ **Soporte Técnico Especializado:** 317 642 6833 (Destacado prioritario)
- **Footer Corporativo:** Derechos reservados y botón tipo píldora a **[VisionWeb](https://visionwebcl.pages.dev)**.

---

## 📁 Estructura del Proyecto

```text
├── app/
│   ├── globals.css          # Animaciones CSS en GPU y variables de color
│   ├── layout.tsx           # Configuración de fuentes y Metadata SEO / OpenGraph
│   └── page.tsx             # Página principal ultra-ligera
├── components/
│   ├── BackgroundDecor.tsx  # Resplandor radial y malla tecnológica
│   ├── ContactCard.tsx      # Tarjeta interactiva con WhatsApp + Copia rápida
│   ├── Footer.tsx           # Derechos reservados y badge de VisionWeb
│   ├── Header.tsx           # Logo WebP, badge de fibra y bienvenida
│   ├── Toast.tsx            # Micro-toast de notificación de copia (CSS transitions)
│   └── WhatsAppIcon.tsx     # SVG oficial de WhatsApp
├── data/
│   └── channels.ts          # Datos centralizados de sedes y números
├── public/
│   ├── logo-tricom.webp     # Logo ultra-ligero WebP (8.1 KB)
│   ├── logo-tricom.png      # Fallback PNG optimizado (11.1 KB)
│   └── favicon-64.png       # Favicon e icono de aplicación (2.3 KB)
├── next.config.ts           # Configurado con output: 'export'
├── vercel.json              # Reglas de caché estricta para Vercel Edge CDN
├── tailwind.config.ts       # Clases de utilidad y keyframes de aceleración por hardware
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias optimizadas sin librerías pesadas
```

---

## 🚢 Cómo Desplegar en Vercel

### Opción 1: Conectando a GitHub (Recomendado)
El proyecto ya está vinculado y actualizado en tu repositorio:
`https://github.com/CamiloGarcia11/Link_tricomm`

En [vercel.com](https://vercel.com), pulsa **"Add New Project"**, importa el repositorio y pulsa **Deploy**.
*(Vercel compilará automáticamente usando el export estático preconfigurado).*

### Opción 2: Despliegue directo por terminal (Sin GitHub)
Ejecuta:
```bash
npx.cmd vercel
```
Inicia sesión con tu cuenta de Vercel y acepta los valores por defecto. En menos de 30 segundos tu sitio estará en producción.

---

## 📄 Créditos
- **Cliente:** TRICOM Telecomunicaciones
- **Desarrollo:** [VisionWeb](https://visionwebcl.pages.dev)
