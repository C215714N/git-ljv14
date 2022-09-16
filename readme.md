# GIT Desarrollo Colaborativo

Esto es una guia para los alumnos del curso de _git desarrollo colaborativo_ de la __Fundacion Pescar__, donde se exponen los comandos vistos en clase y se muestran ejemplos de los temas trabajados.

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