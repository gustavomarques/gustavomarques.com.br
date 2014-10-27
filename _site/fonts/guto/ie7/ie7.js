/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'guto\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-guto': '&#xe613;',
		'icon-home': '&#xe600;',
		'icon-heart': '&#xe601;',
		'icon-heart2': '&#xe602;',
		'icon-feed': '&#xe603;',
		'icon-github': '&#xe604;',
		'icon-chrome': '&#xe605;',
		'icon-firefox': '&#xe606;',
		'icon-safari': '&#xe607;',
		'icon-heart3': '&#xe608;',
		'icon-heart4': '&#xe609;',
		'icon-rocket': '&#xe60a;',
		'icon-twitter': '&#xe60b;',
		'icon-facebook': '&#xe60c;',
		'icon-pinterest': '&#xe60d;',
		'icon-linkedin': '&#xe60e;',
		'icon-instagram': '&#xe60f;',
		'icon-skype': '&#xe610;',
		'icon-paypal': '&#xe611;',
		'icon-behance': '&#xe612;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
