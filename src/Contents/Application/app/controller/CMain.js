App.controller.define('CMain', {

    views: [
        "VMain"
    ],

    models: [],

    init: function() {

        this.control({
            "menu>menuitem": {
                click: "Menu_onClick"
            },
            "button#clickme": {
                click: "clickme_onclick"
            }
        });

        App.init('VMain', this.onLoad);

    },
    Menu_onClick: function(p) {
        if (p.itemId) {
            Ext.Msg.alert('Status', 'Click event on ' + p.itemId);
        };
    },
    clickme_onclick: function() {
        App.notify('Hello', _('hello'));
    },
    onLoad: function() {
        // form loaded	
    }


});