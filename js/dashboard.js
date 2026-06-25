$(document).ready(function(){
    $("#tablaUsuarios").DataTable({
        language:{
            search: "Buscar: ",
            lengthMenu: "Mostrar_MENU_Registros",
 
            info: "Mostrar_START_a_END_de_TOTAL-registros",
            infoEmpty:"Mostrando 0 a 0 de 0 registros",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "No hay datos disponibles en la tabla",
            paginate:{
                first: "Primero",
                last: "Ultimo",
                next: "Siguiente",
                previous: "Anterior"
            }
        }
    })
})
 
 