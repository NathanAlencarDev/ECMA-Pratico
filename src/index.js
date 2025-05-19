//! Para o ESM preciso especificar o tipo de arquivo que ele é neste caso devo passar a extensão do arquivo no caso ".js". Pois este padrão tambem aceita a extensão ".mjs"
//! por isso devo por obrigaçao especificar.
//! A extensão "mjs" é outra forma de lidar com modulos em js.

//!import unico.
//import connectToDatabase from "./utils/database.js";

//! import all
//import * as database from "./utils/database.js";

//! import Destructuring. Aqui tambem podemos passar a constante.
import { connectToDatabase, databaseType } from "./utils/database.js";

import {getDataFromApi} from './utils/api.js';

//! utilizando a função com a chamada unica.
//connectToDatabase("my-database");

//! utilizando a função com a chamada geral utilizando o apelido antes atribuido "database".
//database.connectToDatabase("my-database");
//database.disconnectToDatabase();

//! utilizando a chamada do import Desctructuring.
connectToDatabase("my-database");

getDataFromApi();

