const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // your frontend folder

const PORT = 3000;

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: 'eu1.myprofessionalmail.com', // your mail server
  port: 465,
  secure: true,
  auth: {
    user: 'b.pandey@defendxtech.com',  // your email
    pass: 'YOUR_EMAIL_PASSWORD'        // app-specific password
  }
});

app.post('/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) return res.json({ success: false });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'b.pandey@defendxtech.com',
    subject: `New message from your website: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
