1. CSRF (Cross-Site Request Forgery) Védelem
   A kontakt űrlapnál és minden POST kérésnél CSRF token használata
   Next.js beépített CSRF védelmének implementálása
2. Rate Limiting
3. Input Validáció és Sanitizáció
4. HTTP Security Headers
5. Environment Variables Védelem
   .env.local fájl használata
   Környezeti változók típusainak definiálása:
6. API Route-ok Védelme
7. Form Spam Védelem
   Honeypot mező hozzáadása
8. Error Handling és Logging
9. File Upload Védelem (ha lesz)
   Fájltípus ellenőrzés
   Méret limit
   Vírus szkennelés
10. Adatvédelmi Megfelelés
    Cookie consent banner
    GDPR megfelelés
    Adatvédelmi tájékoztató
11. SSL/TLS
    Forced HTTPS redirect
    Ezeket a biztonsági elemeket fokozatosan érdemes implementálni, prioritás szerint:
    Input validáció és sanitizáció
    CSRF védelem
    Rate limiting
    Security headers
    A többi elem a projekt növekedésével

## reCaptcha implementálása

A reCAPTCHA implementálásának lépései:

1. Google reCAPTCHA fiók létrehozása:
   Látogass el a Google reCAPTCHA oldalára.
   Regisztráld a weboldaladat, és válaszd ki a reCAPTCHA v2 vagy v3 verziót.
   Jegyezd fel a kapott Site Key-t és Secret Key-t.
2. Telepítsd a szükséges csomagot:
   Használj egy reCAPTCHA csomagot, például react-google-recaptcha.
   Helyezd el a reCAPTCHA komponenst a formban:
   Add hozzá a reCAPTCHA komponenst a formodhoz, és használd a Site Key-t.
3. Validáld a reCAPTCHA-t a szerveren:
   Küldd el a reCAPTCHA token-t a szerverre a form adatokkal együtt.
   A szerveren használd a Secret Key-t a reCAPTCHA token validálásához a Google API-n keresztül.
4. Kezeld a validáció eredményét:
   Ha a reCAPTCHA validáció sikeres, folytasd a form feldolgozását.
   Ha nem sikeres, jeleníts meg egy hibaüzenetet a felhasználónak.
5. Teszteld a reCAPTCHA működését:
   Ellenőrizd, hogy a reCAPTCHA megfelelően működik-e különböző böngészőkben és eszközökön.
   Kezeld a reCAPTCHA hibákat:
   Implementálj hibakezelést a reCAPTCHA API hívásokhoz és a form feldolgozásához.
