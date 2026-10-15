# Act4. Introducción a React

Mini aplicación hecha con Vite + React que incluye un componente simple, una tarjeta de perfil con props, un contador con estado (useState) y una lista de tareas dinámica renderizada con .map() y keys. Se despliega con gh-pages.

## Preguntas

**a) ¿Qué diferencia hay entre props y state?**
Las props son datos que un componente padre le envía a un hijo; el hijo solo las lee y no puede modificarlas. El state es información propia de un componente que puede cambiar con el tiempo, y cuando cambia React vuelve a renderizar el componente.

**b) ¿Por qué es importante usar una key en una lista?**
La key le da a cada elemento una identidad única. Así React sabe qué elementos se agregaron, cambiaron o se eliminaron, y actualiza solo lo necesario en lugar de rehacer toda la lista. Sin keys puede haber errores y bajo rendimiento.

**c) ¿Qué hace useState y dónde lo usé?**
useState es un Hook que permite a un componente funcional guardar un valor y una función para actualizarlo. Al llamar esa función, React vuelve a renderizar con el nuevo valor. Lo usé en el componente Contador (`const [cuenta, setCuenta] = useState(0)`) para sumar y restar, y en ListaTareas para guardar y modificar las tareas.

**d) Repositorio:** https://github.com/yailivach91-ctrl/t3_act4_react

**e) Proyecto desplegado:** https://yailivach91-ctrl.github.io/t3_act4_react/
