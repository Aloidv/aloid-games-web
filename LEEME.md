# Aloid Games · Primera propuesta visual

Web estática en español, adaptable a móvil y sin dependencias. Usa los SVG del logo y el arte y las capturas de Wordhood de las carpetas facilitadas. No se han generado imágenes ni añadido fechas de lanzamiento. No se ha publicado todavía.

## Ver la web

Abre `docs/index.html` en un navegador. También funciona sin conexión. La web no necesita instalación, compilación, una base de datos ni un servidor propio.

## Cambiar los enlaces

Edita `docs/config.js`. Introduce las direcciones completas con `https://` para Steam, Discord, YouTube y el tráiler. Para `email`, introduce solamente el correo real. Los valores vacíos mantienen los marcadores «próximamente», sin enlaces falsos. No hay un formulario que recoja datos.

Los textos están en `docs/index.html`, el diseño en `docs/styles.css` y `docs/themes.css`, y las imágenes en `docs/assets/`. El tráiler está previsto como enlace externo, por lo que no carga vídeos ni cookies de terceros al visitar la página. No se usan fuentes externas ni analítica.

## Tema claro y oscuro

El selector del encabezado permite elegir Automático, Claro u Oscuro. Al entrar por primera vez, Automático sigue la preferencia de color del navegador y responde a sus cambios. Claro y Oscuro permiten una elección manual. Se guarda únicamente esa preferencia en el almacenamiento local del navegador; no se envía a ningún servidor. Si el navegador bloquea el almacenamiento, el cambio funciona durante la visita. El logo a color con fondo transparente se usa en el tema claro y el blanco en el oscuro. La fotografía del estudio y su rojo corporativo se conservan en ambos temas. La lógica está en `docs/theme.js`.

## Publicar gratis en Cloudflare Pages (la opción más sencilla)

1. Entra en tu cuenta de Cloudflare y abre **Workers & Pages**.
2. Elige **Create application**, la opción **Pages** y **Direct Upload / Drag and drop your files**. Los nombres pueden variar con el idioma del panel.
3. Pon un nombre al proyecto, por ejemplo `aloid-games`, si está disponible.
4. Sube el archivo `aloid-games-pages.zip`. Su raíz contiene `index.html`, los estilos y los recursos. Como alternativa, sube el contenido de la carpeta `docs`.
5. Pulsa **Deploy site**. Cloudflare te dará tu dirección real bajo `pages.dev`, con HTTPS. No necesitas comprar un dominio ni un plan Pro para esta landing.
6. Para actualizarla, edita los archivos y usa **Create a new deployment**, seleccionando producción y subiendo de nuevo `docs` o un ZIP con su contenido.

No subas el ZIP del proyecto completo a Pages: ese contiene también esta guía y la configuración de Workers. Para Pages, utiliza el ZIP que termina en `-pages`.

Direct Upload no se puede convertir después a integración Git dentro del mismo proyecto. Si más adelante quieres despliegues automáticos al cambiar el código en GitHub, crea otro proyecto con integración Git; directorio de salida `docs`, sin comando de compilación.

## Alternativa: Cloudflare Workers Static Assets

Desde la carpeta `aloid-games`, con Node.js y npm instalados, abre una terminal y ejecuta:

```powershell
npx wrangler@latest login
npx wrangler@latest deploy
```

`wrangler.jsonc` ya apunta a `docs`. Completa el inicio de sesión en tu cuenta y selecciona el plan gratuito si te lo pregunta. El despliegue te indicará la dirección real bajo `workers.dev`. No hay código de servidor; los archivos se sirven como recursos estáticos. Para actualizar, vuelve a ejecutar el segundo comando.

## Coste y material pendiente

Esta landing encaja en el plan gratuito. Cloudflare indica que las peticiones a los archivos de Workers Static Assets son gratuitas e ilimitadas; los límites de código de Worker son otra categoría. Un dominio propio y un buzón de correo son servicios separados y no están incluidos en estos archivos. No hace falta contratarlos para publicar bajo el subdominio gratuito.

Antes de compartir la web definitiva: añadir los enlaces reales y el contacto, revisar la selección de capturas y los textos, y añadir el tráiler cuando esté disponible. Las capturas proceden de tu material de desarrollo y se identifican como tal. La fecha de lanzamiento queda sin anunciar.

Documentación oficial consultada el 6 de noviembre de 2026:

- Direct Upload de Pages: https://developers.cloudflare.com/pages/get-started/direct-upload/
- Workers Static Assets: https://developers.cloudflare.com/workers/static-assets/
- Coste de recursos estáticos: https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/

## Comprobaciones

JavaScript revisado con `node --check`. La revisión visual y las interacciones se realizan en una vista previa local; esta entrega no implica un despliegue en Cloudflare.

## Fotografía del estudio
La foto de Barcelona ha sido facilitada por el usuario (`wp1825802-barcelona-city-wallpapers.jpg`). Se conserva en color. La mascota circular se coloca entre dos capas de la misma fotografía: un recorte de los tejados cubre su parte inferior para que parezca asomar detrás de la ciudad. Los trazados de los ojos proceden del logo original del estudio.
