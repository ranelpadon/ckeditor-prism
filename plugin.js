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
  // based on Prism.js in order to replace the one that comes
  // with the Code Snippet plugin.
  CKEDITOR.plugins.add('prismhighlighter', {
    requires: 'codesnippet',

    init: function(editor) {
      var path = this.path;

      // Loading the prism.js style file.
      // Idea taken from codesnippet/plugin.js code.
      // Method is available only if wysiwygarea exists and
      // CKEditor is at least version 4.4.
      if (editor.addContentsCss) {
        editor.addContentsCss(path + 'lib/prism/prism_patched.css');
      }

      // Create a new instance of the highlighter.
      var prismHighlighter = new CKEDITOR.plugins.codesnippet.highlighter({
        init: function(ready) {
          // Load the Prism.js library asynchronously.
          CKEDITOR.scriptLoader.load(path + 'lib/prism/prism_patched.js', function() {
            // Notify the handler that the library has been loaded.
            ready();
          });
        },

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
          // Let the Prism.js highlight the code.
          var highlightedCode = _self.Prism.highlight(code, _self.Prism.languages[language], language);

          // The clever idea below is taken from the 'Line Numbers' plugin
          // of Prism. Basically, we want to count the number of newlines (\n)
          // in the highlighted code, then create the same number
          // of SPAN elements, append them to the highlighted code
          // and finally number/label them using prism.css.
          var match = highlightedCode.match(/\n(?!$)/g);
          var linesNum = match ? match.length + 1 : 1;

          var lines = new Array(linesNum + 1);
          lines = lines.join('<span></span>');

          // Create the SPAN root/wrapper, insert its child SPAN lines,
          // then append them to the highlighted code.
          var lineNumbersWrapper = '<span class="line-numbers-rows">';
          lineNumbersWrapper += lines;
          lineNumbersWrapper += '</span>';
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
