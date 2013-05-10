define(function (require, exports) {
    'use strict';

    require('mustache');
    require('jquery-ui');

    var bus = require('bus'),
        model = require('models/options');

    exports.create = function (container, id) {
        var options;

        function nearest(value) {
            var length = options.length,
                selected = Math.floor(value * length / 100);


            return options[selected];
        }

        function onchange(e, data) {
            var value = data.value;

            options = options;
            container.trigger('update',  [ nearest(value).id ]);
        }

        function refresh(region) {

            model.select(id, region, function(err, data){

                if (err) {
                    throw err;
                }

                options = data;
            });

        }

        function update(id) {

            if (!options){
                return;
            }

            for (var i = 0; i < options.length; i++) {
                if (options[i].id === id) {
                    break;
                }
            }

            var selected = Math.floor(i * 100 / options.length);

            container.slider('value', selected);
        }

        bus
            .on('value:changed', update)
            .on('region:changed', refresh)
            .reemit('region:changed', refresh);

        container
            .on('slidestop', onchange)
            .slider();
    };

});