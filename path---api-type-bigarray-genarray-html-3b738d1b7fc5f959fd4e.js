webpackJsonp([158],{"./node_modules/json-loader/index.js!./.cache/json/api-type-bigarray-genarray-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Bigarray.Genarray.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;t\n&#xA0;&#xA0;external&#xA0;create&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b)&#xA0;Bigarray.kind&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&apos;c&#xA0;Bigarray.layout&#xA0;-&gt;&#xA0;int&#xA0;array&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_create&quot;\n&#xA0;&#xA0;external&#xA0;num_dims&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_num_dims&quot;\n&#xA0;&#xA0;val&#xA0;dims&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;&#xA0;int&#xA0;array\n&#xA0;&#xA0;external&#xA0;nth_dim&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_dim&quot;\n&#xA0;&#xA0;external&#xA0;kind&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b)&#xA0;Bigarray.kind\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_kind&quot;\n&#xA0;&#xA0;external&#xA0;layout&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;&#xA0;&apos;c&#xA0;Bigarray.layout\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_layout&quot;\n&#xA0;&#xA0;external&#xA0;get&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;&#xA0;int&#xA0;array&#xA0;-&gt;&#xA0;&apos;a\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_get_generic&quot;\n&#xA0;&#xA0;external&#xA0;set&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;&#xA0;int&#xA0;array&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_set_generic&quot;\n&#xA0;&#xA0;external&#xA0;sub_left&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;Bigarray.c_layout)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;Bigarray.c_layout)&#xA0;Bigarray.Genarray.t\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_sub&quot;\n&#xA0;&#xA0;external&#xA0;sub_right&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;Bigarray.fortran_layout)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;Bigarray.fortran_layout)&#xA0;Bigarray.Genarray.t\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_sub&quot;\n&#xA0;&#xA0;external&#xA0;slice_left&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;Bigarray.c_layout)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;int&#xA0;array&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;Bigarray.c_layout)&#xA0;Bigarray.Genarray.t\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_slice&quot;\n&#xA0;&#xA0;external&#xA0;slice_right&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;Bigarray.fortran_layout)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;int&#xA0;array&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;Bigarray.fortran_layout)&#xA0;Bigarray.Genarray.t\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_slice&quot;\n&#xA0;&#xA0;external&#xA0;blit&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;caml_ba_blit&quot;\n&#xA0;&#xA0;external&#xA0;fill&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_fill&quot;\n&#xA0;&#xA0;val&#xA0;map_file&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Unix.file_descr&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?pos:int64&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b)&#xA0;Bigarray.kind&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&apos;c&#xA0;Bigarray.layout&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;bool&#xA0;-&gt;&#xA0;int&#xA0;array&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Genarray.t\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Bigarray.Genarray.html"}}}});
//# sourceMappingURL=path---api-type-bigarray-genarray-html-3b738d1b7fc5f959fd4e.js.map