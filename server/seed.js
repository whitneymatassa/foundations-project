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
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists availability;
        drop table if exists reservations;
        drop table if exists campsites;
        drop table if exists users;

        create table users (
            user_id serial primary key, 
            first_name varchar(50) not null,
            last_name varchar(50) not null,
            email varchar(100) not null,
            phone varchar(20) not null
        );

        create table campsites (
            site_id serial primary key,
            site_number integer not null,
            group_max integer not null,
            site_type varchar(15) not null
        );

        create table reservations (
            res_id serial primary key, 
            user_id integer references users(user_id),
            site_id integer references campsites(site_id),
            check_in date not null,
            check_out date not null
        );
        

        insert into users (first_name, last_name, email, phone)
        values ('Jenny', 'Smith', 'jennysmith@gmail.com', '3334564551'),
            ('Tom', 'Petty', 'tmanpet@usa.com', '204-5551332'),
            ('Scott', 'Thompson', 'SCThompson@umo.edu', '2355114565'),
            ('Jared', 'Coats', 'blue124355@hotmail.com', '3203205555'),
            ('John', 'Spring', 'John.Spring@fancyjob.com', '8445255778'),
            ('Maria', 'Theresa', 'Motheroftheyear@scoutsco.com', '4022016859'),
            ('Lenny', 'Thatcher', 'Lenny@portlandyatchs.com', '659-552-6545'),
            ('Cheryl', 'Edwards', 'cherrysbakery@yahoobiz.com', '3335982220'),
            ('Joseph', 'Parent', 'jparent@htt.com', '3238925089'),
            ('Bill', 'Johanson', 'billjohanson@gmail.com', '508-650-7049'),
            ('Albert', 'Phillips', 'barberi@elements.com', '6507497674'),
            ('Colleen', 'Tanberg', 'soulwellness@hotmail.com', '3037497114'),
            ('Vickie', 'Lee', 'vpwmoments@gmail.com', '650-303-6196'),
            ('Pennie', 'Benazet', 'pbenazet1@tripadvisor.com', '9138673482'),
            ('Dewey', 'Jiracek', 'djiracek3@kickstarter.com', '9604958684'),
            ('Nani', 'Catonnet', 'ncatonnet6@zimbio.com', '6139042518'),
            ('Fern', 'Rudgerd', 'frudgerd7@globo.com', '4578772961'),
            ('Dianne', 'Pringley', 'dpringley8@addthis.com', '9119902133'),
            ('Tersina', 'Nugent', 'tnugent9@go.com', '2036450489'),
            ('Felicity', 'Galloway', 'fgallowaya@jugem.jp', '8023554681'),
            ('Rosemaria', 'Wildgoose', 'rwildgooseb@blogger.com', '5122434009'),
            ('Torey', 'Roswarne', 'troswarnec@admin.ch', '8556206619'),
            ('Edy', 'Wardlow', 'ewardlowd@1688.com', '1562379171'),
            ('Gisele', 'Dickenson', 'gdickensong@wunderground.com', '2153946722'),
            ('Arty', 'Oughtright', 'aoughtrightk@cdbaby.com', '3424496000'),
            ('Farlay', 'De Zuani', 'fdezuanil@answers.com', '2908736752'),
            ('Park', 'Gimeno', 'pgimenor@army.mil', '6367962878'),
            ('Salvidor', 'Moens', 'smoenss@google.it', '2258019598'),
            ('Hestia', 'Healy', 'hhealyt@tinypic.com', '5346280058'),
            ('Jarred', 'Giraudy', 'jgiraudyu@narod.ru', '9865434528'),
            ('Dannel', 'Cooke', 'dcookev@php.net', '5969305096'),
            ('Leland', 'Tills', 'ltillsw@usgs.gov', '7524958969'),
            ('Sullivan', 'Boddie', 'sboddiex@cbsnews.com', '6738445239'),
            ('Branden', 'Peetermann', 'bpeetermanny@army.mil', '2867603601'),
            ('Lucias', 'Cooksey', 'lcookseyz@eepurl.com', '8705415354'),
            ('Barron', 'Kilbourn', 'bkilbourn10@jimdo.com', '7296835396'),
            ('Flemming', 'Bessant', 'fbessant11@ask.com', '6861504732'),
            ('Ambrosi', 'Shillaker', 'ashillaker12@angelfire.com', '2123397539'),
            ('Charlie', 'Wilson', 'charlie@portlandpump.com', '4133301447');

        insert into campsites (site_number, group_max, site_type)
        values (1, 6, 'tent'), 
            (2, 4, 'tent'), 
            (3, 4, 'tent'),
            (4, 6, 'tent'),
            (5, 8, 'tent'),
            (6, 6, 'tent'),
            (7, 6, 'rv'),
            (8, 10, 'rv'),
            (9, 4, 'tent'),
            (10, 6, 'rv'),
            (11, 8, 'tent'),
            (12, 8, 'tent'),
            (13, 10, 'rv'),
            (14, 6, 'tent'),
            (15, 8, 'tent'),
            (16, 6, 'tent'),
            (17, 6, 'tent'),
            (18, 10, 'rv'), 
            (19, 8, 'rv'),
            (20, 8, 'rv'),
            (21, 6, 'tent'),
            (22, 6, 'tent'),
            (23, 4, 'tent'),
            (24, 8, 'tent'),
            (25, 12, 'rv');

        

        insert into reservations (user_id, site_id, check_in, check_out)
        values (1, 5, '2022-07-02', '2022-07-06'), 
        --             (6, 6, '2022-08-12', '2022-08-16'),
        --             (3, 12, '2022-06-28', '2022-06-29'),
        --             (14, 9, '2022-06-25', '2022-06-29'),
        --             (11, 18, '2022-08-10', '2022-08-20'),
        --             (9, 14, '2022-05-29', '2022-06-13'),
        --             (4, 11, '2022-08-01', '2022-08-06'),
        --             (2, 8, '2022-07-11', '2022-07-17'),
        --             (7, 9, '2022-08-06', '2022-08-12'),
        --             (7, 2, '2022-05-22', '2022-06-02'),
        --             (12, 13, '2022-07-01', '2022-09-03'),
        --             (10, 16, '2022-06-23', '2022-07-01'),
        --             (8, 6, '2022-07-24', '2022-07-31'),
        --             (7, 5, '2022-08-10', '2022-08-20'),
        --             (5, 18, '2022-06-05', '2022-08-14'),
        --             (13, 17, '2022-05-23', '2022-05-31'),
        --             (1, 5, '2022-06-12', '2022-08-20'),
        --             (23, 6, '2022-07-12', '2022-07-16'),
        --             (30, 12, '2022-06-20', '2022-06-29'),
        --             (20, 9, '2022-06-25', '2022-06-29'),
        --             (29, 18, '2022-07-10', '2022-07-20'),
        --             (16, 14, '2022-06-29', '2022-07-13'),
        --             (24, 11, '2022-05-01', '2022-05-06'),
        --             (22, 8, '2022-09-11', '2022-09-17'),
        --             (27, 9, '2022-06-02', '2022-06-12'),
        --             (17, 2, '2022-05-22', '2022-07-02'),
        --             (32, 13, '2022-07-01', '2022-07-03'),
        --             (18, 16, '2022-07-23', '2022-08-01'),
        --             (28, 6, '2022-08-24', '2022-08-31'),
        --             (30, 5, '2022-06-10', '2022-06-20'),
        --             (35, 18, '2022-05-05', '2022-05-14'),
        --             (33, 17, '2022-06-23', '2022-06-30'),
        --             (31, 5, '2022-07-02', '2022-07-20'),
        --             (13, 17, '2022-09-19', '2022-09-21');

        
       
        `).then(() => {
            console.log('database seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding database', err))
    }
}


