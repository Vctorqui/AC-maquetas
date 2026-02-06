# 📐 AC MAQUETAS - Adnan Chleiwit

Landing page técnica y profesional para **AC MAQUETAS (Adnan Chleiwit)**, especializada en la creación de maquetas, láminas y proyectos escolares de alto nivel. Implementada con un estilo **Moderno Isométrico** único.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8)

## 🧊 Sistema de Diseño: Moderno Isométrico

Esta landing page destaca por su arquitectura visual basada en la profundidad y la geometría:

- **Perspectiva 3D**: Uso de transformaciones CSS para simular planos isométricos reales.
- **Long Shadows**: Sombras sólidas y técnicas que refuerzan la sensación de volumen y fisicalidad.
- **Grid de Ingeniería**: Fondo de rejilla isométrica (`bg-iso-grid`) que evoca planos de diseño.
- **Estética Industrial**: Bordes gruesos (8px), tipografía técnica en mayúsculas y acabado "blocky".

## 🌟 Características

- ✨ **Interfaz 3D Dinámica** - Elementos que reaccionan al hover con efectos de presión y profundidad.
- 🎨 **Paleta de Marca** - Basada estrictamente en la identidad de AC Maquetas (Azul #1B5A8E y Naranja #F39C12).
- 🚀 **Rendimiento de Próxima Generación** - Construido sobre Next.js 15 y React 19.
- 🖼️ **Galería Técnica** - Visualizador de fotos con bordes industriales y nomenclaturas de vista.
- 📱 **WhatsApp 3D** - Botón flotante transformado en un bloque sólido persistente.
- 💬 **Testimonios en Bloques** - Reseñas estilizadas como módulos de construcción.

## 🛠️ Tecnologías

### Core

- **[Next.js 15](https://nextjs.org/)** - App Router y Server Components.
- **[React 19](https://react.dev/)** - Últimas características de concurrencia.
- **[TypeScript](https://www.typescriptlang.org/)** - Desarrollo robusto y tipado.
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Estilizado moderno con variables dinámicas.

### UI & UX

- **[Lucide React](https://lucide.dev/)** - Iconografía técnica.
- **Framer Motion (opcional)** - Micro-interacciones (si se incluyen).
- **Custom Isometric Engine** - Utilidades personalizadas en `globals.css` para CSS 3D.

## 📁 Estructura del Proyecto

```
AC-maquetas/
├── app/                      # Configuración de rutas y estilos globales
│   ├── globals.css          # Core del diseño isométrico (Variables 3D)
│   └── page.tsx             # Composición de la landing
├── components/              # Arquitectura de componentes
│   ├── sections/            # Bloques principales (Hero, Portfolio, etc.)
│   ├── shared/              # Elementos reutilizables (Gallery, WhatsApp)
│   └── ui/                  # Componentes base (shadcn/ui adaptados)
├── layout/                  # Estructura de Header y Footer 3D
├── public/                  # Assets, incluyendo ac-logo.svg
└── utils/                   # Datos estáticos y constantes de marca
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado), npm o yarn

### Instalación

1. Clona el repositorio:

```bash
git clone <repository-url>
cd AC-maquetas
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Ejecuta en desarrollo:

```bash
pnpm dev
```

## 📦 Componentes Destacados

### Header 3D

Módulo geométrico con el logo de AC Maquetas integrado en un bloque físico con sombras proyectadas.

### Hero Perspective

Uso de `perspective-container` y `isometric-view` para presentar estadísticas en un plano inclinado real.

### Portfolio Industrial

Galería con bordes de 8px y overlays técnicos que revelan detalles del proyecto al pasar el cursor.

### CTA Masivo

Bloque de alto impacto con tipografía técnica y botones escalados que simulan una pulsación mecánica.

## 👨‍💻 Autor

Desarrollado por [Mi](https://github.com/Vctorqui) para elevar la presencia digital de **AC Maquetas**.
