ckeditor-prism
================
<strong>OVERVIEW</strong>:<br>
<a href="http://ckeditor.com/addon/prism">Prism Syntax Highlighter</a> is a <a href="http://ckeditor.com">CKEditor</a> plugin for  for inserting formatted texts or code snippets in your blog/website. It is an integration of [PrismJS](http://prismjs.com/) with CKEditor. PrismJS is the chosen syntax highlighter/colorizer because it is elegant, lightweight, and extendable. Actually, I use this plugin in my [blog articles](http://www.ranelpadon.com/content/practical-regex-part-12-common-operators) too.

This plugin features a **beautiful, dark theme** with **line numbers** displaying on the left side of the codes. It supports the highlighting of **over 50 programming languages** (note that *SVG* and *XML* are under the *HTML* category, and *JSON* is under *JavaScript*). I also used [Tiobe](http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html) index to have an idea on what languages are important or popular.

This plugin utilizes the following libraries: <br>
<ul>
  <li><a href="http://ckeditor.com/addon/codesnippet">CKEditor Code Snippet Plugin</a></li>
    <li><a href="http://docs.ckeditor.com/#!/api/CKEDITOR.plugins.codesnippet.highlighter">CKEditor Code Snippet API</a></li>
  <li><a href="http://prismjs.com/">Prism Syntax Highlighter with Dark Theme</a></li>
  <li><a href="http://prismjs.com/plugins/line-numbers/">Prism Line Numbers Add-on</a></li>
</ul>

Essentially, it's just a Code Snippet plugin with PrismJS under the hood. Hence, Prism Syntax Highlighter depends on the Code Snippet and make use of its toolbar button as well. Extending the Code Snippet plugin rather than creating an independent one means better code reuse, less bugs, and less effort.

By default, Prism has no line numbering mechanism, so the [Line Number](http://prismjs.com/plugins/line-numbers/) add-on has been added. Likewise, in order for the line numbers to work smoothly in CKEditor and when rendering the code blocks in the actual page, I did some minor patching in default **prism.js** and **prism.css**.

If you want other programming languages, add-ons, or themes, you may want to check-out first the [PrismJS download page](http://prismjs.com/download.html) for other possibilities and you could send me your suggestion. PrismJS is very stable and well-tested, and it is just one of the [excellent projects](http://lea.verou.me/projects/) of [Lea Verou](http://lea.verou.me/about/), who is a prolific web developer.

Finally, if you want to lessen the list of available languages when setting the code block (since the list might be too long to your liking), you could utilize the [config.codeSnippet_languages](http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-codeSnippet_languages) CKEditor property.

<strong>LIVE DEMO PAGE</strong>:<br>
Demo page could be found <a href="http://www.ranelpadon.com/sites/all/libraries/ckeditor/plugins/prism/demo/index.html">here</a>. It showcases numerous code blocks in various programming languages.

<strong>INSTALLATION</strong>:<br>
Kindly refer to <a href="https://github.com/ranelpadon/ckeditor-prism/blob/master/Installation%20Guide.txt">Installation Guide</a>.

<strong>HOW TO USE</strong>:<br>
Kindly refer to <a href="https://github.com/ranelpadon/ckeditor-prism/blob/master/Creating%20and%20Editing%20Code%20Snippets.txt">How to Create and Edit Prism Snippets</a>.

<strong>LICENSE and CREDITS</strong>:<br>
License: <a href="https://www.gnu.org/licenses/lgpl-2.1.txt">LGPLv2.1</a> or later should apply. Note that LGPLv2.1+ is also compatible with <a href="https://www.drupal.org/node/1475972#gplv2-compatible-licenses">GPLv2</a>.<br>
Copyright 2015 by [Engr. Ranel O. Padon](http://www.ranelpadon.com)<br>

Thanks to CKEditor, Prism, and other great open-source softwares and their unsung developers.<br>

=======================================================







