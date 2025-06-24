GIT COMMANDS:				WHAT									WHEN

 git init				 	Crea un nuevo repositorio Git en		La primera vez, en un proyecto nuevo
							la carpeta actual

 git status					Muestra qué archivos han cambiado		Para saber si hay cambios sin guardar
																	o pendientes

 git add .					Añade todos los archivos modificados	Antes de hacer un commit
							al "cambio"

 git add archivo.html		Añade un solo archivo al "cambio"		Si no se quieren subir todos los cambios
																	aún

 git commit -m "mensaje"	Guarda el cambio con yuna descripción	Cada vez que terminas algo, lo guardas
 																	con una descripción (por ejemplo: "añade
																	sección Contacto")

 git log					Muestra el historial de commits			Para ver lo que se ha ido subiendo

 git remote -v				Muestra la URL del repositorio remoto	Para saber si el proyecto está enlazado
																	con Github

 git push					Sube tus cambios al repositorio de		Después de hacer commit
							Github

 git pull					Descarga cambios desde Github a tu		Si se ha trabajado en otro PC o se han
							PC										recibido cambios

 git clone URL				Descarga un repositorio desde Github 	Cuando se quiere trabajar en un repo ya 
							a tu PC.								creado desde otro equipo

===================================================================================================================

<!--Hay dos páginas muy relevantes a tener en cuenta SIEMPRE: w3schools.com y w3c.org-->

developer.mozilla.org es otra página con recursos y aprendizaje de html

codepen.io es otra herramienta interesanto. Con un editor online

Recuerda que hay algunas etiquetas que no hay que cerrar. Como por ejemplo la "hr" o las br... Estos elementos se llaman elementos vacíos -Empty Elements-

Es importante que la primera página de nuestra web tenga de nombre index o default. De esta forma, el navegador podrá encontrarla, ya que
automáticamente lo realiza. De lo contrario tendrías que saber el nombre de dicho archivo. PE: carmona.rog/periquito.html.

<!--Recuerda que exsten las etiquetas de bloque: son aquellas que automáticamente las establece en la siguiente línea-->
<!--y están las etiquetas "inline", que son aquellas que modifican o añaden contenido en la misma línea. PE, la etiqueta <b></b>-->
<!--que pone el texto entre las etiquetas en negrita-->

<!--También se puede añadir el enlace dentro de una etiqueta <p>-->

Hay tres palabras que se llaman "iguales": cabecera, encabezado, y títulos (<head>, <header> y <h1>...<h6>)

- Cabecera: información para el navegador, pero que no la muestra.
- Encabezado: información que el navegador pinta,
- Títulos: Aportan apariencia a la página como negritas, colores o demás y los navegadores "leen" los "<h>" para saber de qué va una página y
qué contenidos muestra.

Elementos: todo lo que aparece entre dos etiquetas de apertura y cierre. Y dtambién están los elementos anidados: etiquetas dentro de 
otra etiqueta. PE: <p><b></b></p>

* El anidamiento se usa para que los hijos hereden las características de los padres.
* Esto entra en común con lo de las etiquetas en bloque y las de en línea: PE: un h1 no puede contener un p

HTTPs -> Protocolo de transferencia de hipertexto (la s es "seguro"; y es casi obligatorio)

Dominios (los gestiona el ICAAN): los hay de 4 niveles:
	1er- países (.es .pt .fr, etc): son los de dos letras (salvo .io y .tv que fueron vendidos por países)
	2o - oficios (.com .edu . org, etc)
	3er- mezcla de anteriores (.com.es, etc): 
	4o - palabras completas (.cocacola o .viajes): son muy caros y hay que solicitarlos y, si muchos lo solicitan, entra en subasta

URL - es la ruta absoluta

En HTML5, a parte de las etiquetas de bloque y las de en línea, se han creado otras, se llaman SEMÁNTICAS. Como la div, es una etiqueta semántica, no hace nada (ni líneas, ni negritas, ni saltos de línea... nada). Este div es un CONTENEDOR, usado para englobar diferentes elementos de HTML (recuerda lo que es un "elemento" en HTML) en un mismo bloque para darle un mismo estilo y no tener que ir poco a poco con cada uno. Agrupan por significado. Antes se llaman "div class header" o "div class footer"... ahora se llaman por la etiqueta que engloban: body, header, navbar, main (es el principal, el cuerpo principal de la web), footer. Dentro del main existen otros div: section, article, etc...


Al igual que las etiquetas, los estilos también pueden ser en línea (son los que aplican dentro de la etiqueta); Otra forma es dentro de la etiqueta head, con la etiqueta styles. Por último, la mejor sería crear el fichero externo .css

Dentro de <style> en el head:
	Necesito definir un SELECTOR {PROPIEDAD : VALOR;
																PROPIEDAD : VALOR;
																}

	Las etiquetas de html son los primeros selectores, también tenemos las clases (se definen con un punto(.))

	Vemos los tres tipos de enlaces: a otra página de otra web, a otra página de la misma web, o otra sección dentro de la misma página.

	TABLAS

	las tablas se contienen en la etiqueta <table>, a continuación la fila con un <tr>. A continuación <td> (que es de "datos")

	Hay dos tipos de medidas en HTML: absolutas y relativas.
	En pantallas medimos con pixeles (es una unidad mínima de medida en una pantalla)
	Cuando se trabaja en responsive, los tamaños no pueden ser en pixeles, no es lo mismo ver una cosa en una pantalla que en otra.
	
	Si no lo especifico, el tamaño de letra de un párrafo es, por defaul, de 16px. Un h1 es 32px.

	Para esto, se ha creado una unidad de medida que 1 es 16px. 1em = 16px.

	Pixel es una medida absoluta
	EM es relativa, es igual al tamaño del párrafo que yo le diga.
	Existe otro, el rem = es relativo al tamaño del párrafo del contenedor.

	Aunque el que nos interesa es el em.

	Otra medida relativa es el porcentaje