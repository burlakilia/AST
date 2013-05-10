define(function (require, exports) {
    "use strict";

    var config = require('config'),
        query = require('libs/query');

    var data;

    exports.select = function(id, region, done) {

        function find(res) {

            if (!res) {
                return;
            }

            data = res;

            var ret = query('$..products[0].product[?id="' + id + '"]', data).map(function(obj){

                var price = query('$..region..[?id="' + region + '"]', obj);

                return {
                    id: obj.id,
                    name: obj.name,
                    company: obj.company,
                    price: price[0]
                };

            });

            done(null, ret);
        }

        if (!data) {
            require(['json!' + config.data.url], find);
            return;
        }

        find(data);
    }


});