App.view.define('VMain', {

    extend: 'Ext.navigation.View',
    fullscreen: true,

    alias: "widget.VMain",

    requires: [

    ],

    config: {

        autoDestroy: true,
        navigationBar: {
            items: [

            ]
        },
        items: [{
                title: 'Hello World',
                layout: 'fit',
                items: [{
                    xtype: 'tabpanel',
                    items: [{
                            title: 'Home',
                            iconCls: 'home',
                            html: 'Home Screen'
                        },
                        {
                            title: 'Contact',
                            iconCls: 'user',
                            html: 'Contact Screen'
                        }
                    ]
                }]
            }

        ]

    }

});