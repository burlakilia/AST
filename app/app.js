define([
    'exports',
    'jquery',
    'async',
    'bus',
    'models/options',
    'models/products',
    'widgets/select',
    'widgets/slider',
    'widgets/locations',
    'widgets/options',
    'widgets/products',
    'widgets/popup'], function (exports, $, async, bus)  {

    function trim(str) {
        return str.trim();
    }

    function render(node, done) {
        var link = node.getAttribute('data-link'),
            args = node.getAttribute('data-args') || '';

        args = args
            ? args.split(',').map(trim)
            : [];  // IE throws exception on apply without arguments arra


        require([link], function(widget) {
            args.unshift($(node));
            widget.create.apply(this, args);

            done(null, true);
        });

    }

    function complete(err, res) {

        if (err) {
            throw err;
        }

        bus.emit('app:ready', res);
    }

    exports.init = function() {
        // need for non amd bootstrap version
        window.$ = $;

        require(['bootstrap'], function() {
            async.each($('[data-link]').toArray(), render, complete)
        });


    };

});