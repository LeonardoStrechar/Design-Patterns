import Client from "./Client";
import Notify from "./Notify";

const cliente = new Client();
const notificacao = new Notify(cliente); //para passar o "cliente aqui, precisa criar o contructor na class Notify"

notificacao.sendEmail(); //Se passar por aqui não precisa do constructor, mas ainda receber o parametro na class