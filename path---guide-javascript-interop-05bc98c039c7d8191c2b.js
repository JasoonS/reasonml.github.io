webpackJsonp([40],{"./node_modules/json-loader/index.js!./.cache/json/guide-javascript-interop.json":function(a,e){a.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:0}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:110}}}},{node:{relativePath:"guide/language/destructuring-pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching!",order:130}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:100}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:170}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:10}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:180}}}},{node:{relativePath:"guide/language/more-on-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:120}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types!",order:15}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{html:'<h2 id="just-dumping-javascript-in-the-middle-of-your-reason-code"><a href="#just-dumping-javascript-in-the-middle-of-your-reason-code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Just dumping JavaScript in the middle of your Reason code</h2>\n<p>If you\'re just hacking things together, this can be very nice, but you also have all of the unsafety of JavaScript code 😄.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-type">Js</span>.log <span class="hljs-string">"this is reason"</span>;\n[%%bs.raw {|\nconsole.log(<span class="hljs-symbol">\'here</span> is some javascript <span class="hljs-keyword">for</span> you\');\n|}];</code></pre>\n      </div>\n<blockquote>\n<p><code>{|</code> and <code>|}</code> are the delimiters of a multi-line string in OCaml. You can also put a tag in there e.g. <code>{something|</code> and then it will look for a matching <code>|something}</code> to close.</p>\n</blockquote>\n<p>And here\'s the resulting javascript:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-javascript"><code><span class="hljs-comment">// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE</span>\n\'use strict\';\nconsole.log(<span class="hljs-string">"this is reason"</span>);\nconsole.log(\'here <span class="hljs-keyword">is</span> some javascript <span class="hljs-keyword">for</span> you\');</code></pre>\n      </div>\n<h2 id="dumping-in-some-javascript-and-making-it-accessible-from-reason"><a href="#dumping-in-some-javascript-and-making-it-accessible-from-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dumping in some JavaScript, and making it accessible from Reason</h2>\n<p>What if you want a value that can be used from your Reason code?</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-type">Js</span>.log <span class="hljs-string">"this is reason"</span>;\n<span class="hljs-keyword">let</span> x = [%bs.raw {| <span class="hljs-symbol">\'here</span> is a <span class="hljs-built_in">string</span> from javascript\' |}];\n<span class="hljs-type">Js</span>.log (x ^ <span class="hljs-string">" back in reason land"</span>); /* ^ is the operator <span class="hljs-keyword">for</span> <span class="hljs-built_in">string</span> concat */</code></pre>\n      </div>\n<p>Now you might be wondering "what magic is this?? How did ocaml know that <code>x</code> was a string? <strong>It doesn\'t</strong>. The type of <code>x</code> in this code is a magic type that will unify with anything! This is quite dangerous and can have cascading effects in OCaml\'s type inference algorithm.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> y = [%bs.raw {| <span class="hljs-symbol">\'something\'</span> |}];\n<span class="hljs-type">Js</span>.log (<span class="hljs-string">"a string"</span> ^ y, <span class="hljs-number">10</span> + y);\n/* danger!! ocaml won\'t stop you from using y <span class="hljs-keyword">as</span> <span class="hljs-number">2</span> totally different types */</code></pre>\n      </div>\n<p>To fix this, you should <strong>always</strong> provide a concrete type for the result of <code>bs.raw</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> x: <span class="hljs-built_in">string</span> = [%bs.raw {| <span class="hljs-symbol">\'well</span>-typed\' |}];\n<span class="hljs-type">Js</span>.log (x ^ <span class="hljs-string">" back in reason land"</span>);\n/* ocaml will error out <span class="hljs-keyword">if</span> you <span class="hljs-keyword">try</span> <span class="hljs-keyword">to</span> use x <span class="hljs-keyword">as</span> anything other than a <span class="hljs-built_in">string</span> */</code></pre>\n      </div>\n<p>And here\'s the output!</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-javascript"><code>// Generated by BUCKLESCRIPT VERSION <span class="hljs-number">1.7</span>.<span class="hljs-number">4</span>, PLEASE EDIT WITH CARE\n<span class="hljs-string">\'use strict\'</span>;\nconsole.log(<span class="hljs-string">"this is reason"</span>);\nvar x = ( <span class="hljs-string">\'here is a string from javascript\'</span> );\nconsole.log(x + <span class="hljs-string">" back in reason land"</span>);\nvar y = ( <span class="hljs-string">\'something\'</span> );\nconsole.log(/* tuple */[\n      <span class="hljs-string">"a string"</span> + y,\n      <span class="hljs-number">10</span> + y | <span class="hljs-number">0</span>\n    ]);\nvar x<span class="hljs-variable">$1</span> = ( <span class="hljs-string">\'well-typed\'</span> );\nconsole.log(x<span class="hljs-variable">$1</span> + <span class="hljs-string">" back in reason land"</span>);</code></pre>\n      </div>\n<blockquote>\n<p>The difference between the 2 <code>%%</code> from the previous section and the 1 <code>%</code> here is important! <code>[%%something ...]</code> is an OCaml "extension point" that represents a <em>top-level</em> statement (it can\'t show up inside a function or value, for example). <code>[%something ...]</code> is an extension point that stands in for an <em>expression</em>, and can be put just about anywhere -- but make sure that the JavaScript you put inside is actually an expression! E.g. don\'t put a semicolon after it, or you\'ll get a syntax error when you try to run the resulting JavaScript.</p>\n</blockquote>\n<h2 id="dumping-in-a-function--passing-values"><a href="#dumping-in-a-function--passing-values" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dumping in a function &#x26; passing values</h2>\n<p>We\'ll need a little knowledge about Bucklescript\'s runtime representation of various values for this to work.</p>\n<ul>\n<li><code>strings</code> are strings, <code>ints</code> and <code>floats</code> are just numbers</li>\n<li>an <a href="/guide/language/list-and-array#list">Array</a> is a mutable fixed-length list in OCaml, and is represented as a plain javascript array.</li>\n<li>a <a href="/guide/language/list-and-array#array">List</a> is an immutable functional-style linked list, and is definitely the more idiomatic one to use in most cases. However, it\'s representation is more complicated (try <code>Js.log [1,2,3,4]</code> to check it out). Because of this, I generally convert to &#x26; from <code>Array</code>s when I\'m talking to javascript, via <code>Array.of_list</code> and <code>Array.to_list</code>.</li>\n<li>If you want to go deeper, there\'s an exhaustive list <a href="http://bucklescript.github.io/bucklescript/Manual.html#_runtime_representation">in the BuckleScript manual</a></li>\n</ul>\n<p>Knowing that, we can write a function in JavaScript that just accepts an array and returns a number, without much trouble at all.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> jsCalculate: <span class="hljs-built_in">array</span> <span class="hljs-built_in">int</span> =&gt; <span class="hljs-built_in">int</span> =&gt; <span class="hljs-built_in">int</span> = [%bs.raw {|\n <span class="hljs-keyword">function</span> (numbers, scaleFactor) {\n   var result = <span class="hljs-number">0</span>;\n   numbers.forEach(number =&gt; {\n     result += number;\n   });\n   return result * scaleFactor;\n }\n|}];\n<span class="hljs-keyword">let</span> calculate numbers scaleFactor =&gt;\n  jsCalculate (<span class="hljs-type">Array</span>.of_list numbers) scaleFactor;\n<span class="hljs-type">Js</span>.log (calculate [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>] <span class="hljs-number">10</span>); /* -&gt; <span class="hljs-number">60</span> */</code></pre>\n      </div>\n<p>Of course, this function that I wrote in JavaScript could be ported over to Reason without much hassle.</p>\n<p><strong>Remember</strong> that this is an escape hatch that\'s very useful for learning so you can jump in quickly and make something, but it\'s a good exercise to go back through and convert things back into nice type safe reason code.</p>\n<p>I\'ve run into more than a few bugs because of raw JavaScript that I added to save time 😅.</p>\n<h2 id="settling-down-and-getting-disciplined-about-things"><a href="#settling-down-and-getting-disciplined-about-things" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Settling down and getting disciplined about things</h2>\n<p>So far we\'ve been using <code>bs.raw</code>, which is a very fast n loose way to do it, and <strong>not</strong> suitable for production.</p>\n<p>But what if we actually need to call a function that\'s in JavaScript? It\'s needed for interacting with the DOM, or using node modules. In BuckleScript, you use an <code>external</code> declaration (<a href="http://bucklescript.github.io/bucklescript/Manual.html#_binding_to_simple_js_functions_values">docs</a>).</p>\n<p>Getting a value and getting a function are both pretty easy:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">external</span> pi: <span class="hljs-built_in">float</span> = <span class="hljs-string">"Math.PI"</span> [@@bs.<span class="hljs-keyword">val</span>];\n<span class="hljs-keyword">let</span> tau = pi *. <span class="hljs-number">2.0</span>;\n<span class="hljs-keyword">external</span> alert: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">unit</span> = <span class="hljs-string">"alert"</span> [@@bs.<span class="hljs-keyword">val</span>];\nalert <span class="hljs-string">"hello"</span>;</code></pre>\n      </div>\n<p>But what about when we want something more complicated? Here\'s how we could call <code>getContext</code> on a Canvas DOM node:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">type</span> canvas;\n<span class="hljs-keyword">type</span> context;\n/* we\'re leaving these types abstract, because we won\'t\n * be using them directly anywhere */\n<span class="hljs-keyword">external</span> getContext: canvas =&gt; <span class="hljs-built_in">string</span> =&gt; context = <span class="hljs-string">""</span> [@@bs.send];\n<span class="hljs-keyword">let</span> myCanvas: canvas = [%bs.raw {| document.getElementById(<span class="hljs-string">"mycanvas"</span>) |}];\n<span class="hljs-keyword">let</span> ctx = getContext myCanvas <span class="hljs-string">"2d"</span>;</code></pre>\n      </div>\n<p>So let\'s unpack what\'s going on. We created some abstract types for the Canvas DOM node and the associated RenderingContext object.</p>\n<p>Then we made a <code>getContext</code> function, but instead of <code>@@bs.val</code> we used <code>@@bs.send</code>, and we used an empty string for the text of the external. <code>@@bs.send</code> means "we\'re calling a method on the first argument", which in this case is the canvas. BuckleScript will translate this into <code>theFirstArgument.getContext(theSecondArgument, ...)</code>.</p>\n<p>And the empty string means "the js-name is the same as the name we\'re giving the external here in BuckleScript-land", in this case <code>getContext</code>. If we wanted to name it something else (like <code>getRenderingContext</code>), when we\'d have to supply the string <code>"getContext"</code> so that BuckleScript calls the right function.</p>\n<p>Let\'s add one more function just so it\'s interesting.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">external</span> fillRect: context =&gt; <span class="hljs-built_in">float</span> =&gt; <span class="hljs-built_in">float</span> =&gt; <span class="hljs-built_in">float</span> =&gt; <span class="hljs-built_in">float</span> =&gt; <span class="hljs-built_in">unit</span> = <span class="hljs-string">""</span> [@@bs.send];</code></pre>\n      </div>\n<p>And now we can draw something!</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code>fillRect ctx <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">100.0</span> <span class="hljs-number">100.0</span>;</code></pre>\n      </div>\n<p>It\'s not much, but adding other canvas methods is similar, and then you can start doing some <a href="https://twitter.com/jaredforsyth/status/871062358076030976">really fun things</a>.</p>\n<p>So what does the compiled JavaScript look like?</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-javascript"><code>\'use strict\';\n<span class="hljs-keyword">var</span> tau = <span class="hljs-type">Math</span>.<span class="hljs-type">PI</span> * <span class="hljs-number">2.0</span>;\nalert(<span class="hljs-string">"hello"</span>);\n<span class="hljs-keyword">var</span> myCanvas = ( document.getElementById(<span class="hljs-string">"mycanvas"</span>) );\n<span class="hljs-keyword">var</span> ctx = myCanvas.getContext(<span class="hljs-string">"2d"</span>);\nctx.fillRect(<span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">100.0</span>, <span class="hljs-number">100.0</span>);</code></pre>\n      </div>\n<p>Wow! Notice how BuckleScript just inlined our <code>pi</code> variable for us? And the output looks almost exactly like it was written by hand.</p>',frontmatter:{title:"Interop"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/javascript/interop.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-javascript-interop-05bc98c039c7d8191c2b.js.map