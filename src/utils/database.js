//!exportando constante
const databaseType = {
    userType: "admin",
    typeData: "datalocal",
};

async function connectToDatabase(dataName) {
    console.log(`Conectando ao banco de dados ${dataName}`);
}

async function disconnectToDatabase() {
    console.log(`Desconectado do banco de dados.`);
}

export { connectToDatabase, disconnectToDatabase, databaseType};

