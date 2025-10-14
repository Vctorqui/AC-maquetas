# 📚 Trabajos Escolares - Landing Page

Landing page profesional para servicios de trabajos escolares personalizados, diseñada con Next.js 15, React 19, TypeScript y Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8)

## 🌟 Características

- ✨ **Diseño moderno y responsivo** - Optimizado para todos los dispositivos
- 🎨 **UI/UX profesional** - Componentes de Radix UI y shadcn/ui
- 🚀 **Rendimiento optimizado** - App Router de Next.js 15
- 📱 **WhatsApp flotante** - Botón de contacto directo siempre visible
- 🖼️ **Galería de servicios** - Modales interactivos con imágenes
- 💬 **Testimonios** - Reseñas de clientes satisfechos
- ❓ **FAQ interactivo** - Preguntas frecuentes con acordeón
- 📊 **Portfolio dinámico** - Showcase de proyectos realizados
- 🎯 **CTA estratégicos** - Llamados a la acción optimizados para conversión

## 🛠️ Tecnologías

### Core
- **[Next.js 15](https://nextjs.org/)** - Framework de React con App Router
- **[React 19](https://react.dev/)** - Biblioteca de UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework de CSS utility-first

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Componentes accesibles sin estilos
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizables
- **[Lucide React](https://lucide.dev/)** - Iconos modernos

## 📁 Estructura del Proyecto

```
school-projects-website/
├── app/                      # App Router de Next.js
│   ├── page.tsx             # Página principal
│   ├── layout.tsx           # Layout raíz
│   └── globals.css          # Estilos globales
├── components/              # Componentes React
│   ├── sections/            # Secciones de la landing
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Servicios ofrecidos
│   │   ├── Portfolio.tsx    # Galería de trabajos
│   │   ├── ChooseUs.tsx     # Por qué elegirnos
│   │   ├── HowWorks.tsx     # Cómo funciona el proceso
│   │   ├── Testimonials.tsx # Testimonios de clientes
│   │   ├── Faq.tsx          # Preguntas frecuentes
│   │   └── Cta.tsx          # Call to action
│   ├── shared/              # Componentes compartidos
│   │   ├── WhatsAppFloat.tsx # Botón flotante de WhatsApp
│   │   ├── GalleryModal.tsx  # Modal de galería
│   │   └── CustomIcons.tsx   # Iconos personalizados
│   └── ui/                  # Componentes base (shadcn)
├── layout/                  # Layouts de la aplicación
│   ├── PublicLayout.tsx     # Layout público principal
│   ├── Header.tsx           # Encabezado/navegación
│   └── Footer.tsx           # Pie de página
├── utils/                   # Utilidades y constantes
│   ├── const.ts             # Constantes generales
│   ├── services/            # Datos de servicios
│   └── gallery/             # Datos de galerías
├── lib/                     # Configuraciones de librerías
├── hooks/                   # Custom hooks
├── styles/                  # Estilos adicionales
└── public/                  # Archivos estáticos

```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado), npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd school-projects-website
```

2. Instala las dependencias:
```bash
pnpm install
# o
npm install
# o
yarn install
```

3. Ejecuta el servidor de desarrollo:
```bash
pnpm dev
# o
npm run dev
# o
yarn dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📝 Scripts Disponibles

```bash
pnpm dev      # Inicia el servidor de desarrollo
pnpm build    # Construye la aplicación para producción
pnpm start    # Inicia el servidor de producción
pnpm lint     # Ejecuta el linter
```

## ⚙️ Configuración

### Personalizar Contenido

Edita los archivos de constantes en `utils/`:

- **`utils/const.ts`** - Información general, testimonios, portfolio
- **`utils/services/services.const.ts`** - Servicios ofrecidos
- **`utils/gallery/gallery.const.ts`** - Galerías de imágenes


## 🎨 Personalización de Estilos

Los estilos se pueden personalizar en:
- `app/globals.css` - Variables CSS y estilos globales
- `tailwind.config.ts` - Configuración de Tailwind CSS

## 📦 Componentes Principales

### Hero Section
Sección principal con CTA y estadísticas destacadas.

### Services
Grid de servicios con modales de galería interactivos.

### Portfolio
Galería de proyectos realizados con descripciones detalladas.

### Testimonials
Tarjetas de testimonios de clientes satisfechos.

### FAQ
Acordeón interactivo con preguntas frecuentes.

### WhatsApp Float
Botón flotante siempre visible para contacto directo.

## 🌐 Despliegue

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Despliega automáticamente

## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados © 2025 Victor Quiñones.

## 👨‍💻 Autor

**Victor Quiñones**

Hecho con ❤️ usando Next.js y React

