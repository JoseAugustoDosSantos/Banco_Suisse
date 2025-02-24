import express from 'express'
import logins from '../routes/loginRoutes.js'
import users from '../routes/usersRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('banco suisse');
    })

    app.use(
        express.json(),
        logins,
        users
    )
}

export default routes