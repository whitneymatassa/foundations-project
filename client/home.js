const searchForm = document.querySelector('#search-form')
const campsiteContainer = document.querySelector("#campsite-container")
const checkIn = document.querySelector("#check-in")
const checkOut = document.querySelector("#check-out")
const groupSize = document.querySelector('#group-size')
const siteConstant = document.querySelector("#rv-site")
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const resEmail = document.querySelector('#email')
const resPhone = document.querySelector('#phone')

function clearContainer() {
    campsiteContainer.innerHTML = ''
}

function createReserveForm(data, body) {
            `<form id='res-form>
            <h6>Fill out the information below and confirm to reserve campsite #${data['site_number']} for the selected dates.</h6>
            <h6>${body.checkIn} - ${body.checkOut}</h6>
            First Name:<input id=first-name type="name" required="true"><br>
            Last Name:<input id="last-name type="name" required="true"><br>
            E-mail Address:<input id="email" required="true"><br>
            Phone Number:<input id="phone" required="true"><br>
            <button id-"confirm-button" onclick ="completeReservation(${data['site_id']})">Confirm Reservation</button>
            </form>`
}

function selectCampsite(id) {
    clearContainer()
    axios.get(`http://localhost:9875/campsites/${id}`)
    .then(res => {
        createReserveForm(res.data, searchBody)
        campsiteContainer.innerHTML+= createReserveForm
    })
}


function getAvailableCampsites(evt) {
    evt.preventDefault()

    console.log('hit')
    

    var searchBody = {
        checkIn: checkIn.value,
        checkOut: checkOut.value,
        groupSize: groupSize.value,
        siteType: siteConstant.value
    }
    axios.post('http://localhost:9875/available/', searchBody)
    .then(res=>{
        res.data.forEach(elem => {
            let createCampsiteCard =
                `<div class=card id=site-card>
                <h2>Campsite Number ${elem['site_number']}</h2>
                Group Limit: ${elem['group_max']}<br>
                Site Accessibility: ${elem['site_type']}</p>
                <button id="reserve-button" onclick="selectCampsite(${elem['site_id']})">Reserve</button>
            `
        campsiteContainer.innerHTML=createCampsiteCard

        })
    })
}

function createAlert(body) {
    alert.innerHTML = `<div id='confirm-alert'>
    <h5>Thank you for reserving your stay with us at Wildspings State Park Campground</h5>
    <p>Please check your inbox for an e-mail confirming the details of your reservation.<br>
    We look forward to hosting you!</p>
    <ul>Reservation Details:
    <li>Check-in:${body.checkIn}</li>
    <li>Check-out: ${body.checkOut}</li>
    <li>Site Number: ${body.siteId}<li>

    <button id="ok-reload" onclick="reloadHome()">OK</button>
    </div>`
}
function addNewUser(body){
    axios.post('http://localhost:5050/users', body)
    .then(res => {
        console.log(`${res.user_id} 'added to users`)
        let userId = res['user_id']
        return userId()
    })
}

function addNewReservation(body) {
    axios.post('http//localhost:5050/reservations', body)
    .then(res => {
        console.log(`${res.res_id} added to reservations`)
    })
}

function completeReservation(id) {
    console.log('hit', id)
    let siteId = id.value
    let userBody = {
        first_name: firstName.value,
        last_name: lastName.value,
        email: resEmail.value,
        phone: resPhone.value, 
    }
    
    addNewUser(userBody)

    let rsvBody = {
        userId: userId.value,
        siteId: siteId.value,
        checkIn: checkIn.value,
        checkOut: checkOut.value
    }

    addNewReservation(rsvBody)

   // const homeURL = 'http://localhost:9875'
    
    createAlert(rsvBody)
  //  homeURL.reload()
}

searchForm.addEventListener('submit', getAvailableCampsites)