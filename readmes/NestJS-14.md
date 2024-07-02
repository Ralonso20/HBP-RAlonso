# JavaScript Advance III

## Paradigma Funcional

#### Ventajas

1. Inmutabilidad: Los datos no cambian una vez creados, lo que facilita el razonamiento sobre el código y reduce los efectos secundarios.
2. Funciones como ciudadanos de primera clase: Las funciones pueden ser asignadas a variables, pasadas como argumentos, y retornadas desde otras funciones, lo que permite una gran flexibilidad en la construcción de abstracciones.
3. Transparencia referencial: Cualquier función, dadas las mismas entradas, siempre retornará el mismo resultado, lo que facilita el testing y la depuración.
4. Facilita la concurrencia: Al no haber datos mutables, es más sencillo escribir programas que se ejecuten en paralelo sin preocuparse por bloqueos o condiciones de carrera.
   Composición de funciones: Permite construir soluciones complejas a partir de la combinación de funciones simples, promoviendo la reutilización de código.
   Desventajas del paradigma funcional:

#### Desventajas

1. Curva de aprendizaje: Para quienes vienen de paradigmas imperativos, el paradigma funcional puede ser difícil de entender inicialmente.
2. Rendimiento: La inmutabilidad y el uso intensivo de funciones pueden llevar a un mayor uso de memoria y a veces a una menor eficiencia en comparación con los enfoques imperativos, especialmente en tareas que son intrínsecamente mutables.
3. Verbosidad en ciertas tareas: Algunas operaciones que son simples en paradigmas imperativos pueden requerir más código o abstracciones complejas en el funcional.
4. Soporte y bibliotecas: Aunque está mejorando, el ecosistema de herramientas y bibliotecas para algunos lenguajes funcionales no es tan amplio como para lenguajes imperativos.
5. Interoperabilidad: Integrar código funcional con sistemas y bibliotecas imperativas puede requerir adaptaciones que disminuyan la elegancia y los beneficios del paradigma funcional.

## Casos de uso Paradigma funcional

1. **Aplicaciones concurrentes y paralelas** : La inmutabilidad y la transparencia referencial facilitan el diseño de sistemas concurrentes o paralelos, reduciendo los problemas de condiciones de carrera y bloqueos.
2. **Procesamiento de datos y análisis** : Para transformaciones de datos complejas, pipelines de procesamiento de datos, y análisis, donde las operaciones sobre los datos pueden ser fácilmente modeladas como funciones.
3. **Sistemas distribuidos** : La facilidad para razonar sobre el código y la reducción de efectos secundarios hacen que el paradigma funcional sea adecuado para el desarrollo de sistemas distribuidos, donde la fiabilidad y la tolerancia a fallos son críticas.
4. **Desarrollo de compiladores y lenguajes de programación** : La representación de código como datos y la manipulación de estos mediante funciones se alinea bien con las tareas de análisis y transformación de código.
