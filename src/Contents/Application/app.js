APP_NAMESPACE = Settings.NAMESPACE;
LANGS = Settings.LANGS;

Ext.Loader.setConfig({
    enabled: true,
	paths: Settings.PATHS
});

Manifest = function()
{

	Ext.application({

		name: APP_NAMESPACE,
		
		appFolder: Ext.Loader.getPath('Contents'),	
		autoCreateViewport: false,

		controllers: Settings.CONTROLLERS,
		
		launch: function () 
		{
			Ext.enableAriaButtons = false;
			Ext.enableAriaPanels = false; 
		}
		
	});
	
};

function __loader__(i) {
	if (!i) var i=0;
	if (i<Settings.MODULES.length) {
		App.require(Settings.MODULES[i],function() {
			__loader__(i+1);
		});
	} else {
		for (var i=0;i<Settings.API.length;i++)
		{
			App.using(Settings.API[i]);
		};
		App.load();	
	}
};
__loader__();
