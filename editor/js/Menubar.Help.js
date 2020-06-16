/**
 * @author mrdoob / http://mrdoob.com/
 */

import { UIPanel, UIRow } from './libs/ui.js';

var MenubarHelp = function ( editor ) {

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

	// Source code
	
	var option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/relo' ) );
	option.onClick( function () {
		location.reload();
	} );
	options.add( option );

	// About

	var option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/about' ) );
	option.onClick( function () {

		window.open( 'http://3d.cotw.top/#about/index.html', '_blank' );

	} );
	options.add( option );

	return container;

};

export { MenubarHelp };
