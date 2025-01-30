# Alkalmazás Deployolása Dockerrel Debian Szerverre

Ez a dokumentáció bemutatja, hogyan lehet deployolni a Docker alkalmazást egy Debian szerverre Apache reverse proxy használatával.

## Előfeltételek

- Debian szerver
- Docker és Docker Compose telepítve
- Apache telepítve és konfigurálva

## Lépések

### 1. Docker Image Építése

Először építsd meg a Docker image-t a projekt gyökérkönyvtárában:
- Debian szerver
- Docker és Docker Compose telepítve
- Apache telepítve és konfigurálva

## Lépések

### 1. Docker Image pullolása

```bash
docker pull darthvader420/harmonydesign:latest // ha amd64 az architektúra
```

```bash
docker pull darthvader420/harmonydesign:xplatform // ha arm64 az architektúra
```
### 2. Docker Image megléte:

```bash
docker images
```

### 3. Docker Konténer Futattása

Futtasd a Docker konténert a következő paranccsal:

```bash
docker run -d -p 3000:3000 darthvader420/harmonydesign:latest
```
(a port lehet tetszőleges, ha a 3000-as port már foglalt, akkor más portja legyen, hogy elkerüljük a konfliktust)

ezután a konténer a 3000 porton fut (ez localhost:3000, csak a docker írja ki a localhost helyett az image ID-t)


### 3. Apache Reverse Proxy Beállítása a konténerhez
(ez azért kell mert a konténer nem akarjuk exposeolni a 3000 portot az internetnek, ezért nyitunk egy virtuális hostot a 80 (vagy tetszőleges) porton és proxyzzuk a 3000 portra)

1. **Apache mod_proxy Engedélyezése**

   Engedélyezd a szükséges Apache modulokat:

   ```bash
   sudo a2enmod proxy
   ```

   ```bash
   sudo a2enmod proxy_http
   ```
2. **Virtual Host Konfiguráció**

   Hozz létre egy új virtual host konfigurációs fájlt a /etc/apache2/sites-available/ mappában az NextJS projektnek, például: `/etc/apache2/sites-available/harmonydesign-nextjs.conf`:

   ```apache
   <VirtualHost *:80>
       ServerName yourdomain.com 

       ProxyPreserveHost On
       ProxyPass / http://localhost:3000/
       ProxyPassReverse / http://localhost:3000/

       ErrorLog ${APACHE_LOG_DIR}/error.log
       CustomLog ${APACHE_LOG_DIR}/access.log combined
   </VirtualHost>
   ```

(a yourdomain.com helyére a domain nevedet írd be, vagy a public IP címet ha nincs domain)

(a port is tetszőleges, ha a 80-as port már foglalt, akkor más portja legyen, hogy elkerüljük a konfliktust)

3. **Engedélyezzük a virtual hostot**

   ```bash
   sudo a2ensite harmonydesign-nextjs.conf
   ```

4. **Apache Újraindítása**

   Indítsd újra az Apache szervert a változtatások alkalmazásához:

   ```bash
   sudo systemctl restart apache2
   ```
    Ha jók a webszerver konfigurációk, akkor csak 1-2 másodpercig állnak le az apache szerverek és újraindulnak.


### 4. Ellenőrzés

Nyisd meg a böngészőt, és navigálj a `http://yourdomain.com` címre, hogy ellenőrizd, az alkalmazás megfelelően fut-e.

### 5. SSL Beállítása (Let's Encrypt)

1. **Install Certbot**

   ```bash
   sudo apt install certbot python3-certbot-apache
   ```

2. **Generate SSL Certificate**

    Frissítsd a rendszert:
    ```bash
    sudo apt update
    ```
    Telepítsd a certbotot:
    ```bash
    sudo apt install certbot python3-certbot-apache
    ```
    Generáld le a tanúsítványt:
    ```bash
    sudo certbot --apache -d yourdomain.com
    ```
    Interaktív Lépések:

    1. Email cím megadása
       - Adjon meg egy email címet a biztonsági értesítésekhez (pl. tanúsítvány lejárat előtti emlékeztető)
       ```
       Enter email address (used for urgent renewal and security notices): your@email.com
       ```

    2. Felhasználói feltételek elfogadása
       - Fogadja el a Let's Encrypt feltételeket
       ```
       (A)gree/(C)ancel: A
       ```

    3. Email megosztása (opcionális)
       - Döntse el, hogy megosztja-e az email címét a Let's Encrypttel hírekhez
       ```
       (Y)es/(N)o: N
       ```

    4. Domain kiválasztása
       - A Certbot automatikusan felismeri a domainnevet az Apache konfigurációból
       ```
       Which names would you like to activate HTTPS for?
       1: weboldalam.com
       Select the appropriate numbers separated by commas: 1
       ```

    5. HTTP → HTTPS Átirányítás
       - Engedélyezze a HTTP forgalom átirányítását HTTPS-re (ajánlott)
       ```
       (1) No redirect / (2) Redirect
       Select choice: 2
       ```

### 6. Ellenőrzések
1. **Apache konfiguráció ellenőrzése**
   ```bash
   sudo apachectl configtest
   ```


## Hibakeresés

- Ellenőrizd a Docker konténer logjait:
  ```bash
  docker logs harmonydesign-nextjs
  ```
- Ellenőrizd a tűzfal konfigurációját:
  ```bash
  sudo ufw status
  ```
- Engedélyezd a tűzfal konfigurációját:
  ```bash
  sudo ufw allow "Apache Full"
  ```
- Ellenőrizd az Apache logfájlokat:
  ```bash
  tail -f /var/log/apache2/error.log
  ```


## További Információk

- [Docker Dokumentáció](https://docs.docker.com/)
- [Apache Dokumentáció](https://httpd.apache.org/docs/)