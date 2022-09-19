# GIT Desarrollo Colaborativo

Esto es una guia para los alumnos del curso de _git desarrollo colaborativo_ de la __Fundacion Pescar__, donde se exponen los comandos vistos en clase y se muestran ejemplos de los temas trabajados.

## GIT AREAS
* __Working Directory:__ Corresponde a la carpeta donde inicializamos el proyecto, aqui creamos, editamos y eliminamos los diferentes archivos
* __Staging Area (INDEX):__ Corresponde al area de control de cambios, donde realizamos la captura de nuestro codigo que luego debe ser confirmada
* __Repository (LOCAL):__ Corresponde al almacen de cambios donde se encuentran las confirmaciones en formato de objetos (BLOB) creando un nodo en el grafo.

## Configuracion Inicial

* __git init__: inicializa un repositorio local
* __git config user.name `username`__ define el nombre de usuario
* __git config user.email `email`__ define el correo de usuario

## Configuracion Remoto

* __git remote -v:__ muestra las direccion de repositorios configurados
* __git remote add `alias` `url`:__ agrega una direccion de repositorio remoto
* __git remote set-url `alias` `url`:__ modifica la direccion de un remoto existente

## Control de Cambios

* __git status:__ compara el estado de los archivos con el staging area
* __git add `file`:__ agrega los cambios al staging area (INDEX)
* __git commit:__ abre el editor para generar una confirmacion de cambios.
* __git log:__ muestra el historial de confirmaciones realizadas.

## Sincronizacion de Cambios

* __git push `remote` `branch`:__ envia el historial de cambios al repositorio remoto
* __git fetch `remote`:__ captura el historial de confirmaciones del repositorio remoto 
* __git pull `remote` `branch`:__ obtiene los cambios del repositorio remoto y en la rama actual

## Apuntadores de GIT

* __HEAD:__ Apuntador movil que indica donde nos encontramos dentro del historial de confirmaciones.
* __BRANCH:__ Apuntador Dinamico que se corresponde con el ultimo commit dentro de una historia.
* __TAG:__ Apuntador estatico que apunta a un commit especifico, se utiliza para el versionado.
* __STASH:__ Apuntador a la zona temporal de cambios, se utiliza cuando debemos desplazarnos entre ramas con cambios pendientes.
