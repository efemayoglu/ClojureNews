// Compiled by ClojureScript 1.8.51 {}
goog.provide('util.view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
if(typeof util.view.main_container !== 'undefined'){
} else {
util.view.main_container = goog.dom.getElement("mainContainerId");
}
if(typeof util.view.error_container !== 'undefined'){
} else {
util.view.error_container = goog.dom.getElement("errorContainerId");
}
util.view.create_field_val_map = (function util$view$create_field_val_map(field_ids){
return cljs.core.reduce.call(null,(function (p1__27470_SHARP_,p2__27471_SHARP_){
return cljs.core.assoc.call(null,p1__27470_SHARP_,cljs.core.keyword.call(null,goog.dom.getElement(p2__27471_SHARP_).name),goog.dom.getElement(p2__27471_SHARP_).value);
}),cljs.core.PersistentArrayMap.EMPTY,field_ids);
});
util.view.render_error_message = (function util$view$render_error_message(message){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),message], null);
})], null),util.view.error_container);
});

//# sourceMappingURL=view.js.map