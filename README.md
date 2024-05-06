Instrucciones de uso:

1. Utilizar npm install desde la consola/terminal
2. Utilizar npm install -g express-generator desde la consola/terminal
3. Iniciar el programa con npm start
4. Abrir Postman y una pestaña GET
5. En la direccion ir a localhost:3000/tasks/getTasks para validar un array vacio
6. En una nueva pestaña con la opcion POST ir a localhost:3000/tasks/addTasks
7. Usando el area que dice body y cambiando la opcion de texto a JSON ingresar lo siguiente:
{
    "name":"",
    "description":"",
    "dueDate":""
}
en donde agregaremos los datos necesarios
8. Al usar send, estos datos se deben mostrar en la primer pestaña, la que tiene la opcion GET
9. abrir una nueva pestaña con la opcion DELETE e ir a localhost:3000/tasks/removeTask/"?"
donde "?" sera sustituido por el ID de alguna de las tareas anteriores.
10. Al usar send, esto deberia eliminar alguna de las tareas, lo podemos revisar en la pestaña GET.