const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}


const argv = require('yargs')
    .command('crear', 'Crea un nuevo elemento', {
        descripcion
    })
    .command('actualizar', 'Actualiza un elemento', {
        descripcion,
        completado
    })
    .command('borrar', 'Elemento Eliminado', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}