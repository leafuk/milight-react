import axios from 'axios';

const baseUrl = "http://192.168.1.84:3000"

var get = function(endpoint, callback) {
    axios.get(baseUrl + endpoint)
    .then(function(response) {
        callback();
    })
    .catch(function (error) {
        console.error(error);
    });
}

var post = function(endpoint, payload, callback) {
    axios.post(baseUrl + endpoint, payload)
      .then(function(response) {
        callback();
      })
      .catch(function (error) {
        console.error(error);
      });
}

exports.changeAllColours = function(colour) {
    post('/milight/colors', { color: colour}, function() {
        post('/tv/colors', { color: colour});
    })
}

exports.changeTVColour = function(colour) {
    post('/tv/colors', { color: colour});
}

exports.changeBulbsColour = function(colour) {
    post('/milight/colors', { color: colour});
}

exports.switchTPLinkOn = function() {
    get('/tplink/on')
};

exports.switchTPLinkOff = function() {
    get('/tplink/off')
}

exports.switchTVOn = function() {
    get('/television/on')
}

exports.switchTVOff = function() {
    get('/television/off')
}

exports.switchTVLightsOn = function() {
    get('/tv/on')
}

exports.switchTVLightsOff = function() {
    get('/tv/off')
}

exports.switchBulbsLightsOn = function() {
    get('/milight/on')
}

exports.switchBulbsLightsOff = function() {
    get('/milight/off')
}

exports.switchAllLightsOn = function() {
    get('/milight/on', function() {
        get('/tv/on', function() {
            get('/tplink/on');
        });
    })
}

exports.switchAllLightsOff = function() {
    get('/milight/off', function() {
        get('/tv/off', function() {
            get('/tplink/off');
        });
    })
}

exports.switchOnEverything = function() {
    get('/v2/everything/on');
}

exports.switchOffEverything = function() {
    get('/v2/everything/off');
}