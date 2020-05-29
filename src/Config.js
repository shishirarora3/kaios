module.exports = {
  appId: '98f6c11f-26a7-4309-a75f-b8df6e384711',
  redirectUri:
      process.env.NODE_ENV === 'development' ||
      process.env.REACT_APP_KAI_UI ||
      process.env.REACT_APP_DEMO ||
      process.env.REACT_APP_INTEGRATED_APP
      ? window.location.href: 'https://outlook-sdf.office.com/mail/inbox',
  scopes: [
    'user.read',
    'calendars.read',
      'mail.read',
      'Mail.ReadWrite',
      'files.readwrite.all',
      'Sites.ReadWrite.All'
  ]
};