webpackJsonp([238],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-hashtbl-seeded-s-html.json":function(a,e){a.exports={data:{file:{relativePath:"api/MoreLabels.Hashtbl.SeededS.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="MoreLabels.Hashtbl.S.html" title="MoreLabels.Hashtbl.S">Previous</a>\n&#xA0;<a class="up" href="MoreLabels.Hashtbl.html" title="MoreLabels.Hashtbl">Up</a>\n&#xA0;</div>\n<h1>Module type <a href="type_MoreLabels.Hashtbl.SeededS.html">MoreLabels.Hashtbl.SeededS</a></h1>\n\n<pre><span class="keyword">module</span> type SeededS = sig .. end</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> key;\n</pre>\n\n\n<pre><span class="keyword">type</span> t &apos;a;\n</pre>\n\n\n<pre><span class="keyword">let</span> create: random::bool? =&gt; int =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> clear: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> reset: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> copy: t &apos;a =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> add: t &apos;a =&gt; key::key =&gt; data::&apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> remove: t &apos;a =&gt; key =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> find: t &apos;a =&gt; key =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> find_all: t &apos;a =&gt; key =&gt; list &apos;a;\n</pre>\n<pre><span class="keyword">let</span> replace: t &apos;a =&gt; key::key =&gt; data::&apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> mem: t &apos;a =&gt; key =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> iter: f::(key::key =&gt; data::&apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> fold: f::(key::key =&gt; data::&apos;a =&gt; &apos;b =&gt; &apos;b) =&gt; t &apos;a =&gt; init::&apos;b =&gt; &apos;b;\n</pre>\n<pre><span class="keyword">let</span> length: t &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> stats: t &apos;a =&gt; MoreLabels.Hashtbl.statistics;\n</pre></div>'}}},pathContext:{relativePath:"api/MoreLabels.Hashtbl.SeededS.html"}}}});
//# sourceMappingURL=path---api-more-labels-hashtbl-seeded-s-html-8c322d086df8c9ec071d.js.map