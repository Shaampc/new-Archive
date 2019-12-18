function wct_getWordStats(e){var t=[],n=e.trim();t.num_character=e.trim().length;var r=n.split(/\s+/).join("");t.num_character_wo_spaces=r.length,t.num_paragraph=0,n.length>0&&(t.num_paragraph=n.split(/\n+/).length);var a=n.replace(/(\w)[-_'](\w)/gi,"$10$2");a=a.replace(/(\d)[,.](\d)/gi,"$10$2"),t.num_sentence=0,a.length>0&&(t.num_sentence=a.replace(/"/gi,"").split(/[.?!:\n]+/).length);var _=a.split(/[\s\n]+/);if(t.num_word=0,a.length>0&&(t.num_word=_.length),t.avg_sentence_length=0!=t.num_sentence?Math.round(t.num_word/t.num_sentence*10)/10:0,0!=t.num_word){var c=r.length/t.num_word;t.avg_word_length=Math.round(10*c)/10}else t.avg_word_length=0;var d=[];t.num_unique_word=0,t.percentage_num_unique_word=0;for(var s=0;s<_.length;s++)d[_[s]]=1;var u=Object.keys(d).length;return t.num_unique_word=Object.keys(d).length,percentage_unique_words=Math.round(100*u/t.num_word),t.percentage_num_unique_word=percentage_unique_words,t}function wct_display_counts(){var e=document.getElementById("wct_embed_input_text").value;wordStats=wct_getWordStats(e),document.getElementById("wct_embed_result").innerHTML="<em>"+wordStats.num_word+"</em> Words | <em>"+wordStats.num_character+"</em> Number of characters | <em>"+wordStats.num_sentence+"</em> Sentences | <em>"+wordStats.num_paragraph+"</em> Paragraphs"}var wct_powered_by=document.getElementById("wct_powered_by");wct_powered_by.setAttribute("style","font-size:small;float:left;");var wct_embed_result=document.getElementById("wct_embed_result");wct_embed_result.setAttribute("style","margin:5px;text-align:center;");var wct_embed_input_text=document.getElementById("wct_embed_input_text");wct_embed_input_text.setAttribute("style","width: 100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box; box-sizing: border-box;");var wct_embed_result=document.getElementById("wct_embed_result");wct_embed_result.innerHTML="<em>0</em> Words | <em>0</em> Number of characters | <em>0</em> Paragraphs| <em>0</em> Paragraphs";var wct_textarea=document.getElementById("wct_embed_input_text");wct_textarea.value="",wct_textarea.addEventListener&&(wct_textarea.addEventListener("input",wct_display_counts,!1),wct_textarea.addEventListener("textInput",wct_display_counts,!1),wct_textarea.addEventListener("textinput",wct_display_counts,!1)),wct_textarea.attachEvent&&wct_textarea.attachEvent("onpropertychange",wct_display_counts);