const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit_booking', async (req, res) => {
    const { first_name, last_name, phone, email, service, date } = req.body;

    // Validate input
    if (!first_name || !last_name || !phone || !email || !service || !date) {
        return res.status(400).send('All fields are required.');
    }

    // Configure transporter
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Email to Admin
    const adminMailOptions = {
        from: '"Art Services" <noreply@artservices.com>',
        to: process.env.ADMIN_EMAIL, // Admin email from .env
        subject: `New Service Booking from ${first_name} ${last_name}`,
        html: `
            <h2>New Booking Request</h2>
            <p><strong>Name:</strong> ${first_name} ${last_name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${date}</p>
        `,
    };

    // Email to Customer
    const customerMailOptions = {
        from: '"Art Services" <noreply@artservices.com>',
        to: email,
        subject: 'Booking Confirmation - Art Service',
        html: `
            <p>Hello ${first_name},</p>
            <p>Thank you for booking a service with us. Here are your booking details:</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p>We look forward to serving you!</p>
            <p>Best regards,<br>Art Services Team</p>
        `,
    };

    try {
        // Send email to Admin
        await transporter.sendMail(adminMailOptions);

        // Send confirmation email to Customer
        await transporter.sendMail(customerMailOptions);

        res.status(200).send('Booking successful!');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing your booking.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
