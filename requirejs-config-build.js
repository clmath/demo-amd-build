require.config({
	baseUrl: "./",
	packages: [{
		name: "myapp",
		location: "out/myapp"
	}, {
		name: "mypackage",
		location: "mylocalpackage"
	}, {
		name: "dplugins",
		location: "./bower_components/requirejs-dplugins/"
	}
	],

	map: {
		"mypackage/foo": {
			"mypackage/bar": "bar-mapped"
		}
	},
	
	paths: { 
		"mypackage/foo": "out/mypackage/foo",
		"myapp/src": "out/myapp/src"
	},
	
	config: {
		"dplugins/i18n": {
			locale: "fr-fr",
			layerOnly: true
		}
	}
});