// Server side configuration to social logins.

//Facebook OAuth configuration
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

 ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1590077417989004',
    secret: 'b7c8f61d2e3ca84464a6b6eee7d41927'
});

// Twitter OAuth configuration
ServiceConfiguration.configurations.remove({
    service: 'twitter'
});

 ServiceConfiguration.configurations.insert({
    service: 'twitter',
    consumerKey: '3m1tEJ790XIxr2DbkwqprFItW',
    secret: 'u0yfc7pFCbqLeQW9xDvMJUwcJ7OjUyEHFVB5a0T2kP8e1wtjwd'
});

// Linked OAuth configuration
ServiceConfiguration.configurations.remove({
    service: 'linkedin'
});

 ServiceConfiguration.configurations.insert({
    service: 'linkedin',
    clientId: '77pdwuxyaln9n5',
    secret: 'nqDeT5wLXMe6ClyU'
});

//Meteor on create user configuration.