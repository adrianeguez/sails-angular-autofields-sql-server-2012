# sails-angular-autofields-sql-server-2012
Este es un repositorio para los estudiantes de base de datos de la Escuela Politecnica Nacional para conectar mediante Sails usando Angular y Angular Auto Fields a una base de datos en SQL SERVER 2012.

# Paso 1

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

