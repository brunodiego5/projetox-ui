/* export const environment = {
  production: true,
  apiUrl: 'https://editalsniffer-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('editalsniffer-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
}; */

export const environment = {
  production: true,
  apiUrl: 'http://ec2-18-231-109-228.sa-east-1.compute.amazonaws.com:8080',
  tokenWhitelistedDomains: ['ec2-18-231-109-228.sa-east-1.compute.amazonaws.com:8080'],
  tokenBlacklistedRoutes: ['/oauth/token']

  // tokenWhitelistedDomains: [ new RegExp('localhost') ],
  // tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]



  //  tokenWhitelistedDomains: [ /localhost/ ],
};

