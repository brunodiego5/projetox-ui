export const environment = {
  production: true,
  apiUrl: 'https://editalsniffer-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('editalsniffer-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};

