# Taxímetro Aranda · Lic. 12 — Guía de instalación como APK

## Estructura de archivos
```
taxi-pwa/
├── index.html        ← La app completa
├── manifest.json     ← Configuración PWA
├── sw.js             ← Service Worker (cache + offline)
├── icons/            ← Iconos en todos los tamaños
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── README.md         ← Este archivo
```

---

## PASO 1 — Subir a GitHub Pages (gratis, 10 minutos)

### 1.1 Crear cuenta en GitHub
Si no tienes cuenta: https://github.com/signup (es gratis)

### 1.2 Crear repositorio nuevo
1. Ir a https://github.com/new
2. Nombre del repositorio: `taxi-aranda` (o el que quieras)
3. Marcar como **Public** (necesario para GitHub Pages gratis)
4. Pulsar **Create repository**

### 1.3 Subir los archivos
En la página del repositorio vacío:
1. Pulsar **uploading an existing file**
2. Arrastrar TODOS los archivos y la carpeta `icons/` completa
3. Pulsar **Commit changes**

### 1.4 Activar GitHub Pages
1. En el repositorio → **Settings** → **Pages** (menú lateral)
2. Source: **Deploy from a branch**
3. Branch: **main** / carpeta: **/ (root)**
4. Pulsar **Save**
5. Esperar 2-3 minutos
6. La URL de tu app será: `https://TU_USUARIO.github.io/taxi-aranda/`

---

## PASO 2 — Generar el APK con PWABuilder

1. Ir a **https://www.pwabuilder.com**
2. Introducir tu URL: `https://TU_USUARIO.github.io/taxi-aranda/`
3. Pulsar **Start**
4. PWABuilder analizará la app (debe dar puntuación alta)
5. Pulsar **Package for stores**
6. Seleccionar **Android**
7. Pulsar **Generate Package**
8. Descargar el archivo `.apk`

---

## PASO 3 — Instalar el APK en el móvil Android

1. Enviar el `.apk` al móvil (WhatsApp, email, cable USB…)
2. En el móvil: **Ajustes → Seguridad → Orígenes desconocidos** → Activar
   (o en Android 8+: Ajustes → Apps → Chrome → Instalar apps desconocidas → Permitir)
3. Abrir el archivo `.apk` desde el móvil
4. Pulsar **Instalar**
5. La app aparecerá en el launcher como cualquier app nativa

---

## Alternativa: instalar directamente sin APK (más rápido)

Sin necesidad de APK, en Chrome Android:
1. Abrir `https://TU_USUARIO.github.io/taxi-aranda/` en Chrome
2. Menú (⋮) → **Añadir a pantalla de inicio**
3. La app se instala como nativa, con icono y pantalla completa

---

## Notas importantes

- **GPS**: La app requiere permiso de ubicación. En el móvil Android instalado
  como PWA o APK, el permiso persiste entre sesiones.
- **Offline**: La app funciona sin conexión una vez cargada por primera vez
  (gracias al Service Worker). El QR y los mapas requieren conexión.
- **Actualizar la app**: Si haces cambios en los archivos y los subes a GitHub,
  la app se actualiza automáticamente la próxima vez que se abra con conexión.
- **Google Play**: Si quieres publicarla en Google Play, PWABuilder también
  genera el formato `.aab` necesario. Requiere cuenta de desarrollador (25€ una vez).

---

## Soporte

App desarrollada específicamente para:
**RAQUEL BRAVO GONZÁLEZ · DNI 45.421.517-J**
Licencia Nº 12 · Aranda de Duero (Burgos)
