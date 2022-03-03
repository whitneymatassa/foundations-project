require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
                rejectUnauthorized: false
        }
    }
})

module.exports = {
    getAvailableCampsites: (req, res) => {
        const { checkIn, checkOut, groupSize, siteType } = req.body;
        sequelize.query(`
        select * from campsites
        join reservations on reservations.site_id <> campsites.site_id
	        where reservations.site_id is null
		        or reservations.check_in > '${checkIn}'T00:00:00.000Z
            	or reservations.check_out < '${checkOut}'T00:00:00.000Z
            and campsites.group_max >= ${groupSize}
	        and campsites.site_type ='${siteType}'
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    selectCampsite: (req,res) => {
        const {siteId} = req.body
        sequelize.query(`
        select * from campsites
        where site_id = '${siteId}'
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
   

    addNewUser: (req, res) => {
        const {firstName, lastName, resEmail, resPhone} = req.body;
        sequelize.query(`
            insert into users (first_name, last_name, email, phone)
            values ('${firstName}','${lastName}','${resEmail}', '${resPhone}')
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(error => console.log(error))
    },

   
    addNewReservation: (req, res) => {
        const {userId, siteId, checkIn, checkOut } = req.body;
        sequelize.query(`
        insert into reservations (user_id, site_id, check_in, check_out)
        values (${userId}, ${siteId}, '${checkIn}', '${checkOut}')
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(error => console.log(error))
    },

    
}