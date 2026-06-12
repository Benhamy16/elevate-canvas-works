## Tipografía estilo Claude para "Experiencias Digitales"

La fuente que usa Claude se llama **Copernicus** (Klim Type Foundry) — es una fuente comercial de pago, así que no podemos usarla directamente. Te propongo usar una alternativa gratuita de Google Fonts muy similar en estilo (serif elegante con itálica expresiva).

### Opciones recomendadas

1. **Instrument Serif** — la más parecida al ejemplo "Stay Blades" que enviaste. Itálica fluida, contraste alto, muy editorial.
2. **Fraunces** — serif moderna con itálica muy expresiva, variable (permite ajustar peso y "softness").
3. **EB Garamond** — clásica, elegante, itálica tradicional.

### Cambios a aplicar

1. Instalar la fuente elegida vía `@fontsource/<fuente>` (regular + italic).
2. En `src/routes/__root.tsx`: importar los archivos CSS de la fuente.
3. En `src/styles.css`: cambiar `--font-serif` a la nueva fuente (Open Sauce Sans se queda como `--font-sans` para el resto del sitio).
4. Resultado: el H1 del Hero ("Construimos Experiencias *Digitales*") y cualquier `.font-serif` usará la nueva tipografía. La itálica de "Digitales" tomará el estilo elegante tipo Claude.

¿Cuál de las tres prefieres? Mi recomendación es **Instrument Serif** por ser la más cercana a tu referencia.
