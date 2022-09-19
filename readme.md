# GIT Desarrollo Colaborativo

Esto es una guia para los alumnos del curso de _git desarrollo colaborativo_ de la __Fundacion Pescar__, donde se exponen los comandos vistos en clase y se muestran ejemplos de los temas trabajados.

## GIT AREAS
* Working Directory: Corresponde a la carpeta donde inicializamos el proyecto, aqui creamos, editamos y eliminamos los diferentes archivos
* Staging Area (INDEX): Corresponde al area de control de cambios, donde realizamos la captura de nuestro codigo que luego debe ser confirmada
* Repository (LOCAL): Corresponde al almacen de cambios donde se encuentran las confirmaciones en formato de objetos (BLOB) creando un nodo en el grafo.

## Configuracion Inicial

* __git init__: inicializa un repositorio local
* __git config user.name `username`__ define el nombre de usuario
* __git config user.email `email`__ define el correo de usuario

## Configuracion Remoto

* __git remote -v:__ muestra las direccion de repositorios configurados
* __git remote add `alias` `url`:__ agrega una direccion de repositorio remoto
* __git remote set-url `alias` `url`:__ modifica la direccion de un remoto existente

## Control de Cambios

* __git add `file`:__ agrega los cambios al staging area (INDEX)
* __git commit:__ abre el editor para generar una confirmacion de cambios.

## Sincronizacion de Cambios

* __git push `remote` `branch`:__ envia el historial de cambios al repositorio remoto
* __git fetch `remote`:__ captura el historial de confirmaciones del repositorio remoto 
* __git pull `remote` `branch`:__ obtiene los cambios del repositorio remoto y en la rama actual
