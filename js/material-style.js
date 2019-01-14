function changeLabelColorAndPosition(t){var e=$(t).val().length;$(t).is("div")&&(e=$(t).html().length),e>0?($(t).parent("div").find(".floating-label").removeClass("floating-label").addClass("floating-label-floating"),$(t).parent("div").find(".floating-label, .static-label, .floating-label-floating").css("color",getAccentColor(t))):($(t).parent("div").find(".floating-label-floating").addClass("floating-label").removeClass("floating-label-floating"),$(t).parent("div").find(".floating-label, .static-label, .floating-label-floating").css("color",getPrimaryColor(t)))}function changeTextFieldColor(t){$(t).css("background-image","linear-gradient("+getAccentColor(t)+", "+getAccentColor(t)+"), linear-gradient("+getPrimaryColor(t)+", "+getPrimaryColor(t)+")")}function changeOutlineTextFieldColor(t){$(t).css("border-color",getPrimaryColor(t))}function initTextFields(t){var e=$(".ms-text-field").filter(function(){return"collapse"===t&&$(this).parents(".collapse").length?$(this):"modal"===t&&$(this).parents(".modal").length?$(this):0===$(this).parents(".modal").length&&0===$(this).parents(".collapse").length?$(this):void 0}),i=$(".ms-text-field-outline").filter(function(){return"collapse"===t&&$(this).parents(".collapse").length?$(this):"modal"===t&&$(this).parents(".modal").length?$(this):0===$(this).parents(".modal").length&&0===$(this).parents(".collapse").length?$(this):void 0});e.length&&(e.each(function(){changeTextFieldColor(this),changeLabelColorAndPosition(this)}),e.focus(function(){changeLabelColorAndPosition(this),$(this).prev(".floating-label").addClass("floating-label-floating").removeClass("floating-label"),$(this).prev(".floating-label-floating, .static-label").css("color",getAccentColor(this)),$(this).prev(".floating-label-floating").css({transform:"translate(0, 12px)"})}),e.focusout(function(){changeLabelColorAndPosition(this),0===$(this).val().length&&$(this).prev(".floating-label-floating").addClass("floating-label").removeClass("floating-label-floating");var t=$(this).prev(".floating-label").data("translatex");void 0==t&&(t=0),$(this).prev(".floating-label").css({transform:"translate("+t+"px, 34px)"})})),i.length&&(i.each(function(){changeOutlineTextFieldColor(this),changeLabelColorAndPosition(this),$(this).prev(".static-label, .floating-label-floating").css({transform:"translate(9px, 12px)","padding-left":"5px","padding-right":"5px"}),$(this).prev(".floating-label").css({transform:"translate(9px, 34px)","padding-left":"5px","padding-right":"5px"})}),i.focus(function(){changeLabelColorAndPosition(this),$(this).prev(".floating-label").addClass("floating-label-floating").removeClass("floating-label"),$(this).prev(".floating-label-floating, .static-label").css("color",getAccentColor(this)),$(this).prev(".floating-label-floating").css({transform:"translate(9px, 12px)"}),$(this).css({"border-color":getAccentColor(this),"-webkit-box-shadow":"inset 0 0 1px 1px "+getAccentColor(this),"box-shadow":"inset 0 0 1px 1px "+getAccentColor(this)})}),i.focusout(function(){changeLabelColorAndPosition(this),$(this).css({"border-color":getPrimaryColor(this),"-webkit-box-shadow":"none","box-shadow":"none"}),0===$(this).val().length&&$(this).prev(".floating-label-floating").addClass("floating-label").removeClass("floating-label-floating");var t=$(this).prev(".floating-label").data("translatex");void 0==t&&(t=9),$(this).prev(".floating-label").css({transform:"translate("+t+"px, 34px)"})}))}function initInputGroups(t){var e=$(".text-field-with-icon").filter(function(){return"collapse"===t&&$(this).parents(".collapse").length?$(this):"modal"===t&&$(this).parents(".modal").length?$(this):0===$(this).parents(".modal").length&&0===$(this).parents(".collapse").length?$(this):void 0});e.length&&e.each(function(){var t=$(this).find(".icon-left"),e=$(this).find(".icon-right"),i=$(this).find(".ms-text-field"),s=$(this).find(".ms-text-field-outline"),l=0,a=0;if(t.length&&(l+=t.innerWidth()),e.length&&(a+=e.innerWidth()),i.length&&(i.css({"padding-left":l+12+"px","padding-right":a+12+"px"}),0!==l)){var n=i.parent(".ms-text-field-wrapper").find(".floating-label");n.css({transform:"translate("+(l+12)+"px, 34px)"}),i.prev(".floating-label-floating, .floating-label").attr("data-translatex",l+12)}if(s.length&&(s.css({"padding-left":l+12+"px","padding-right":a+12+"px"}),0!==l)){var n=s.parent(".ms-text-field-wrapper").find(".floating-label");n.css({transform:"translate("+(l+12)+"px, 34px)"}),s.prev(".floating-label-floating, .floating-label").attr("data-translatex",l+12)}})}function openNav(){var t=$("#ms-shade");if(t.length)t.show();else{$("<div />").appendTo("body").attr("id","ms-shade")}$(".ms-sidebar").css("left","0")}function closeNav(){$(".ms-sidebar").hasClass("--visible")||($(".ms-sidebar").css("left","-350px"),setTimeout(function(){$("#ms-shade").hide()},400))}function changeSideNavClass(){$(window).innerWidth()<1281?($(".ms-sidebar.--visible").addClass("--switched").removeClass("--visible").css({left:"-350px"}),$(".ms-sidebar-toggle").show(),$("footer").css("margin-left",0)):($(".ms-sidebar.--switched").addClass("--visible").removeClass("--switched").css({left:0}),$(".ms-sidebar-toggle").hide(),$(".ms-sidebar.--visible").hasClass("--fixed")&&$("footer").css("margin-left",250))}function initMenus(){var t=$(".nav-link");t.each(function(){var t=!0;$(this).click(function(){var e=$(this).parent().next(".sub-menu-container").find(".sub-menu"),i=e.outerHeight();t?($(e).css("margin-top","0"),t=!1,$(this).hasClass("sub-menu-link")&&$(this).find(".material-icons").html("keyboard_arrow_down")):t||($(e).css("margin-top","-"+i+"px"),t=!0,$(this).hasClass("sub-menu-link")&&$(this).find(".material-icons").html("keyboard_arrow_right"))})}),$(window).on("resize",function(){($("aside").hasClass("--visible")||$("aside").hasClass("--switched"))&&changeSideNavClass(),$(".ms-root").css("margin-top",$(".fixed-top").innerHeight()),$(".ms-sidebar").css("min-height","calc(100vh - "+$(".fixed-top").innerHeight()+"px)")}),t.click(function(){$(this).hasClass("sub-menu-link")||closeNav()}),$(".nav-close-btn").click(function(){closeNav()})}function initRipple(t){var e=$(".ripple").filter(function(){return"collapse"===t&&$(this).parents(".collapse").length?$(this):"modal"===t&&$(this).parents(".modal").length?$(this):0===$(this).parents(".modal").length&&0===$(this).parents(".collapse").length?$(this):void 0});e.length&&$(e).on("click",function(t){var e=$(this);0==e.find(".ink").length&&e.append("<span class='ink'></span>");var i=e.find(".ink");if(i.removeClass("animate"),!i.height()&&!i.width()){var s=Math.max(e.outerWidth(),e.outerHeight());i.css({height:s,width:s})}var l=t.pageX-e.offset().left-i.width()/2,a=t.pageY-e.offset().top-i.height()/2;i.css({top:a+"px",left:l+"px"}).addClass("animate")})}function initTabs(t){var e=$(".ms-tabs").filter(function(){return"collapse"===t&&$(this).parents(".collapse").length?$(this):"modal"===t&&$(this).parents(".modal").length?$(this):0===$(this).parents(".modal").length&&0===$(this).parents(".collapse").length?$(this):void 0});e.length&&(e.append('<span class="active-indicator"></span>'),e.each(function(){var t=0,e="hidden";this.offsetWidth<this.scrollWidth&&($(this).wrap('<div class="ms-tabs-wrapper"></div>'),$(this).before('<i class="material-icons ms-tab-arrow-icon-left"> keyboard_arrow_left </i>'),$(this).after('<i class="material-icons ms-tab-arrow-icon-right"> keyboard_arrow_right </i>')),$(this).find(".nav-link.active").length&&(t=this.getElementsByClassName("active")[0].offsetLeft,e="visible"),$(this).find("> .active-indicator").css({transform:"translateX("+t+"px) scale("+1/($(this).width()/$(this).find("> .nav-item > .active").parent(".nav-item").width())+", 1)",width:"100%",visibility:e})})),$(".ms-tabs .nav-item").on("click",function(){$(this).offset().left,$(this).parent(".ms-tabs").offset().left;$(this).parent(".ms-tabs").find("> .active-indicator").css({transform:"translateX("+this.offsetLeft+"px) scale("+1/($(this).parent(".ms-tabs").width()/$(this).width())+", 1)",width:"100%",visibility:"visible"})}),$(".ms-tab-arrow-icon-right").click(function(t){t.preventDefault(),$(this).prev(".ms-tabs").animate({scrollLeft:"+=300px"},"fast")}),$(".ms-tab-arrow-icon-left").click(function(t){t.preventDefault(),$(this).next(".ms-tabs").animate({scrollLeft:"-=300px"},"fast")})}function initShapes(t){var e=$(".ms-shape-container").filter(function(){return"collapse"===t&&$(this).parents(".collapse").length?$(this):"modal"===t&&$(this).parents(".modal").length?$(this):0===$(this).parents(".modal").length&&0===$(this).parents(".collapse").length?$(this):void 0}),i=$(".ms-btn-shape-container").filter(function(){return"collapse"===t&&$(this).parents(".collapse").length?$(this):"modal"===t&&$(this).parents(".modal").length?$(this):0===$(this).parents(".modal").length&&0===$(this).parents(".collapse").length?$(this):void 0});e.length&&e.each(function(){var t=this.className.match(/shape-parent-bg-[^\s]+/),e=this.className.match(/shape-outline-[^\s]+/),i=$(this).find('> [class*="ms-card-outline-"]');i.length&&(e=i[0].className.match(/ms-card-outline-[^\s]+/)),t&&(t=t[0].replace("shape-parent-",""),$(this).find("> .angle-top-left").addClass(t),$(this).find("> .angle-top-right").addClass(t),$(this).find("> .angle-bottom-left").addClass(t),$(this).find("> .angle-bottom-right").addClass(t));var s=$(this).find("> .angle-top-left"),l=$(this).find("> .angle-top-right"),a=$(this).find("> .angle-bottom-left"),n=$(this).find("> .angle-bottom-right"),o=0,c=0,r=0,h=0;if(s.length&&(o=s.attr("class").match(/width-[^\s]+/))&&(o=parseInt(o[0].replace("width-",""))),l.length&&(c=l.attr("class").match(/width-[^\s]+/))&&(c=parseInt(c[0].replace("width-",""))),a.length&&(r=a.attr("class").match(/width-[^\s]+/))&&(r=parseInt(r[0].replace("width-",""))),n.length&&(h=n.attr("class").match(/width-[^\s]+/))&&(h=parseInt(h[0].replace("width-",""))),$(this).find("> .angle-top-left").css({top:-o/2,left:-o/2,width:o,height:o}),$(this).find("> .angle-top-right").css({top:-c/2,right:-c/2,width:c,height:c}),$(this).find("> .angle-bottom-left").css({bottom:-r/2,left:-r/2,width:r,height:r}),$(this).find("> .angle-bottom-right").css({bottom:-h/2,right:-h/2,width:h,height:h}),e){e=i.length?e[0].replace("ms-card-outline-",""):e[0].replace("shape-outline-","");var d=$('<label class="text-'+e+'"></label>').hide().appendTo("body");e=d.css("color"),d.remove(),$(this).find("> .angle-top-left, > .angle-top-right, > .angle-bottom-left, > .angle-bottom-right").css("border-bottom","2px solid "+e)}}),i.length&&i.each(function(){var t=this.className.match(/shape-parent-bg-[^\s]+/),e=void 0,i=$(this).find('> [class*="btn-outline-"]');i.length&&(e=i[0].className.match(/btn-outline-[^\s]+/)),t&&(t=t[0].replace("shape-parent-",""),$(this).find("> .angle-top-left").addClass(t),$(this).find("> .angle-top-right").addClass(t),$(this).find("> .angle-bottom-left").addClass(t),$(this).find("> .angle-bottom-right").addClass(t));var s=14;if(e){e=e[0].replace("btn-outline-","");var l=$('<label class="text-'+e+'"></label>').hide().appendTo("body");e=l.css("color"),l.remove(),$(this).find("> .angle-top-left, > .angle-top-right, > .angle-bottom-left, > .angle-bottom-right").css("border-bottom","2px solid "+e),s=18}$(this).find("> .angle-top-left").css({top:-s/2,left:-s/2,width:s,height:s}),$(this).find("> .angle-top-right").css({top:-s/2,right:-s/2,width:s,height:s}),$(this).find("> .angle-bottom-left").css({bottom:-s/2,left:-s/2,width:s,height:s}),$(this).find("> .angle-bottom-right").css({bottom:-s/2,right:-s/2,width:s,height:s})})}function initFileInput(t){var e=$(".ms-file-input-wrapper").filter(function(){return"collapse"===t&&$(this).parents(".collapse").length?$(this):"modal"===t&&$(this).parents(".modal").length?$(this):0===$(this).parents(".modal").length&&0===$(this).parents(".collapse").length?$(this):void 0});e.length&&e.each(function(){var t=$(this).find("> input[type=file]"),e=$(this).find("> .file-upload-button"),i=$(this).find("> .files"),s=void 0!==t[0].multiple,l="No file chosen";i.html(l).attr("title",l).attr("data-toggle","tooltip").tooltip("dispose").tooltip(),e.click(function(e){e.stopImmediatePropagation(),t.focus().click()}),t.change(function(){var e,a=[];if(s){e=t[0].files;for(var n=0,o=e.length;n<o;n++)a.push(e[n].name);l=a.join(", ")}else l=t.val().split("\\").pop();""==l&&(l="No file chosen"),i.html(l).attr("title",l).attr("data-toggle","tooltip").tooltip("dispose").tooltip()})})}function initSelect(t){var e=$(".ms-select").filter(function(){return"collapse"===t&&$(this).parents(".collapse").length?$(this):"modal"===t&&$(this).parents(".modal").length?$(this):0===$(this).parents(".modal").length&&0===$(this).parents(".collapse").length?$(this):void 0});$(e).length&&e.each(function(){var t=$(this),e=$(t).get(0).className.match(/accent-[^\s]+/);e=e?e[0].replace("accent-",""):"blue";var i=$(t).get(0).className.match(/primary-[^\s]+/);i=i?i[0].replace("primary-",""):"grey-900";var s=getAccentColor($(t).get(0)),l=getPrimaryColor($(t).get(0)),a="background-image:linear-gradient("+s+", "+s+"),linear-gradient("+l+", "+l+"); "+($(t).hasClass("animate-left")?"background-position: left bottom, center 100%;":"")+" "+($(t).hasClass("animate-right")?"background-position: right bottom, center 100%;":""),n=$(this).find("select");$(n).on("change",function(){populateSelectedItem(t)}),$(this).find(".selected-item").length||$(this).append('<div\n            class="selected-item"\n                onClick="toggleSelect(this)"\n                style="'+a+'"\n                    ></div>'),$(this).find(".select-items-container").length||$(this).append('<div class="select-items-container" style="display:none;">'+($(this).hasClass("searchable")?'<div class="m-0 p-0">\n                    <input\n            class="form-control ms-text-field"\n                id="myInput"\n                type="text"\n                placeholder="Search"\n                onkeyup="filter(this)"\n                style="user-select:none;'+a+'">\n                    </div>':"")+($(this).hasClass("multi-select")?'<div class="m-0 p-0 select-all-container">\n                    <label class="ms-checkbox accent-'+i+' d-flex justify-content-start pl-5 pt-2 pb-2 pr-2 m-0">Select All\n                <input type="checkbox" onClick="selectAll(this, event)">\n                    <span class="checkmark ml-3"></span>\n                    </label>\n                    </div>\n\n                    ':"")+'<div class="select-items"></div>'+($(this).hasClass("multi-select")?'<div class="m-0 p-1 d-flex justify-content-end">\n                    <button type="button" class="btn btn-ms btn-'+e+'" onClick="closeSelect(this)">\n                    Done\n                    </button>\n                    </div>':"")+"</div>");var o=n.find("option"),c=$(this).find(".select-items")[0];$(this).hasClass("multi-select")?o.each(function(){$(c).append('<div class="m-0 p-0">\n                        <label class="ms-checkbox accent-'+i+' d-flex justify-content-start pl-5 pt-2 pb-2 pr-2 m-0">\n                            '+($(this).html()?$(this).html():"&nbsp;")+'\n                        <input type="checkbox" onClick="selectItem(this)" value="'+$(this).val()+'" '+($(this).is(":checked")?"checked":"")+'>\n                        <span class="checkmark ml-3"></span>\n                        </label>\n                        </div>')}):o.each(function(){$(c).append('<div class="m-0 p-0">\n                        <label class="ms-checkbox d-flex justify-content-start p-2 m-0">\n                            '+($(this).html()?$(this).html():"&nbsp;")+'\n                        <input type="checkbox" onClick="selectItem(this)" value="'+$(this).val()+'" '+($(this).is(":checked")?"checked":"")+">\n                        </label>\n                        </div>")}),populateSelectedItem($(this))})}function setValue(t,e){$(t).val(e).trigger("change")}function populateSelectedItem(t){var e=$(t).find("select"),i=e.find("option"),s=$(t).get(0).className.match(/primary-[^\s]+/);s=s?s[0].replace("primary-",""):"grey-900";var l="";i.filter(function(){$.isArray($(e).val())&&-1!==$.inArray($(this).val(),$(e).val())?($(t).find('input[type="checkbox"][value="'+$(this).val()+'"]').prop("checked",!0),l+='<span class="badge badge-'+s+' m-1">\n                    '+$(this).html()+'\n                <span aria-hidden="true" class="ml-1 unselect-btn badge badge-'+s+'" onClick="unSelect( this, '+$(this).val()+', event );">&times;</span>\n            </span>'):$(this).val()==$(e).val()?($(t).find('input[type="checkbox"][value="'+$(this).val()+'"]').parent(".ms-checkbox").addClass("selected"),l=$(this).html()):($(t).find('input[type="checkbox"][value="'+$(this).val()+'"]').prop("checked",!1),$(t).find('input[type="checkbox"][value="'+$(this).val()+'"]').parent(".ms-checkbox").removeClass("selected"))}),""!==l?($(t).find(".floating-label").removeClass("floating-label").addClass("floating-label-floating"),$(t).find(".floating-label, .static-label, .floating-label-floating").css("color",getAccentColor(t.get(0)))):($(t).find(".floating-label-floating").addClass("floating-label").removeClass("floating-label-floating"),$(t).find(".floating-label, .static-label, .floating-label-floating").css("color",getPrimaryColor(t.get(0)))),$(t).find(".selected-item").html(l)}function selectItem(t){var e=$(t).closest(".ms-select")[0],i=$(e).find("select"),s=$(i).val();$(e).hasClass("multi-select")||toggleSelect($(e).find(".selected-item")[0]),$(t).is(":checked")?$.isArray(s)?s.push($(t).val()):s=$(t).val():s=$.grep(s,function(e){return e!=$(t).val()}),setValue($(i),s)}function selectAll(t,e){e.stopPropagation();var i=$(t).closest(".ms-select")[0],s=$(i).find("select").find("option"),l=s.map(function(){return $(this).val()});$(t).is(":checked")?setValue($(i).find("select"),l):setValue($(i).find("select"),null)}function unSelect(t,e,i){i.stopPropagation();var s=$(t).closest(".ms-select")[0],l=$(s).find("select"),a=$(l).val();$(s).find(".select-all-container").find('input[type="checkbox"]').prop("checked",!1),a=$.grep(a,function(t){return t!=e}),setValue($(l),a)}function filter(t){var e=$(t).val().toLowerCase(),i=$(t).closest(".select-items-container").find(".select-items"),s=$(t).closest(".select-items-container").find(".select-all-container");e?$(s).hide():$(s).show(),$(i).find(".ms-checkbox").filter(function(){-1==$(this).text().toLowerCase().indexOf(e)?$(this).parent("div").hide():$(this).parent("div").show()})}function toggleSelect(t){$(t).closest(".ms-select").find(".floating-label").addClass("floating-label-floating").removeClass("floating-label"),$(t).closest(".ms-select").find(".floating-label-floating, .static-label").css("color",getAccentColor($(t).closest(".ms-select").get(0))),$(t).next(".select-items-container").toggle(),$(t).toggleClass("options-visible");var e=$(window).height(),i=$(t).next(".select-items-container").innerHeight();e-($(t).next(".select-items-container").offset().top-$(window).scrollTop())<=i?$(t).next(".select-items-container").css({top:"auto",bottom:"100%"}):$(t).next(".select-items-container").css({bottom:"auto",top:"100%"})}function closeSelect(t){$(t).closest(".select-items-container").hide(),$(".selected-item").removeClass("options-visible")}function initAll(t){initMenus(),initRipple(t),initSelect(t),initTextFields(t),initTabs(t),initShapes(t),initFileInput(t),initInputGroups(t)}var getAccentColor=function(t){var e=t.className.match(/accent-[^\s]+/),i="#2196F3";if(e){e=e[0].replace("accent-","");var s=$('<label class="text-'+e+'"></label>').hide().appendTo("body");i=s.css("color"),s.remove()}return i},getPrimaryColor=function(t){var e=t.className.match(/primary-[^\s]+/),i="#757575";if(e){e=e[0].replace("primary-","");var s=$('<label class="text-'+e+'"></label>').hide().appendTo("body");i=s.css("color"),s.remove()}return i};$(function(){if($(".ms-sidebar.--visible.--fixed").length){var t=$(".ms-sidebar.--visible.--fixed")[0].className.match(/bg-[^\s]+/);$(".ms-sidebar.--visible.--fixed").html('<div class="ms-fixed '+t+'">'+$(".ms-sidebar.--visible.--fixed").html()+"</div>")}$(".ms-sidebar-toggle").on("click",openNav),$("aside, div").hasClass("--visible")&&changeSideNavClass(),initAll(),$(".modal").on("shown.bs.modal",function(){initAll("modal")}),$(".collapse").on("shown.bs.collapse",function(){initAll("collapse")}),$(document).on("click",".floating-label",function(t){t.stopImmediatePropagation(),$(this).parent("div").find("> .ms-text-field").trigger("focus"),$(this).parent("div").find("> .select-selected").trigger("click")}),$(document).on("click",function(t){var e=$(".ms-sidebar"),i=$(".ms-sidebar-toggle"),s=$(t.target);if(s.is(e)||s.is(i)||e.has(t.target).length||closeNav(),$(s).parents(".ms-select").length){var l=$(s).parents(".ms-select")[0],a=$(l).find(".selected-item"),n=$(l).find(".select-items-container");$(".select-items-container").not(n).hide(),$(".selected-item").not(a).removeClass("options-visible")}else{$(".select-items-container").hide();var o=$(".options-visible");$(o).removeClass("options-visible");var c=$(o).parents(".ms-select")[0];c&&!$.trim($(o).html())&&($(c).find(".floating-label-floating").addClass("floating-label").removeClass("floating-label-floating"),$(c).find(".floating-label, .static-label, .floating-label-floating").css("color",getPrimaryColor(c)))}}),$(".ms-root").css("margin-top",$(".fixed-top").innerHeight()),$(".ms-sidebar").css("min-height","calc(100vh - "+$(".fixed-top").innerHeight()+"px)"),$(".ms-spinner").html('<div class="animate_loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4"></svg></div>'),$(".indeterminate-rainbow").html('<div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>'),$(".ms-sidebar .nav-link.active").closest(".sub-menu-container").prev(".nav-item").find("> .sub-menu-link").trigger("click")});