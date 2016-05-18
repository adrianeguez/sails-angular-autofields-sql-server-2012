# sails-angular-autofields-sql-server-2012
Este es un repositorio para los estudiantes de base de datos de la Escuela Politecnica Nacional para conectar mediante Sails usando Angular y Angular Auto Fields a una base de datos en SQL SERVER 2012.

# Paso 2

## Instalar dependencias

Vamos a instalar las dependencias con los siguientes comandos mediante una **ventana de comandos** dentro de la carpeta **"App"**

```javascript
npm install -g bower
bower install angular-autoFields-bootstrap
```
Despues de instalar vamos a tener 3 nuevas carpetas dentro de nuestra carpeta **"App"** que son las siguientes:

```javascript
App
    --bower_components
        --angular
        --angular-autoFields-bootstrap
        --angular-bootstrap
```

## Copiar los Archivos en la carpeta **assets**

Las carpetas angular, angular-autoFields-bootstrap y angular-bootstrap las vamos a **copiar**:

```javascript
App
    --bower_components
        --angular/
        --angular-autoFields-bootstrap/
        --angular-bootstrap/
```
dentro de la carpeta **"assets"**, que quedaria de la siguiente manera:

```javascript
App
    --bower_components
        --angular/
        --angular-autoFields-bootstrap/
        --angular-bootstrap/
    --assets
        --angular/(Esta es la nueva carpeta)
        --angular-autoFields-bootstrap/(Esta es la nueva carpeta)
        --angular-bootstrap/(Esta es la nueva carpeta)
        --images/
        --js/
        --styles/
        --templates/
        --favicon.ico
        --robots.txt
        
```


# Crear el contenedor HTML

## Crear una nueva carpeta llamada **Tablas** en la carpeta **assets**

Vamos a crear una nueva carpeta llamada **Tablas** dentro de la carpeta **assets**

```javascript
App
    --assets
        --angular/
        --angular-autoFields-bootstrap/
        --angular-bootstrap/
        --images/
        --js/
        --styles/
        --Tablas/(Esta es la nueva carpeta)
        --templates/
        --favicon.ico
        --robots.txt
        
```

## Crear contenedor html con el **Nombre de la Tabla**

Vamos a crear **un archivo .html por cada tabla**

En nuestro ejemplo la tabla se va a llamar **"Persons"**

nuestro archivo se va a llamar entonces **"Persons.html"**


```html


```


Vamos a anadir la cadena de conexion en el archivo **connections.js** de configuracion de sails.

##Localizacion del archivo **connections.js** en la carpeta App

El archivo se encuentra localizado en la carpeta **config**:

```javascript
App
    --config
        --connections.js
```

## Cadena de conexion

El contenido del archivo que tenemos que anadir es el siguiente

```javascript
sqlserver: {
        adapter: 'sails-sqlserver',
        user: 'sa',
        password: 'EPS.root',
        host: 'localhost',
        database: 'pruebaAdrian'

    }
```
donde:

- **sqlserver**   Es el nombre de la **Cadena de Conexion**
- **adapter**     Es el nombre del conector de node.js
- **user**        Es el nombre de usuario de la base de datos SQL Server 2012
- **password**    Es el password del anterior usuario de la base de datos SQL Server 2012
- **host**        Es la ip en donde esta corriendo el servidor de la base de datos SQL Server 2012, si esta dentro de tu maquina por default es localhost, sino deberia ser una ip como por ejemplo: **192.168.0.115**
- **database**    Es el nombre de la base de datos en SQL Server 2012

## Seleccionar la **Cadena de Conexion** por default

Despues de haber cambiado la **Cadena de Conexion** vamos a seleccionar la Cadena de conexion por Default.

## Localizacion del archivo **models.js** en la carpeta App

El archivo se encuentra localizado en la carpeta **config**:

```javascript
App
    --config
        --models.js
```

## Setteo de la Cadena de conexion por default

El contenido del archivo para seleccionar la cadena de conexion es el siguiente:

```javascript
connection: 'sqlserver',
```
donde:

- **connection**     Es el nombre de la cadena de conexion

Autor : [Adrian Eguez Sarzosa](https://github.com/adrianeguez)

