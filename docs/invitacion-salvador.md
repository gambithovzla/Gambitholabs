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

La página lee tres parámetros de la URL:

| Parámetro | Para qué sirve | Valores | Si no lo pones |
|-----------|----------------|---------|----------------|
| `n` | Nombre e inicial del escudo | Primer nombre | Dice "Tony" |
| `g` | "reclutado" o "reclutada" | `f` mujer · `m` hombre | Frase neutra |
| `c` | Cuántas personas pueden venir | `1` a `12` | 3 |

Base: `https://www.gambitholabs.com/invitacion/index.html`

| Invitada/o | Link | Pueden ir |
|------------|------|-----------|
| Chely | `...index.html?n=Chely&g=f` | 3 (Chely + 2) |
| Tony | `...index.html?n=Tony&g=m&c=2` | 2 (Tony + 1) |
| Giovanna | `...index.html?n=Giovanna&g=f&c=5` | 5 (Giovanna + 4) |

El `?` va una sola vez, antes del primer parámetro, y cada parámetro siguiente se
pega con `&`. Los espacios van como `%20`, pero es más simple usar solo el primer
nombre.

### Los cupos incluyen al invitado

`c=3` significa **3 personas en total, contando al invitado**: él o ella más dos.
No es "el invitado más tres". La página lo dice en pantalla, debajo de los
contadores, para que nadie tenga que adivinarlo:

> Esta invitación es para 3 personas, contándote a ti. Te queda 1 lugar.

Adultos + niños nunca pasa del tope: al llegar, los botones `+` se apagan. Y el
mensaje que te llega a WhatsApp incluye la línea `Total: 3 de 3`, así que puedes
verificar de un vistazo si alguien se pasó.

**Importante:** es un tope de cortesía, no una cerradura. Todo corre en el navegador
del invitado, así que quien sepa editar una URL puede subirse el número. Para un
cumpleaños alcanza y sobra; lo que de verdad controlas es el `Total` que lees en el
mensaje antes de darle la capa a nadie.

### El género no se adivina

No infiero el género del nombre a propósito: "Chely" termina en -y, "Ruth" y
"Beatriz" no terminan en -a, y "Luca" o "Nicola" son de hombre. Cualquier regla
automática misgenera a alguien, que es justo lo que queríamos evitar. Por eso sin `g`
el saludo es neutro ("Ya eres parte de la Liga") en vez de masculino: olvidarse del
parámetro nunca le escribe el género equivocado a nadie.

---

## Que no salga en Google

`app/robots.ts` tiene `/invitacion` en la lista de `disallow`, junto con `/playbook`.
Los buscadores que respetan robots.txt no la van a indexar.

Eso no la vuelve privada: cualquiera con el link la puede abrir, y así tiene que ser
para que funcione. Simplemente no va a aparecer en búsquedas.

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
