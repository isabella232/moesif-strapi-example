module.exports = ({env}) => ({
    settings: {
      load: {
        before: ["moesif"],
        order: ["moesif"],
      },
      moesif: {
        enabled: true,
        debug: false,
        applicationId: 'Your Moesif Application Id',
        identifyUser: function (req, res) {
          if (req.state && req.state.user) {
            return String(req.state.user.id);
          }
          return undefined;
        },
        getSessionToken: function (req, res) {
          // your code here, must return a string.
          if (req.headers['Authorization']) {
            return req.headers['Authorization'].toString(); 
          }   
        },
        skip: function (req, res) {
            // don't log non JSON types
            return res.headers && !res.headers['Content-Type'].includes('application'); 
        },
        disableBatching: false,
        logBody: true,
        debug: false
      }
    }
  });