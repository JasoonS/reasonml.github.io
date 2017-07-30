webpackJsonp([221],{"./node_modules/json-loader/index.js!./.cache/json/api-parsing-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/Parsing.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Oo.html" title="Oo">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Pervasives.html" title="Pervasives">Next</a>\n</div>\n<h1>Module <a href="type_Parsing.html">Parsing</a></h1>\n\n<pre><span class="keyword">module</span> Parsing: sig .. end</pre><div class="info module top">\nThe run-time library for parsers generated by <code class="code">ocamlyacc</code>.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> symbol_start: unit =&gt; int;\n</pre><div class="info ">\n<code class="code">symbol_start</code> and <a href="Parsing.html#VALsymbol_end"><code class="code">Parsing.symbol_end</code></a> are to be called in the\n   action part of a grammar rule only. They return the offset of the\n   string that matches the left-hand side of the rule: <code class="code">symbol_start()</code>\n   returns the offset of the first character; <code class="code">symbol_end()</code> returns the\n   offset after the last character. The first character in a file is at\n   offset 0.<br>\n</div>\n\n<pre><span class="keyword">let</span> symbol_end: unit =&gt; int;\n</pre><div class="info ">\nSee <a href="Parsing.html#VALsymbol_start"><code class="code">Parsing.symbol_start</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> rhs_start: int =&gt; int;\n</pre><div class="info ">\nSame as <a href="Parsing.html#VALsymbol_start"><code class="code">Parsing.symbol_start</code></a> and <a href="Parsing.html#VALsymbol_end"><code class="code">Parsing.symbol_end</code></a>, but\n   return the offset of the string matching the <code class="code">n</code>th item on the\n   right-hand side of the rule, where <code class="code">n</code> is the integer parameter\n   to <code class="code">rhs_start</code> and <code class="code">rhs_end</code>. <code class="code">n</code> is 1 for the leftmost item.<br>\n</div>\n\n<pre><span class="keyword">let</span> rhs_end: int =&gt; int;\n</pre><div class="info ">\nSee <a href="Parsing.html#VALrhs_start"><code class="code">Parsing.rhs_start</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> symbol_start_pos: unit =&gt; Lexing.position;\n</pre><div class="info ">\nSame as <code class="code">symbol_start</code>, but return a <code class="code">position</code> instead of an offset.<br>\n</div>\n\n<pre><span class="keyword">let</span> symbol_end_pos: unit =&gt; Lexing.position;\n</pre><div class="info ">\nSame as <code class="code">symbol_end</code>, but return a <code class="code">position</code> instead of an offset.<br>\n</div>\n\n<pre><span class="keyword">let</span> rhs_start_pos: int =&gt; Lexing.position;\n</pre><div class="info ">\nSame as <code class="code">rhs_start</code>, but return a <code class="code">position</code> instead of an offset.<br>\n</div>\n\n<pre><span class="keyword">let</span> rhs_end_pos: int =&gt; Lexing.position;\n</pre><div class="info ">\nSame as <code class="code">rhs_end</code>, but return a <code class="code">position</code> instead of an offset.<br>\n</div>\n\n<pre><span class="keyword">let</span> clear_parser: unit =&gt; unit;\n</pre><div class="info ">\nEmpty the parser stack. Call it just after a parsing function\n   has returned, to remove all pointers from the parser stack\n   to structures that were built by semantic actions during parsing.\n   This is optional, but lowers the memory requirements of the\n   programs.<br>\n</div>\n\n<pre><span class="keyword">exception</span> Parse_error;\n</pre>\n<div class="info ">\nRaised when a parser encounters a syntax error.\n   Can also be raised from the action part of a grammar rule,\n   to initiate error recovery.<br>\n</div>\n\n<pre><span class="keyword">let</span> set_trace: bool =&gt; bool;\n</pre><div class="info ">\nControl debugging support for <code class="code">ocamlyacc</code>-generated parsers.\n    After <code class="code">Parsing.set_trace true</code>, the pushdown automaton that\n    executes the parsers prints a trace of its actions (reading a token,\n    shifting a state, reducing by a rule) on standard output.\n    <code class="code">Parsing.set_trace false</code> turns this debugging trace off.\n    The boolean returned is the previous state of the trace flag.<br>\n<b>Since</b> 3.11.0<br>\n</div>\n<br>\n<h6 id="6_"> </h6><br>\n</div>'}}},pathContext:{relativePath:"api/Parsing.html"}}}});
//# sourceMappingURL=path---api-parsing-html-ac8f76b0e47be90f8977.js.map