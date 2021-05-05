const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport("SMTP", {
    service: "GMail",
    auth: {
        user:"gulyaev.gvs@gmail.com",
        pass:"G0991v80S02"
    }
});

smtpTransport.sendMail({
    from: "Slava Gulyaev <gulyaev.gvs@gmail.com>",
    to: "Slava Gulyaev <gulyaev.gvs@gmail.com>",
    subject: "NodeJS",
    text: "Hello",
    html: "Hello, <b>My friend</b>"
}, (err, responce) => {
    if (err){
        throw err;
    }  else {
        console.log("Mesage sent");
    }

    smtpTransport.close();
});