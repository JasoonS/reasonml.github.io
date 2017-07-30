webpackJsonp([252],{"./node_modules/json-loader/index.js!./.cache/json/api-list-labels-html.json":function(s,e){s.exports={data:{file:{relativePath:"api/ListLabels.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="List.html" title="List">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Map.html" title="Map">Next</a>\n</div>\n<h1>Module <a href="type_ListLabels.html">ListLabels</a></h1>\n\n<pre><span class="keyword">module</span> ListLabels: sig .. end</pre><div class="info module top">\nList operations.\n<p>\n\n   Some functions are flagged as not tail-recursive.  A tail-recursive\n   function uses constant stack space, while a non-tail-recursive function\n   uses stack space proportional to the length of its list argument, which\n   can be a problem with very long lists.  When the function takes several\n   list arguments, an approximate formula giving stack usage (in some\n   unspecified constant unit) is shown in parentheses.\n</p><p>\n\n   The above considerations can usually be ignored if your lists are not\n   longer than about 10000 elements.<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> length: list &apos;a =&gt; int;\n</pre><div class="info ">\nReturn the length (number of elements) of the given list.<br>\n</div>\n\n<pre><span class="keyword">let</span> hd: list &apos;a =&gt; &apos;a;\n</pre><div class="info ">\nReturn the first element of the given list. Raise\n   <code class="code">Failure &quot;hd&quot;</code> if the list is empty.<br>\n</div>\n\n<pre><span class="keyword">let</span> tl: list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\nReturn the given list without its first element. Raise\n   <code class="code">Failure &quot;tl&quot;</code> if the list is empty.<br>\n</div>\n\n<pre><span class="keyword">let</span> nth: list &apos;a =&gt; int =&gt; &apos;a;\n</pre><div class="info ">\nReturn the <code class="code">n</code>-th element of the given list.\n   The first element (head of the list) is at position 0.\n   Raise <code class="code">Failure &quot;nth&quot;</code> if the list is too short.\n   Raise <code class="code">Invalid_argument &quot;List.nth&quot;</code> if <code class="code">n</code> is negative.<br>\n</div>\n\n<pre><span class="keyword">let</span> rev: list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\nList reversal.<br>\n</div>\n\n<pre><span class="keyword">let</span> append: list &apos;a =&gt; list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\nCatenate two lists.  Same function as the infix operator <code class="code">@</code>.\n   Not tail-recursive (length of the first argument).  The <code class="code">@</code>\n   operator is not tail-recursive either.<br>\n</div>\n\n<pre><span class="keyword">let</span> rev_append: list &apos;a =&gt; list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\n<code class="code">ListLabels.rev_append l1 l2</code> reverses <code class="code">l1</code> and concatenates it to <code class="code">l2</code>.\n   This is equivalent to <a href="ListLabels.html#VALrev"><code class="code">ListLabels.rev</code></a><code class="code"> l1 @ l2</code>, but <code class="code">rev_append</code> is\n   tail-recursive and more efficient.<br>\n</div>\n\n<pre><span class="keyword">let</span> concat: list (list &apos;a) =&gt; list &apos;a;\n</pre><div class="info ">\nConcatenate a list of lists.  The elements of the argument are all\n   concatenated together (in the same order) to give the result.\n   Not tail-recursive\n   (length of the argument + length of the longest sub-list).<br>\n</div>\n\n<pre><span class="keyword">let</span> flatten: list (list &apos;a) =&gt; list &apos;a;\n</pre><div class="info ">\nSame as <code class="code">concat</code>.  Not tail-recursive\n   (length of the argument + length of the longest sub-list).<br>\n</div>\n<br>\n<h6 id="6_Iterators">Iterators</h6><br>\n\n<pre><span class="keyword">let</span> iter: f::(&apos;a =&gt; unit) =&gt; list &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">ListLabels.iter f [a1; ...; an]</code> applies function <code class="code">f</code> in turn to\n   <code class="code">a1; ...; an</code>. It is equivalent to\n   <code class="code">begin f a1; f a2; ...; f an; () end</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> iteri: f::(int =&gt; &apos;a =&gt; unit) =&gt; list &apos;a =&gt; unit;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALiter"><code class="code">ListLabels.iter</code></a>, but the function is applied to the index of\n   the element as first argument (counting from 0), and the element\n   itself as second argument.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre><span class="keyword">let</span> map: f::(&apos;a =&gt; &apos;b) =&gt; list &apos;a =&gt; list &apos;b;\n</pre><div class="info ">\n<code class="code">ListLabels.map f [a1; ...; an]</code> applies function <code class="code">f</code> to <code class="code">a1, ..., an</code>,\n   and builds the list <code class="code">[f a1; ...; f an]</code>\n   with the results returned by <code class="code">f</code>.  Not tail-recursive.<br>\n</div>\n\n<pre><span class="keyword">let</span> mapi: f::(int =&gt; &apos;a =&gt; &apos;b) =&gt; list &apos;a =&gt; list &apos;b;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALmap"><code class="code">ListLabels.map</code></a>, but the function is applied to the index of\n   the element as first argument (counting from 0), and the element\n   itself as second argument.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre><span class="keyword">let</span> rev_map: f::(&apos;a =&gt; &apos;b) =&gt; list &apos;a =&gt; list &apos;b;\n</pre><div class="info ">\n<code class="code">ListLabels.rev_map f l</code> gives the same result as\n   <a href="ListLabels.html#VALrev"><code class="code">ListLabels.rev</code></a><code class="code"> (</code><a href="ListLabels.html#VALmap"><code class="code">ListLabels.map</code></a><code class="code"> f l)</code>, but is tail-recursive and\n   more efficient.<br>\n</div>\n\n<pre><span class="keyword">let</span> fold_left: f::(&apos;a =&gt; &apos;b =&gt; &apos;a) =&gt; init::&apos;a =&gt; list &apos;b =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">ListLabels.fold_left f a [b1; ...; bn]</code> is\n   <code class="code">f (... (f (f a b1) b2) ...) bn</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> fold_right: f::(&apos;a =&gt; &apos;b =&gt; &apos;b) =&gt; list &apos;a =&gt; init::&apos;b =&gt; &apos;b;\n</pre><div class="info ">\n<code class="code">ListLabels.fold_right f [a1; ...; an] b</code> is\n   <code class="code">f a1 (f a2 (... (f an b) ...))</code>.  Not tail-recursive.<br>\n</div>\n<br>\n<h6 id="6_Iteratorsontwolists">Iterators on two lists</h6><br>\n\n<pre><span class="keyword">let</span> iter2: f::(&apos;a =&gt; &apos;b =&gt; unit) =&gt; list &apos;a =&gt; list &apos;b =&gt; unit;\n</pre><div class="info ">\n<code class="code">ListLabels.iter2 f [a1; ...; an] [b1; ...; bn]</code> calls in turn\n   <code class="code">f a1 b1; ...; f an bn</code>.\n   Raise <code class="code">Invalid_argument</code> if the two lists have\n   different lengths.<br>\n</div>\n\n<pre><span class="keyword">let</span> map2: f::(&apos;a =&gt; &apos;b =&gt; &apos;c) =&gt; list &apos;a =&gt; list &apos;b =&gt; list &apos;c;\n</pre><div class="info ">\n<code class="code">ListLabels.map2 f [a1; ...; an] [b1; ...; bn]</code> is\n   <code class="code">[f a1 b1; ...; f an bn]</code>.\n   Raise <code class="code">Invalid_argument</code> if the two lists have\n   different lengths.  Not tail-recursive.<br>\n</div>\n\n<pre><span class="keyword">let</span> rev_map2: f::(&apos;a =&gt; &apos;b =&gt; &apos;c) =&gt; list &apos;a =&gt; list &apos;b =&gt; list &apos;c;\n</pre><div class="info ">\n<code class="code">ListLabels.rev_map2 f l1 l2</code> gives the same result as\n   <a href="ListLabels.html#VALrev"><code class="code">ListLabels.rev</code></a><code class="code"> (</code><a href="ListLabels.html#VALmap2"><code class="code">ListLabels.map2</code></a><code class="code"> f l1 l2)</code>, but is tail-recursive and\n   more efficient.<br>\n</div>\n\n<pre><span class="keyword">let</span> fold_left2: f::(&apos;a =&gt; &apos;b =&gt; &apos;c =&gt; &apos;a) =&gt; init::&apos;a =&gt; list &apos;b =&gt; list &apos;c =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">ListLabels.fold_left2 f a [b1; ...; bn] [c1; ...; cn]</code> is\n   <code class="code">f (... (f (f a b1 c1) b2 c2) ...) bn cn</code>.\n   Raise <code class="code">Invalid_argument</code> if the two lists have\n   different lengths.<br>\n</div>\n\n<pre><span class="keyword">let</span> fold_right2: f::(&apos;a =&gt; &apos;b =&gt; &apos;c =&gt; &apos;c) =&gt; list &apos;a =&gt; list &apos;b =&gt; init::&apos;c =&gt; &apos;c;\n</pre><div class="info ">\n<code class="code">ListLabels.fold_right2 f [a1; ...; an] [b1; ...; bn] c</code> is\n   <code class="code">f a1 b1 (f a2 b2 (... (f an bn c) ...))</code>.\n   Raise <code class="code">Invalid_argument</code> if the two lists have\n   different lengths.  Not tail-recursive.<br>\n</div>\n<br>\n<h6 id="6_Listscanning">List scanning</h6><br>\n\n<pre><span class="keyword">let</span> for_all: f::(&apos;a =&gt; bool) =&gt; list &apos;a =&gt; bool;\n</pre><div class="info ">\n<code class="code">for_all p [a1; ...; an]</code> checks if all elements of the list\n   satisfy the predicate <code class="code">p</code>. That is, it returns\n   <code class="code">(p a1) &amp;&amp; (p a2) &amp;&amp; ... &amp;&amp; (p an)</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> exists: f::(&apos;a =&gt; bool) =&gt; list &apos;a =&gt; bool;\n</pre><div class="info ">\n<code class="code">exists p [a1; ...; an]</code> checks if at least one element of\n   the list satisfies the predicate <code class="code">p</code>. That is, it returns\n   <code class="code">(p a1) || (p a2) || ... || (p an)</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> for_all2: f::(&apos;a =&gt; &apos;b =&gt; bool) =&gt; list &apos;a =&gt; list &apos;b =&gt; bool;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALfor_all"><code class="code">ListLabels.for_all</code></a>, but for a two-argument predicate.\n   Raise <code class="code">Invalid_argument</code> if the two lists have\n   different lengths.<br>\n</div>\n\n<pre><span class="keyword">let</span> exists2: f::(&apos;a =&gt; &apos;b =&gt; bool) =&gt; list &apos;a =&gt; list &apos;b =&gt; bool;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALexists"><code class="code">ListLabels.exists</code></a>, but for a two-argument predicate.\n   Raise <code class="code">Invalid_argument</code> if the two lists have\n   different lengths.<br>\n</div>\n\n<pre><span class="keyword">let</span> mem: &apos;a =&gt; set::list &apos;a =&gt; bool;\n</pre><div class="info ">\n<code class="code">mem a l</code> is true if and only if <code class="code">a</code> is equal\n   to an element of <code class="code">l</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> memq: &apos;a =&gt; set::list &apos;a =&gt; bool;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALmem"><code class="code">ListLabels.mem</code></a>, but uses physical equality instead of structural\n   equality to compare list elements.<br>\n</div>\n<br>\n<h6 id="6_Listsearching">List searching</h6><br>\n\n<pre><span class="keyword">let</span> find: f::(&apos;a =&gt; bool) =&gt; list &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">find p l</code> returns the first element of the list <code class="code">l</code>\n   that satisfies the predicate <code class="code">p</code>.\n   Raise <code class="code">Not_found</code> if there is no value that satisfies <code class="code">p</code> in the\n   list <code class="code">l</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> filter: f::(&apos;a =&gt; bool) =&gt; list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\n<code class="code">filter p l</code> returns all the elements of the list <code class="code">l</code>\n   that satisfy the predicate <code class="code">p</code>.  The order of the elements\n   in the input list is preserved.<br>\n</div>\n\n<pre><span class="keyword">let</span> find_all: f::(&apos;a =&gt; bool) =&gt; list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\n<code class="code">find_all</code> is another name for <a href="ListLabels.html#VALfilter"><code class="code">ListLabels.filter</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> partition: f::(&apos;a =&gt; bool) =&gt; list &apos;a =&gt; (list &apos;a, list &apos;a);\n</pre><div class="info ">\n<code class="code">partition p l</code> returns a pair of lists <code class="code">(l1, l2)</code>, where\n   <code class="code">l1</code> is the list of all the elements of <code class="code">l</code> that\n   satisfy the predicate <code class="code">p</code>, and <code class="code">l2</code> is the list of all the\n   elements of <code class="code">l</code> that do not satisfy <code class="code">p</code>.\n   The order of the elements in the input list is preserved.<br>\n</div>\n<br>\n<h6 id="6_Associationlists">Association lists</h6><br>\n\n<pre><span class="keyword">let</span> assoc: &apos;a =&gt; list (&apos;a, &apos;b) =&gt; &apos;b;\n</pre><div class="info ">\n<code class="code">assoc a l</code> returns the value associated with key <code class="code">a</code> in the list of\n   pairs <code class="code">l</code>. That is,\n   <code class="code">assoc a [ ...; (a,b); ...] = b</code>\n   if <code class="code">(a,b)</code> is the leftmost binding of <code class="code">a</code> in list <code class="code">l</code>.\n   Raise <code class="code">Not_found</code> if there is no value associated with <code class="code">a</code> in the\n   list <code class="code">l</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> assq: &apos;a =&gt; list (&apos;a, &apos;b) =&gt; &apos;b;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALassoc"><code class="code">ListLabels.assoc</code></a>, but uses physical equality instead of\n   structural equality to compare keys.<br>\n</div>\n\n<pre><span class="keyword">let</span> mem_assoc: &apos;a =&gt; map::list (&apos;a, &apos;b) =&gt; bool;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALassoc"><code class="code">ListLabels.assoc</code></a>, but simply return true if a binding exists,\n   and false if no bindings exist for the given key.<br>\n</div>\n\n<pre><span class="keyword">let</span> mem_assq: &apos;a =&gt; map::list (&apos;a, &apos;b) =&gt; bool;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALmem_assoc"><code class="code">ListLabels.mem_assoc</code></a>, but uses physical equality instead of\n   structural equality to compare keys.<br>\n</div>\n\n<pre><span class="keyword">let</span> remove_assoc: &apos;a =&gt; list (&apos;a, &apos;b) =&gt; list (&apos;a, &apos;b);\n</pre><div class="info ">\n<code class="code">remove_assoc a l</code> returns the list of\n   pairs <code class="code">l</code> without the first pair with key <code class="code">a</code>, if any.\n   Not tail-recursive.<br>\n</div>\n\n<pre><span class="keyword">let</span> remove_assq: &apos;a =&gt; list (&apos;a, &apos;b) =&gt; list (&apos;a, &apos;b);\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALremove_assoc"><code class="code">ListLabels.remove_assoc</code></a>, but uses physical equality instead\n   of structural equality to compare keys.  Not tail-recursive.<br>\n</div>\n<br>\n<h6 id="6_Listsofpairs">Lists of pairs</h6><br>\n\n<pre><span class="keyword">let</span> split: list (&apos;a, &apos;b) =&gt; (list &apos;a, list &apos;b);\n</pre><div class="info ">\nTransform a list of pairs into a pair of lists:\n   <code class="code">split [(a1,b1); ...; (an,bn)]</code> is <code class="code">([a1; ...; an], [b1; ...; bn])</code>.\n   Not tail-recursive.<br>\n</div>\n\n<pre><span class="keyword">let</span> combine: list &apos;a =&gt; list &apos;b =&gt; list (&apos;a, &apos;b);\n</pre><div class="info ">\nTransform a pair of lists into a list of pairs:\n   <code class="code">combine [a1; ...; an] [b1; ...; bn]</code> is\n   <code class="code">[(a1,b1); ...; (an,bn)]</code>.\n   Raise <code class="code">Invalid_argument</code> if the two lists\n   have different lengths.  Not tail-recursive.<br>\n</div>\n<br>\n<h6 id="6_Sorting">Sorting</h6><br>\n\n<pre><span class="keyword">let</span> sort: cmp::(&apos;a =&gt; &apos;a =&gt; int) =&gt; list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\nSort a list in increasing order according to a comparison\n   function.  The comparison function must return 0 if its arguments\n   compare as equal, a positive integer if the first is greater,\n   and a negative integer if the first is smaller (see Array.sort for\n   a complete specification).  For example,\n   <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a> is a suitable comparison function.\n   The resulting list is sorted in increasing order.\n   <code class="code">ListLabels.sort</code> is guaranteed to run in constant heap space\n   (in addition to the size of the result list) and logarithmic\n   stack space.\n<p>\n\n   The current implementation uses Merge Sort. It runs in constant\n   heap space and logarithmic stack space.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> stable_sort: cmp::(&apos;a =&gt; &apos;a =&gt; int) =&gt; list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALsort"><code class="code">ListLabels.sort</code></a>, but the sorting algorithm is guaranteed to\n   be stable (i.e. elements that compare equal are kept in their\n   original order) .\n<p>\n\n   The current implementation uses Merge Sort. It runs in constant\n   heap space and logarithmic stack space.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> fast_sort: cmp::(&apos;a =&gt; &apos;a =&gt; int) =&gt; list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\nSame as <a href="ListLabels.html#VALsort"><code class="code">ListLabels.sort</code></a> or <a href="ListLabels.html#VALstable_sort"><code class="code">ListLabels.stable_sort</code></a>, whichever is\n    faster on typical input.<br>\n</div>\n\n<pre><span class="keyword">let</span> merge: cmp::(&apos;a =&gt; &apos;a =&gt; int) =&gt; list &apos;a =&gt; list &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\nMerge two lists:\n    Assuming that <code class="code">l1</code> and <code class="code">l2</code> are sorted according to the\n    comparison function <code class="code">cmp</code>, <code class="code">merge cmp l1 l2</code> will return a\n    sorted list containting all the elements of <code class="code">l1</code> and <code class="code">l2</code>.\n    If several elements compare equal, the elements of <code class="code">l1</code> will be\n    before the elements of <code class="code">l2</code>.\n    Not tail-recursive (sum of the lengths of the arguments).<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/ListLabels.html"}}}});
//# sourceMappingURL=path---api-list-labels-html-a800de5d21a656358495.js.map