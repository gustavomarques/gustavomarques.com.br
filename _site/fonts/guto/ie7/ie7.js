/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

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
		'icon-arrow-left': '&#xf060;',
		'icon-arrow-right': '&#xf061;',
		'icon-arrow-up': '&#xf062;',
		'icon-arrow-down': '&#xf063;',
		'icon-asterisk': '&#xf069;',
		'icon-chevron-up': '&#xf077;',
		'icon-chevron-down': '&#xf078;',
		'icon-thumbs-o-up': '&#xf087;',
		'icon-thumbs-o-down': '&#xf088;',
		'icon-quote-left': '&#xf10d;',
		'icon-quote-right': '&#xf10e;',
		'icon-phone': '&#xe618;',
		'icon-cog': '&#xe61a;',
		'icon-trophy': '&#xe61b;',
		'icon-home': '&#xe600;',
		'icon-heart': '&#xe601;',
		'icon-heart2': '&#xe602;',
		'icon-feed': '&#xe603;',
		'icon-github': '&#xe604;',
		'icon-chrome': '&#xe605;',
		'icon-firefox': '&#xe606;',
		'icon-safari': '&#xe607;',
		'icon-mail': '&#xe614;',
		'icon-search': '&#xe61c;',
		'icon-rocket': '&#xe615;',
		'icon-checkmark': '&#xe616;',
		'icon-cross': '&#xe617;',
		'icon-cross2': '&#xe61d;',
		'icon-ellipsis': '&#xe61e;',
		'icon-heart3': '&#xe608;',
		'icon-heart4': '&#xe609;',
		'icon-rocket2': '&#xe60a;',
		'icon-twitter': '&#xe60b;',
		'icon-facebook': '&#xe60c;',
		'icon-pinterest': '&#xe60d;',
		'icon-linkedin': '&#xe60e;',
		'icon-instagram': '&#xe60f;',
		'icon-skype': '&#xe610;',
		'icon-paypal': '&#xe611;',
		'icon-behance': '&#xe612;',
		'icon-guto': '&#xe613;',
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
