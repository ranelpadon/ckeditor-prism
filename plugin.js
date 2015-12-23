/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

 /**
 * @fileOverview Rich code snippets for CKEditor.
 */

'use strict';

(function() {
	// Create a new plugin which registers a custom code highlighter
	// based on customEngine in order to replace the one that comes
	// with the Code Snippet plugin.
	CKEDITOR.plugins.add('prismhighlighter', {
		requires: 'codesnippet',
    init: function(editor) {
  		var path = this.path;

  		// Method is available only if wysiwygarea exists.
      // @todo: Make sure that CSS loading is stable.
			if (editor.addContentsCss ) {
				editor.addContentsCss(path + 'lib/prism/prism_patched.css');
			}

      // Create a new instance of the highlighter.
      var prismHighlighter = new CKEDITOR.plugins.codesnippet.highlighter({
        // @todo: Load the prism.js here.
        /*init: function( ready ) {
            // Asynchronous code to load resources and libraries for customEngine.
            customEngine.loadResources( function() {
                // Let the editor know that everything is ready.
                ready();
            } );
        },*/

        // @todo: Streamline the supported language list.
        // See the declaration style of GeSHi Snippet Plugin.
        // Download the equivalent streamlined prism.js also.
      	languages: {
					apache: 'Apache',
					bash: 'Bash',
					coffeescript: 'CoffeeScript',
					cpp: 'C++',
					cs: 'C#',
					css: 'CSS',
					diff: 'Diff',
					html: 'HTML',
					http: 'HTTP',
					ini: 'INI',
					java: 'Java',
					javascript: 'JavaScript',
				},

        highlighter: function(code, language, callback) {
    			// Let the customEngine highlight the code.
        	var highlightedCode = _self.Prism.highlight(code, _self.Prism.languages[language], language);

          var match = highlightedCode.match(/\n(?!$)/g);
          var linesNum = match ? match.length + 1 : 1;

          var lines = new Array(linesNum + 1);
          lines = lines.join('<span></span>');

          var lineNumbersWrapper = '<span class="line-numbers-rows">';

          lineNumbersWrapper += lines;

          highlightedCode += lineNumbersWrapper;

	        // Return highlighted code.
        	callback(highlightedCode);
      	}
      });

      // From now on, prismHighlighter will be used as a Code Snippet
      // highlighter, overwriting the default engine.
      editor.plugins.codesnippet.setHighlighter(prismHighlighter );
    }
	});
})();
