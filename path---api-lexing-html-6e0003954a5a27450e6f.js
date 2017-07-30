webpackJsonp([254],{"./node_modules/json-loader/index.js!./.cache/json/api-lexing-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Lexing.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Lazy.html" title="Lazy">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="List.html" title="List">Next</a>\n</div>\n<h1>Module <a href="type_Lexing.html">Lexing</a></h1>\n\n<pre><span class="keyword">module</span> Lexing: sig .. end</pre><div class="info module top">\nThe run-time library for lexers generated by <code class="code">ocamllex</code>.<br>\n</div>\n<hr width="100%">\n<br>\n<h6 id="6_Positions">Positions</h6><br>\n\n<pre><span class="keyword">type</span> position = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>pos_fname&#xA0;: string;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>pos_lnum&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>pos_bol&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>pos_cnum&#xA0;: int;</code></td>\n\n</tr></tbody></table>\n}\n\n<div class="info ">\nA value of type <code class="code">position</code> describes a point in a source file.\n   <code class="code">pos_fname</code> is the file name; <code class="code">pos_lnum</code> is the line number;\n   <code class="code">pos_bol</code> is the offset of the beginning of the line (number\n   of characters between the beginning of the lexbuf and the beginning\n   of the line); <code class="code">pos_cnum</code> is the offset of the position (number of\n   characters between the beginning of the lexbuf and the position).\n   The difference between <code class="code">pos_cnum</code> and <code class="code">pos_bol</code> is the character\n   offset within the line (i.e. the column number, assuming each\n   character is one column wide).\n<p>\n\n   See the documentation of type <code class="code">lexbuf</code> for information about\n   how the lexing engine will manage positions.<br>\n</p></div>\n\n\n<pre><span class="keyword">let</span> dummy_pos: position;\n</pre><div class="info ">\nA value of type <code class="code">position</code>, guaranteed to be different from any\n   valid position.<br>\n</div>\n<br>\n<h6 id="6_Lexerbuffers">Lexer buffers</h6><br>\n\n<pre><span class="keyword">type</span> lexbuf = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>refill_buff&#xA0;: lexbuf -&gt; unit;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_buffer&#xA0;: bytes;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_buffer_len&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_abs_pos&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_start_pos&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_curr_pos&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_last_pos&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_last_action&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_eof_reached&#xA0;: bool;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_mem&#xA0;: int array;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_start_p&#xA0;: position;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;lex_curr_p&#xA0;: position;</code></td>\n\n</tr></tbody></table>\n}\n\n<div class="info ">\nThe type of lexer buffers. A lexer buffer is the argument passed\n   to the scanning functions defined by the generated scanners.\n   The lexer buffer holds the current state of the scanner, plus\n   a function to refill the buffer from the input.\n<p>\n\n   At each token, the lexing engine will copy <code class="code">lex_curr_p</code> to\n   <code class="code">lex_start_p</code>, then change the <code class="code">pos_cnum</code> field\n   of <code class="code">lex_curr_p</code> by updating it with the number of characters read\n   since the start of the <code class="code">lexbuf</code>.  The other fields are left\n   unchanged by the lexing engine.  In order to keep them\n   accurate, they must be initialised before the first use of the\n   lexbuf, and updated by the relevant lexer actions (i.e. at each\n   end of line -- see also <code class="code">new_line</code>).<br>\n</p></div>\n\n\n<pre><span class="keyword">let</span> from_channel: Pervasives.in_channel =&gt; lexbuf;\n</pre><div class="info ">\nCreate a lexer buffer on the given input channel.\n   <code class="code">Lexing.from_channel inchan</code> returns a lexer buffer which reads\n   from the input channel <code class="code">inchan</code>, at the current reading position.<br>\n</div>\n\n<pre><span class="keyword">let</span> from_string: string =&gt; lexbuf;\n</pre><div class="info ">\nCreate a lexer buffer which reads from\n   the given string. Reading starts from the first character in\n   the string. An end-of-input condition is generated when the\n   end of the string is reached.<br>\n</div>\n\n<pre><span class="keyword">let</span> from_function: (bytes =&gt; int =&gt; int) =&gt; lexbuf;\n</pre><div class="info ">\nCreate a lexer buffer with the given function as its reading method.\n   When the scanner needs more characters, it will call the given\n   function, giving it a byte sequence <code class="code">s</code> and a byte\n   count <code class="code">n</code>. The function should put <code class="code">n</code> bytes or fewer in <code class="code">s</code>,\n   starting at index 0, and return the number of bytes\n   provided. A return value of 0 means end of input.<br>\n</div>\n<br>\n<h6 id="6_Functionsforlexersemanticactions">Functions for lexer semantic actions</h6><br>\n<br>\n<h6 id="6_Functionsforlexersemanticactions">Functions for lexer semantic actions</h6><br>\n<br>\nThe following functions can be called from the semantic actions\n   of lexer definitions (the ML code enclosed in braces that\n   computes the value returned by lexing functions). They give\n   access to the character string matched by the regular expression\n   associated with the semantic action. These functions must be\n   applied to the argument <code class="code">lexbuf</code>, which, in the code generated by\n   <code class="code">ocamllex</code>, is bound to the lexer buffer passed to the parsing\n   function.<br>\n\n<pre><span class="keyword">let</span> lexeme: lexbuf =&gt; string;\n</pre><div class="info ">\n<code class="code">Lexing.lexeme lexbuf</code> returns the string matched by\n           the regular expression.<br>\n</div>\n\n<pre><span class="keyword">let</span> lexeme_char: lexbuf =&gt; int =&gt; char;\n</pre><div class="info ">\n<code class="code">Lexing.lexeme_char lexbuf i</code> returns character number <code class="code">i</code> in\n   the matched string.<br>\n</div>\n\n<pre><span class="keyword">let</span> lexeme_start: lexbuf =&gt; int;\n</pre><div class="info ">\n<code class="code">Lexing.lexeme_start lexbuf</code> returns the offset in the\n   input stream of the first character of the matched string.\n   The first character of the stream has offset 0.<br>\n</div>\n\n<pre><span class="keyword">let</span> lexeme_end: lexbuf =&gt; int;\n</pre><div class="info ">\n<code class="code">Lexing.lexeme_end lexbuf</code> returns the offset in the input stream\n   of the character following the last character of the matched\n   string. The first character of the stream has offset 0.<br>\n</div>\n\n<pre><span class="keyword">let</span> lexeme_start_p: lexbuf =&gt; position;\n</pre><div class="info ">\nLike <code class="code">lexeme_start</code>, but return a complete <code class="code">position</code> instead\n    of an offset.<br>\n</div>\n\n<pre><span class="keyword">let</span> lexeme_end_p: lexbuf =&gt; position;\n</pre><div class="info ">\nLike <code class="code">lexeme_end</code>, but return a complete <code class="code">position</code> instead\n    of an offset.<br>\n</div>\n\n<pre><span class="keyword">let</span> new_line: lexbuf =&gt; unit;\n</pre><div class="info ">\nUpdate the <code class="code">lex_curr_p</code> field of the lexbuf to reflect the start\n    of a new line.  You can call this function in the semantic action\n    of the rule that matches the end-of-line character.<br>\n<b>Since</b> 3.11.0<br>\n</div>\n<br>\n<h6 id="6_Miscellaneousfunctions">Miscellaneous functions</h6><br>\n\n<pre><span class="keyword">let</span> flush_input: lexbuf =&gt; unit;\n</pre><div class="info ">\nDiscard the contents of the buffer and reset the current\n    position to 0.  The next use of the lexbuf will trigger a\n    refill.<br>\n</div>\n<br>\n<h6 id="6_"> </h6><br>\n</div>'}}},pathContext:{relativePath:"api/Lexing.html"}}}});
//# sourceMappingURL=path---api-lexing-html-6e0003954a5a27450e6f.js.map