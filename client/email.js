function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "wildspringstateparkcampground@gmail.com",
	Password : "Wy7722008",
	To : 'wildspringstateparkcampground@gmail.com',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}