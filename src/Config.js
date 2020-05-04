module.exports = {
  appId: '98f6c11f-26a7-4309-a75f-b8df6e384711',
  redirectUri: process.env.NODE_ENV === 'development'? 'http://localhost:3003/': 'https://outlook-sdf.office.com/mail/inbox',
  scopes: [
    'user.read',
    'calendars.read'
  ]
};