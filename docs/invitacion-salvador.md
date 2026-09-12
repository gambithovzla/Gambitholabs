# La Liga de Salvador — cómo publicarlo

Un solo archivo estático: `index.html`. No necesita servidor, ni base de datos, ni build.

---

## Estado actual

Los dos cambios obligatorios ya están hechos en `public/invitacion/index.html`:

| Qué | Valor |
|-----|-------|
| WhatsApp de confirmaciones | `51925130858` |
| Hora de la fiesta | Desde las 2:00 p. m. |

Si mañana cambia alguno, están en estas dos líneas:

```js
var WHATSAPP = '51925130858'; // número con código de país, sin + ni espacios
```

```html
<span>Desde las 2:00 p. m.</span>
```

Lo demás (fecha, dirección, motivo) sigue como estaba: domingo 4 de octubre de 2026,
Av. El Sol Este 176, Barranco.

---

## Opción 0 — servirlo desde esta web (ya está listo)

El archivo vive en `public/invitacion/index.html`, así que al desplegar el sitio queda en:

```
https://<tu-dominio>/invitacion/index.html?n=Tony
```

No necesita nada más: `public/` se sirve tal cual, sin build ni rutas.

---

## Opción A — Netlify Drop (lo más rápido, sin cuenta)

1. Entra a https://app.netlify.com/drop
2. Arrastra la **carpeta** que contiene `index.html` (no el archivo suelto).
3. Te da un link tipo `https://algo-random-123.netlify.app`.
4. Listo. Ese link ya se puede compartir.

Para links personalizados: `https://tu-sitio.netlify.app/?n=Tony`

---

## Opción B — Cloudflare Pages (si le vas a poner dominio propio)

1. Crea cuenta en https://pages.cloudflare.com
2. "Create a project" → "Direct Upload".
3. Sube la carpeta con `index.html`.
4. En "Custom domains" conectas el dominio que compres.

---

## Opción C — Tu propio hosting

Sube `index.html` por FTP a la raíz del dominio o subdominio (`public_html/` en la mayoría de hostings).

---

## Los links por invitado

La página lee el parámetro `n` de la URL y cambia el nombre y la inicial del escudo.

| Invitado   | Link                                  |
|------------|---------------------------------------|
| Tony       | `https://tusitio.com/?n=Tony`         |
| Giovanna   | `https://tusitio.com/?n=Giovanna`     |
| Maria Jose | `https://tusitio.com/?n=Maria%20Jose` |

Los espacios van como `%20`. Para evitar líos, usa solo el primer nombre.

Sin parámetro (`https://tusitio.com`) la página muestra "Tony" por defecto. Si prefieres
que el genérico diga otra cosa, cambia esta línea:

```js
var nombre = (params.get('n') || 'Tony').trim().slice(0,24);
```

---

## Cómo mandarlo por WhatsApp

1. Primero el video de la invitación.
2. Debajo, el link personalizado.

El link se despliega con una previsualización sosa. Si quieres que se vea bonito al
pegarlo en el chat, hay que agregar etiquetas Open Graph y una imagen de 1200×630.
Eso lo podemos hacer después.

---

## Lo que queda pendiente (opcional)

1. **Open Graph / Twitter Card**, para que al pegar el link en WhatsApp se vea una
   previsualización con imagen en vez de texto pelado. Hace falta una imagen de
   1200×630 (`og.jpg`) en la misma carpeta.
2. **Dominio propio**, si no quieres usar la URL del sitio ni una de Netlify.

Ninguna de las dos es necesaria para mandar la invitación hoy.
