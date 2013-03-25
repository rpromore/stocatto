define([
	'../collections/provider'
], function (Provider) {
		'use strict';
		var Reddit = Provider.extend({
				name: 'Reddit',
				id: 'reddit',
				url: 'http://reddit.com/r/listentothis.json?jsonp=?&callback=?',
				validDomains: [],
				parse: function (obj) {
					var ret = [];

					for (var i = 0; i < obj.data.children.length; i++) {
						if (_.indexOf(this.validDomains, obj.data.children[i].data.domain) !== -1) { // a valid domain
							ret.push(obj.data.children[i].data);
						}
					}

					return ret;
				}
			});
		return new Reddit();
	}
);