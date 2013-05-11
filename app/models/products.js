define(function (require, exports) {
    "use strict";

    var config = require('config'),
        query = require('libs/query'),
        options = require('./options');

    var data;

    exports.select = function(id, region, done) {

        function find(res) {

            if (!res) {
                return;
            }

            data = res;

            var ret = query('$..products[0].product[?id="' + id + '"]', data).map(function(obj){

                var price = query('$..region..[?id="' + region + '"]', obj),
                    companies = query('$..companies', data)[0].company;

                for (var i = 0; i < companies.length; i++) {

                    if (companies[i].id === obj.company.id ) {

                        return {
                            id: obj.id,
                            name: obj.name,
                            company:  companies[i],
                            price: price[0]
                        };

                    }

                }

                return {
                    id: obj.id,
                    name: obj.name,
                    company:  {},
                    price: price[0]
                };

            });

            ret.totalcost = '1000000';
            done(null, ret);
        }

        if (!data) {
            require(['json!' + config.data.url], find);
            return;
        }

        find(data);
    }


});