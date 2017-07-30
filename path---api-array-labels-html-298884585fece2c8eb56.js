webpackJsonp([325],{"./node_modules/json-loader/index.js!./.cache/json/api-array-labels-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/ArrayLabels.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Array.html" title="Array">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Buffer.html" title="Buffer">Next</a>\n</div>\n<h1>Module <a href="type_ArrayLabels.html">ArrayLabels</a></h1>\n\n<pre><span class="keyword">module</span> ArrayLabels: sig .. end</pre><div class="info module top">\nArray operations.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> length: array &apos;a =&gt; int;\n</pre><div class="info ">\nReturn the length (number of elements) of the given array.<br>\n</div>\n\n<pre><span class="keyword">let</span> get: array &apos;a =&gt; int =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.get a n</code> returns the element number <code class="code">n</code> of array <code class="code">a</code>.\n   The first element has number 0.\n   The last element has number <code class="code">ArrayLabels.length a - 1</code>.\n   You can also write <code class="code">a.(n)</code> instead of <code class="code">ArrayLabels.get a n</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument &quot;index out of bounds&quot;</code>\n   if <code class="code">n</code> is outside the range 0 to <code class="code">(ArrayLabels.length a - 1)</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> set: array &apos;a =&gt; int =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">ArrayLabels.set a n x</code> modifies array <code class="code">a</code> in place, replacing\n   element number <code class="code">n</code> with <code class="code">x</code>.\n   You can also write <code class="code">a.(n) &lt;- x</code> instead of <code class="code">ArrayLabels.set a n x</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument &quot;index out of bounds&quot;</code>\n   if <code class="code">n</code> is outside the range 0 to <code class="code">ArrayLabels.length a - 1</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> make: int =&gt; &apos;a =&gt; array &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.make n x</code> returns a fresh array of length <code class="code">n</code>,\n   initialized with <code class="code">x</code>.\n   All the elements of this new array are initially\n   physically equal to <code class="code">x</code> (in the sense of the <code class="code">==</code> predicate).\n   Consequently, if <code class="code">x</code> is mutable, it is shared among all elements\n   of the array, and modifying <code class="code">x</code> through one of the array entries\n   will modify all other entries at the same time.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; Sys.max_array_length</code>.\n   If the value of <code class="code">x</code> is a floating-point number, then the maximum\n   size is only <code class="code">Sys.max_array_length / 2</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> create: int =&gt; &apos;a =&gt; array &apos;a;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span><code class="code">ArrayLabels.create</code> is an alias for <a href="ArrayLabels.html#VALmake"><code class="code">ArrayLabels.make</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> init: int =&gt; f::(int =&gt; &apos;a) =&gt; array &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.init n f</code> returns a fresh array of length <code class="code">n</code>,\n   with element number <code class="code">i</code> initialized to the result of <code class="code">f i</code>.\n   In other terms, <code class="code">ArrayLabels.init n f</code> tabulates the results of <code class="code">f</code>\n   applied to the integers <code class="code">0</code> to <code class="code">n-1</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; Sys.max_array_length</code>.\n   If the return type of <code class="code">f</code> is <code class="code">float</code>, then the maximum\n   size is only <code class="code">Sys.max_array_length / 2</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> make_matrix: dimx::int =&gt; dimy::int =&gt; &apos;a =&gt; array (array &apos;a);\n</pre><div class="info ">\n<code class="code">ArrayLabels.make_matrix dimx dimy e</code> returns a two-dimensional array\n   (an array of arrays) with first dimension <code class="code">dimx</code> and\n   second dimension <code class="code">dimy</code>. All the elements of this new matrix\n   are initially physically equal to <code class="code">e</code>.\n   The element (<code class="code">x,y</code>) of a matrix <code class="code">m</code> is accessed\n   with the notation <code class="code">m.(x).(y)</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">dimx</code> or <code class="code">dimy</code> is negative or\n   greater than <code class="code">Sys.max_array_length</code>.\n   If the value of <code class="code">e</code> is a floating-point number, then the maximum\n   size is only <code class="code">Sys.max_array_length / 2</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> create_matrix: dimx::int =&gt; dimy::int =&gt; &apos;a =&gt; array (array &apos;a);\n</pre><div class="info ">\n<span class="warning">Deprecated.</span><code class="code">ArrayLabels.create_matrix</code> is an alias for\n   <a href="ArrayLabels.html#VALmake_matrix"><code class="code">ArrayLabels.make_matrix</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> append: array &apos;a =&gt; array &apos;a =&gt; array &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.append v1 v2</code> returns a fresh array containing the\n   concatenation of the arrays <code class="code">v1</code> and <code class="code">v2</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> concat: list (array &apos;a) =&gt; array &apos;a;\n</pre><div class="info ">\nSame as <code class="code">ArrayLabels.append</code>, but concatenates a list of arrays.<br>\n</div>\n\n<pre><span class="keyword">let</span> sub: array &apos;a =&gt; pos::int =&gt; len::int =&gt; array &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.sub a start len</code> returns a fresh array of length <code class="code">len</code>,\n   containing the elements number <code class="code">start</code> to <code class="code">start + len - 1</code>\n   of array <code class="code">a</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument &quot;Array.sub&quot;</code> if <code class="code">start</code> and <code class="code">len</code> do not\n   designate a valid subarray of <code class="code">a</code>; that is, if\n   <code class="code">start &lt; 0</code>, or <code class="code">len &lt; 0</code>, or <code class="code">start + len &gt; ArrayLabels.length a</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> copy: array &apos;a =&gt; array &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.copy a</code> returns a copy of <code class="code">a</code>, that is, a fresh array\n   containing the same elements as <code class="code">a</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> fill: array &apos;a =&gt; pos::int =&gt; len::int =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">ArrayLabels.fill a ofs len x</code> modifies the array <code class="code">a</code> in place,\n   storing <code class="code">x</code> in elements number <code class="code">ofs</code> to <code class="code">ofs + len - 1</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument &quot;Array.fill&quot;</code> if <code class="code">ofs</code> and <code class="code">len</code> do not\n   designate a valid subarray of <code class="code">a</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> blit: src::array &apos;a =&gt; src_pos::int =&gt; dst::array &apos;a =&gt; dst_pos::int =&gt; len::int =&gt; unit;\n</pre><div class="info ">\n<code class="code">ArrayLabels.blit v1 o1 v2 o2 len</code> copies <code class="code">len</code> elements\n   from array <code class="code">v1</code>, starting at element number <code class="code">o1</code>, to array <code class="code">v2</code>,\n   starting at element number <code class="code">o2</code>. It works correctly even if\n   <code class="code">v1</code> and <code class="code">v2</code> are the same array, and the source and\n   destination chunks overlap.\n<p>\n\n   Raise <code class="code">Invalid_argument &quot;Array.blit&quot;</code> if <code class="code">o1</code> and <code class="code">len</code> do not\n   designate a valid subarray of <code class="code">v1</code>, or if <code class="code">o2</code> and <code class="code">len</code> do not\n   designate a valid subarray of <code class="code">v2</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> to_list: array &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.to_list a</code> returns the list of all the elements of <code class="code">a</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_list: list &apos;a =&gt; array &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.of_list l</code> returns a fresh array containing the elements\n   of <code class="code">l</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> iter: f::(&apos;a =&gt; unit) =&gt; array &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">ArrayLabels.iter f a</code> applies function <code class="code">f</code> in turn to all\n   the elements of <code class="code">a</code>.  It is equivalent to\n   <code class="code">f a.(0); f a.(1); ...; f a.(ArrayLabels.length a - 1); ()</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> map: f::(&apos;a =&gt; &apos;b) =&gt; array &apos;a =&gt; array &apos;b;\n</pre><div class="info ">\n<code class="code">ArrayLabels.map f a</code> applies function <code class="code">f</code> to all the elements of <code class="code">a</code>,\n   and builds an array with the results returned by <code class="code">f</code>:\n   <code class="code">[| f a.(0); f a.(1); ...; f a.(ArrayLabels.length a - 1) |]</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> iteri: f::(int =&gt; &apos;a =&gt; unit) =&gt; array &apos;a =&gt; unit;\n</pre><div class="info ">\nSame as <a href="ArrayLabels.html#VALiter"><code class="code">ArrayLabels.iter</code></a>, but the\n   function is applied to the index of the element as first argument,\n   and the element itself as second argument.<br>\n</div>\n\n<pre><span class="keyword">let</span> mapi: f::(int =&gt; &apos;a =&gt; &apos;b) =&gt; array &apos;a =&gt; array &apos;b;\n</pre><div class="info ">\nSame as <a href="ArrayLabels.html#VALmap"><code class="code">ArrayLabels.map</code></a>, but the\n   function is applied to the index of the element as first argument,\n   and the element itself as second argument.<br>\n</div>\n\n<pre><span class="keyword">let</span> fold_left: f::(&apos;a =&gt; &apos;b =&gt; &apos;a) =&gt; init::&apos;a =&gt; array &apos;b =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.fold_left f x a</code> computes\n   <code class="code">f (... (f (f x a.(0)) a.(1)) ...) a.(n-1)</code>,\n   where <code class="code">n</code> is the length of the array <code class="code">a</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> fold_right: f::(&apos;b =&gt; &apos;a =&gt; &apos;a) =&gt; array &apos;b =&gt; init::&apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">ArrayLabels.fold_right f a x</code> computes\n   <code class="code">f a.(0) (f a.(1) ( ... (f a.(n-1) x) ...))</code>,\n   where <code class="code">n</code> is the length of the array <code class="code">a</code>.<br>\n</div>\n<br>\n<h6 id="6_Sorting">Sorting</h6><br>\n\n<pre><span class="keyword">let</span> sort: cmp::(&apos;a =&gt; &apos;a =&gt; int) =&gt; array &apos;a =&gt; unit;\n</pre><div class="info ">\nSort an array in increasing order according to a comparison\n   function.  The comparison function must return 0 if its arguments\n   compare as equal, a positive integer if the first is greater,\n   and a negative integer if the first is smaller (see below for a\n   complete specification).  For example, <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a> is\n   a suitable comparison function, provided there are no floating-point\n   NaN values in the data.  After calling <code class="code">ArrayLabels.sort</code>, the\n   array is sorted in place in increasing order.\n   <code class="code">ArrayLabels.sort</code> is guaranteed to run in constant heap space\n   and (at most) logarithmic stack space.\n<p>\n\n   The current implementation uses Heap Sort.  It runs in constant\n   stack space.\n</p><p>\n\n   Specification of the comparison function:\n   Let <code class="code">a</code> be the array and <code class="code">cmp</code> the comparison function.  The following\n   must be true for all x, y, z in a :</p><ul>\n<li>  <code class="code">cmp x y</code> &gt; 0 if and only if <code class="code">cmp y x</code> &lt; 0</li>\n<li>  if <code class="code">cmp x y</code> &gt;= 0 and <code class="code">cmp y z</code> &gt;= 0 then <code class="code">cmp x z</code> &gt;= 0</li>\n</ul>\n\n   When <code class="code">ArrayLabels.sort</code> returns, <code class="code">a</code> contains the same elements as before,\n   reordered in such a way that for all i and j valid indices of <code class="code">a</code> :<ul>\n<li>  <code class="code">cmp a.(i) a.(j)</code> &gt;= 0 if and only if i &gt;= j</li>\n</ul>\n<br>\n</div>\n\n<pre><span class="keyword">let</span> stable_sort: cmp::(&apos;a =&gt; &apos;a =&gt; int) =&gt; array &apos;a =&gt; unit;\n</pre><div class="info ">\nSame as <a href="ArrayLabels.html#VALsort"><code class="code">ArrayLabels.sort</code></a>, but the sorting algorithm is stable (i.e.\n   elements that compare equal are kept in their original order) and\n   not guaranteed to run in constant heap space.\n<p>\n\n   The current implementation uses Merge Sort. It uses <code class="code">n/2</code>\n   words of heap space, where <code class="code">n</code> is the length of the array.\n   It is usually faster than the current implementation of <a href="ArrayLabels.html#VALsort"><code class="code">ArrayLabels.sort</code></a>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> fast_sort: cmp::(&apos;a =&gt; &apos;a =&gt; int) =&gt; array &apos;a =&gt; unit;\n</pre><div class="info ">\nSame as <a href="ArrayLabels.html#VALsort"><code class="code">ArrayLabels.sort</code></a> or <a href="ArrayLabels.html#VALstable_sort"><code class="code">ArrayLabels.stable_sort</code></a>, whichever is\n    faster on typical input.<br>\n</div>\n<br>\n<h6 id="6_Undocumentedfunctions">Undocumented functions</h6><br>\n\n<pre><span class="keyword">let</span> unsafe_get: array &apos;a =&gt; int =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> unsafe_set: array &apos;a =&gt; int =&gt; &apos;a =&gt; unit;\n</pre></div>'}}},pathContext:{relativePath:"api/ArrayLabels.html"}}}});
//# sourceMappingURL=path---api-array-labels-html-298884585fece2c8eb56.js.map