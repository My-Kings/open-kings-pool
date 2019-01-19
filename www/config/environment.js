/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-kings-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//kingsminer.ddnskings.com:8080/',
      PoolName: 'KINGs REOSC Pool',
      CompanyName: 'REOSC.io',
      // HTTP mining endpoint
      HttpHost: 'https://kingsminer.ddnsking.com',
      HttpPort: 8882,

      // Stratum mining endpoint
      StratumHost: 'kingsminer.ddnskings.com',
      StratumPort: 8002,

      // Fee and payout details
      PoolFee: '0.5%',
      PayoutThreshold: '0.5',
      PayoutInterval: '3h',

      // For network hashrate (change for your favourite fork)
      BlockTime: 15.0,
      BlockReward: 3,
      Unit: 'REOSC:',

    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = '//localhost:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
