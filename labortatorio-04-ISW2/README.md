## Funcionalidad: Editar Tarjeta de Crédito

Permite al usuario modificar los datos de una tarjeta registrada previamente en su cuenta, como el nombre, el límite de crédito y las fechas importantes (corte y vencimiento).
### Happy Paths

1. **Editar nombre de la tarjeta**
   - El usuario accede a su lista de tarjetas.
   - Selecciona una tarjeta específica.
   - Cambia el nombre (por ejemplo: "Tarjeta Visa" → "Visa Personal").
   - Guarda los cambios.
   - El sistema confirma que la tarjeta fue actualizada correctamente.

2. **Actualizar el límite de crédito**
   - El usuario modifica el límite disponible en la tarjeta.
   - El sistema valida que sea un número positivo.
   - El sistema actualiza el nuevo límite.

4. **Cambiar varios campos al mismo tiempo**
   - El usuario actualiza el nombre, el límite y las fechas en una sola acción.
   - El sistema valida todos los campos.
   - Se guardan los cambios y se muestra un mensaje de éxito.

### Unhappy Paths

1. **Límite de crédito no válido**
   - El usuario ingresa un límite negativo o texto no numérico (por ejemplo: "-1000" o "abc").
   - El sistema muestra un mensaje de error: “El límite debe ser un número positivo”.

2. **Nombre de tarjeta vacío o inválido**
   - El usuario deja el campo de nombre en blanco o ingresa un texto demasiado corto.
   - El sistema impide guardar y muestra: “Ingrese un nombre válido”.

3. **Fecha de corte fuera de rango**
   - Se ingresa una fecha inexistente o fuera de los días del mes.
   - El sistema muestra un error como: “Fecha inválida. Elija un día entre 1 y 31”

4. **La tarjeta fue eliminada desde otra sesión**
   - El usuario intenta editar una tarjeta que ya no existe.
   - El sistema muestra: “Esta tarjeta ya no está disponible”.

5. **Sesión expirada**
   - El usuario intenta guardar cambios después de haber estado inactivo por mucho tiempo.
   - Es redirigido al login con un mensaje: “Sesión expirada. Inicia sesión para continuar”.