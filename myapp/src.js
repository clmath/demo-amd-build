define([
	"mypackage/foo",
	"mypackage/bar",
	"text!msg.txt",
	"dplugins/i18n!myapp/nls/fr/bundleA",
	"dplugins/i18n!myapp/nls/bundleB"
], function (foo, bar, msg, msgA, msgB) {
    return { 
		log: function(){
			bar.log();
			foo.log();
			console.log(msg);
			console.log(msgA.MSG);
			console.log(msgB.MSG);
		}
	};
});
