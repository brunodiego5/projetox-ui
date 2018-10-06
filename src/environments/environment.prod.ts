/* export const environment = {
  production: true,
  apiUrl: 'https://editalsniffer-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('editalsniffer-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
}; */

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',

  tokenWhitelistedDomains: [ new RegExp('localhost:8080') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};

