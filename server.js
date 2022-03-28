// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
// }

// const express = require('express');
// const request = require('request');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// // const port  = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname + 'public')));
// // app.set('views', __dirname + '/public');
// // app.engine('html', require('ejs').renderFile);
// // app.set('view engine', 'html');

// // app.set('view engine', 'html')
// // app.engine('html', require('ejs').renderFile);
// // app.use(express.static('public'))

// app.listen(3001);


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Signup Route
app.post('/signIn', (req, res) => {
    const { firstName, lastName, email } = req.body;

    // Make sure fields are filled
    if (!firstName || !lastName || !email) {
        // res.redirect('/fail.html');
        console.log("failed"); 4
        return;
    }

    // Construct req data
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const postData = JSON.stringify(data);

    fetch('https://usX.api.mailchimp.com/3.0/lists/<YOUR_AUDIENCE_ID>', {
        method: 'POST',
        headers: {
            Authorization: 'auth <YOUR_API_KEY>'
        },
        body: postData
    })
        .then(res.statusCode === 200 ?
            res.redirect('/success.html') :
            res.redirect('/fail.html'))
        .catch(err => console.log(err))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));