tinymce.PluginManager.add("fullpage",function(e){function t(){var t=n();e.windowManager.open({title:"Document properties",data:t,defaults:{type:"textbox",size:40},body:[{name:"title",label:"Title"},{name:"keywords",label:"Keywords"},{name:"description",label:"Description"},{name:"robots",label:"Robots"},{name:"author",label:"Author"},{name:"docencoding",label:"Encoding"}],onSubmit:function(e){i(tinymce.extend(t,e.data))}})}function n(){function t(e,t){var n=e.attr(t);return n||""}var n,i,a=o(),r={};return r.fontface=e.getParam("fullpage_default_fontface",""),r.fontsize=e.getParam("fullpage_default_fontsize",""),n=a.firstChild,7==n.type&&(r.xml_pi=!0,i=/encoding="([^"]+)"/.exec(n.value),i&&(r.docencoding=i[1])),n=a.getAll("#doctype")[0],n&&(r.doctype="<!DOCTYPE"+n.value+">"),n=a.getAll("title")[0],n&&n.firstChild&&(r.title=n.firstChild.value),u(a.getAll("meta"),function(e){var t,n=e.attr("name"),i=e.attr("http-equiv");n?r[n.toLowerCase()]=e.attr("content"):"Content-Type"==i&&(t=/charset\s*=\s*(.*)\s*/gi.exec(e.attr("content")),t&&(r.docencoding=t[1]))}),n=a.getAll("html")[0],n&&(r.langcode=t(n,"lang")||t(n,"xml:lang")),n=a.getAll("link")[0],n&&"stylesheet"==n.attr("rel")&&(r.stylesheet=n.attr("href")),n=a.getAll("body")[0],n&&(r.langdir=t(n,"dir"),r.style=t(n,"style"),r.visited_color=t(n,"vlink"),r.link_color=t(n,"link"),r.active_color=t(n,"alink")),r}function i(t){function n(e,t,n){e.attr(t,n?n:void 0)}function i(e){r.firstChild?r.insert(e,r.firstChild):r.append(e)}var a,r,l,c,m,g=e.dom;a=o(),r=a.getAll("head")[0],r||(c=a.getAll("html")[0],r=new d("head",1),c.firstChild?c.insert(r,c.firstChild,!0):c.append(r)),c=a.firstChild,t.xml_pi?(m='version="1.0"',t.docencoding&&(m+=' encoding="'+t.docencoding+'"'),7!=c.type&&(c=new d("xml",7),a.insert(c,a.firstChild,!0)),c.value=m):c&&7==c.type&&c.remove(),c=a.getAll("#doctype")[0],t.doctype?(c||(c=new d("#doctype",10),t.xml_pi?a.insert(c,a.firstChild):i(c)),c.value=t.doctype.substring(9,t.doctype.length-1)):c&&c.remove(),t.docencoding&&(c=null,u(a.getAll("meta"),function(e){"Content-Type"==e.attr("http-equiv")&&(c=e)}),c||(c=new d("meta",1),c.attr("http-equiv","Content-Type"),c.shortEnded=!0,i(c)),c.attr("content","text/html; charset="+t.docencoding)),c=a.getAll("title")[0],t.title?c||(c=new d("title",1),c.append(new d("#text",3)).value=t.title,i(c)):c&&c.remove(),u("keywords,description,author,copyright,robots".split(","),function(e){var n,o,r=a.getAll("meta"),l=t[e];for(n=0;n<r.length;n++)if(o=r[n],o.attr("name")==e)return l?o.attr("content",l):o.remove(),void 0;l&&(c=new d("meta",1),c.attr("name",e),c.attr("content",l),c.shortEnded=!0,i(c))}),c=a.getAll("link")[0],c&&"stylesheet"==c.attr("rel")?t.stylesheet?c.attr("href",t.stylesheet):c.remove():t.stylesheet&&(c=new d("link",1),c.attr({rel:"stylesheet",text:"text/css",href:t.stylesheet}),c.shortEnded=!0,i(c)),c=a.getAll("body")[0],c&&(n(c,"dir",t.langdir),n(c,"style",t.style),n(c,"vlink",t.visited_color),n(c,"link",t.link_color),n(c,"alink",t.active_color),g.setAttribs(e.getBody(),{style:t.style,dir:t.dir,vLink:t.visited_color,link:t.link_color,aLink:t.active_color})),c=a.getAll("html")[0],c&&(n(c,"lang",t.langcode),n(c,"xml:lang",t.langcode)),r.firstChild||r.remove(),l=new tinymce.html.Serializer({validate:!1,indent:!0,apply_source_formatting:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"}).serialize(a),s=l.substring(0,l.indexOf("</body>"))}function o(){return new tinymce.html.DomParser({validate:!1,root_name:"#document"}).parse(s)}function a(t){function n(e){return e.replace(/<\/?[A-Z]+/g,function(e){return e.toLowerCase()})}var i,a,l,d,m=t.content,g="",f=e.dom;"raw"==t.format&&s||t.source_view&&e.getParam("fullpage_hide_in_source_view")||(m=m.replace(/<(\/?)BODY/gi,"<$1body"),i=m.indexOf("<body"),-1!=i?(i=m.indexOf(">",i),s=n(m.substring(0,i+1)),a=m.indexOf("</body",i),-1==a&&(a=m.length),t.content=m.substring(i+1,a),c=n(m.substring(a))):(s=r(),c="\n</body>\n</html>"),l=o(),u(l.getAll("style"),function(e){e.firstChild&&(g+=e.firstChild.value)}),d=l.getAll("body")[0],d&&f.setAttribs(e.getBody(),{style:d.attr("style")||"",dir:d.attr("dir")||"",vLink:d.attr("vlink")||"",link:d.attr("link")||"",aLink:d.attr("alink")||""}),f.remove("fullpage_styles"),g&&(f.add(e.getDoc().getElementsByTagName("head")[0],"style",{id:"fullpage_styles"},g),d=f.get("fullpage_styles"),d.styleSheet&&(d.styleSheet.cssText=g)))}function r(){var t,n="",i="";return e.getParam("fullpage_default_xml_pi")&&(n+='<?xml version="1.0" encoding="'+e.getParam("fullpage_default_encoding","ISO-8859-1")+'" ?>\n'),n+=e.getParam("fullpage_default_doctype","<!DOCTYPE html>"),n+="\n<html>\n<head>\n",(t=e.getParam("fullpage_default_title"))&&(n+="<title>"+t+"</title>\n"),(t=e.getParam("fullpage_default_encoding"))&&(n+='<meta http-equiv="Content-Type" content="text/html; charset='+t+'" />\n'),(t=e.getParam("fullpage_default_font_family"))&&(i+="font-family: "+t+";"),(t=e.getParam("fullpage_default_font_size"))&&(i+="font-size: "+t+";"),(t=e.getParam("fullpage_default_text_color"))&&(i+="color: "+t+";"),n+="</head>\n<body"+(i?' style="'+i+'"':"")+">\n"}function l(t){t.selection||t.source_view&&e.getParam("fullpage_hide_in_source_view")||(t.content=tinymce.trim(s)+"\n"+tinymce.trim(t.content)+"\n"+tinymce.trim(c))}var s,c,u=tinymce.each,d=tinymce.html.Node;e.addCommand("mceFullPageProperties",t),e.addButton("fullpage",{title:"Document properties",cmd:"mceFullPageProperties"}),e.addMenuItem("fullpage",{text:"Document properties",cmd:"mceFullPageProperties",context:"file"}),e.on("BeforeSetContent",a),e.on("GetContent",l)});