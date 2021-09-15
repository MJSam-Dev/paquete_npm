// Se declara el arreglo
const names = [
    'Jess',
    'Maya',
    'Sam',
    'Chalu',
    'Cary',
    'Jos',
    'Isma',
    'Mamá',
    'Papá',
    'La tía Mago'
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const randomMsg = () => {
    const message = names[Math.floor(Math.random() * names.length)];
    console.log(`Hola, soy ${message}, y solo vine a desearte un gran día!`);
};

// Exportar como un módulo
module.exports = { randomMsg };