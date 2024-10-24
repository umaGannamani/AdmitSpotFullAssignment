import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendVerificationEmail = (email, token) => {
  const url = `${process.env.FRONTEND_URL}/verify-email/${token}`;
  transporter.sendMail({
    to: email,
    subject: 'Verify your email',
    html: `<a href="${url}">Click here to verify your email</a>`,
  });
};

export const sendResetEmail = (email, token) => {
  const url = `${process.env.FRONTEND_URL}/reset-password/${token}`;
  transporter.sendMail({
    to: email,
    subject: 'Reset your password',
    html: `<a href="${url}">Click here to reset your password</a>`,
  });
};
