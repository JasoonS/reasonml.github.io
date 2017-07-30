webpackJsonp([19],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-tuple.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:0}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:110}}}},{node:{relativePath:"guide/language/destructuring-pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching!",order:130}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:100}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:170}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:10}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:180}}}},{node:{relativePath:"guide/language/more-on-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:120}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types!",order:15}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{html:'<p>Tuples are</p>\n<ul>\n<li>immutable</li>\n<li>ordered</li>\n<li>fix-sized at creation time</li>\n<li>heterogeneous (can contain different types of values)</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> ageAndName = (<span class="hljs-number">24</span>, <span class="hljs-string">"Lil\' Reason"</span>);\n<span class="hljs-keyword">let</span> my3dCoordinates = (<span class="hljs-number">20.0</span>, <span class="hljs-number">30.5</span>, <span class="hljs-number">100.0</span>);</code></pre>\n      </div>\n<p>Tuples\' types can be used in type annotations as well. Tuple types visually resemble tuples values.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> ageAndName: (int, string) = (<span class="hljs-number">24</span>, <span class="hljs-string">"Lil\' Reason"</span>);\n<span class="hljs-comment">/* a tuple type alias */</span>\n<span class="hljs-keyword">type</span> coord3d = (float, float, float);\n<span class="hljs-keyword">let</span> my3dCoordinates: coord3d = (<span class="hljs-number">20.0</span>, <span class="hljs-number">30.5</span>, <span class="hljs-number">100.0</span>);</code></pre>\n      </div>\n<p><strong>Note</strong>: there\'s no tuple of size 1. You\'d just use the value itself.</p>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<p>The standard library provides <code>fst</code> and <code>snd</code> (<a href="/api/Pervasives.html">here</a>, under "Pair operations"), convenience functions that allow you to access the first and second element of a 2-tuple. Generally, you\'d access n-tuple members through destructuring (described later in the sidebar):</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (<span class="hljs-number">_</span>, y, <span class="hljs-number">_</span>) = my3dCoordinates; <span class="hljs-comment">/* now you\'ve retrieved y */</span></code></pre>\n      </div>\n<p>The <code>_</code> means you\'re ignoring the indicated members of the tuple.</p>\n<p>Tuples aren\'t meant to be updated mutatively; you\'d create new ones by destructuring the old ones.</p>\n<h3 id="tips--tricks"><a href="#tips--tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h3>\n<p>You\'d use tuples in handy situations that pass around multiple values without too much ceremony. For example, to return many values:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> getCenterCoordinates () =&gt; {\n  <span class="hljs-keyword">let</span> x = doSomeOperationsHere ();\n  <span class="hljs-keyword">let</span> y = doSomeMoreOperationsHere ();\n  (x, y)\n};</code></pre>\n      </div>\n<p>Or to "pattern-match" (covered later) on the conjunction of possibilities:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">switch</span> (isWindowOpen, isDoorOpen) { <span class="hljs-comment">/* this is a 2-tuple */</span>\n| (<span class="hljs-literal">true</span>, <span class="hljs-literal">true</span>) =&gt; ...\n| (<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>) =&gt; ...\n| (<span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>) =&gt; ...\n| (<span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>) =&gt; ...\n}</code></pre>\n      </div>\n<p>Try to keep the usage of tuple <strong>local</strong>. For data structures that are long-living and passed around often, prefer a <strong>record</strong>, which has named fields.</p>\n<p>A tuple type might also be called a "product type", and <code>(string, int)</code> is written as <code>string * int</code> in some places. The idea is that a tuple is really a "cartesian product"; imagine a 2D grid, with <code>string</code> on the x axis and <code>int</code> on the y axis!</p>\n<p>The combination of tuple + <code>switch</code> is very powerful and concise, and <strong>wipes out an entire category of bugs</strong>. Together, they cleanly list out all the possible combinations of values. A tuple of type <code>(bool, bool)</code> indeed has <code>2 * 2 = 4</code> possibilities, and the type system asks you to cover all 4. This lends itself well to code refactors; instead of informally adding a few if-else on arbitrary values here and there, you can directly pinpoint the exact <code>switch</code> branch you need to alter, no more and no less.</p>\n<h3 id="design-decisions"><a href="#design-decisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Decisions</h3>\n<p>Tuple\'s existence might seem odd for those coming from untyped languages. "Why not just use a list/array?"</p>\n<p>A type system isn\'t all-powerful, nor should it be; some tasteful trade-offs need to be applied in order to keep the language simple, performant (both compilation and running speed) and easy to understand. Reason lists, for example, are more flexible in size; they can be concatenated, appended, sliced, etc. In return, they need to be homogenous (can only contain a single type of value per list), and random index access on them might not always be valid*. Tuple, on the other hand, through its constrain on size, is faster, gives the type system the leeway to exhaustively track all its items\' types, and guarantees safe access. In general, you\'ll notice a few prominent, tasteful tradeoffs in a type system: record fields are fixed but can be heterogenous, while a map\'s fields are flexible but homogenous, etc.</p>\n<p>A Reason tuple is typed "structurally". This means that even if you don\'t annotate your data with an explicit type, the compiler can still deduce it by looking at its content, its usage, etc. As long as the declarations and the usages\' inferred shapes match up, you\'re all good!</p>\n<p>* It\'s not that the Reason type system cannot accept heterogenous, dynamically-sized lists; it actually can (hint: GADT)! But making such feature the default increases both the first-time learning overhead and the understandability of code. Just because the types can accomplish it doesn\'t mean it\'s always a good idea to let some pieces of code grow unboundedly complex!</p>',frontmatter:{title:"Tuple"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/tuple.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-tuple-85615859b4556c9a563e.js.map