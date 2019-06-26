SINTAXIS DE PLANTILLA: MÁS FUNCIONALIDADES

# NO SÓLO PODEMOS INTERPOLAR PROPIEDADES DE UN OBJETO, TAMBIÉN PODEMOS REALIZAR OPERACIONES (vigila el código limpio)
<p>Tema {{index + 1}}: {{tema}}</p>
<p>{{parseInt(price)}}</p>

# NO PODEMOS USAR ALGUNAS EXPRESIONES JAVASCRIPT, QUE CONLLEVEN 'EFECTOS COLATERALES', COMO POR EJEMPLO...
Asignación (=, +=...), incremento/decremento (++, --)
operadores como 'new', 'typeof', 'instance of'
expresiones de cadena como 'or', 'and'

Sí acepta ?, ! (ternarias, 'negativo contrariador')

# PASANDO PROPIEDADES DE PADRES A HIJOS: [ver ejemplo con el componente 'counter']
!!IMPORTANTE: LAS PROPIEDADES QUE PASAMOS NO ESTÁN DISPONIBLES DE MANERA INSTANTÁNEA 

DESDE EL TEMPLATE PADRE (app), CREAREMOS LAS ETIQUETAS COMPONENTE, EN DONDE PASAREMOS ESTOS @Input() QUE TENEMOS REFERENCIADO EN EL export class:

<COMPONENTE_HIJO_EN_APP [propiedad]="valor">

#IMPORTANTÍSIMO!! Debes realizar la siguiente importación en el archivo "hijo" de componentes, NOMBRE_COMP.component
import { Component, Input, OnInit } from '@angular/core'; --> trae el módulo 'Input', donde recibirá las propiedades que le mandemos desde el componente padre app.component.ts

#Cuando vayamos a utilizar data-binding con formularios, realizaremos esta importación en app.module.ts:
import { FormsModule } from '@angular/forms';

Y EN EL OBJETO IMPORTS RESEÑAMOS EL MÓDULO IMPORTADO QUE NOS PERMITIRÁ 'BINDEAR' EL CONTENIDO DE LOS INPUTS (TWO DATA-BINDING):
  imports: [
    BrowserModule,
    FormsModule
  ]