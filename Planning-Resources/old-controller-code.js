// addCampsite: (req, res) => {
//     const {siteNumber, rvAccessible} = req.body;
//     sequelize.query(`
//         insert into campsites (site_number, rv_accessible)
//         values ('${siteNumber}','${rvAccessible}')
//         returning *;
//     `)
//         .then(dbRes => res.status(200).send(dbRes[0]))
//         .catch(err => console.log(err))
// },

// deleteCampsite: (req, res) => {
//     const {siteNumber} = req.body;
//     sequelize.query(`
//         delete from campsites
//         where site_number = '${siteNumber}
//     `)
//         .then(dbRes => res.status(200).send(dbRes[0]))
//         .catch(err => console.log(err))
// },


// deleteUser: (req, res) => {
//     const {email} = req.body;
//     sequelize.query(`
//     delete from users
//     where email = '${email}'
//     `)
//         .then(dbRes => res.status(200).send(dbRes[0]))
//         .catch(error => console.log(error))
// }, 

// updateUser: (req, res) => {
//     const {firstName, lastName, resEmail, resPhone} = req.body;
//     sequelize.query(`
//     update users
//     set first_name = '${firstName}',
//     last_name = '${lastName}',
//     email = '${resEmail}',
//     phone = '${resPhone}',
//     `)
//         .then(dbRes => res.status(200).send(dbRes[0]))
//         .catch(error => console.log(error))
// }, 
// deleteReservation: (req, res) => {
//     const { reservationID } = req.body;
//     sequelize.query(`
//     delete from reservations
//     where reservation_id = '${reservationID}
//     `)
//         .then(dbRes => res.status(200).send(dbRes[0]))
//         .catch(error => console.log(error))
// },

// updateReservation: (req, res) => {
//     const { siteID, checkIn, checkOut } = req.body;
//     sequelize.query(`
//     update reservations 
//     set site_id = '${siteID}',
//     check_in = '${checkIn}',
//     check_out = '${checkOut}',
//     occupied = true
//     `)
//         .then(dbRes => res.status(200).send(dbRes[0]))
//         .catch(error => console.log(error))
// },
// getCampsites: (req, res) => {
//     sequelize.query(`
//     select * from campsites
//     order by site_number asc;
//     `)
//         .then(dbRes => res.status(200).send(dbRes[0]))
//         .catch(err => console.log(err))
// // },
// getReservations: (req, res) => {
//     sequelize.query(`
//     select * reservations
//     order by check_in asc
//     `)
//         .then(dbRes => res.status(200).send(dbRes[0]))
//         .catch(error => console.log(error))
// },