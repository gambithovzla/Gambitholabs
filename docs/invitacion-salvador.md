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

La página lee dos parámetros de la URL:

| Parámetro | Para qué sirve | Valores |
|-----------|----------------|---------|
| `n` | El nombre y la inicial del escudo | El primer nombre del invitado |
| `g` | Si el saludo dice "reclutado" o "reclutada" | `f` mujer · `m` hombre |

Base: `https://www.gambitholabs.com/invitacion/index.html`

| Invitada/o | Link | Lee |
|------------|------|-----|
| Chely | `...index.html?n=Chely&g=f` | Has sido **reclutada**, Chely |
| Tony | `...index.html?n=Tony&g=m` | Has sido **reclutado**, Tony |
| Maria Jose | `...index.html?n=Maria%20Jose&g=f` | Has sido **reclutada**, Maria Jose |

El `&` separa los dos parámetros; el `?` va una sola vez, antes del primero.
Los espacios van como `%20`, pero es más simple usar solo el primer nombre.

**Si te olvidas del `g`** no se rompe nada ni se equivoca de género: el saludo cambia
a una frase neutra, "Ya eres parte de la Liga, Chely", que sirve para cualquiera. Ese
es también lo que se ve al abrir el link pelado, sin parámetros.

El género también ajusta la etiqueta del mensaje que llega a tu WhatsApp
("Invitada: Chely" / "Invitado: Tony" / "Invitado/a: Chely" si no pusiste `g`).

No lo dejé adivinando el género a partir del nombre a propósito: "Chely" termina en
-y, "Ruth" y "Beatriz" no terminan en -a, y "Luca" o "Nicola" son de hombre. Cualquier
regla automática se equivoca con alguien, que es justo lo que queríamos evitar.

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
