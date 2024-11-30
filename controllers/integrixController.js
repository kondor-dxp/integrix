const functions = require('../db/functions');

const integrixController = {
    async home(req, res) {

        // VARIABILI COMUNI A TUTTI I CONTROLLER
        const route = "home"
        const session = require('../controllers/sessionController');

        // VARIABILI SPECIFICHE DEL CONTROLLER
        const apps = require("../config/apps")

        try {
            const users = await functions.getAll("User","Person")
            
            // RENDER DELLA PAGINA HTML CON I DATI RESTITUITI DAL CONTROLLER
            const status = users ? 200 : 400
            const page = { apps, users }
            res.status(status).render('template', { page, route, session })
        } catch (error) {

            // RENDER DELLA PAGINA HTML CON L'ERRORE GESTITO
            const status = 500
            const page = { error, status }
            res.status(status).render('template', { page, route, session })
        }
    }
}
module.exports = integrixController