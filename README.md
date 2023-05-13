# Proyecto de Ecommerce de Ropa - Coderhouse 2023 (Comisión 39640)

## Descripción del Proyecto
El proyecto consiste en desarrollar un ecommerce de ropa que ofrece diferentes categorías de productos como buzos, camperas y remeras. Los usuarios podrán navegar por el sitio, ver los productos disponibles, obtener detalles de cada producto y realizar compras. El sitio también cuenta con un carrito de compras donde se muestra la cantidad de productos seleccionados, el precio total y la posibilidad de confirmar la compra a través de un formulario de validación.

## Componentes

### ProductList
Este componente muestra la lista de productos disponibles en el ecommerce. Los productos se obtienen de una fuente de datos (por ejemplo, una API) y se renderizan en una cuadrícula o lista. Cada producto muestra su imagen, título, precio y un botón para ver más detalles.

### ProductDetail
Este componente muestra los detalles de un producto específico. Se accede a través de un enlace desde la lista de productos. Muestra la imagen, título, descripción, precio y permite seleccionar la cantidad deseada para añadir al carrito de compras.

### Cart
El componente Cart muestra los productos seleccionados por el usuario en el carrito de compras. Muestra la lista de productos agregados, la cantidad, el precio unitario y el subtotal por producto. También muestra el precio total de todos los productos en el carrito. El usuario puede eliminar productos del carrito y realizar el proceso de compra.

### CheckoutForm
Este componente muestra un formulario de validación para confirmar la compra. El usuario debe ingresar su información personal, como nombre, dirección, teléfono y correo electrónico. Una vez completado, se realiza la validación de la compra y se muestra un ID final de la compra.

## Tecnologías Utilizadas
- React: Utilizado para el desarrollo de la interfaz de usuario y los componentes del sitio web.
- HTML y CSS: Utilizados para la estructura y el diseño de las páginas web.
- React Router: Utilizado para la navegación entre las diferentes páginas del sitio.
- Firebase Firestore: Utilizado como base de datos para almacenar y gestionar la información de los productos y las compras.

## Pasos para Ejecutar el Proyecto
1. Clonar el repositorio del proyecto desde [URL del repositorio].
2. Instalar las dependencias del proyecto utilizando el comando `npm install`.
3. Configurar la conexión a Firebase Firestore.
4. Ejecutar el proyecto utilizando el comando `npm start`.
5. Acceder al sitio web a través del navegador en la dirección `http://localhost:3000`.

## Conclusiones
El proyecto de ecommerce de ropa desarrollado para Coderhouse 2023 (Comisión 39640) es una aplicación web interactiva que permite a los usuarios explorar y comprar productos de ropa. Con componentes bien estructurados y funcionalidades clave como la visualización de productos, el detalle de los productos, el carrito de compras y el formulario de validación, el proyecto ofrece una experiencia de usuario completa y satisfactoria. Utilizando tecnologías como React y Firebase Firestore, se logra una implementación eficiente y escalable del sistema de ecommerce.
