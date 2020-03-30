const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'
sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'lyllynnlai@gmail.com',
    from: 'lyllynnlai@gmail.com',
    subject: 'This is a test email',
    text: 'Test content.'
})