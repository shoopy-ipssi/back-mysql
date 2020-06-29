const bodyParser = require('body-parser');
const MJ_APIKEY_PRIVATE = 'a0f9a2a91d6c439af98d9871d2f5fbac';
const MJ_APIKEY_PUBLIC = '75b01fd743bd50c6f77107f455a57a8b';
const emailFrom = 'genoud.jeremy@outlook.com'
const name = "DoraVsPixel Team"

const mailjet = require('node-mailjet').connect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE)

function sendMail(Messages){
    let msg = ''

    return msg
}

module.exports = function (app, db) {
    app.use(bodyParser.json());

    app.post('/sendMail', (req, res)=>{
        const requestBody = req.body
        console.log(requestBody)
        //Data for mail
        const FromData = {Email: emailFrom, Name: name}
        const ToData = [{Email: requestBody.EmailContact, Name: requestBody.NameContact}]
        const Subject = `Contact - ${requestBody.SubjectMail}`
        const Text = requestBody.ContentMail
        const Html = `Vous avez reçu une demande de contact de la part de <a href="mailto:${requestBody.MailFrom}">${requestBody.MailFrom}</a>.<br><div style="width:70%; margin:15px; padding: 15px; border: 1px black inset">${requestBody.ContentMail}</div>`
        const Messages = [{From:FromData, To:ToData, Subject: Subject, TextPart: Text, HtmlPart: Html}]
        //
        const request = mailjet.post('send', {version: 'v3.1'}).request({
            Messages: Messages
        })
        let msg = true ;
        request
            .then(result => {
                msg = true
            })
            .catch(err => {
                msg = false
            })

        res.send(msg)
    })
    app.post('/createaccount', (req, res) => {
        const requestBody = req.body
        console.log(req)
        const FromData = {Email: emailFrom, Name:name}
        const ToData = [{Email: requestBody.EmailUser, Name: requestBody.NameUser}]
        const Subject = `Création d'un compte`
        const Text = `${requestBody.NameUser}, vous venez de créer un compte sur Shoopy, afin d'activer votre compte, veuillez cliquer sur le lien ci-dessous [link]. Toute l'équipe DoraVSPixel.`
        const Html = `<div>${requestBody.NameUser},<br><br>vous venez de créer un compte sur Shoopy, afin d'activer votre compte, veuillez cliquer sur le lien ci-dessous <br><br><span style="border: 1px solid black; border-radius:10px; padding:15px; background-color: grey"><a href=${requestBody.linkEncrypt}>Activer mon compte</a></span><br><br>Toute l'équipe DoraVSPixel</div>`
        const Messages = [{From:FromData, To:ToData, Subject: Subject, TextPart: Text, HtmlPart: Html}]
        const request = mailjet.post('send', {version: 'v3.1'}).request({
            Messages: Messages
        })
        let msg = true;
        request
            .then(result => {msg = true})
            .catch(err => {msg=false})
        res.send(msg)
    })
    app.post('/forgottenPassword', (req, res) => {
        const requestBody = req.body
        console.log(req)
        const FromData = {Email: emailFrom, Name:name}
        const ToData = [{Email: requestBody.EmailUser, Name: requestBody.NameUser}]
        const Subject = `Mot de passe oublié`
        const Text = `${requestBody.NameUser}, vous venez de faire une demande de changement de mot de passe, merci de cliquer sur le lien ci-dessous afin de renseigner un nouveau mot de passe [link]. Toute l'équipe DoraVSPixel.`
        const Html = `<div>${requestBody.NameUser},<br><br>Vous venez de faire une demande de changement de mot de passe, merci de cliquer sur le lien ci-dessous afin de renseigner un nouveau mot de passe <br><br><span style="border: 1px solid black; border-radius:10px; padding:15px; background-color: grey"><a href=${requestBody.linkEncrypt}>Changer de mot de passe</a></span><br><br>Toute l'équipe DoraVSPixel</div>`
        const Messages = [{From:FromData, To:ToData, Subject: Subject, TextPart: Text, HtmlPart: Html}]
        const request = mailjet.post('send', {version: 'v3.1'}).request({
            Messages: Messages
        })
        let msg = true;
        request
            .then(result => {msg = true})
            .catch(err => {msg=false})
        res.send(msg)
    })
}
