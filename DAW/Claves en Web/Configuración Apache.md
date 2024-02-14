
```conf
<VirtualHost *:80>

    ServerAdmin webmaster@localhost

    DocumentRoot /var/www/html


    <Directory /www>

        Options Indexes

        AllowOverride None

        Require all granted

    </Directory>


    <Directory /var/www/html>

        Options Indexes

        Require all granted

    </Directory>


    <Directory /var/www/html/alameda>

         AllowOverride Options

    </Directory>


    <Directory /var/www/html/arbore>

        AllowOverride Indexes

    </Directory>


    DirectoryIndex nadal.html

    Redirect /vigo http://www.11millonsdeled.com

    ErrorDocument 404 /errors/404.html

    #ErrorDocument 404 "Isto ainda non funciona"

</VirtualHost>
```


 1. **`ServerAdmin webmaster@localhost`:** Establece la dirección de correo electrónico del administrador del servidor. En este caso, si hay problemas en el servidor, el administrador recibirá notificaciones en la dirección proporcionada.

2. **`DocumentRoot /var/www/html`:** Define la ruta del directorio principal de documentos web para este host virtual. En este caso, los documentos se encuentran en el directorio `/var/www/html`.

3. **`<Directory /www>`:** Configuración específica para el directorio `/www`. Aquí, se establecen algunas opciones para este directorio,
   
   (`Options Indexes`), si la opción "Indexes" está habilitada, Apache mostrará una lista de archivos y subdirectorios cuando no se proporcione un archivo específico en la URL. 
   
   (`AllowOverride None`), No permite que se anulen las configuraciones mediante archivos `.htaccess` dentro del directorio.
   
   (`Require all granted`), Indica que todos los usuarios tienen permiso para acceder al directorio y sus recursos.

4. **`<Directory /var/www/html/alameda>`:** Configuración específica para el directorio `/var/www/html/alameda`. Aquí, se permite la anulación de opciones.

5. **`<Directory /var/www/html/arbore>`:** Configuración específica para el directorio `/var/www/html/arbore`. Aquí, se permite la indexación.

6. **`DirectoryIndex nadal.html`:** Establece el archivo que se utilizará como índice si no se especifica un archivo en la URL. En este caso, si alguien accede a la ruta principal, se mostrará `nadal.html`.

7. **`Redirect /vigo http://www.11millonsdeled.com`:** Redirige todas las solicitudes que contienen `/vigo` a `http://www.11millonsdeled.com`.

8. **`ErrorDocument 404 /errors/404.html`:** Establece la página personalizada que se mostrará cuando se produce un error 404 (página no encontrada). En este caso, utiliza el archivo `/errors/404.html`.



```conf
<VirtualHost *:80>

    DocumentRoot /var/www/control

    ServerName controlluces.daw.lan

    ServerAlias control.daw.lan

    <Directory /var/www/control>

        Options Indexes

    </Directory>

    DirectoryIndex luces.html

</VirtualHost>

#atach shell

#a2ensite controlluces
```



- **`ServerName controlluces.daw.lan` y `ServerAlias control.daw.lan`:** Estas líneas especifican los nombres de dominio que están asociados con este host virtual. En este caso, los nombres de dominio son `controlluces.daw.lan` y `control.daw.lan`. Este host virtual responderá a las solicitudes que coincidan con estos nombres de dominio.


- **`DirectoryIndex luces.html`:** Especifica el archivo predeterminado que se servirá cuando se acceda a un directorio sin especificar un archivo. En este caso, si alguien accede a la raíz del sitio, se mostrará `luces.html`.


- Después de haber configurado tu archivo de sitio (`controlluces.conf`), necesitas habilitarlo utilizando el comando `a2ensite`.



```conf
<IfModule mod_ssl.c>

    <VirtualHost *:443>

        ServerAdmin webmaster@localhost

        DocumentRoot /var/www/noria

        ServerName noria.daw.lan

        SSLEngine on

        SSLCertificateFile /etc/apache2/certs/certificado.crt

        SSLCertificateKeyFile /etc/apache2/certs/clave.key


    </VirtualHost>

</IfModule>


<VirtualHost *:80>

    ServerName noria.daw.lan

    DocumentRoot /var/www/noria

    DirectoryIndex noria.html

</VirtualHost>
  

#bash

#a2ensite noria

#crear certs

#cd /certs

#openssl genrsa -out clave.key 2048

#openssl req -new -key clave.key -out certificado.csr

# openssl x509 -req -days 365 -in certificado.csr -signkey clave.key -out certificado.crt
```



1. **Configuración para el puerto 443 (SSL):**
   - `<IfModule mod_ssl.c>`: Comienza un bloque de configuración condicional que verifica si el módulo SSL (`mod_ssl`) está cargado. Esto asegura que estas configuraciones solo se apliquen si SSL está habilitado.

   - `<VirtualHost *:443>`: Inicia la configuración del host virtual para el puerto 443 (SSL). Este bloque define la configuración específica para las conexiones SSL.

  - `ServerAdmin`: Especifica la dirección de correo electrónico del administrador del servidor.

  - `DocumentRoot /var/www/noria`: Define la ruta del directorio raíz del sitio web.

  - `ServerName noria.daw.lan`: Establece el nombre del servidor para este host virtual.

  - `SSLEngine on`: Habilita el motor SSL para este host virtual.

  - `SSLCertificateFile` y `SSLCertificateKeyFile`: Especifican la ubicación de los archivos de certificado y clave privada SSL utilizados para la conexión segura. Estos archivos deben generarse previamente.

   - `</VirtualHost>`: Finaliza la configuración para el puerto 443.

2. **Configuración para el puerto 80 (HTTP):**
   - `<VirtualHost *:80>`: Inicia la configuración del host virtual para el puerto 80 (HTTP).

  - `ServerName noria.daw.lan`: Establece el nombre del servidor para este host virtual.

  - `DocumentRoot /var/www/noria`: Define la ruta del directorio raíz del sitio web.

  - `DirectoryIndex noria.html`: Especifica el archivo de índice que se utilizará si se solicita un directorio.

   - `</VirtualHost>`: Finaliza la configuración para el puerto 80.

3. **Comandos Bash:**
   - `#a2ensite noria`: Este comando habilita el sitio web llamado "noria" en Apache.

   - `#cd /certs`

   - `#openssl genrsa -out clave.key 2048`

   - `#openssl req -new -key clave.key -out certificado.csr`

   - `#openssl x509 -req -days 365 -in certificado.csr -signkey clave.key -out certificado.crt`



##### Dentro de las carpetas alameda y arbore crearemos un archivo .htaccess que contiene:

- `DirectoryIndex arbore.html o alameda.html`
- `Options -Indexes`


##### Acordarse de poner en el dockerfile:

- `RUN a2enmod ssl`


##### Y en los puertos de dockercompose.yml:

`ports:`

- `"80:80"`
- `"443:443"`



