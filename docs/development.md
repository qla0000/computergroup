
1. **Képek optimalizálása** (LCP javítás):

```45:54:src/components/Services.tsx
      <div
        className="fixed inset-0 z-0 h-[var(--viewport-height)] overflow-hidden bg-[url('/bg/services.webp')] bg-cover bg-center bg-fixed"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
          zIndex: -99
        }}
      >
        <div className="from-primary-900/50 to-primary-950/50 absolute inset-0 bg-gradient-to-br" />
      </div>
```

- A háttérkép nincs optimalizálva (nincs WebP formátum, nincs lazy loading)

- Javaslat: `next/image` komponens használata méretezéssel és placeholder-rel


2. **Animációk optimalizálása**:

```64:66:src/components/Services.tsx
              className={`group rounded-lg bg-white/10 p-6 opacity-0 shadow-lg backdrop-blur-md will-change-transform hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                hasAnimated ? "animate-[fadeIn_0.5s_ease-out_forwards]" : ""
              }`}
```

- Túl sok párhuzamos animáció (3 elem × 200ms késleltetés)

- Javaslat: `will-change: transform` hozzáadása és CSS hardware acceleration használata


3. **Parallax hatások**:

```45:54:src/components/Services.tsx
      <div
        className="fixed inset-0 z-0 h-[var(--viewport-height)] overflow-hidden bg-[url('/bg/services.webp')] bg-cover bg-center bg-fixed"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
          zIndex: -99
        }}
      >
        <div className="from-primary-900/50 to-primary-950/50 absolute inset-0 bg-gradient-to-br" />
      </div>
```

- A fixed pozícionálású elemek layout thrashing-et okozhatnak

- Javaslat: `transform: translateZ(0)` hozzáadása a parallax elemhez


4. **Intersection Observer túlhasználat**:

```8:16:src/components/Services.tsx
export default function Services() {
  const { ref, isVisible } = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);
```

- Minden komponens saját Intersection Observer-t hoz létre

- Javaslat: Központosított observer megvalósítása


5. **CSS-in-JS teljesítmény**:

```64:66:src/components/Services.tsx
              className={`group rounded-lg bg-white/10 p-6 opacity-0 shadow-lg backdrop-blur-md will-change-transform hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                hasAnimated ? "animate-[fadeIn_0.5s_ease-out_forwards]" : ""
              }`}
```

- Dinamikus class string interpoláció a Tailwind-nél

- Javaslat: Statikus osztálynevek használata animation-delay helyett CSS változókkal


6. **Kritikus erőforrások**:

```76:91:src/components/Carousel.tsx
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={true}
            quality={70}
            sizes="100vw"
            className="object-cover brightness-[0.4]"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j..."
            loading="eager"
            style={{
              objectFit: 'cover',
              color: 'transparent'
            }}
          />
```


- Túl sok prioritásos kép (priority=true)

- Javaslat: Csak az első 1-2 képnek adjunk high priority-t

## Optimalizációs lehetőségek a kinézet megváltoztatása nélkül:


1. Képek átalakítása WebP/AVIV formátumra és szélességoptimalizálás:
```typescript
// Services komponens háttérkép helyett:
<Image
  src="/bg/services.webp"
  alt=""
  fill
  priority
  quality={80}
  sizes="100vw"
  className="object-cover"
  placeholder="blur"
  blurDataURL="data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACyAQCdASoKAAgAAgA0JQBOgC6gAA/vP5LJwqUj4D8AAP7o8QAA"
/>
```


2. Animációk átírása CSS custom properties segítségével:
```css
/* globals.css */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.optimized-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
  will-change: opacity, transform;
}
```


3. Intersection Observer centralizálás:
```typescript
// Hooks vagy context létrehozása a viewport visibility kezelésére
const useViewportTracker = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const targetId = entry.target.id;
        if(entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, targetId]));
        }
      });
    }, { threshold: 0.1 });

    // Kezeljük az elemeket
    return () => observer.disconnect();
  }, []);

  return { visibleElements };
};
```


4. Képtöltés optimalizálás:

```76:91:src/components/Carousel.tsx
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={true}
            quality={70}
            sizes="100vw"
            className="object-cover brightness-[0.4]"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j..."
            loading="eager"
            style={{
              objectFit: 'cover',
              color: 'transparent'
            }}
          />
```

- `loading="eager"` cseréje `priority`-ra és csak az első 2 diára alkalmazni

- `quality={70}` csökkentése 50-re a nem kritikus képeknél


5. CSS will-change tulajdonságok hozzáadása:

```64:66:src/components/Services.tsx
              className={`group rounded-lg bg-white/10 p-6 opacity-0 shadow-lg backdrop-blur-md will-change-transform hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                hasAnimated ? "animate-[fadeIn_0.5s_ease-out_forwards]" : ""
              }`}
```

```css
.group {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
}
```
