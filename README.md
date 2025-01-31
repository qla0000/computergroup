# Alkalmazás Deployolása Dockerrel Debian Szerverre

Ez a dokumentáció bemutatja, hogyan lehet deployolni a Docker alkalmazást egy Debian szerverre Apache reverse proxy használatával.

## Előfeltételek

- Debian szerver
- Docker és Docker Compose telepítve
- Apache telepítve és konfigurálva

## Lépések

### 1. Docker Image pullolása

```bash
sudo docker pull darthvader420/harmonydesign:latest // ha amd64 az architektúra
```

```bash
sudo docker pull darthvader420/harmonydesign:xplatform // ha arm64 az architektúra
```
### 2. Docker Image megléte:

```bash
sudo docker images
```

### 3. Docker Konténer Futattása

Futtasd a Docker konténert a következő paranccsal:

```bash
sudo docker run -d -p 3000:3000 \
  -e CONTACT_EMAIL=website.contact.smtp@gmail.com \
  -e RESEND_API_KEY=re_BzewFgJG_MmCzHdZcq2d3xAw8dS2YYqvS \
  darthvader420/harmonydesign:latest
```
(a port lehet tetszőleges, ha a 3000-as port már foglalt, akkor más portja legyen, hogy elkerüljük a konfliktust)

ezután a konténer a 3000 porton fut (ez localhost:3000, csak a docker írja ki a localhost helyett az image ID-t)


### 3. Apache Reverse Proxy Beállítása a konténerhez
(ez azért kell mert a konténer nem akarjuk exposeolni a 3000 portot az internetnek, ezért nyitunk egy virtuális hostot a 80 (vagy tetszőleges) porton és proxyzzuk a 3000 portra)

- Illetve a statikus nem jó, mert a NextJsben Server Side Rendering van, és ezért kell a reverse proxy.

1. **Először nézzük meg, hogy engedélyezve vannak-e a modulok**

   ```bash
   sudo apachectl -M | grep proxy
   ```
   
   Ha a kimenetben ezt látod:
   ```
   proxy_module (shared)
   proxy_http_module (shared)
   ```
   akkor a modulok már engedélyezve vannak. 
   
   Ebben az esetben érdemes ellenőrizni, hogy van-e már létező ProxyPass konfiguráció:
   ```bash
   grep -R "ProxyPass" /etc/apache2/
   ```
   

   Ha találsz ilyen konfigurációt, figyelj az útvonalakra, domainekre és a portokra konfliktusok elkerülése érdekében.
-----------------------------------
### Példa két különböző VirtualHost konfigurációra:

`/etc/apache2/sites-available/example.conf`:
```apache
<VirtualHost *:80>
    ServerName example.hu
    ProxyPass / http://127.0.0.1:5000/
    ProxyPassReverse / http://127.0.0.1:5000/
</VirtualHost>
```

`/etc/apache2/sites-available/harmonydesign.conf`:
```apache
<VirtualHost *:80>
    ServerName harmonydesign.com
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
</VirtualHost>
```
#### Ez a két konfiguráció láthatóan nem fog útközni, mert a portok különbözőek és a domainek is különbözőek.

--------------------------------

   Ha nincs ilyen konfiguráció, folytasd a következő lépéssel (Apache mod_proxy engedélyezése).

   Ha a modulok nincsenek engedélyezve, folytasd a következő lépéssel (Apache mod_proxy engedélyezése).


Ha a modulok nincsenek engedélyezve, és nincs ütközés, akkor most engedélyezheted őket:

Ha minden VirtualHostnak egyedi domainje és portja van, akkor a következő lépésben engedélyezheted őket:


2. **Apache mod_proxy Engedélyezése**

Engedélyezd a szükséges Apache modulokat:

```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo systemctl restart apache2
```
   
2. **Virtual Host Konfiguráció**

   Hozz létre egy új virtual host konfigurációs fájlt a /etc/apache2/sites-available/ mappában az NextJS projektnek, például: `/etc/apache2/sites-available/harmonydesign-nextjs.conf`:

   ```apache
   <VirtualHost *:80> 
       ServerName harmonydesign.com # ne legyen foglalt
       ProxyPreserveHost On
       ProxyPass / http://127.0.0.1:3000/ # a portja legyen a konténer portja
       ProxyPassReverse / http://127.0.0.1:3000/ # a portja legyen a konténer portja

       ErrorLog ${APACHE_LOG_DIR}/error.log
       CustomLog ${APACHE_LOG_DIR}/access.log combined
   </VirtualHost>
   ```

(a harmonydesign.com helyére a domain nevedet írd be, vagy a public IP címet ha nincs domain)

(a port is tetszőleges, ha a 80-as port már foglalt, akkor más portja legyen, hogy elkerüljük a konfliktust)

3. **Apache konfiguráció ellenőrzése**
   ```bash
   sudo apachectl configtest
   ```
   Ha `Syntax OK`, akkor nincs konfigurációs hiba.

4. **Engedélyezzük a virtual hostot**

   ```bash
   sudo a2ensite harmonydesign-nextjs.conf
   ```

5. **Apache Újraindítása**

   Indítsd újra az Apache szervert a változtatások alkalmazásához:

   ```bash
   sudo systemctl restart apache2
   ```
    Ha jók a webszerver konfigurációk, akkor csak 1-2 másodpercig állnak le az apache szerverek és újraindulnak.


### 4. Ellenőrzés

Nyisd meg a böngészőt, és navigálj a `http://harmonydesign.com` címre, hogy ellenőrizd, az alkalmazás megfelelően fut-e.

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
    sudo certbot --apache -d harmonydesign.com
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
       1: harmonydesign.com
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