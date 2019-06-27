SINTAXIS DE PLANTILLA: MÁS FUNCIONALIDADES

# NO SÓLO PODEMOS INTERPOLAR PROPIEDADES DE UN OBJETO, TAMBIÉN PODEMOS REALIZAR OPERACIONES (vigila el código limpio)
<p>Tema {{index + 1}}: {{tema}}</p>
<p>{{parseInt(price)}}</p>

# NO PODEMOS USAR ALGUNAS EXPRESIONES JAVASCRIPT, QUE CONLLEVEN 'EFECTOS COLATERALES', COMO POR EJEMPLO...
Asignación (=, +=...), incremento/decremento (++, --)
operadores como 'new', 'typeof', 'instance of'
expresiones de cadena como 'or', 'and'

Sí acepta ?, ! (ternarias, 'negativo contrariador')

#COMPONENTES
ng generate component [NOMBRE_COMPONENTE]

#DECORADOR: FUNDAMENTAL EN LA CREACIÓN DE COMPONENTES:
import {Component, OnInit} from '@angular/core'
@Component({
  selector: '[NOMBRE_COMPONENTE_PARA_REFLEJARLO_EN_EL_PADRE]',
  templateUrl: '[RUTA_DE_LA_VISTA]',
  styles: [[ARRAY_RUTAS_DE_ESTILOS_CSS]]
})

# PASANDO PROPIEDADES DE PADRES A HIJOS: [ver ejemplo con el componente 'counter']
!!IMPORTANTE: LAS PROPIEDADES QUE PASAMOS NO ESTÁN DISPONIBLES DE MANERA INSTANTÁNEA 

DESDE EL TEMPLATE PADRE (app), CREAREMOS LAS ETIQUETAS COMPONENTE, EN DONDE PASAREMOS ESTOS @Input() QUE TENEMOS REFERENCIADO EN EL export class:

<COMPONENTE_HIJO_EN_APP [propiedad]="valor">

#IMPORTANTÍSIMO!! Debes realizar la siguiente importación en el archivo "hijo" de componentes, NOMBRE_COMP.component
import { Component, Input, OnInit } from '@angular/core'; --> trae el módulo 'Input', donde recibirá las propiedades que le mandemos desde el componente padre app.component.ts

#Cuando vayamos a utilizar data-binding con formularios, realizaremos esta importación en app.module.ts:
import { FormsModule } from '@angular/forms';

Y EN EL OBJETO IMPORTS RESEÑAMOS EL MÓDULO IMPORTADO QUE NOS PERMITIRÁ 'BINDEAR' EL CONTENIDO DE LOS INPUTS (TWO DATA-BINDING): -- archivo
  imports: [
    BrowserModule,
    FormsModule
  ]

# SERVICIOS
Extraen la lógica, recopilación y manejo de datos. Los servicios son Clases. Una parte importante de los servicios es que son 'SINGLETONS'. Las clases instancian objetos (un objeto es una instancia de una Clase). Cuando creamos una clase, instanciamos distintos objetos de esa clase [class Coche ----> new Coche() || new Coche()]. En el caso del SINGLETON todos los objetos son los mismos. Imaginemos un coche y otro coche. El primero gasta la mitad de gasolina... pues al ser SINGLETON, el segundo conductor tendría también la mitad de gasolina. Lo que este esquema permite es la configuración de servicios que actúan como variables globales, por ejemplo, una recopilación de datos para el usuario, que estaría disponible para todos los usuarios.

ng generate service [NOMBRE_SERVICIO]

#INYECCIÓN DE DEPENDENCIAS
@inyectable ---> 'decorador' para los servicios \\ ANGULAR SE VA A ENCARGAR DE INYECTAR LOS DATOS DERIVADOS DE LOS SERVICIOS HACIA LOS COMPONENTES

· ejemplo: vamos a desarrollar un servicio que analice los clicks que pulsamos en el componente counter

#ÁMBITO DE LAS PROPIEDADES: PUBLIC & PRIVATE
Cuando una propiedad es pública,, está estableciendo la posibilidad de ser accedida desde fuera. Creando 'private', sólo establecemos el acceso desde dentro, es decir, a través de los métodos de la clase. Sería así:

export class NOMBRE_CLASE{
  private totalClicks = 0

  addClick(): void { ---> LA FUNCIÓN SERÁ (VACÍA), NO DEVOLVERÁ NADA EXPLÍCITAMENTE, AUNQUE SÍ HARÁ CAMBIOS
    this.totalClicks++
  }

  getClicks (): number{ ---> INDICAS EL TIPO DE DATO QUE DEVOLVERÁ ESTE MÉTODO
    return this.totalClicks
  }
}

EL SERVICIO SE INYECTA CREANDO EL CONTRUCTOR DE app.component.ts:
  constructor() {
    private cs: ClicksService  --> 'cs' es un nombre arbitrario
  } 

Y EN LOS MÉTODOS DE ESE COMPONENTE, 'DISPARAMOS' EL SERVICIO
