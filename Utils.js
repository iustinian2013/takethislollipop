var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function trace(p_txt) {
	getElement("traceSwf").doTrace(p_txt);
}

// JavaScript Document
function dump(p_obj, p_name, p_level) {	
	if (p_level > 10) { return ""; }
	if (p_obj == undefined) { return ""; }
	//
	var str = "";
	if (p_level == undefined) { 
		p_level = 0;
		str += "--- Dumping Object ---";
	}
	var lev = showLevel(p_level);
	//
	var type = typeof(p_obj);
	switch (p_obj.constructor) {
		case Array:
			type = "array";
			break;
	}
	//
	var badNames = {
		contructor: true,
		parentNode:true,
		childNodes:true,
		firstChild:true,
		lastChild:true,
		previousSibling:true,
		nextSibling: true,
		ownerDocument:true,
		ownerElement: true,
	};
	if (badNames[p_name] == true) { return ""; }
	
	switch (type) {
		case "number":
		case "string":
		case "boolean":
			str += lev + p_name + " (" + type + "): " + p_obj;
			break;
		case "array":
			str += lev + p_name + " (Array[" + p_obj.length + "])";
			for (var i=0; i<p_obj.length; i++) {
				str += dump(p_obj[i], i.toString(), p_level+1);
			}
			break;
		case "function":
			//str += lev + p_name + " (Function)";
			break;
		case "object":
			str += lev + p_name + " (Object)";
			for (var n in p_obj) {
				str += dump(p_obj[n], n, p_level+1);
			}
			break;
	}
	
	if (p_level == 0) { str += "\n"; }
	return str;
}

function showLevel(p_num) {
	var t = "\n";
	for (var i=0; i<p_num; i++) {
		t += "   ";
	}
	return t + "|-> ";
}

//"Private" methods
function getElement(p_id) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[p_id]
    } else {
		//wg:  For whatever reason document[p_id] didn't aways work, so we try document.getElementById(p_id) instead ... 
        if (document[p_id]) {
			elem = document[p_id];
		} else {
			elem = document.getElementById(p_id);
		}
		return elem;
    }
}

}
/*
     FILE ARCHIVED ON 11:46:13 Nov 16, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:52:58 May 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.769
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.061
  esindex: 0.01
  cdx.remote: 5.013
  LoadShardBlock: 83.386 (3)
  PetaboxLoader3.datanode: 81.183 (4)
  load_resource: 77.55
  PetaboxLoader3.resolve: 60.801
*/