require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getCampsites, getAvailableCampsites, selectCampsite, addNewUser, getReservations, addNewReservation} = require('./controller.js')

app.use(express.json())
app.use(cors())

// SEED
app.post('/seed', seed)

// CAMPSITES
// app.get('/campsites', getCampsites)
app.post('/available', getAvailableCampsites)
app.get('/campsites/:id', selectCampsite)
// app.post('/campsites', addCampsite)
// app.delete('/campsites/:id', deleteCampsite)


// USERS
// app.get('/users', getUsers)
app.post('/users', addNewUser)
// app.delete('/users/:id', deleteUser)
// app.put('/users/:id', updateUser)


// RESERVATIONS
// app.get('/reservations', getReservations)
app.post('/reservations', addNewReservation)
// app.delete('/reservations/:id', deleteReservation)
// app.put('/reservations/:id', updateReservation)



app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))