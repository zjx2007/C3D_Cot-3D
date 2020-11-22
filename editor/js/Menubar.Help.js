import { UIPanel, UIRow } from './libs/ui.js';

function MenubarHelp( editor ) {

	var strings = editor.strings;

	var container = new UIPanel();
	container.setClass( 'menu' );

	var title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/help' ) );
	container.add( title );

	var options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Reload window

	var option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/relw' ) );
	option.onClick( function () {

		window.location.reload();

	} );
	options.add( option );

	// About

	var option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/about' ) );
	option.onClick( function () {
		alert(strings.getKey( 'menubar/help/abouttxt' ))
	} );
	options.add( option );

	return container;

}

export { MenubarHelp };
