const express = require('express')
const bodyParser = require('body-parser')
const mailgun = require('mailgun-js')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

const api_key = '69a40674c3c694c4672e12b071b2dc0d-7a3af442-f044c575';
const domain = 'sandbox4b11ea94df1a41039f5ef79407851ab5.mailgun.org';
const mg = mailgun({apiKey: api_key, domain: domain});

app.get('/', (request, response)=>{
    response.sendFile(__dirname + 'index.html');
})

app.post('/', (request, response)=>{
    const email = request.body.email;
    const data = {
        from: 'Jesse <jessehickman95@gmail.com>',
        to: email,
        subject: 'Welcome to Daily Insider!',
        text: 'Welcome to our newest Daily Insider subscriber!'
    };
     
    mg.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
        } else {
            console.log(body);
        }
    });
})

app.listen(3001, ()=>{
    console.log("Server is running on port 3000.")
})
