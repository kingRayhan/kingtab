const Tabs = [...document.querySelector('.tabs').children];
const Panels = [...document.querySelector('.panels').children];


Tabs[0].classList.add('active');
Panels[0].classList.add('active');

Tabs.forEach( tab => {
	tab.addEventListener( 'click' , function(event){
		let CurrentIndex = Tabs.indexOf(tab);

		/**
		 * Activate Tabs
		 */
		Tabs.forEach( tab => {
			if( Tabs.indexOf(tab) ==  CurrentIndex)
			{
				tab.classList.add('active')
			}else{
				tab.classList.remove('active')
			}
		} );

		/**
		 * Activate Panels
		 */
		Panels.forEach( panel => {
			if( Panels.indexOf(panel) ==  CurrentIndex)
			{
				panel.classList.add('active')
			}else{
				panel.classList.remove('active')
			}

			setTimeout(function() {
				if( Panels.indexOf(panel) ==  CurrentIndex)
				{
					panel.classList.add('in')
				}else{
					panel.classList.remove('in')
				}
			}, 200);
		} );

	} )
} )
