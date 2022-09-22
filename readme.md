# GIT Desarrollo Colaborativo

Esto es una guia para los alumnos del curso de _git desarrollo colaborativo_ de la __Fundacion Pescar__, donde se exponen los comandos vistos en clase y se muestran ejemplos de los temas trabajados.

## Tabla de contenidos

* [Areas de GIT](#git-areas)
* [Configuracion](#configuracion-inicial)
* [Repositorio Remoto](#repositorio-remoto)
* [Control de cambios](#control-de-cambios)
* [Sincronizacion](#sincronizacion-de-cambios)
* [Apuntadores de GIT](#apuntadores-de-git)

## GIT AREAS

Git se divide en varias areas que permiten gestionar la forma de trabajo, asi como tambien llevar un control de los cambios realizados dentro de la carpeta del proyecto. Gracias a esto podemos deshacer las modificaciones realizadas o corregir ciertos cambios dentro del proyecto, mediante el historial de confirmaciones.

* __Working Directory:__ Corresponde a la carpeta donde inicializamos el proyecto, aqui creamos, editamos y eliminamos los diferentes archivos
* __Staging Area (INDEX):__ Corresponde al area de control de cambios, donde realizamos la captura de nuestro codigo que luego debe ser confirmada
* __Repository (LOCAL):__ Corresponde al almacen de cambios donde se encuentran las confirmaciones en formato de objetos (BLOB) creando un nodo en el grafo.

## Configuracion Inicial

Cuando trabajamos con GIT debemos inicializar el repositorio, esto debe hacerse en la carpeta donde querramos hacer seguimiento a los archivos. Podemos definir otros parametros indicando que dicha configuracion sea accesible desde cualquier repositorio utilizando _--global_ despues del comando correspondiente.

Otro parametro que podemos utilizar es _--system_, pero este funciona en algunas configuraciones especificas y a diferencia del anterior, aplica para todo el equipo.

* __git init__: inicializa un repositorio local en el directorio actual
* __git config user.name `username`__ define el nombre de usuario (local o global).
* __git config user.email `email`__ define el correo de usuario (local o global).
* __git config core.editor=`editor`__ define el editor de codigo predeterminado para las confirmaciones.

## Repositorio Remoto

Un repositorio remoto hace referencia al servidor al que vamos a subir el historial de cambios, entre los mas comunes se encuentran [GitHub](https://github.com/), [GitLab](https://gitlab.com/), [GitHub](https://bitbucket.org/).

En caso de descargar el proyecto desde algun servidor de git, se agregara una direccion remota denominada __origin__ a la cual podemos subir nuestros cambios y descargar las referencias remotas pendientes.

* __git clone `url`:__ descargar un proyecto remoto en una carpeta con el nombre del mismo
* __git remote -v:__ muestra las direccion de repositorios configurados
* __git remote add `alias` `url`:__ agrega una direccion de repositorio remoto
* __git remote set-url `alias` `url`:__ modifica la direccion de un remoto existente
* __git remote remove `alias`:__ elimina la direccion remota seleccionada del repositorio local

## Control de Cambios

Cuando empezamos a trabajar con GIT, algunos comandos nos permitiran llevar un control de los cambios realizados en el repositorio, para realizar las __capturas de codigo (snapshot)__ y posteriormente la confirmacion de la misma en el __almacen de cambios en archivos de tipo BLOB(Binary Large Object)__.

* __git status:__ compara el estado de los archivos con el staging area
* __git add `file`:__ agrega los cambios al staging area (INDEX)
* __git commit:__ abre el editor para generar una confirmacion de cambios.
* __git log:__ muestra el historial de confirmaciones realizadas.

## Sincronizacion de Cambios

Una vez que realizamos varias confirmaciones de cambios en nuestro proyecto, por una cuestion de accesibilidad y seguridad, debemos enviar dicho historial de confirmaciones a nuestro repositorio remoto.

De la misma manera, si necesitamos actualizar localmente los cambios que se hayan hecho en nuestro respositorio remoto, podemos acceder a los mismos mediante los siguientes comandos:

* __git push `remote` `branch`:__ envia el historial de cambios al repositorio remoto
* __git fetch `remote`:__ captura el historial de confirmaciones del repositorio remoto 
* __git pull `remote` `branch`:__ obtiene los cambios del repositorio remoto y en la rama actual

## Apuntadores de GIT

Cuando visitamos el historial de cambios, debemos identificar donde nos encontramos dentro del proyecto, asi como tambien tenemos que identificar los diferentes puntos clave dentro del historial de confirmaciones, para ellos existen los siguientes elementos.

* __HEAD:__ Apuntador movil que indica donde nos encontramos dentro del historial de confirmaciones.
* __BRANCH:__ Apuntador Dinamico que se corresponde con el ultimo commit dentro de una historia.
* __TAG:__ Apuntador estatico que apunta a un commit especifico, se utiliza para el versionado.
* __STASH:__ Apuntador a la zona temporal de cambios, se utiliza cuando debemos desplazarnos entre ramas con cambios pendientes.
