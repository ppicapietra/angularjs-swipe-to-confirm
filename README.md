# **ppica-swipe-to-confirm** 🚀

Un componente AngularJS de "deslizar para confirmar" que puedes integrar fácilmente en tu aplicación.  

## **📌 Instalación**

Este componente se encuentra disponible en **Bower**. Para instalarlo, ejecuta:  

```bash
bower install --save https://github.com/ppicapietra/angularjs-swipe-to-confirm.git
```

Luego, inclúyelo en tu archivo **`index.html`**:

```html
<script src="bower_components/pswipe-to-confirm/dist/swipe-to-confirm.min.js"></script>
```

Y agrégalo como dependencia en tu módulo de AngularJS:

```js
angular.module('miApp', ['ppica.pswipeToConfirm']);
```

---

## **📌 Uso**

En tu template HTML, simplemente usa el componente:  

```html
<ppica-swipe-to-confirm on-confirm="miFuncionDeConfirmacion()"></ppica-swipe-to-confirm>
```

### **🎯 Atributos Disponibles**

| Atributo     | Descripción |
|--------------|------------|
| `on-confirm` | Callback que se ejecuta al completar la acción de deslizar. |

---

## **📌 Ejemplo Completo**

### **💻 En el HTML:**

```html
<div ng-app="miApp" ng-controller="MiController">
    <ppica-swipe-to-confirm on-confirm="confirmado()"></ppica-swipe-to-confirm>
</div>
```

### **📝 En el Controlador AngularJS:**

```js
angular.module('miApp', ['ppica.swipeToConfirm'])
  .controller('MiController', function($scope) {
    $scope.confirmado = function() {
      alert("¡Confirmado!");
    };
  });
```

---

## **📌 Desarrollo**

Si quieres modificar o mejorar el componente, sigue estos pasos:  

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/ppica-swipe-to-confirm.git
   cd ppica-swipe-to-confirm
   ```

2. Instala las dependencias:  

   ```bash
   npm install
   bower install
   ```

3. Construye el proyecto:  

   ```bash
   gulp build
   ```

4. Corre un servidor local para pruebas:  

   ```bash
   gulp serve
   ```

---

## **📌 Licencia**

Este proyecto está bajo la licencia **MIT**. ¡Úsalo libremente! 🎉  
