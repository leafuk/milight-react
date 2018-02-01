import axios from 'axios';

const baseUrl = "http://192.168.1.22:3000"

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
    get('/v2/everything/on', function(){});
}

exports.switchOffEverything = function() {
    get('/v2/everything/off', function(){});
}

exports.freesatInput = function(input) {
    get('/v2/freesat/channelInput/' + input, function(){});
}

exports.freesatPowerToggle = function(input) {
    get('/v2/freesat/powertoggle', function(){});
}

exports.tvFreesat = function() {
    get('/v2/tv/hdmi1', function(){});
}

exports.tvChromecast = function() {
    get('/v2/tv/hdmi4', function(){});
}

exports.tvRetroPi = function() {
    get('/v2/tv/hdmi3', function(){});
}

exports.tvPlaystation = function() {
    get('/v2/tv/hdmi2', function(){});
}

exports.tvOn = function() {
    get('/v2/samsung/on', function(){});
}

exports.tvOff = function() {
    get('/v2/samsung/off', function(){});
}

exports.speakersOn = function() {
    get('/v2/speakers/on', function(){});
}

exports.speakersOff = function() {
    get('/v2/speakers/off', function(){});
}

exports.speakersMuteToggle = function() {
    get('/v2/speakers/muteToggle', function(){});
}

exports.heaterOn = function() {
    get('/heater/on', function() {});
}

exports.heaterOff = function() {
    get('/heater/off', function() {});
}

exports.lightsBrightness = function(level) {
    post('/milight/brightness', { level: level }, function() {});
}