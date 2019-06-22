SINTAXIS DE PLANTILLA: DIRECTIVAS DE ESTRUCTURA

# La sintaxis de plantilla Angular extiende el código HTML y JS.
Un ejemplo de esto se puede ver en la forma en que realiza una iteración, para pasar un array a elementos HTML

<div *ngFor="let item of products"></div>

*ngFor es una directiva estructural, quiere decir, éstas modelan los elementos del DOM, generalmente añadiendo, eliminando o modificando los elementos a los que son adjuntados o referidos.

TODA DIRECTIVA DE ESTRUCTURA VIENE ANTECEDIDA POR '*'


# Como tantas veces, recogeremos valores de una clave utilizando la sintaxis 'Moustache' o de "interpolación" {{}}

<div *ngFor="let item of products">{{item.name}}</div>


# Podemos también 'atacar' a los atributos de los elementos HTML, utilzando esta vez la sintaxis propia de arrays: []

<a [href]="product.linkTo">{{product.name}}</a>


# Otro tipo de directiva estructural es el clásico condicional 'if'. Ya hemos visto dos aspectos clave: este tipo de directiva viene antecedido por *, seguido del prefijo ng, y el nombre de la directiva, por lo que tenemos...

<p *ngIf="product.discount">{{product.discount}}% de descuento</p>

Estas directivas pueden ser complementarias, por ejemplo, podemos tener un *ngFor con un *ngIf anidado, y viceversa:

<div *ngFor="let item of products"><p *ngIf="product.discount">{{product.discount}}% de descuento</p></div>
<div *ngIf="product.available"><p *nFor="product.features">{{product.features}}</p></div>

# Cerrando el círculo, tenemos la directiva de interacción con eventos (event binding), invocada de una forma diferente:

<a (click)="share()">Share a product</a>

El evento click invoca a la función share(), contenida en un componente por nosotros definido, pero esa historia la veremos más adelante...

# A modo de resumen, podríamos hacer un 'popurrí' de todo. Quedaría algo así:

<div *ngFor="let item of products">
    <a *ngIf="item.available" [href]="{{item.link}}">{{item.name}}</a>
    <button (click)="compare()">Compare product</button>
</div>