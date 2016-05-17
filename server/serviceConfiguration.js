// Server side configuration to social logins.

// Facebook OAuth configuration

if (ServiceConfiguration.configurations.find({
    service: 'facebook'
  }).count() === 0) {
  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1590077417989004',
    secret: 'b7c8f61d2e3ca84464a6b6eee7d41927',
    loginStyle: 'popup'
  });
}

// Twitter OAuth configuration

if (ServiceConfiguration.configurations.find({
    service: 'twitter'
  }).count() === 0) {
  ServiceConfiguration.configurations.insert({
    service: 'twitter',
    consumerKey: 'p8A1KCLRpTs8snzsCHC1wmcx6',
    secret: 'iSIOlCDxOiYKhdLkFIb6aOQOZZPXQbdTbmjbZWsXG3oC0zmvsy',
    loginStyle: 'popup'
  });
}

// Linked OAuth configuration

if (ServiceConfiguration.configurations.find({
    service: 'linkedin'
  }).count() === 0) {
  ServiceConfiguration.configurations.insert({
    service: 'linkedin',
    clientId: '75uz55p1p6tws5',
    secret: 'd1mReCydtkSzipSM',
    loginStyle: 'popup'
  });
}

//Meteor on create user configuration.