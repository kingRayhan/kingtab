'use strict';

//** COmpiled es6 to raw js from -> https://babeljs.io/repl/
// Copyright @KingRayhan
// Repositiry -> https://github.com/kingRayhan/kingtab

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Tabs = [].concat(_toConsumableArray(document.querySelector('.tabs').children));
var Panels = [].concat(_toConsumableArray(document.querySelector('.panels').children));

Tabs[0].classList.add('active');
Panels[0].classList.add('active');
Panels[0].classList.add('in');

Tabs.forEach(function (tab) {
	tab.addEventListener('click', function (event) {
		var CurrentIndex = Tabs.indexOf(tab);

 /**
   * Activate Tabs
   */
		Tabs.forEach(function (tab) {
			if (Tabs.indexOf(tab) == CurrentIndex) {
				tab.classList.add('active');
			} else {
				tab.classList.remove('active');
			}
		});

 /**
   * Activate Panels
   */
		Panels.forEach(function (panel) {
			if (Panels.indexOf(panel) == CurrentIndex) {
				panel.classList.add('active');
			} else {
				panel.classList.remove('active');
			}

			setTimeout(function () {
				if (Panels.indexOf(panel) == CurrentIndex) {
					panel.classList.add('in');
				} else {
					panel.classList.remove('in');
				}
			}, 200);
		});
	});
});