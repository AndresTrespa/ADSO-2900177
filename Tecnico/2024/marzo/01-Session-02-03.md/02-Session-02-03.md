## Ejercicio #1

'''
----
PseudoCodigo

Inicio
    Definir a Como Real;
    
    a <- 0.0;

    Escribir"Digite un número: ",a;

    Leer a;

    Si a> = 5 Entonces

        Escribir "El número es mayor o igual que 5: ";

    SiNo

        Escribir"El número es menor que 5: ";  

    FinSi  

Fin
----
Python

a = float(input("Ingrese un digito: "))

If a >= 5:

    print("El número es mayor que 5: ")
    
Else:

    print("El número es menor que 5: ")
----
'''
----
#PseudoCodigo

Inicio

    Definir nr, cnr Como Real;

    nr = 0.0;

    cnr = 0.0;

    Escribir"Digite un número real: ";

    Leer nr;

    cnr = (nr * nr)

    Escribir"El número al cuadrado es: ",cnr;

    Si cnr >= 5000 Entonces

        Escribir"El número es mayor o igual a 5000: "

    SiNo

        Escribir"El número es menor que 5000: "

    FinSi
Fin
'''
----
'''
#Python

nr = 0.0

cnr = 0.0

nr = float(input("Digite un número real: "))

cnr = (nr * nr)

print("El numero cuadrado es: ",cnr)

If cnr >= 5000:

    print("El número es mayor o igual a 5000: ")

Else:

    print("El número es menor a 5000: ")
'''
----
PseudoCodigo
## ejercicio 1

    -  Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.
Inicio

    Definir P, P2, P3, por, Por2, Por3, tot Como Real;

    P1 = 0.0;
    
    P2 = 0.0;
    
    P3 = 0.0
    
    por = 0.0;
    
    Por2 = 0.0;
    
    Por3 = 0.0;
    
    tot = 0.0;

    Escribir"Porfavor ingrese la inversión de la persona 1: ";

    Leer p1;

    Escribir"Porfavor ingrese la inversión de la persona 2: ";

    Leer p2;

    Escribir"Porfavor ingrese la inversión de la persona 3: ";

    Leer p3;

    tot = (p1+p2+p3);

    por1 = (P1/tot)*100
    
    por2 = (P2/tot)*100

    por3 = (P3/tot)*100

    Escribir"La inversion total fué de: ",tot,"$"

    Escribir"El porcentaje de la inverión de la persona 1 es de: ",por1,"%"

    Escribir"El porcentaje de la inverión de la persona 2 es de: ",por2,"%"

    Escribir"El porcentaje de la inverión de la persona 3 es de: ",por3,"%"

Fin
----
Python

P1 = float(input("Porfavor ingrese la inversión de la persona 1: "))

P2 = float(input("Porfavor ingrese la inversión de la persona 2: "))

P2 = float(input("Porfavor ingrese la inversión de la persona 3: "))

tot = P1+P2+P3

Por1 = (P1/tot)*100

Por2 = (P2/tot)*100

Por3 = (P3/tot)*100

print("la inversión total fué de: ",tot,"$")

print("El porcentaje de la inversión de la persona 1 es de: ",Por1,"%")

print("El porcentaje de la inversión de la persona 2 es de: ",Por2,"%")

print("El porcentaje de la inversión de la persona 3 es de: ",Por3,"%")
---
PseudoCodigo

## ejercicio 2

    -Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.

La calificación de Física se obtiene de la siguiente manera: Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.

La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.

Inicio

    Definir Exm, tm1, tm2, tm3, protp, prom, Exf, tf1, tf2, protf, prof, Exq, tq1, tq2, tq3, protq, proq, pro Como Real;

    Exm  = 0.0
    
    tm1  = 0.0
    
    tm2  = 0.0
    
    tm3  = 0.0
    
    protp  = 0.0
    
    prom  = 0.0
    
    Exf  = 0.0
    
    tf1  = 0.0
    
    tf2  = 0.0
    
    protf  = 0.0
    
    prof  = 0.0
    
    Exq  = 0.0

    tq1  = 0.0
    
    tq2  = 0.0
    
    tq3  = 0.0
    
    protq  = 0.0
    
    proq  = 0.0
    
    pro  = 0.0

    Escribir"Ingrese el puntaje obtenido en el examen de matemáticas";

    Leer Exm;

    Escribir"Ingrese el puntaje obtenido de la tarea 1 de matemáticas";

    Leer tm1;

    Escribir"Ingrese el puntaje obtenido de la tarea de matemáticas";

    Leer tm2;

    Escribir"Ingrese el puntaje obtenido de la tarea de matemáticas";

    Leer tm3;
    
    Escribir"Ingrese el puntaje obtenido en el examen de física";

    Leer exf;

    Escribir"Ingrese el puntaje obtenido de la tarea de física 1";

    Leer tf1;

    Escribir"Ingrese el puntaje obtenido de la tarea de física 2";

    Leer tf2;

    Escribir"Ingrese el puntaje obtenido en el examen de quimica";

    Leer Exq;

    Escribir"Ingrese el puntaje obtenido de la tarea de química 1";

    Leer tq1;

    Escribir"Ingrese el puntaje obtenido de la tarea de química 2";

    Leer tq2;

    Escribir"Ingrese el puntaje obtenido de la tarea de química 3";

    Leer tq3;

    protm = (tm1+tm2+tm3)/3;

    prom = (Exm*0.9)+(protm*0.1);

    protf = (tf1+tf2)/2;

    prof = (Exf*0.8)+(protf*0.2);
    
    protq = (tq1+tq2+tq3)/3;

    proq = (Exq*0.85)+(protf*0.15);

    pro = (prom+prof+proq)/3;

    Escribir"El promedio de matemáticas es de: ",prom

    Escribir"El promedio de física es de: ",prof

    Escribir"El promedio de química es de: ",proq

    Escribir"El promedio total de las 3 materias es de: ",pro

Fin
---
Python

exm = float(input("Ingrese el puntaje obtenido en el examen de matemáticas: "))

tm1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de matemáticas: "))

tm2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de matemáticas: "))

tm3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de matemáticas: "))

exf = float(input("Ingrese el puntaje obtenido en el examen de física: "))

tf1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de física: "))

tf2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de física: "))

exq = float(input("Ingrese el puntaje obtenido en el examen de Química: "))

tq1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de Química: "))

tq2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de Química: "))

tq3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de Química: "))

protm = (tm1+tm2+tm3)/3

prom = (Exm*0.9)+(protm*0.1)

protf = (tf1+tf2)/2

prof = (Exf*0.8)+(protf*0.2)
 
protq = (tq1+tq2+tq3)/3

proq = (Exq*0.85)+(protf*0.15)

pro = (prom+prof+proq)/3


print("El promedio de matemáticas es de ",prom)

print("El promedio de física es de ",prof)

print("El promedio de química es de ",proq)

print("El promedio total de las 3 materias es de ",pro)
