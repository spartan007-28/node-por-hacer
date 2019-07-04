const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer')

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        //console.log('Crear tarea por hacer');
        break;
    case 'listar':
        let listado = porHacer.getListado();
        //console.log(listado);
        for (let tarea of listado) {
            console.log('======= Por Hacer ========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================='.green);
        }
        //console.log('Mostar todas las tareas por hacer');
        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        //console.log('Tarea Actualizada');
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        //console.log('Eliminado');
        break;
    default:
        console.log('Comando no reconocido');
}