/* export const environment = {
  production: true,
  apiUrl: 'https://editalsniffer-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('editalsniffer-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
}; */

export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080',
  apiEndpoint: 'https://localhost',
  tokenWhitelistedDomains: ['localhost:8080'],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]

  // tokenWhitelistedDomains: [ new RegExp('localhost') ],
  // tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]



  //  tokenWhitelistedDomains: [ /localhost/ ],
};

