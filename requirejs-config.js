require.config({
	baseUrl: "./",
	packages: [{
		name: "myapp",
		location: "myapp"
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
		"mypackage/foo": "patch/foo",
		"text": "./bower_components/requirejs-text/text"
	},
	
	config: {
		"dplugins/i18n": {
			locale: "fr-fr",
			layerOnly: true
		}
	}
});