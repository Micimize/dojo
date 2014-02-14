// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9953 = (function (f,fn_handler,meta9954){
this.f = f;
this.fn_handler = fn_handler;
this.meta9954 = meta9954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9953.cljs$lang$type = true;
cljs.core.async.t9953.cljs$lang$ctorStr = "cljs.core.async/t9953";
cljs.core.async.t9953.cljs$lang$ctorPrWriter = (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t9953");
});
cljs.core.async.t9953.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9955){var self__ = this;
var _9955__$1 = this;return self__.meta9954;
});
cljs.core.async.t9953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9955,meta9954__$1){var self__ = this;
var _9955__$1 = this;return (new cljs.core.async.t9953(self__.f,self__.fn_handler,meta9954__$1));
});
cljs.core.async.__GT_t9953 = (function __GT_t9953(f__$1,fn_handler__$1,meta9954){return (new cljs.core.async.t9953(f__$1,fn_handler__$1,meta9954));
});
}
return (new cljs.core.async.t9953(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9957 = buff;if(G__9957)
{var bit__4150__auto__ = null;if(cljs.core.truth_((function (){var or__3500__auto__ = bit__4150__auto__;if(cljs.core.truth_(or__3500__auto__))
{return or__3500__auto__;
} else
{return G__9957.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9957.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9957);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9957);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9958 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9958);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9958);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3488__auto__ = ret;if(cljs.core.truth_(and__3488__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3488__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4348__auto___9959 = n;var x_9960 = 0;while(true){
if((x_9960 < n__4348__auto___9959))
{(a[x_9960] = 0);
{
var G__9961 = (x_9960 + 1);
x_9960 = G__9961;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9962 = (i + 1);
i = G__9962;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9966 = (function (flag,alt_flag,meta9967){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9967 = meta9967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9966.cljs$lang$type = true;
cljs.core.async.t9966.cljs$lang$ctorStr = "cljs.core.async/t9966";
cljs.core.async.t9966.cljs$lang$ctorPrWriter = (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t9966");
});
cljs.core.async.t9966.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9968){var self__ = this;
var _9968__$1 = this;return self__.meta9967;
});
cljs.core.async.t9966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9968,meta9967__$1){var self__ = this;
var _9968__$1 = this;return (new cljs.core.async.t9966(self__.flag,self__.alt_flag,meta9967__$1));
});
cljs.core.async.__GT_t9966 = (function __GT_t9966(flag__$1,alt_flag__$1,meta9967){return (new cljs.core.async.t9966(flag__$1,alt_flag__$1,meta9967));
});
}
return (new cljs.core.async.t9966(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9972 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9972 = (function (cb,flag,alt_handler,meta9973){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9973 = meta9973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9972.cljs$lang$type = true;
cljs.core.async.t9972.cljs$lang$ctorStr = "cljs.core.async/t9972";
cljs.core.async.t9972.cljs$lang$ctorPrWriter = (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t9972");
});
cljs.core.async.t9972.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9974){var self__ = this;
var _9974__$1 = this;return self__.meta9973;
});
cljs.core.async.t9972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9974,meta9973__$1){var self__ = this;
var _9974__$1 = this;return (new cljs.core.async.t9972(self__.cb,self__.flag,self__.alt_handler,meta9973__$1));
});
cljs.core.async.__GT_t9972 = (function __GT_t9972(cb__$1,flag__$1,alt_handler__$1,meta9973){return (new cljs.core.async.t9972(cb__$1,flag__$1,alt_handler__$1,meta9973));
});
}
return (new cljs.core.async.t9972(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9975_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9975_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3500__auto__ = wport;if(cljs.core.truth_(or__3500__auto__))
{return or__3500__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9976 = (i + 1);
i = G__9976;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3500__auto__ = ret;if(cljs.core.truth_(or__3500__auto__))
{return or__3500__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3488__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3488__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3488__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9977){var map__9979 = p__9977;var map__9979__$1 = ((cljs.core.seq_QMARK_.call(null,map__9979))?cljs.core.apply.call(null,cljs.core.hash_map,map__9979):map__9979);var opts = map__9979__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9977 = null;if (arguments.length > 1) {
  p__9977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9977);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9980){
var ports = cljs.core.first(arglist__9980);
var p__9977 = cljs.core.rest(arglist__9980);
return alts_BANG___delegate(ports,p__9977);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9988 = (function (ch,f,map_LT_,meta9989){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9989 = meta9989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9988.cljs$lang$type = true;
cljs.core.async.t9988.cljs$lang$ctorStr = "cljs.core.async/t9988";
cljs.core.async.t9988.cljs$lang$ctorPrWriter = (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t9988");
});
cljs.core.async.t9988.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9988.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9991 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9991 = (function (fn1,_,meta9989,ch,f,map_LT_,meta9992){
this.fn1 = fn1;
this._ = _;
this.meta9989 = meta9989;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9992 = meta9992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9991.cljs$lang$type = true;
cljs.core.async.t9991.cljs$lang$ctorStr = "cljs.core.async/t9991";
cljs.core.async.t9991.cljs$lang$ctorPrWriter = (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t9991");
});
cljs.core.async.t9991.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9991.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9981_SHARP_){return f1.call(null,(((p1__9981_SHARP_ == null))?null:self__.f.call(null,p1__9981_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9993){var self__ = this;
var _9993__$1 = this;return self__.meta9992;
});
cljs.core.async.t9991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9993,meta9992__$1){var self__ = this;
var _9993__$1 = this;return (new cljs.core.async.t9991(self__.fn1,self__._,self__.meta9989,self__.ch,self__.f,self__.map_LT_,meta9992__$1));
});
cljs.core.async.__GT_t9991 = (function __GT_t9991(fn1__$1,___$2,meta9989__$1,ch__$2,f__$2,map_LT___$2,meta9992){return (new cljs.core.async.t9991(fn1__$1,___$2,meta9989__$1,ch__$2,f__$2,map_LT___$2,meta9992));
});
}
return (new cljs.core.async.t9991(fn1,___$1,self__.meta9989,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3488__auto__ = ret;if(cljs.core.truth_(and__3488__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3488__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9988.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9990){var self__ = this;
var _9990__$1 = this;return self__.meta9989;
});
cljs.core.async.t9988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9990,meta9989__$1){var self__ = this;
var _9990__$1 = this;return (new cljs.core.async.t9988(self__.ch,self__.f,self__.map_LT_,meta9989__$1));
});
cljs.core.async.__GT_t9988 = (function __GT_t9988(ch__$1,f__$1,map_LT___$1,meta9989){return (new cljs.core.async.t9988(ch__$1,f__$1,map_LT___$1,meta9989));
});
}
return (new cljs.core.async.t9988(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9997 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9997 = (function (ch,f,map_GT_,meta9998){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9998 = meta9998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9997.cljs$lang$type = true;
cljs.core.async.t9997.cljs$lang$ctorStr = "cljs.core.async/t9997";
cljs.core.async.t9997.cljs$lang$ctorPrWriter = (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t9997");
});
cljs.core.async.t9997.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9997.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9997.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9999){var self__ = this;
var _9999__$1 = this;return self__.meta9998;
});
cljs.core.async.t9997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9999,meta9998__$1){var self__ = this;
var _9999__$1 = this;return (new cljs.core.async.t9997(self__.ch,self__.f,self__.map_GT_,meta9998__$1));
});
cljs.core.async.__GT_t9997 = (function __GT_t9997(ch__$1,f__$1,map_GT___$1,meta9998){return (new cljs.core.async.t9997(ch__$1,f__$1,map_GT___$1,meta9998));
});
}
return (new cljs.core.async.t9997(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10003 = (function (ch,p,filter_GT_,meta10004){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10004 = meta10004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10003.cljs$lang$type = true;
cljs.core.async.t10003.cljs$lang$ctorStr = "cljs.core.async/t10003";
cljs.core.async.t10003.cljs$lang$ctorPrWriter = (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t10003");
});
cljs.core.async.t10003.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10003.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10003.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10003.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10003.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10003.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10005){var self__ = this;
var _10005__$1 = this;return self__.meta10004;
});
cljs.core.async.t10003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10005,meta10004__$1){var self__ = this;
var _10005__$1 = this;return (new cljs.core.async.t10003(self__.ch,self__.p,self__.filter_GT_,meta10004__$1));
});
cljs.core.async.__GT_t10003 = (function __GT_t10003(ch__$1,p__$1,filter_GT___$1,meta10004){return (new cljs.core.async.t10003(ch__$1,p__$1,filter_GT___$1,meta10004));
});
}
return (new cljs.core.async.t10003(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6180__auto___10088 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_10067){var state_val_10068 = (state_10067[1]);if((state_val_10068 === 1))
{var state_10067__$1 = state_10067;var statearr_10069_10089 = state_10067__$1;(statearr_10069_10089[2] = null);
(statearr_10069_10089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10068 === 2))
{var state_10067__$1 = state_10067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10067__$1,4,ch);
} else
{if((state_val_10068 === 3))
{var inst_10065 = (state_10067[2]);var state_10067__$1 = state_10067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10067__$1,inst_10065);
} else
{if((state_val_10068 === 4))
{var inst_10049 = (state_10067[7]);var inst_10049__$1 = (state_10067[2]);var inst_10050 = (inst_10049__$1 == null);var state_10067__$1 = (function (){var statearr_10070 = state_10067;(statearr_10070[7] = inst_10049__$1);
return statearr_10070;
})();if(cljs.core.truth_(inst_10050))
{var statearr_10071_10090 = state_10067__$1;(statearr_10071_10090[1] = 5);
} else
{var statearr_10072_10091 = state_10067__$1;(statearr_10072_10091[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10068 === 5))
{var inst_10052 = cljs.core.async.close_BANG_.call(null,out);var state_10067__$1 = state_10067;var statearr_10073_10092 = state_10067__$1;(statearr_10073_10092[2] = inst_10052);
(statearr_10073_10092[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10068 === 6))
{var inst_10049 = (state_10067[7]);var inst_10054 = p.call(null,inst_10049);var state_10067__$1 = state_10067;if(cljs.core.truth_(inst_10054))
{var statearr_10074_10093 = state_10067__$1;(statearr_10074_10093[1] = 8);
} else
{var statearr_10075_10094 = state_10067__$1;(statearr_10075_10094[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10068 === 7))
{var inst_10063 = (state_10067[2]);var state_10067__$1 = state_10067;var statearr_10076_10095 = state_10067__$1;(statearr_10076_10095[2] = inst_10063);
(statearr_10076_10095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10068 === 8))
{var inst_10049 = (state_10067[7]);var state_10067__$1 = state_10067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10067__$1,11,out,inst_10049);
} else
{if((state_val_10068 === 9))
{var state_10067__$1 = state_10067;var statearr_10077_10096 = state_10067__$1;(statearr_10077_10096[2] = null);
(statearr_10077_10096[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10068 === 10))
{var inst_10060 = (state_10067[2]);var state_10067__$1 = (function (){var statearr_10078 = state_10067;(statearr_10078[8] = inst_10060);
return statearr_10078;
})();var statearr_10079_10097 = state_10067__$1;(statearr_10079_10097[2] = null);
(statearr_10079_10097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10068 === 11))
{var inst_10057 = (state_10067[2]);var state_10067__$1 = state_10067;var statearr_10080_10098 = state_10067__$1;(statearr_10080_10098[2] = inst_10057);
(statearr_10080_10098[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_10084 = [null,null,null,null,null,null,null,null,null];(statearr_10084[0] = state_machine__6111__auto__);
(statearr_10084[1] = 1);
return statearr_10084;
});
var state_machine__6111__auto____1 = (function (state_10067){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_10067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e10085){if((e10085 instanceof Object))
{var ex__6114__auto__ = e10085;var statearr_10086_10099 = state_10067;(statearr_10086_10099[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10100 = state_10067;
state_10067 = G__10100;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_10067){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_10067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_10087 = f__6181__auto__.call(null);(statearr_10087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___10088);
return statearr_10087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6180__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_10252){var state_val_10253 = (state_10252[1]);if((state_val_10253 === 1))
{var state_10252__$1 = state_10252;var statearr_10254_10291 = state_10252__$1;(statearr_10254_10291[2] = null);
(statearr_10254_10291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 2))
{var state_10252__$1 = state_10252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10252__$1,4,in$);
} else
{if((state_val_10253 === 3))
{var inst_10250 = (state_10252[2]);var state_10252__$1 = state_10252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10252__$1,inst_10250);
} else
{if((state_val_10253 === 4))
{var inst_10198 = (state_10252[7]);var inst_10198__$1 = (state_10252[2]);var inst_10199 = (inst_10198__$1 == null);var state_10252__$1 = (function (){var statearr_10255 = state_10252;(statearr_10255[7] = inst_10198__$1);
return statearr_10255;
})();if(cljs.core.truth_(inst_10199))
{var statearr_10256_10292 = state_10252__$1;(statearr_10256_10292[1] = 5);
} else
{var statearr_10257_10293 = state_10252__$1;(statearr_10257_10293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 5))
{var inst_10201 = cljs.core.async.close_BANG_.call(null,out);var state_10252__$1 = state_10252;var statearr_10258_10294 = state_10252__$1;(statearr_10258_10294[2] = inst_10201);
(statearr_10258_10294[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 6))
{var inst_10198 = (state_10252[7]);var inst_10203 = f.call(null,inst_10198);var inst_10208 = cljs.core.seq.call(null,inst_10203);var inst_10209 = inst_10208;var inst_10210 = null;var inst_10211 = 0;var inst_10212 = 0;var state_10252__$1 = (function (){var statearr_10259 = state_10252;(statearr_10259[8] = inst_10212);
(statearr_10259[9] = inst_10211);
(statearr_10259[10] = inst_10210);
(statearr_10259[11] = inst_10209);
return statearr_10259;
})();var statearr_10260_10295 = state_10252__$1;(statearr_10260_10295[2] = null);
(statearr_10260_10295[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 7))
{var inst_10248 = (state_10252[2]);var state_10252__$1 = state_10252;var statearr_10261_10296 = state_10252__$1;(statearr_10261_10296[2] = inst_10248);
(statearr_10261_10296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 8))
{var inst_10212 = (state_10252[8]);var inst_10211 = (state_10252[9]);var inst_10214 = (inst_10212 < inst_10211);var inst_10215 = inst_10214;var state_10252__$1 = state_10252;if(cljs.core.truth_(inst_10215))
{var statearr_10262_10297 = state_10252__$1;(statearr_10262_10297[1] = 10);
} else
{var statearr_10263_10298 = state_10252__$1;(statearr_10263_10298[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 9))
{var inst_10245 = (state_10252[2]);var state_10252__$1 = (function (){var statearr_10264 = state_10252;(statearr_10264[12] = inst_10245);
return statearr_10264;
})();var statearr_10265_10299 = state_10252__$1;(statearr_10265_10299[2] = null);
(statearr_10265_10299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 10))
{var inst_10212 = (state_10252[8]);var inst_10210 = (state_10252[10]);var inst_10217 = cljs.core._nth.call(null,inst_10210,inst_10212);var state_10252__$1 = state_10252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10252__$1,13,out,inst_10217);
} else
{if((state_val_10253 === 11))
{var inst_10209 = (state_10252[11]);var inst_10223 = (state_10252[13]);var inst_10223__$1 = cljs.core.seq.call(null,inst_10209);var state_10252__$1 = (function (){var statearr_10269 = state_10252;(statearr_10269[13] = inst_10223__$1);
return statearr_10269;
})();if(inst_10223__$1)
{var statearr_10270_10300 = state_10252__$1;(statearr_10270_10300[1] = 14);
} else
{var statearr_10271_10301 = state_10252__$1;(statearr_10271_10301[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 12))
{var inst_10243 = (state_10252[2]);var state_10252__$1 = state_10252;var statearr_10272_10302 = state_10252__$1;(statearr_10272_10302[2] = inst_10243);
(statearr_10272_10302[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 13))
{var inst_10212 = (state_10252[8]);var inst_10211 = (state_10252[9]);var inst_10210 = (state_10252[10]);var inst_10209 = (state_10252[11]);var inst_10219 = (state_10252[2]);var inst_10220 = (inst_10212 + 1);var tmp10266 = inst_10211;var tmp10267 = inst_10210;var tmp10268 = inst_10209;var inst_10209__$1 = tmp10268;var inst_10210__$1 = tmp10267;var inst_10211__$1 = tmp10266;var inst_10212__$1 = inst_10220;var state_10252__$1 = (function (){var statearr_10273 = state_10252;(statearr_10273[14] = inst_10219);
(statearr_10273[8] = inst_10212__$1);
(statearr_10273[9] = inst_10211__$1);
(statearr_10273[10] = inst_10210__$1);
(statearr_10273[11] = inst_10209__$1);
return statearr_10273;
})();var statearr_10274_10303 = state_10252__$1;(statearr_10274_10303[2] = null);
(statearr_10274_10303[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 14))
{var inst_10223 = (state_10252[13]);var inst_10225 = cljs.core.chunked_seq_QMARK_.call(null,inst_10223);var state_10252__$1 = state_10252;if(inst_10225)
{var statearr_10275_10304 = state_10252__$1;(statearr_10275_10304[1] = 17);
} else
{var statearr_10276_10305 = state_10252__$1;(statearr_10276_10305[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 15))
{var state_10252__$1 = state_10252;var statearr_10277_10306 = state_10252__$1;(statearr_10277_10306[2] = null);
(statearr_10277_10306[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 16))
{var inst_10241 = (state_10252[2]);var state_10252__$1 = state_10252;var statearr_10278_10307 = state_10252__$1;(statearr_10278_10307[2] = inst_10241);
(statearr_10278_10307[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 17))
{var inst_10223 = (state_10252[13]);var inst_10227 = cljs.core.chunk_first.call(null,inst_10223);var inst_10228 = cljs.core.chunk_rest.call(null,inst_10223);var inst_10229 = cljs.core.count.call(null,inst_10227);var inst_10209 = inst_10228;var inst_10210 = inst_10227;var inst_10211 = inst_10229;var inst_10212 = 0;var state_10252__$1 = (function (){var statearr_10279 = state_10252;(statearr_10279[8] = inst_10212);
(statearr_10279[9] = inst_10211);
(statearr_10279[10] = inst_10210);
(statearr_10279[11] = inst_10209);
return statearr_10279;
})();var statearr_10280_10308 = state_10252__$1;(statearr_10280_10308[2] = null);
(statearr_10280_10308[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 18))
{var inst_10223 = (state_10252[13]);var inst_10232 = cljs.core.first.call(null,inst_10223);var state_10252__$1 = state_10252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10252__$1,20,out,inst_10232);
} else
{if((state_val_10253 === 19))
{var inst_10238 = (state_10252[2]);var state_10252__$1 = state_10252;var statearr_10281_10309 = state_10252__$1;(statearr_10281_10309[2] = inst_10238);
(statearr_10281_10309[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 20))
{var inst_10223 = (state_10252[13]);var inst_10234 = (state_10252[2]);var inst_10235 = cljs.core.next.call(null,inst_10223);var inst_10209 = inst_10235;var inst_10210 = null;var inst_10211 = 0;var inst_10212 = 0;var state_10252__$1 = (function (){var statearr_10282 = state_10252;(statearr_10282[8] = inst_10212);
(statearr_10282[9] = inst_10211);
(statearr_10282[10] = inst_10210);
(statearr_10282[15] = inst_10234);
(statearr_10282[11] = inst_10209);
return statearr_10282;
})();var statearr_10283_10310 = state_10252__$1;(statearr_10283_10310[2] = null);
(statearr_10283_10310[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_10287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10287[0] = state_machine__6111__auto__);
(statearr_10287[1] = 1);
return statearr_10287;
});
var state_machine__6111__auto____1 = (function (state_10252){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_10252);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e10288){if((e10288 instanceof Object))
{var ex__6114__auto__ = e10288;var statearr_10289_10311 = state_10252;(statearr_10289_10311[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10252);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10312 = state_10252;
state_10252 = G__10312;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_10252){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_10252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_10290 = f__6181__auto__.call(null);(statearr_10290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto__);
return statearr_10290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return c__6180__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6180__auto___10393 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_10372){var state_val_10373 = (state_10372[1]);if((state_val_10373 === 1))
{var state_10372__$1 = state_10372;var statearr_10374_10394 = state_10372__$1;(statearr_10374_10394[2] = null);
(statearr_10374_10394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10373 === 2))
{var state_10372__$1 = state_10372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10372__$1,4,from);
} else
{if((state_val_10373 === 3))
{var inst_10370 = (state_10372[2]);var state_10372__$1 = state_10372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10372__$1,inst_10370);
} else
{if((state_val_10373 === 4))
{var inst_10355 = (state_10372[7]);var inst_10355__$1 = (state_10372[2]);var inst_10356 = (inst_10355__$1 == null);var state_10372__$1 = (function (){var statearr_10375 = state_10372;(statearr_10375[7] = inst_10355__$1);
return statearr_10375;
})();if(cljs.core.truth_(inst_10356))
{var statearr_10376_10395 = state_10372__$1;(statearr_10376_10395[1] = 5);
} else
{var statearr_10377_10396 = state_10372__$1;(statearr_10377_10396[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10373 === 5))
{var state_10372__$1 = state_10372;if(cljs.core.truth_(close_QMARK_))
{var statearr_10378_10397 = state_10372__$1;(statearr_10378_10397[1] = 8);
} else
{var statearr_10379_10398 = state_10372__$1;(statearr_10379_10398[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10373 === 6))
{var inst_10355 = (state_10372[7]);var state_10372__$1 = state_10372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10372__$1,11,to,inst_10355);
} else
{if((state_val_10373 === 7))
{var inst_10368 = (state_10372[2]);var state_10372__$1 = state_10372;var statearr_10380_10399 = state_10372__$1;(statearr_10380_10399[2] = inst_10368);
(statearr_10380_10399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10373 === 8))
{var inst_10359 = cljs.core.async.close_BANG_.call(null,to);var state_10372__$1 = state_10372;var statearr_10381_10400 = state_10372__$1;(statearr_10381_10400[2] = inst_10359);
(statearr_10381_10400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10373 === 9))
{var state_10372__$1 = state_10372;var statearr_10382_10401 = state_10372__$1;(statearr_10382_10401[2] = null);
(statearr_10382_10401[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10373 === 10))
{var inst_10362 = (state_10372[2]);var state_10372__$1 = state_10372;var statearr_10383_10402 = state_10372__$1;(statearr_10383_10402[2] = inst_10362);
(statearr_10383_10402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10373 === 11))
{var inst_10365 = (state_10372[2]);var state_10372__$1 = (function (){var statearr_10384 = state_10372;(statearr_10384[8] = inst_10365);
return statearr_10384;
})();var statearr_10385_10403 = state_10372__$1;(statearr_10385_10403[2] = null);
(statearr_10385_10403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_10389 = [null,null,null,null,null,null,null,null,null];(statearr_10389[0] = state_machine__6111__auto__);
(statearr_10389[1] = 1);
return statearr_10389;
});
var state_machine__6111__auto____1 = (function (state_10372){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_10372);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e10390){if((e10390 instanceof Object))
{var ex__6114__auto__ = e10390;var statearr_10391_10404 = state_10372;(statearr_10391_10404[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10405 = state_10372;
state_10372 = G__10405;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_10372){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_10372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_10392 = f__6181__auto__.call(null);(statearr_10392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___10393);
return statearr_10392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6180__auto___10492 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_10470){var state_val_10471 = (state_10470[1]);if((state_val_10471 === 1))
{var state_10470__$1 = state_10470;var statearr_10472_10493 = state_10470__$1;(statearr_10472_10493[2] = null);
(statearr_10472_10493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10471 === 2))
{var state_10470__$1 = state_10470;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10470__$1,4,ch);
} else
{if((state_val_10471 === 3))
{var inst_10468 = (state_10470[2]);var state_10470__$1 = state_10470;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10470__$1,inst_10468);
} else
{if((state_val_10471 === 4))
{var inst_10451 = (state_10470[7]);var inst_10451__$1 = (state_10470[2]);var inst_10452 = (inst_10451__$1 == null);var state_10470__$1 = (function (){var statearr_10473 = state_10470;(statearr_10473[7] = inst_10451__$1);
return statearr_10473;
})();if(cljs.core.truth_(inst_10452))
{var statearr_10474_10494 = state_10470__$1;(statearr_10474_10494[1] = 5);
} else
{var statearr_10475_10495 = state_10470__$1;(statearr_10475_10495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10471 === 5))
{var inst_10454 = cljs.core.async.close_BANG_.call(null,tc);var inst_10455 = cljs.core.async.close_BANG_.call(null,fc);var state_10470__$1 = (function (){var statearr_10476 = state_10470;(statearr_10476[8] = inst_10454);
return statearr_10476;
})();var statearr_10477_10496 = state_10470__$1;(statearr_10477_10496[2] = inst_10455);
(statearr_10477_10496[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10471 === 6))
{var inst_10451 = (state_10470[7]);var inst_10457 = p.call(null,inst_10451);var state_10470__$1 = state_10470;if(cljs.core.truth_(inst_10457))
{var statearr_10478_10497 = state_10470__$1;(statearr_10478_10497[1] = 9);
} else
{var statearr_10479_10498 = state_10470__$1;(statearr_10479_10498[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10471 === 7))
{var inst_10466 = (state_10470[2]);var state_10470__$1 = state_10470;var statearr_10480_10499 = state_10470__$1;(statearr_10480_10499[2] = inst_10466);
(statearr_10480_10499[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10471 === 8))
{var inst_10463 = (state_10470[2]);var state_10470__$1 = (function (){var statearr_10481 = state_10470;(statearr_10481[9] = inst_10463);
return statearr_10481;
})();var statearr_10482_10500 = state_10470__$1;(statearr_10482_10500[2] = null);
(statearr_10482_10500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10471 === 9))
{var state_10470__$1 = state_10470;var statearr_10483_10501 = state_10470__$1;(statearr_10483_10501[2] = tc);
(statearr_10483_10501[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10471 === 10))
{var state_10470__$1 = state_10470;var statearr_10484_10502 = state_10470__$1;(statearr_10484_10502[2] = fc);
(statearr_10484_10502[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10471 === 11))
{var inst_10451 = (state_10470[7]);var inst_10461 = (state_10470[2]);var state_10470__$1 = state_10470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10470__$1,8,inst_10461,inst_10451);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_10488 = [null,null,null,null,null,null,null,null,null,null];(statearr_10488[0] = state_machine__6111__auto__);
(statearr_10488[1] = 1);
return statearr_10488;
});
var state_machine__6111__auto____1 = (function (state_10470){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_10470);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e10489){if((e10489 instanceof Object))
{var ex__6114__auto__ = e10489;var statearr_10490_10503 = state_10470;(statearr_10490_10503[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10470);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10504 = state_10470;
state_10470 = G__10504;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_10470){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_10470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_10491 = f__6181__auto__.call(null);(statearr_10491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___10492);
return statearr_10491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6180__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_10551){var state_val_10552 = (state_10551[1]);if((state_val_10552 === 7))
{var inst_10547 = (state_10551[2]);var state_10551__$1 = state_10551;var statearr_10553_10569 = state_10551__$1;(statearr_10553_10569[2] = inst_10547);
(statearr_10553_10569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10552 === 6))
{var inst_10537 = (state_10551[7]);var inst_10540 = (state_10551[8]);var inst_10544 = f.call(null,inst_10537,inst_10540);var inst_10537__$1 = inst_10544;var state_10551__$1 = (function (){var statearr_10554 = state_10551;(statearr_10554[7] = inst_10537__$1);
return statearr_10554;
})();var statearr_10555_10570 = state_10551__$1;(statearr_10555_10570[2] = null);
(statearr_10555_10570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10552 === 5))
{var inst_10537 = (state_10551[7]);var state_10551__$1 = state_10551;var statearr_10556_10571 = state_10551__$1;(statearr_10556_10571[2] = inst_10537);
(statearr_10556_10571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10552 === 4))
{var inst_10540 = (state_10551[8]);var inst_10540__$1 = (state_10551[2]);var inst_10541 = (inst_10540__$1 == null);var state_10551__$1 = (function (){var statearr_10557 = state_10551;(statearr_10557[8] = inst_10540__$1);
return statearr_10557;
})();if(cljs.core.truth_(inst_10541))
{var statearr_10558_10572 = state_10551__$1;(statearr_10558_10572[1] = 5);
} else
{var statearr_10559_10573 = state_10551__$1;(statearr_10559_10573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10552 === 3))
{var inst_10549 = (state_10551[2]);var state_10551__$1 = state_10551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10551__$1,inst_10549);
} else
{if((state_val_10552 === 2))
{var state_10551__$1 = state_10551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10551__$1,4,ch);
} else
{if((state_val_10552 === 1))
{var inst_10537 = init;var state_10551__$1 = (function (){var statearr_10560 = state_10551;(statearr_10560[7] = inst_10537);
return statearr_10560;
})();var statearr_10561_10574 = state_10551__$1;(statearr_10561_10574[2] = null);
(statearr_10561_10574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_10565 = [null,null,null,null,null,null,null,null,null];(statearr_10565[0] = state_machine__6111__auto__);
(statearr_10565[1] = 1);
return statearr_10565;
});
var state_machine__6111__auto____1 = (function (state_10551){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_10551);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e10566){if((e10566 instanceof Object))
{var ex__6114__auto__ = e10566;var statearr_10567_10575 = state_10551;(statearr_10567_10575[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10551);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10576 = state_10551;
state_10551 = G__10576;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_10551){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_10551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_10568 = f__6181__auto__.call(null);(statearr_10568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto__);
return statearr_10568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return c__6180__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6180__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_10638){var state_val_10639 = (state_10638[1]);if((state_val_10639 === 1))
{var inst_10618 = cljs.core.seq.call(null,coll);var inst_10619 = inst_10618;var state_10638__$1 = (function (){var statearr_10640 = state_10638;(statearr_10640[7] = inst_10619);
return statearr_10640;
})();var statearr_10641_10659 = state_10638__$1;(statearr_10641_10659[2] = null);
(statearr_10641_10659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10639 === 2))
{var inst_10619 = (state_10638[7]);var state_10638__$1 = state_10638;if(cljs.core.truth_(inst_10619))
{var statearr_10642_10660 = state_10638__$1;(statearr_10642_10660[1] = 4);
} else
{var statearr_10643_10661 = state_10638__$1;(statearr_10643_10661[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10639 === 3))
{var inst_10636 = (state_10638[2]);var state_10638__$1 = state_10638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10638__$1,inst_10636);
} else
{if((state_val_10639 === 4))
{var inst_10619 = (state_10638[7]);var inst_10622 = cljs.core.first.call(null,inst_10619);var state_10638__$1 = state_10638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10638__$1,7,ch,inst_10622);
} else
{if((state_val_10639 === 5))
{var state_10638__$1 = state_10638;if(cljs.core.truth_(close_QMARK_))
{var statearr_10644_10662 = state_10638__$1;(statearr_10644_10662[1] = 8);
} else
{var statearr_10645_10663 = state_10638__$1;(statearr_10645_10663[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10639 === 6))
{var inst_10634 = (state_10638[2]);var state_10638__$1 = state_10638;var statearr_10646_10664 = state_10638__$1;(statearr_10646_10664[2] = inst_10634);
(statearr_10646_10664[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10639 === 7))
{var inst_10619 = (state_10638[7]);var inst_10624 = (state_10638[2]);var inst_10625 = cljs.core.next.call(null,inst_10619);var inst_10619__$1 = inst_10625;var state_10638__$1 = (function (){var statearr_10647 = state_10638;(statearr_10647[7] = inst_10619__$1);
(statearr_10647[8] = inst_10624);
return statearr_10647;
})();var statearr_10648_10665 = state_10638__$1;(statearr_10648_10665[2] = null);
(statearr_10648_10665[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10639 === 8))
{var inst_10629 = cljs.core.async.close_BANG_.call(null,ch);var state_10638__$1 = state_10638;var statearr_10649_10666 = state_10638__$1;(statearr_10649_10666[2] = inst_10629);
(statearr_10649_10666[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10639 === 9))
{var state_10638__$1 = state_10638;var statearr_10650_10667 = state_10638__$1;(statearr_10650_10667[2] = null);
(statearr_10650_10667[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10639 === 10))
{var inst_10632 = (state_10638[2]);var state_10638__$1 = state_10638;var statearr_10651_10668 = state_10638__$1;(statearr_10651_10668[2] = inst_10632);
(statearr_10651_10668[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_10655 = [null,null,null,null,null,null,null,null,null];(statearr_10655[0] = state_machine__6111__auto__);
(statearr_10655[1] = 1);
return statearr_10655;
});
var state_machine__6111__auto____1 = (function (state_10638){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_10638);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e10656){if((e10656 instanceof Object))
{var ex__6114__auto__ = e10656;var statearr_10657_10669 = state_10638;(statearr_10657_10669[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10670 = state_10638;
state_10638 = G__10670;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_10638){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_10638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_10658 = f__6181__auto__.call(null);(statearr_10658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto__);
return statearr_10658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return c__6180__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10672 = {};return obj10672;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3488__auto__ = _;if(and__3488__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3488__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4127__auto__ = (((_ == null))?null:_);return (function (){var or__3500__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10674 = {};return obj10674;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3488__auto__ = m;if(and__3488__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3488__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4127__auto__ = (((m == null))?null:m);return (function (){var or__3500__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3488__auto__ = m;if(and__3488__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3488__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4127__auto__ = (((m == null))?null:m);return (function (){var or__3500__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3488__auto__ = m;if(and__3488__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3488__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4127__auto__ = (((m == null))?null:m);return (function (){var or__3500__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10889 = (function (cs,ch,mult,meta10890){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10890 = meta10890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10889.cljs$lang$type = true;
cljs.core.async.t10889.cljs$lang$ctorStr = "cljs.core.async/t10889";
cljs.core.async.t10889.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t10889");
});})(cs))
;
cljs.core.async.t10889.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10889.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10889.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10889.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10889.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10891){var self__ = this;
var _10891__$1 = this;return self__.meta10890;
});})(cs))
;
cljs.core.async.t10889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10891,meta10890__$1){var self__ = this;
var _10891__$1 = this;return (new cljs.core.async.t10889(self__.cs,self__.ch,self__.mult,meta10890__$1));
});})(cs))
;
cljs.core.async.__GT_t10889 = ((function (cs){
return (function __GT_t10889(cs__$1,ch__$1,mult__$1,meta10890){return (new cljs.core.async.t10889(cs__$1,ch__$1,mult__$1,meta10890));
});})(cs))
;
}
return (new cljs.core.async.t10889(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6180__auto___11103 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_11021){var state_val_11022 = (state_11021[1]);if((state_val_11022 === 32))
{var inst_10894 = (state_11021[7]);var inst_10970 = (state_11021[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11021,31,Object,null,30);var inst_10977 = cljs.core.async.put_BANG_.call(null,inst_10970,inst_10894,done);var state_11021__$1 = state_11021;var statearr_11023_11104 = state_11021__$1;(statearr_11023_11104[2] = inst_10977);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11021__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 1))
{var state_11021__$1 = state_11021;var statearr_11024_11105 = state_11021__$1;(statearr_11024_11105[2] = null);
(statearr_11024_11105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 33))
{var inst_10983 = (state_11021[9]);var inst_10985 = cljs.core.chunked_seq_QMARK_.call(null,inst_10983);var state_11021__$1 = state_11021;if(inst_10985)
{var statearr_11025_11106 = state_11021__$1;(statearr_11025_11106[1] = 36);
} else
{var statearr_11026_11107 = state_11021__$1;(statearr_11026_11107[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 2))
{var state_11021__$1 = state_11021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11021__$1,4,ch);
} else
{if((state_val_11022 === 34))
{var state_11021__$1 = state_11021;var statearr_11027_11108 = state_11021__$1;(statearr_11027_11108[2] = null);
(statearr_11027_11108[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 3))
{var inst_11019 = (state_11021[2]);var state_11021__$1 = state_11021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11021__$1,inst_11019);
} else
{if((state_val_11022 === 35))
{var inst_11008 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11028_11109 = state_11021__$1;(statearr_11028_11109[2] = inst_11008);
(statearr_11028_11109[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 4))
{var inst_10894 = (state_11021[7]);var inst_10894__$1 = (state_11021[2]);var inst_10895 = (inst_10894__$1 == null);var state_11021__$1 = (function (){var statearr_11029 = state_11021;(statearr_11029[7] = inst_10894__$1);
return statearr_11029;
})();if(cljs.core.truth_(inst_10895))
{var statearr_11030_11110 = state_11021__$1;(statearr_11030_11110[1] = 5);
} else
{var statearr_11031_11111 = state_11021__$1;(statearr_11031_11111[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 36))
{var inst_10983 = (state_11021[9]);var inst_10987 = cljs.core.chunk_first.call(null,inst_10983);var inst_10988 = cljs.core.chunk_rest.call(null,inst_10983);var inst_10989 = cljs.core.count.call(null,inst_10987);var inst_10962 = inst_10988;var inst_10963 = inst_10987;var inst_10964 = inst_10989;var inst_10965 = 0;var state_11021__$1 = (function (){var statearr_11032 = state_11021;(statearr_11032[10] = inst_10962);
(statearr_11032[11] = inst_10963);
(statearr_11032[12] = inst_10964);
(statearr_11032[13] = inst_10965);
return statearr_11032;
})();var statearr_11033_11112 = state_11021__$1;(statearr_11033_11112[2] = null);
(statearr_11033_11112[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 5))
{var inst_10901 = cljs.core.deref.call(null,cs);var inst_10902 = cljs.core.seq.call(null,inst_10901);var inst_10903 = inst_10902;var inst_10904 = null;var inst_10905 = 0;var inst_10906 = 0;var state_11021__$1 = (function (){var statearr_11034 = state_11021;(statearr_11034[14] = inst_10905);
(statearr_11034[15] = inst_10906);
(statearr_11034[16] = inst_10903);
(statearr_11034[17] = inst_10904);
return statearr_11034;
})();var statearr_11035_11113 = state_11021__$1;(statearr_11035_11113[2] = null);
(statearr_11035_11113[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 37))
{var inst_10983 = (state_11021[9]);var inst_10992 = cljs.core.first.call(null,inst_10983);var state_11021__$1 = (function (){var statearr_11036 = state_11021;(statearr_11036[18] = inst_10992);
return statearr_11036;
})();var statearr_11037_11114 = state_11021__$1;(statearr_11037_11114[2] = null);
(statearr_11037_11114[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 6))
{var inst_10953 = cljs.core.deref.call(null,cs);var inst_10954 = cljs.core.keys.call(null,inst_10953);var inst_10955 = cljs.core.count.call(null,inst_10954);var inst_10956 = cljs.core.reset_BANG_.call(null,dctr,inst_10955);var inst_10961 = cljs.core.seq.call(null,inst_10954);var inst_10962 = inst_10961;var inst_10963 = null;var inst_10964 = 0;var inst_10965 = 0;var state_11021__$1 = (function (){var statearr_11038 = state_11021;(statearr_11038[10] = inst_10962);
(statearr_11038[11] = inst_10963);
(statearr_11038[12] = inst_10964);
(statearr_11038[19] = inst_10956);
(statearr_11038[13] = inst_10965);
return statearr_11038;
})();var statearr_11039_11115 = state_11021__$1;(statearr_11039_11115[2] = null);
(statearr_11039_11115[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 38))
{var inst_11005 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11040_11116 = state_11021__$1;(statearr_11040_11116[2] = inst_11005);
(statearr_11040_11116[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 7))
{var inst_11017 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11041_11117 = state_11021__$1;(statearr_11041_11117[2] = inst_11017);
(statearr_11041_11117[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 39))
{var inst_10983 = (state_11021[9]);var inst_11001 = (state_11021[2]);var inst_11002 = cljs.core.next.call(null,inst_10983);var inst_10962 = inst_11002;var inst_10963 = null;var inst_10964 = 0;var inst_10965 = 0;var state_11021__$1 = (function (){var statearr_11042 = state_11021;(statearr_11042[10] = inst_10962);
(statearr_11042[11] = inst_10963);
(statearr_11042[12] = inst_10964);
(statearr_11042[20] = inst_11001);
(statearr_11042[13] = inst_10965);
return statearr_11042;
})();var statearr_11043_11118 = state_11021__$1;(statearr_11043_11118[2] = null);
(statearr_11043_11118[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 8))
{var inst_10905 = (state_11021[14]);var inst_10906 = (state_11021[15]);var inst_10908 = (inst_10906 < inst_10905);var inst_10909 = inst_10908;var state_11021__$1 = state_11021;if(cljs.core.truth_(inst_10909))
{var statearr_11044_11119 = state_11021__$1;(statearr_11044_11119[1] = 10);
} else
{var statearr_11045_11120 = state_11021__$1;(statearr_11045_11120[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 40))
{var inst_10992 = (state_11021[18]);var inst_10993 = (state_11021[2]);var inst_10994 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10995 = cljs.core.async.untap_STAR_.call(null,m,inst_10992);var state_11021__$1 = (function (){var statearr_11046 = state_11021;(statearr_11046[21] = inst_10994);
(statearr_11046[22] = inst_10993);
return statearr_11046;
})();var statearr_11047_11121 = state_11021__$1;(statearr_11047_11121[2] = inst_10995);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11021__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 9))
{var inst_10951 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11048_11122 = state_11021__$1;(statearr_11048_11122[2] = inst_10951);
(statearr_11048_11122[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 41))
{var inst_10894 = (state_11021[7]);var inst_10992 = (state_11021[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11021,40,Object,null,39);var inst_10999 = cljs.core.async.put_BANG_.call(null,inst_10992,inst_10894,done);var state_11021__$1 = state_11021;var statearr_11049_11123 = state_11021__$1;(statearr_11049_11123[2] = inst_10999);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11021__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 10))
{var inst_10906 = (state_11021[15]);var inst_10904 = (state_11021[17]);var inst_10912 = cljs.core._nth.call(null,inst_10904,inst_10906);var inst_10913 = cljs.core.nth.call(null,inst_10912,0,null);var inst_10914 = cljs.core.nth.call(null,inst_10912,1,null);var state_11021__$1 = (function (){var statearr_11050 = state_11021;(statearr_11050[23] = inst_10913);
return statearr_11050;
})();if(cljs.core.truth_(inst_10914))
{var statearr_11051_11124 = state_11021__$1;(statearr_11051_11124[1] = 13);
} else
{var statearr_11052_11125 = state_11021__$1;(statearr_11052_11125[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 42))
{var inst_11014 = (state_11021[2]);var state_11021__$1 = (function (){var statearr_11053 = state_11021;(statearr_11053[24] = inst_11014);
return statearr_11053;
})();var statearr_11054_11126 = state_11021__$1;(statearr_11054_11126[2] = null);
(statearr_11054_11126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 11))
{var inst_10903 = (state_11021[16]);var inst_10923 = (state_11021[25]);var inst_10923__$1 = cljs.core.seq.call(null,inst_10903);var state_11021__$1 = (function (){var statearr_11055 = state_11021;(statearr_11055[25] = inst_10923__$1);
return statearr_11055;
})();if(inst_10923__$1)
{var statearr_11056_11127 = state_11021__$1;(statearr_11056_11127[1] = 16);
} else
{var statearr_11057_11128 = state_11021__$1;(statearr_11057_11128[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 12))
{var inst_10949 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11058_11129 = state_11021__$1;(statearr_11058_11129[2] = inst_10949);
(statearr_11058_11129[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 13))
{var inst_10913 = (state_11021[23]);var inst_10916 = cljs.core.async.close_BANG_.call(null,inst_10913);var state_11021__$1 = state_11021;var statearr_11062_11130 = state_11021__$1;(statearr_11062_11130[2] = inst_10916);
(statearr_11062_11130[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 14))
{var state_11021__$1 = state_11021;var statearr_11063_11131 = state_11021__$1;(statearr_11063_11131[2] = null);
(statearr_11063_11131[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 15))
{var inst_10905 = (state_11021[14]);var inst_10906 = (state_11021[15]);var inst_10903 = (state_11021[16]);var inst_10904 = (state_11021[17]);var inst_10919 = (state_11021[2]);var inst_10920 = (inst_10906 + 1);var tmp11059 = inst_10905;var tmp11060 = inst_10903;var tmp11061 = inst_10904;var inst_10903__$1 = tmp11060;var inst_10904__$1 = tmp11061;var inst_10905__$1 = tmp11059;var inst_10906__$1 = inst_10920;var state_11021__$1 = (function (){var statearr_11064 = state_11021;(statearr_11064[14] = inst_10905__$1);
(statearr_11064[15] = inst_10906__$1);
(statearr_11064[16] = inst_10903__$1);
(statearr_11064[17] = inst_10904__$1);
(statearr_11064[26] = inst_10919);
return statearr_11064;
})();var statearr_11065_11132 = state_11021__$1;(statearr_11065_11132[2] = null);
(statearr_11065_11132[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 16))
{var inst_10923 = (state_11021[25]);var inst_10925 = cljs.core.chunked_seq_QMARK_.call(null,inst_10923);var state_11021__$1 = state_11021;if(inst_10925)
{var statearr_11066_11133 = state_11021__$1;(statearr_11066_11133[1] = 19);
} else
{var statearr_11067_11134 = state_11021__$1;(statearr_11067_11134[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 17))
{var state_11021__$1 = state_11021;var statearr_11068_11135 = state_11021__$1;(statearr_11068_11135[2] = null);
(statearr_11068_11135[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 18))
{var inst_10947 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11069_11136 = state_11021__$1;(statearr_11069_11136[2] = inst_10947);
(statearr_11069_11136[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 19))
{var inst_10923 = (state_11021[25]);var inst_10927 = cljs.core.chunk_first.call(null,inst_10923);var inst_10928 = cljs.core.chunk_rest.call(null,inst_10923);var inst_10929 = cljs.core.count.call(null,inst_10927);var inst_10903 = inst_10928;var inst_10904 = inst_10927;var inst_10905 = inst_10929;var inst_10906 = 0;var state_11021__$1 = (function (){var statearr_11070 = state_11021;(statearr_11070[14] = inst_10905);
(statearr_11070[15] = inst_10906);
(statearr_11070[16] = inst_10903);
(statearr_11070[17] = inst_10904);
return statearr_11070;
})();var statearr_11071_11137 = state_11021__$1;(statearr_11071_11137[2] = null);
(statearr_11071_11137[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 20))
{var inst_10923 = (state_11021[25]);var inst_10933 = cljs.core.first.call(null,inst_10923);var inst_10934 = cljs.core.nth.call(null,inst_10933,0,null);var inst_10935 = cljs.core.nth.call(null,inst_10933,1,null);var state_11021__$1 = (function (){var statearr_11072 = state_11021;(statearr_11072[27] = inst_10934);
return statearr_11072;
})();if(cljs.core.truth_(inst_10935))
{var statearr_11073_11138 = state_11021__$1;(statearr_11073_11138[1] = 22);
} else
{var statearr_11074_11139 = state_11021__$1;(statearr_11074_11139[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 21))
{var inst_10944 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11075_11140 = state_11021__$1;(statearr_11075_11140[2] = inst_10944);
(statearr_11075_11140[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 22))
{var inst_10934 = (state_11021[27]);var inst_10937 = cljs.core.async.close_BANG_.call(null,inst_10934);var state_11021__$1 = state_11021;var statearr_11076_11141 = state_11021__$1;(statearr_11076_11141[2] = inst_10937);
(statearr_11076_11141[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 23))
{var state_11021__$1 = state_11021;var statearr_11077_11142 = state_11021__$1;(statearr_11077_11142[2] = null);
(statearr_11077_11142[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 24))
{var inst_10923 = (state_11021[25]);var inst_10940 = (state_11021[2]);var inst_10941 = cljs.core.next.call(null,inst_10923);var inst_10903 = inst_10941;var inst_10904 = null;var inst_10905 = 0;var inst_10906 = 0;var state_11021__$1 = (function (){var statearr_11078 = state_11021;(statearr_11078[14] = inst_10905);
(statearr_11078[15] = inst_10906);
(statearr_11078[16] = inst_10903);
(statearr_11078[17] = inst_10904);
(statearr_11078[28] = inst_10940);
return statearr_11078;
})();var statearr_11079_11143 = state_11021__$1;(statearr_11079_11143[2] = null);
(statearr_11079_11143[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 25))
{var inst_10964 = (state_11021[12]);var inst_10965 = (state_11021[13]);var inst_10967 = (inst_10965 < inst_10964);var inst_10968 = inst_10967;var state_11021__$1 = state_11021;if(cljs.core.truth_(inst_10968))
{var statearr_11080_11144 = state_11021__$1;(statearr_11080_11144[1] = 27);
} else
{var statearr_11081_11145 = state_11021__$1;(statearr_11081_11145[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 26))
{var inst_11012 = (state_11021[2]);var state_11021__$1 = (function (){var statearr_11082 = state_11021;(statearr_11082[29] = inst_11012);
return statearr_11082;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11021__$1,42,dchan);
} else
{if((state_val_11022 === 27))
{var inst_10963 = (state_11021[11]);var inst_10965 = (state_11021[13]);var inst_10970 = cljs.core._nth.call(null,inst_10963,inst_10965);var state_11021__$1 = (function (){var statearr_11083 = state_11021;(statearr_11083[8] = inst_10970);
return statearr_11083;
})();var statearr_11084_11146 = state_11021__$1;(statearr_11084_11146[2] = null);
(statearr_11084_11146[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 28))
{var inst_10962 = (state_11021[10]);var inst_10983 = (state_11021[9]);var inst_10983__$1 = cljs.core.seq.call(null,inst_10962);var state_11021__$1 = (function (){var statearr_11088 = state_11021;(statearr_11088[9] = inst_10983__$1);
return statearr_11088;
})();if(inst_10983__$1)
{var statearr_11089_11147 = state_11021__$1;(statearr_11089_11147[1] = 33);
} else
{var statearr_11090_11148 = state_11021__$1;(statearr_11090_11148[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 29))
{var inst_11010 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11091_11149 = state_11021__$1;(statearr_11091_11149[2] = inst_11010);
(statearr_11091_11149[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 30))
{var inst_10962 = (state_11021[10]);var inst_10963 = (state_11021[11]);var inst_10964 = (state_11021[12]);var inst_10965 = (state_11021[13]);var inst_10979 = (state_11021[2]);var inst_10980 = (inst_10965 + 1);var tmp11085 = inst_10962;var tmp11086 = inst_10963;var tmp11087 = inst_10964;var inst_10962__$1 = tmp11085;var inst_10963__$1 = tmp11086;var inst_10964__$1 = tmp11087;var inst_10965__$1 = inst_10980;var state_11021__$1 = (function (){var statearr_11092 = state_11021;(statearr_11092[30] = inst_10979);
(statearr_11092[10] = inst_10962__$1);
(statearr_11092[11] = inst_10963__$1);
(statearr_11092[12] = inst_10964__$1);
(statearr_11092[13] = inst_10965__$1);
return statearr_11092;
})();var statearr_11093_11150 = state_11021__$1;(statearr_11093_11150[2] = null);
(statearr_11093_11150[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 31))
{var inst_10970 = (state_11021[8]);var inst_10971 = (state_11021[2]);var inst_10972 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10973 = cljs.core.async.untap_STAR_.call(null,m,inst_10970);var state_11021__$1 = (function (){var statearr_11094 = state_11021;(statearr_11094[31] = inst_10971);
(statearr_11094[32] = inst_10972);
return statearr_11094;
})();var statearr_11095_11151 = state_11021__$1;(statearr_11095_11151[2] = inst_10973);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11021__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_11099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11099[0] = state_machine__6111__auto__);
(statearr_11099[1] = 1);
return statearr_11099;
});
var state_machine__6111__auto____1 = (function (state_11021){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_11021);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e11100){if((e11100 instanceof Object))
{var ex__6114__auto__ = e11100;var statearr_11101_11152 = state_11021;(statearr_11101_11152[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11153 = state_11021;
state_11021 = G__11153;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_11021){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_11021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_11102 = f__6181__auto__.call(null);(statearr_11102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___11103);
return statearr_11102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11155 = {};return obj11155;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3488__auto__ = m;if(and__3488__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3488__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4127__auto__ = (((m == null))?null:m);return (function (){var or__3500__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3488__auto__ = m;if(and__3488__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3488__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4127__auto__ = (((m == null))?null:m);return (function (){var or__3500__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3488__auto__ = m;if(and__3488__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3488__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4127__auto__ = (((m == null))?null:m);return (function (){var or__3500__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3488__auto__ = m;if(and__3488__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3488__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4127__auto__ = (((m == null))?null:m);return (function (){var or__3500__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3488__auto__ = m;if(and__3488__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3488__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4127__auto__ = (((m == null))?null:m);return (function (){var or__3500__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11265 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11265 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11266){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11266 = meta11266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11265.cljs$lang$type = true;
cljs.core.async.t11265.cljs$lang$ctorStr = "cljs.core.async/t11265";
cljs.core.async.t11265.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t11265");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11265.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11265.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11265.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11265.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11265.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11265.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11265.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11267){var self__ = this;
var _11267__$1 = this;return self__.meta11266;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11267,meta11266__$1){var self__ = this;
var _11267__$1 = this;return (new cljs.core.async.t11265(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11266__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11265 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11265(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11266){return (new cljs.core.async.t11265(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11266));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11265(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6180__auto___11374 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_11332){var state_val_11333 = (state_11332[1]);if((state_val_11333 === 1))
{var inst_11271 = (state_11332[7]);var inst_11271__$1 = calc_state.call(null);var inst_11272 = cljs.core.seq_QMARK_.call(null,inst_11271__$1);var state_11332__$1 = (function (){var statearr_11334 = state_11332;(statearr_11334[7] = inst_11271__$1);
return statearr_11334;
})();if(inst_11272)
{var statearr_11335_11375 = state_11332__$1;(statearr_11335_11375[1] = 2);
} else
{var statearr_11336_11376 = state_11332__$1;(statearr_11336_11376[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 2))
{var inst_11271 = (state_11332[7]);var inst_11274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11271);var state_11332__$1 = state_11332;var statearr_11337_11377 = state_11332__$1;(statearr_11337_11377[2] = inst_11274);
(statearr_11337_11377[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 3))
{var inst_11271 = (state_11332[7]);var state_11332__$1 = state_11332;var statearr_11338_11378 = state_11332__$1;(statearr_11338_11378[2] = inst_11271);
(statearr_11338_11378[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 4))
{var inst_11271 = (state_11332[7]);var inst_11277 = (state_11332[2]);var inst_11278 = cljs.core.get.call(null,inst_11277,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11279 = cljs.core.get.call(null,inst_11277,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11280 = cljs.core.get.call(null,inst_11277,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11281 = inst_11271;var state_11332__$1 = (function (){var statearr_11339 = state_11332;(statearr_11339[8] = inst_11279);
(statearr_11339[9] = inst_11280);
(statearr_11339[10] = inst_11278);
(statearr_11339[11] = inst_11281);
return statearr_11339;
})();var statearr_11340_11379 = state_11332__$1;(statearr_11340_11379[2] = null);
(statearr_11340_11379[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 5))
{var inst_11281 = (state_11332[11]);var inst_11284 = cljs.core.seq_QMARK_.call(null,inst_11281);var state_11332__$1 = state_11332;if(inst_11284)
{var statearr_11341_11380 = state_11332__$1;(statearr_11341_11380[1] = 7);
} else
{var statearr_11342_11381 = state_11332__$1;(statearr_11342_11381[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 6))
{var inst_11330 = (state_11332[2]);var state_11332__$1 = state_11332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11332__$1,inst_11330);
} else
{if((state_val_11333 === 7))
{var inst_11281 = (state_11332[11]);var inst_11286 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11281);var state_11332__$1 = state_11332;var statearr_11343_11382 = state_11332__$1;(statearr_11343_11382[2] = inst_11286);
(statearr_11343_11382[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 8))
{var inst_11281 = (state_11332[11]);var state_11332__$1 = state_11332;var statearr_11344_11383 = state_11332__$1;(statearr_11344_11383[2] = inst_11281);
(statearr_11344_11383[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 9))
{var inst_11289 = (state_11332[12]);var inst_11289__$1 = (state_11332[2]);var inst_11290 = cljs.core.get.call(null,inst_11289__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11291 = cljs.core.get.call(null,inst_11289__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11292 = cljs.core.get.call(null,inst_11289__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11332__$1 = (function (){var statearr_11345 = state_11332;(statearr_11345[13] = inst_11291);
(statearr_11345[14] = inst_11292);
(statearr_11345[12] = inst_11289__$1);
return statearr_11345;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11332__$1,10,inst_11290);
} else
{if((state_val_11333 === 10))
{var inst_11296 = (state_11332[15]);var inst_11297 = (state_11332[16]);var inst_11295 = (state_11332[2]);var inst_11296__$1 = cljs.core.nth.call(null,inst_11295,0,null);var inst_11297__$1 = cljs.core.nth.call(null,inst_11295,1,null);var inst_11298 = (inst_11296__$1 == null);var inst_11299 = cljs.core._EQ_.call(null,inst_11297__$1,change);var inst_11300 = (inst_11298) || (inst_11299);var state_11332__$1 = (function (){var statearr_11346 = state_11332;(statearr_11346[15] = inst_11296__$1);
(statearr_11346[16] = inst_11297__$1);
return statearr_11346;
})();if(cljs.core.truth_(inst_11300))
{var statearr_11347_11384 = state_11332__$1;(statearr_11347_11384[1] = 11);
} else
{var statearr_11348_11385 = state_11332__$1;(statearr_11348_11385[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 11))
{var inst_11296 = (state_11332[15]);var inst_11302 = (inst_11296 == null);var state_11332__$1 = state_11332;if(cljs.core.truth_(inst_11302))
{var statearr_11349_11386 = state_11332__$1;(statearr_11349_11386[1] = 14);
} else
{var statearr_11350_11387 = state_11332__$1;(statearr_11350_11387[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 12))
{var inst_11297 = (state_11332[16]);var inst_11292 = (state_11332[14]);var inst_11311 = (state_11332[17]);var inst_11311__$1 = inst_11292.call(null,inst_11297);var state_11332__$1 = (function (){var statearr_11351 = state_11332;(statearr_11351[17] = inst_11311__$1);
return statearr_11351;
})();if(cljs.core.truth_(inst_11311__$1))
{var statearr_11352_11388 = state_11332__$1;(statearr_11352_11388[1] = 17);
} else
{var statearr_11353_11389 = state_11332__$1;(statearr_11353_11389[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 13))
{var inst_11328 = (state_11332[2]);var state_11332__$1 = state_11332;var statearr_11354_11390 = state_11332__$1;(statearr_11354_11390[2] = inst_11328);
(statearr_11354_11390[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 14))
{var inst_11297 = (state_11332[16]);var inst_11304 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11297);var state_11332__$1 = state_11332;var statearr_11355_11391 = state_11332__$1;(statearr_11355_11391[2] = inst_11304);
(statearr_11355_11391[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 15))
{var state_11332__$1 = state_11332;var statearr_11356_11392 = state_11332__$1;(statearr_11356_11392[2] = null);
(statearr_11356_11392[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 16))
{var inst_11307 = (state_11332[2]);var inst_11308 = calc_state.call(null);var inst_11281 = inst_11308;var state_11332__$1 = (function (){var statearr_11357 = state_11332;(statearr_11357[18] = inst_11307);
(statearr_11357[11] = inst_11281);
return statearr_11357;
})();var statearr_11358_11393 = state_11332__$1;(statearr_11358_11393[2] = null);
(statearr_11358_11393[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 17))
{var inst_11311 = (state_11332[17]);var state_11332__$1 = state_11332;var statearr_11359_11394 = state_11332__$1;(statearr_11359_11394[2] = inst_11311);
(statearr_11359_11394[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 18))
{var inst_11297 = (state_11332[16]);var inst_11291 = (state_11332[13]);var inst_11292 = (state_11332[14]);var inst_11314 = cljs.core.empty_QMARK_.call(null,inst_11292);var inst_11315 = inst_11291.call(null,inst_11297);var inst_11316 = cljs.core.not.call(null,inst_11315);var inst_11317 = (inst_11314) && (inst_11316);var state_11332__$1 = state_11332;var statearr_11360_11395 = state_11332__$1;(statearr_11360_11395[2] = inst_11317);
(statearr_11360_11395[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 19))
{var inst_11319 = (state_11332[2]);var state_11332__$1 = state_11332;if(cljs.core.truth_(inst_11319))
{var statearr_11361_11396 = state_11332__$1;(statearr_11361_11396[1] = 20);
} else
{var statearr_11362_11397 = state_11332__$1;(statearr_11362_11397[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 20))
{var inst_11296 = (state_11332[15]);var state_11332__$1 = state_11332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11332__$1,23,out,inst_11296);
} else
{if((state_val_11333 === 21))
{var state_11332__$1 = state_11332;var statearr_11363_11398 = state_11332__$1;(statearr_11363_11398[2] = null);
(statearr_11363_11398[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 22))
{var inst_11289 = (state_11332[12]);var inst_11325 = (state_11332[2]);var inst_11281 = inst_11289;var state_11332__$1 = (function (){var statearr_11364 = state_11332;(statearr_11364[19] = inst_11325);
(statearr_11364[11] = inst_11281);
return statearr_11364;
})();var statearr_11365_11399 = state_11332__$1;(statearr_11365_11399[2] = null);
(statearr_11365_11399[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11333 === 23))
{var inst_11322 = (state_11332[2]);var state_11332__$1 = state_11332;var statearr_11366_11400 = state_11332__$1;(statearr_11366_11400[2] = inst_11322);
(statearr_11366_11400[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_11370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11370[0] = state_machine__6111__auto__);
(statearr_11370[1] = 1);
return statearr_11370;
});
var state_machine__6111__auto____1 = (function (state_11332){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_11332);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e11371){if((e11371 instanceof Object))
{var ex__6114__auto__ = e11371;var statearr_11372_11401 = state_11332;(statearr_11372_11401[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11402 = state_11332;
state_11332 = G__11402;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_11332){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_11332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_11373 = f__6181__auto__.call(null);(statearr_11373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___11374);
return statearr_11373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11404 = {};return obj11404;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3488__auto__ = p;if(and__3488__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3488__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4127__auto__ = (((p == null))?null:p);return (function (){var or__3500__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3488__auto__ = p;if(and__3488__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3488__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4127__auto__ = (((p == null))?null:p);return (function (){var or__3500__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3488__auto__ = p;if(and__3488__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3488__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4127__auto__ = (((p == null))?null:p);return (function (){var or__3500__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3488__auto__ = p;if(and__3488__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3488__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4127__auto__ = (((p == null))?null:p);return (function (){var or__3500__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4127__auto__)]);if(or__3500__auto__)
{return or__3500__auto__;
} else
{var or__3500__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3500__auto____$1)
{return or__3500__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3500__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3500__auto__))
{return or__3500__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3500__auto__,mults){
return (function (p1__11405_SHARP_){if(cljs.core.truth_(p1__11405_SHARP_.call(null,topic)))
{return p1__11405_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11405_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3500__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11530 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11531){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11531 = meta11531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11530.cljs$lang$type = true;
cljs.core.async.t11530.cljs$lang$ctorStr = "cljs.core.async/t11530";
cljs.core.async.t11530.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4067__auto__,writer__4068__auto__,opt__4069__auto__){return cljs.core._write.call(null,writer__4068__auto__,"cljs.core.async/t11530");
});})(mults,ensure_mult))
;
cljs.core.async.t11530.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11530.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11530.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11530.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11530.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11530.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11532){var self__ = this;
var _11532__$1 = this;return self__.meta11531;
});})(mults,ensure_mult))
;
cljs.core.async.t11530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11532,meta11531__$1){var self__ = this;
var _11532__$1 = this;return (new cljs.core.async.t11530(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11531__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11530 = ((function (mults,ensure_mult){
return (function __GT_t11530(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11531){return (new cljs.core.async.t11530(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11531));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11530(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6180__auto___11654 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_11606){var state_val_11607 = (state_11606[1]);if((state_val_11607 === 1))
{var state_11606__$1 = state_11606;var statearr_11608_11655 = state_11606__$1;(statearr_11608_11655[2] = null);
(statearr_11608_11655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 2))
{var state_11606__$1 = state_11606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11606__$1,4,ch);
} else
{if((state_val_11607 === 3))
{var inst_11604 = (state_11606[2]);var state_11606__$1 = state_11606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11606__$1,inst_11604);
} else
{if((state_val_11607 === 4))
{var inst_11535 = (state_11606[7]);var inst_11535__$1 = (state_11606[2]);var inst_11536 = (inst_11535__$1 == null);var state_11606__$1 = (function (){var statearr_11609 = state_11606;(statearr_11609[7] = inst_11535__$1);
return statearr_11609;
})();if(cljs.core.truth_(inst_11536))
{var statearr_11610_11656 = state_11606__$1;(statearr_11610_11656[1] = 5);
} else
{var statearr_11611_11657 = state_11606__$1;(statearr_11611_11657[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 5))
{var inst_11542 = cljs.core.deref.call(null,mults);var inst_11543 = cljs.core.vals.call(null,inst_11542);var inst_11544 = cljs.core.seq.call(null,inst_11543);var inst_11545 = inst_11544;var inst_11546 = null;var inst_11547 = 0;var inst_11548 = 0;var state_11606__$1 = (function (){var statearr_11612 = state_11606;(statearr_11612[8] = inst_11548);
(statearr_11612[9] = inst_11545);
(statearr_11612[10] = inst_11546);
(statearr_11612[11] = inst_11547);
return statearr_11612;
})();var statearr_11613_11658 = state_11606__$1;(statearr_11613_11658[2] = null);
(statearr_11613_11658[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 6))
{var inst_11585 = (state_11606[12]);var inst_11535 = (state_11606[7]);var inst_11583 = (state_11606[13]);var inst_11583__$1 = topic_fn.call(null,inst_11535);var inst_11584 = cljs.core.deref.call(null,mults);var inst_11585__$1 = cljs.core.get.call(null,inst_11584,inst_11583__$1);var state_11606__$1 = (function (){var statearr_11614 = state_11606;(statearr_11614[12] = inst_11585__$1);
(statearr_11614[13] = inst_11583__$1);
return statearr_11614;
})();if(cljs.core.truth_(inst_11585__$1))
{var statearr_11615_11659 = state_11606__$1;(statearr_11615_11659[1] = 19);
} else
{var statearr_11616_11660 = state_11606__$1;(statearr_11616_11660[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 7))
{var inst_11602 = (state_11606[2]);var state_11606__$1 = state_11606;var statearr_11617_11661 = state_11606__$1;(statearr_11617_11661[2] = inst_11602);
(statearr_11617_11661[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 8))
{var inst_11548 = (state_11606[8]);var inst_11547 = (state_11606[11]);var inst_11550 = (inst_11548 < inst_11547);var inst_11551 = inst_11550;var state_11606__$1 = state_11606;if(cljs.core.truth_(inst_11551))
{var statearr_11621_11662 = state_11606__$1;(statearr_11621_11662[1] = 10);
} else
{var statearr_11622_11663 = state_11606__$1;(statearr_11622_11663[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 9))
{var inst_11581 = (state_11606[2]);var state_11606__$1 = state_11606;var statearr_11623_11664 = state_11606__$1;(statearr_11623_11664[2] = inst_11581);
(statearr_11623_11664[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 10))
{var inst_11548 = (state_11606[8]);var inst_11545 = (state_11606[9]);var inst_11546 = (state_11606[10]);var inst_11547 = (state_11606[11]);var inst_11553 = cljs.core._nth.call(null,inst_11546,inst_11548);var inst_11554 = cljs.core.async.muxch_STAR_.call(null,inst_11553);var inst_11555 = cljs.core.async.close_BANG_.call(null,inst_11554);var inst_11556 = (inst_11548 + 1);var tmp11618 = inst_11545;var tmp11619 = inst_11546;var tmp11620 = inst_11547;var inst_11545__$1 = tmp11618;var inst_11546__$1 = tmp11619;var inst_11547__$1 = tmp11620;var inst_11548__$1 = inst_11556;var state_11606__$1 = (function (){var statearr_11624 = state_11606;(statearr_11624[8] = inst_11548__$1);
(statearr_11624[14] = inst_11555);
(statearr_11624[9] = inst_11545__$1);
(statearr_11624[10] = inst_11546__$1);
(statearr_11624[11] = inst_11547__$1);
return statearr_11624;
})();var statearr_11625_11665 = state_11606__$1;(statearr_11625_11665[2] = null);
(statearr_11625_11665[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 11))
{var inst_11559 = (state_11606[15]);var inst_11545 = (state_11606[9]);var inst_11559__$1 = cljs.core.seq.call(null,inst_11545);var state_11606__$1 = (function (){var statearr_11626 = state_11606;(statearr_11626[15] = inst_11559__$1);
return statearr_11626;
})();if(inst_11559__$1)
{var statearr_11627_11666 = state_11606__$1;(statearr_11627_11666[1] = 13);
} else
{var statearr_11628_11667 = state_11606__$1;(statearr_11628_11667[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 12))
{var inst_11579 = (state_11606[2]);var state_11606__$1 = state_11606;var statearr_11629_11668 = state_11606__$1;(statearr_11629_11668[2] = inst_11579);
(statearr_11629_11668[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 13))
{var inst_11559 = (state_11606[15]);var inst_11561 = cljs.core.chunked_seq_QMARK_.call(null,inst_11559);var state_11606__$1 = state_11606;if(inst_11561)
{var statearr_11630_11669 = state_11606__$1;(statearr_11630_11669[1] = 16);
} else
{var statearr_11631_11670 = state_11606__$1;(statearr_11631_11670[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 14))
{var state_11606__$1 = state_11606;var statearr_11632_11671 = state_11606__$1;(statearr_11632_11671[2] = null);
(statearr_11632_11671[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 15))
{var inst_11577 = (state_11606[2]);var state_11606__$1 = state_11606;var statearr_11633_11672 = state_11606__$1;(statearr_11633_11672[2] = inst_11577);
(statearr_11633_11672[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 16))
{var inst_11559 = (state_11606[15]);var inst_11563 = cljs.core.chunk_first.call(null,inst_11559);var inst_11564 = cljs.core.chunk_rest.call(null,inst_11559);var inst_11565 = cljs.core.count.call(null,inst_11563);var inst_11545 = inst_11564;var inst_11546 = inst_11563;var inst_11547 = inst_11565;var inst_11548 = 0;var state_11606__$1 = (function (){var statearr_11634 = state_11606;(statearr_11634[8] = inst_11548);
(statearr_11634[9] = inst_11545);
(statearr_11634[10] = inst_11546);
(statearr_11634[11] = inst_11547);
return statearr_11634;
})();var statearr_11635_11673 = state_11606__$1;(statearr_11635_11673[2] = null);
(statearr_11635_11673[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 17))
{var inst_11559 = (state_11606[15]);var inst_11568 = cljs.core.first.call(null,inst_11559);var inst_11569 = cljs.core.async.muxch_STAR_.call(null,inst_11568);var inst_11570 = cljs.core.async.close_BANG_.call(null,inst_11569);var inst_11571 = cljs.core.next.call(null,inst_11559);var inst_11545 = inst_11571;var inst_11546 = null;var inst_11547 = 0;var inst_11548 = 0;var state_11606__$1 = (function (){var statearr_11636 = state_11606;(statearr_11636[8] = inst_11548);
(statearr_11636[16] = inst_11570);
(statearr_11636[9] = inst_11545);
(statearr_11636[10] = inst_11546);
(statearr_11636[11] = inst_11547);
return statearr_11636;
})();var statearr_11637_11674 = state_11606__$1;(statearr_11637_11674[2] = null);
(statearr_11637_11674[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 18))
{var inst_11574 = (state_11606[2]);var state_11606__$1 = state_11606;var statearr_11638_11675 = state_11606__$1;(statearr_11638_11675[2] = inst_11574);
(statearr_11638_11675[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 19))
{var state_11606__$1 = state_11606;var statearr_11639_11676 = state_11606__$1;(statearr_11639_11676[2] = null);
(statearr_11639_11676[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 20))
{var state_11606__$1 = state_11606;var statearr_11640_11677 = state_11606__$1;(statearr_11640_11677[2] = null);
(statearr_11640_11677[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 21))
{var inst_11599 = (state_11606[2]);var state_11606__$1 = (function (){var statearr_11641 = state_11606;(statearr_11641[17] = inst_11599);
return statearr_11641;
})();var statearr_11642_11678 = state_11606__$1;(statearr_11642_11678[2] = null);
(statearr_11642_11678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 22))
{var inst_11596 = (state_11606[2]);var state_11606__$1 = state_11606;var statearr_11643_11679 = state_11606__$1;(statearr_11643_11679[2] = inst_11596);
(statearr_11643_11679[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 23))
{var inst_11583 = (state_11606[13]);var inst_11587 = (state_11606[2]);var inst_11588 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11583);var state_11606__$1 = (function (){var statearr_11644 = state_11606;(statearr_11644[18] = inst_11587);
return statearr_11644;
})();var statearr_11645_11680 = state_11606__$1;(statearr_11645_11680[2] = inst_11588);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11606__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11607 === 24))
{var inst_11585 = (state_11606[12]);var inst_11535 = (state_11606[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11606,23,Object,null,22);var inst_11592 = cljs.core.async.muxch_STAR_.call(null,inst_11585);var state_11606__$1 = state_11606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11606__$1,25,inst_11592,inst_11535);
} else
{if((state_val_11607 === 25))
{var inst_11594 = (state_11606[2]);var state_11606__$1 = state_11606;var statearr_11646_11681 = state_11606__$1;(statearr_11646_11681[2] = inst_11594);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11606__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_11650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11650[0] = state_machine__6111__auto__);
(statearr_11650[1] = 1);
return statearr_11650;
});
var state_machine__6111__auto____1 = (function (state_11606){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_11606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e11651){if((e11651 instanceof Object))
{var ex__6114__auto__ = e11651;var statearr_11652_11682 = state_11606;(statearr_11652_11682[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11683 = state_11606;
state_11606 = G__11683;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_11606){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_11606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_11653 = f__6181__auto__.call(null);(statearr_11653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___11654);
return statearr_11653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6180__auto___11820 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_11790){var state_val_11791 = (state_11790[1]);if((state_val_11791 === 1))
{var state_11790__$1 = state_11790;var statearr_11792_11821 = state_11790__$1;(statearr_11792_11821[2] = null);
(statearr_11792_11821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 2))
{var inst_11753 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11754 = 0;var state_11790__$1 = (function (){var statearr_11793 = state_11790;(statearr_11793[7] = inst_11753);
(statearr_11793[8] = inst_11754);
return statearr_11793;
})();var statearr_11794_11822 = state_11790__$1;(statearr_11794_11822[2] = null);
(statearr_11794_11822[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 3))
{var inst_11788 = (state_11790[2]);var state_11790__$1 = state_11790;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11790__$1,inst_11788);
} else
{if((state_val_11791 === 4))
{var inst_11754 = (state_11790[8]);var inst_11756 = (inst_11754 < cnt);var state_11790__$1 = state_11790;if(cljs.core.truth_(inst_11756))
{var statearr_11795_11823 = state_11790__$1;(statearr_11795_11823[1] = 6);
} else
{var statearr_11796_11824 = state_11790__$1;(statearr_11796_11824[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 5))
{var inst_11774 = (state_11790[2]);var state_11790__$1 = (function (){var statearr_11797 = state_11790;(statearr_11797[9] = inst_11774);
return statearr_11797;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11790__$1,12,dchan);
} else
{if((state_val_11791 === 6))
{var state_11790__$1 = state_11790;var statearr_11798_11825 = state_11790__$1;(statearr_11798_11825[2] = null);
(statearr_11798_11825[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 7))
{var state_11790__$1 = state_11790;var statearr_11799_11826 = state_11790__$1;(statearr_11799_11826[2] = null);
(statearr_11799_11826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 8))
{var inst_11772 = (state_11790[2]);var state_11790__$1 = state_11790;var statearr_11800_11827 = state_11790__$1;(statearr_11800_11827[2] = inst_11772);
(statearr_11800_11827[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 9))
{var inst_11754 = (state_11790[8]);var inst_11767 = (state_11790[2]);var inst_11768 = (inst_11754 + 1);var inst_11754__$1 = inst_11768;var state_11790__$1 = (function (){var statearr_11801 = state_11790;(statearr_11801[10] = inst_11767);
(statearr_11801[8] = inst_11754__$1);
return statearr_11801;
})();var statearr_11802_11828 = state_11790__$1;(statearr_11802_11828[2] = null);
(statearr_11802_11828[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 10))
{var inst_11758 = (state_11790[2]);var inst_11759 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11790__$1 = (function (){var statearr_11803 = state_11790;(statearr_11803[11] = inst_11758);
return statearr_11803;
})();var statearr_11804_11829 = state_11790__$1;(statearr_11804_11829[2] = inst_11759);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11790__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 11))
{var inst_11754 = (state_11790[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11790,10,Object,null,9);var inst_11763 = chs__$1.call(null,inst_11754);var inst_11764 = done.call(null,inst_11754);var inst_11765 = cljs.core.async.take_BANG_.call(null,inst_11763,inst_11764);var state_11790__$1 = state_11790;var statearr_11805_11830 = state_11790__$1;(statearr_11805_11830[2] = inst_11765);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11790__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 12))
{var inst_11776 = (state_11790[12]);var inst_11776__$1 = (state_11790[2]);var inst_11777 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11776__$1);var state_11790__$1 = (function (){var statearr_11806 = state_11790;(statearr_11806[12] = inst_11776__$1);
return statearr_11806;
})();if(cljs.core.truth_(inst_11777))
{var statearr_11807_11831 = state_11790__$1;(statearr_11807_11831[1] = 13);
} else
{var statearr_11808_11832 = state_11790__$1;(statearr_11808_11832[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 13))
{var inst_11779 = cljs.core.async.close_BANG_.call(null,out);var state_11790__$1 = state_11790;var statearr_11809_11833 = state_11790__$1;(statearr_11809_11833[2] = inst_11779);
(statearr_11809_11833[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 14))
{var inst_11776 = (state_11790[12]);var inst_11781 = cljs.core.apply.call(null,f,inst_11776);var state_11790__$1 = state_11790;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11790__$1,16,out,inst_11781);
} else
{if((state_val_11791 === 15))
{var inst_11786 = (state_11790[2]);var state_11790__$1 = state_11790;var statearr_11810_11834 = state_11790__$1;(statearr_11810_11834[2] = inst_11786);
(statearr_11810_11834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11791 === 16))
{var inst_11783 = (state_11790[2]);var state_11790__$1 = (function (){var statearr_11811 = state_11790;(statearr_11811[13] = inst_11783);
return statearr_11811;
})();var statearr_11812_11835 = state_11790__$1;(statearr_11812_11835[2] = null);
(statearr_11812_11835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_11816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11816[0] = state_machine__6111__auto__);
(statearr_11816[1] = 1);
return statearr_11816;
});
var state_machine__6111__auto____1 = (function (state_11790){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_11790);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e11817){if((e11817 instanceof Object))
{var ex__6114__auto__ = e11817;var statearr_11818_11836 = state_11790;(statearr_11818_11836[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11790);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11837 = state_11790;
state_11790 = G__11837;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_11790){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_11790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_11819 = f__6181__auto__.call(null);(statearr_11819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___11820);
return statearr_11819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6180__auto___11945 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_11921){var state_val_11922 = (state_11921[1]);if((state_val_11922 === 1))
{var inst_11892 = cljs.core.vec.call(null,chs);var inst_11893 = inst_11892;var state_11921__$1 = (function (){var statearr_11923 = state_11921;(statearr_11923[7] = inst_11893);
return statearr_11923;
})();var statearr_11924_11946 = state_11921__$1;(statearr_11924_11946[2] = null);
(statearr_11924_11946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 2))
{var inst_11893 = (state_11921[7]);var inst_11895 = cljs.core.count.call(null,inst_11893);var inst_11896 = (inst_11895 > 0);var state_11921__$1 = state_11921;if(cljs.core.truth_(inst_11896))
{var statearr_11925_11947 = state_11921__$1;(statearr_11925_11947[1] = 4);
} else
{var statearr_11926_11948 = state_11921__$1;(statearr_11926_11948[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 3))
{var inst_11919 = (state_11921[2]);var state_11921__$1 = state_11921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11921__$1,inst_11919);
} else
{if((state_val_11922 === 4))
{var inst_11893 = (state_11921[7]);var state_11921__$1 = state_11921;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11921__$1,7,inst_11893);
} else
{if((state_val_11922 === 5))
{var inst_11915 = cljs.core.async.close_BANG_.call(null,out);var state_11921__$1 = state_11921;var statearr_11927_11949 = state_11921__$1;(statearr_11927_11949[2] = inst_11915);
(statearr_11927_11949[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 6))
{var inst_11917 = (state_11921[2]);var state_11921__$1 = state_11921;var statearr_11928_11950 = state_11921__$1;(statearr_11928_11950[2] = inst_11917);
(statearr_11928_11950[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 7))
{var inst_11901 = (state_11921[8]);var inst_11900 = (state_11921[9]);var inst_11900__$1 = (state_11921[2]);var inst_11901__$1 = cljs.core.nth.call(null,inst_11900__$1,0,null);var inst_11902 = cljs.core.nth.call(null,inst_11900__$1,1,null);var inst_11903 = (inst_11901__$1 == null);var state_11921__$1 = (function (){var statearr_11929 = state_11921;(statearr_11929[8] = inst_11901__$1);
(statearr_11929[9] = inst_11900__$1);
(statearr_11929[10] = inst_11902);
return statearr_11929;
})();if(cljs.core.truth_(inst_11903))
{var statearr_11930_11951 = state_11921__$1;(statearr_11930_11951[1] = 8);
} else
{var statearr_11931_11952 = state_11921__$1;(statearr_11931_11952[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 8))
{var inst_11901 = (state_11921[8]);var inst_11900 = (state_11921[9]);var inst_11902 = (state_11921[10]);var inst_11893 = (state_11921[7]);var inst_11905 = (function (){var c = inst_11902;var v = inst_11901;var vec__11898 = inst_11900;var cs = inst_11893;return ((function (c,v,vec__11898,cs,inst_11901,inst_11900,inst_11902,inst_11893,state_val_11922){
return (function (p1__11838_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11838_SHARP_);
});
;})(c,v,vec__11898,cs,inst_11901,inst_11900,inst_11902,inst_11893,state_val_11922))
})();var inst_11906 = cljs.core.filterv.call(null,inst_11905,inst_11893);var inst_11893__$1 = inst_11906;var state_11921__$1 = (function (){var statearr_11932 = state_11921;(statearr_11932[7] = inst_11893__$1);
return statearr_11932;
})();var statearr_11933_11953 = state_11921__$1;(statearr_11933_11953[2] = null);
(statearr_11933_11953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 9))
{var inst_11901 = (state_11921[8]);var state_11921__$1 = state_11921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11921__$1,11,out,inst_11901);
} else
{if((state_val_11922 === 10))
{var inst_11913 = (state_11921[2]);var state_11921__$1 = state_11921;var statearr_11935_11954 = state_11921__$1;(statearr_11935_11954[2] = inst_11913);
(statearr_11935_11954[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 11))
{var inst_11893 = (state_11921[7]);var inst_11910 = (state_11921[2]);var tmp11934 = inst_11893;var inst_11893__$1 = tmp11934;var state_11921__$1 = (function (){var statearr_11936 = state_11921;(statearr_11936[7] = inst_11893__$1);
(statearr_11936[11] = inst_11910);
return statearr_11936;
})();var statearr_11937_11955 = state_11921__$1;(statearr_11937_11955[2] = null);
(statearr_11937_11955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_11941 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11941[0] = state_machine__6111__auto__);
(statearr_11941[1] = 1);
return statearr_11941;
});
var state_machine__6111__auto____1 = (function (state_11921){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_11921);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e11942){if((e11942 instanceof Object))
{var ex__6114__auto__ = e11942;var statearr_11943_11956 = state_11921;(statearr_11943_11956[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11921);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11957 = state_11921;
state_11921 = G__11957;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_11921){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_11921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_11944 = f__6181__auto__.call(null);(statearr_11944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___11945);
return statearr_11944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6180__auto___12050 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_12027){var state_val_12028 = (state_12027[1]);if((state_val_12028 === 1))
{var inst_12004 = 0;var state_12027__$1 = (function (){var statearr_12029 = state_12027;(statearr_12029[7] = inst_12004);
return statearr_12029;
})();var statearr_12030_12051 = state_12027__$1;(statearr_12030_12051[2] = null);
(statearr_12030_12051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12028 === 2))
{var inst_12004 = (state_12027[7]);var inst_12006 = (inst_12004 < n);var state_12027__$1 = state_12027;if(cljs.core.truth_(inst_12006))
{var statearr_12031_12052 = state_12027__$1;(statearr_12031_12052[1] = 4);
} else
{var statearr_12032_12053 = state_12027__$1;(statearr_12032_12053[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12028 === 3))
{var inst_12024 = (state_12027[2]);var inst_12025 = cljs.core.async.close_BANG_.call(null,out);var state_12027__$1 = (function (){var statearr_12033 = state_12027;(statearr_12033[8] = inst_12024);
return statearr_12033;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12027__$1,inst_12025);
} else
{if((state_val_12028 === 4))
{var state_12027__$1 = state_12027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12027__$1,7,ch);
} else
{if((state_val_12028 === 5))
{var state_12027__$1 = state_12027;var statearr_12034_12054 = state_12027__$1;(statearr_12034_12054[2] = null);
(statearr_12034_12054[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12028 === 6))
{var inst_12022 = (state_12027[2]);var state_12027__$1 = state_12027;var statearr_12035_12055 = state_12027__$1;(statearr_12035_12055[2] = inst_12022);
(statearr_12035_12055[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12028 === 7))
{var inst_12009 = (state_12027[9]);var inst_12009__$1 = (state_12027[2]);var inst_12010 = (inst_12009__$1 == null);var inst_12011 = cljs.core.not.call(null,inst_12010);var state_12027__$1 = (function (){var statearr_12036 = state_12027;(statearr_12036[9] = inst_12009__$1);
return statearr_12036;
})();if(inst_12011)
{var statearr_12037_12056 = state_12027__$1;(statearr_12037_12056[1] = 8);
} else
{var statearr_12038_12057 = state_12027__$1;(statearr_12038_12057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12028 === 8))
{var inst_12009 = (state_12027[9]);var state_12027__$1 = state_12027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12027__$1,11,out,inst_12009);
} else
{if((state_val_12028 === 9))
{var state_12027__$1 = state_12027;var statearr_12039_12058 = state_12027__$1;(statearr_12039_12058[2] = null);
(statearr_12039_12058[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12028 === 10))
{var inst_12019 = (state_12027[2]);var state_12027__$1 = state_12027;var statearr_12040_12059 = state_12027__$1;(statearr_12040_12059[2] = inst_12019);
(statearr_12040_12059[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12028 === 11))
{var inst_12004 = (state_12027[7]);var inst_12014 = (state_12027[2]);var inst_12015 = (inst_12004 + 1);var inst_12004__$1 = inst_12015;var state_12027__$1 = (function (){var statearr_12041 = state_12027;(statearr_12041[10] = inst_12014);
(statearr_12041[7] = inst_12004__$1);
return statearr_12041;
})();var statearr_12042_12060 = state_12027__$1;(statearr_12042_12060[2] = null);
(statearr_12042_12060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_12046 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12046[0] = state_machine__6111__auto__);
(statearr_12046[1] = 1);
return statearr_12046;
});
var state_machine__6111__auto____1 = (function (state_12027){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_12027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e12047){if((e12047 instanceof Object))
{var ex__6114__auto__ = e12047;var statearr_12048_12061 = state_12027;(statearr_12048_12061[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12027);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12047;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12062 = state_12027;
state_12027 = G__12062;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_12027){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_12027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_12049 = f__6181__auto__.call(null);(statearr_12049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___12050);
return statearr_12049;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6180__auto___12159 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_12134){var state_val_12135 = (state_12134[1]);if((state_val_12135 === 1))
{var inst_12111 = null;var state_12134__$1 = (function (){var statearr_12136 = state_12134;(statearr_12136[7] = inst_12111);
return statearr_12136;
})();var statearr_12137_12160 = state_12134__$1;(statearr_12137_12160[2] = null);
(statearr_12137_12160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12135 === 2))
{var state_12134__$1 = state_12134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12134__$1,4,ch);
} else
{if((state_val_12135 === 3))
{var inst_12131 = (state_12134[2]);var inst_12132 = cljs.core.async.close_BANG_.call(null,out);var state_12134__$1 = (function (){var statearr_12138 = state_12134;(statearr_12138[8] = inst_12131);
return statearr_12138;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12134__$1,inst_12132);
} else
{if((state_val_12135 === 4))
{var inst_12114 = (state_12134[9]);var inst_12114__$1 = (state_12134[2]);var inst_12115 = (inst_12114__$1 == null);var inst_12116 = cljs.core.not.call(null,inst_12115);var state_12134__$1 = (function (){var statearr_12139 = state_12134;(statearr_12139[9] = inst_12114__$1);
return statearr_12139;
})();if(inst_12116)
{var statearr_12140_12161 = state_12134__$1;(statearr_12140_12161[1] = 5);
} else
{var statearr_12141_12162 = state_12134__$1;(statearr_12141_12162[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12135 === 5))
{var inst_12114 = (state_12134[9]);var inst_12111 = (state_12134[7]);var inst_12118 = cljs.core._EQ_.call(null,inst_12114,inst_12111);var state_12134__$1 = state_12134;if(inst_12118)
{var statearr_12142_12163 = state_12134__$1;(statearr_12142_12163[1] = 8);
} else
{var statearr_12143_12164 = state_12134__$1;(statearr_12143_12164[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12135 === 6))
{var state_12134__$1 = state_12134;var statearr_12145_12165 = state_12134__$1;(statearr_12145_12165[2] = null);
(statearr_12145_12165[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12135 === 7))
{var inst_12129 = (state_12134[2]);var state_12134__$1 = state_12134;var statearr_12146_12166 = state_12134__$1;(statearr_12146_12166[2] = inst_12129);
(statearr_12146_12166[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12135 === 8))
{var inst_12111 = (state_12134[7]);var tmp12144 = inst_12111;var inst_12111__$1 = tmp12144;var state_12134__$1 = (function (){var statearr_12147 = state_12134;(statearr_12147[7] = inst_12111__$1);
return statearr_12147;
})();var statearr_12148_12167 = state_12134__$1;(statearr_12148_12167[2] = null);
(statearr_12148_12167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12135 === 9))
{var inst_12114 = (state_12134[9]);var state_12134__$1 = state_12134;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12134__$1,11,out,inst_12114);
} else
{if((state_val_12135 === 10))
{var inst_12126 = (state_12134[2]);var state_12134__$1 = state_12134;var statearr_12149_12168 = state_12134__$1;(statearr_12149_12168[2] = inst_12126);
(statearr_12149_12168[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12135 === 11))
{var inst_12114 = (state_12134[9]);var inst_12123 = (state_12134[2]);var inst_12111 = inst_12114;var state_12134__$1 = (function (){var statearr_12150 = state_12134;(statearr_12150[7] = inst_12111);
(statearr_12150[10] = inst_12123);
return statearr_12150;
})();var statearr_12151_12169 = state_12134__$1;(statearr_12151_12169[2] = null);
(statearr_12151_12169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_12155 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12155[0] = state_machine__6111__auto__);
(statearr_12155[1] = 1);
return statearr_12155;
});
var state_machine__6111__auto____1 = (function (state_12134){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_12134);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e12156){if((e12156 instanceof Object))
{var ex__6114__auto__ = e12156;var statearr_12157_12170 = state_12134;(statearr_12157_12170[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12134);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12171 = state_12134;
state_12134 = G__12171;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_12134){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_12134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_12158 = f__6181__auto__.call(null);(statearr_12158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___12159);
return statearr_12158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6180__auto___12306 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_12276){var state_val_12277 = (state_12276[1]);if((state_val_12277 === 1))
{var inst_12239 = (new Array(n));var inst_12240 = inst_12239;var inst_12241 = 0;var state_12276__$1 = (function (){var statearr_12278 = state_12276;(statearr_12278[7] = inst_12240);
(statearr_12278[8] = inst_12241);
return statearr_12278;
})();var statearr_12279_12307 = state_12276__$1;(statearr_12279_12307[2] = null);
(statearr_12279_12307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 2))
{var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12276__$1,4,ch);
} else
{if((state_val_12277 === 3))
{var inst_12274 = (state_12276[2]);var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12276__$1,inst_12274);
} else
{if((state_val_12277 === 4))
{var inst_12244 = (state_12276[9]);var inst_12244__$1 = (state_12276[2]);var inst_12245 = (inst_12244__$1 == null);var inst_12246 = cljs.core.not.call(null,inst_12245);var state_12276__$1 = (function (){var statearr_12280 = state_12276;(statearr_12280[9] = inst_12244__$1);
return statearr_12280;
})();if(inst_12246)
{var statearr_12281_12308 = state_12276__$1;(statearr_12281_12308[1] = 5);
} else
{var statearr_12282_12309 = state_12276__$1;(statearr_12282_12309[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 5))
{var inst_12240 = (state_12276[7]);var inst_12241 = (state_12276[8]);var inst_12249 = (state_12276[10]);var inst_12244 = (state_12276[9]);var inst_12248 = (inst_12240[inst_12241] = inst_12244);var inst_12249__$1 = (inst_12241 + 1);var inst_12250 = (inst_12249__$1 < n);var state_12276__$1 = (function (){var statearr_12283 = state_12276;(statearr_12283[11] = inst_12248);
(statearr_12283[10] = inst_12249__$1);
return statearr_12283;
})();if(cljs.core.truth_(inst_12250))
{var statearr_12284_12310 = state_12276__$1;(statearr_12284_12310[1] = 8);
} else
{var statearr_12285_12311 = state_12276__$1;(statearr_12285_12311[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 6))
{var inst_12241 = (state_12276[8]);var inst_12262 = (inst_12241 > 0);var state_12276__$1 = state_12276;if(cljs.core.truth_(inst_12262))
{var statearr_12287_12312 = state_12276__$1;(statearr_12287_12312[1] = 12);
} else
{var statearr_12288_12313 = state_12276__$1;(statearr_12288_12313[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 7))
{var inst_12272 = (state_12276[2]);var state_12276__$1 = state_12276;var statearr_12289_12314 = state_12276__$1;(statearr_12289_12314[2] = inst_12272);
(statearr_12289_12314[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 8))
{var inst_12240 = (state_12276[7]);var inst_12249 = (state_12276[10]);var tmp12286 = inst_12240;var inst_12240__$1 = tmp12286;var inst_12241 = inst_12249;var state_12276__$1 = (function (){var statearr_12290 = state_12276;(statearr_12290[7] = inst_12240__$1);
(statearr_12290[8] = inst_12241);
return statearr_12290;
})();var statearr_12291_12315 = state_12276__$1;(statearr_12291_12315[2] = null);
(statearr_12291_12315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 9))
{var inst_12240 = (state_12276[7]);var inst_12254 = cljs.core.vec.call(null,inst_12240);var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12276__$1,11,out,inst_12254);
} else
{if((state_val_12277 === 10))
{var inst_12260 = (state_12276[2]);var state_12276__$1 = state_12276;var statearr_12292_12316 = state_12276__$1;(statearr_12292_12316[2] = inst_12260);
(statearr_12292_12316[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 11))
{var inst_12256 = (state_12276[2]);var inst_12257 = (new Array(n));var inst_12240 = inst_12257;var inst_12241 = 0;var state_12276__$1 = (function (){var statearr_12293 = state_12276;(statearr_12293[7] = inst_12240);
(statearr_12293[8] = inst_12241);
(statearr_12293[12] = inst_12256);
return statearr_12293;
})();var statearr_12294_12317 = state_12276__$1;(statearr_12294_12317[2] = null);
(statearr_12294_12317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 12))
{var inst_12240 = (state_12276[7]);var inst_12264 = cljs.core.vec.call(null,inst_12240);var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12276__$1,15,out,inst_12264);
} else
{if((state_val_12277 === 13))
{var state_12276__$1 = state_12276;var statearr_12295_12318 = state_12276__$1;(statearr_12295_12318[2] = null);
(statearr_12295_12318[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 14))
{var inst_12269 = (state_12276[2]);var inst_12270 = cljs.core.async.close_BANG_.call(null,out);var state_12276__$1 = (function (){var statearr_12296 = state_12276;(statearr_12296[13] = inst_12269);
return statearr_12296;
})();var statearr_12297_12319 = state_12276__$1;(statearr_12297_12319[2] = inst_12270);
(statearr_12297_12319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12277 === 15))
{var inst_12266 = (state_12276[2]);var state_12276__$1 = state_12276;var statearr_12298_12320 = state_12276__$1;(statearr_12298_12320[2] = inst_12266);
(statearr_12298_12320[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_12302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12302[0] = state_machine__6111__auto__);
(statearr_12302[1] = 1);
return statearr_12302;
});
var state_machine__6111__auto____1 = (function (state_12276){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_12276);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e12303){if((e12303 instanceof Object))
{var ex__6114__auto__ = e12303;var statearr_12304_12321 = state_12276;(statearr_12304_12321[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12276);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12322 = state_12276;
state_12276 = G__12322;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_12276){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_12276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_12305 = f__6181__auto__.call(null);(statearr_12305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___12306);
return statearr_12305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6180__auto___12465 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6181__auto__ = (function (){var switch__6110__auto__ = (function (state_12435){var state_val_12436 = (state_12435[1]);if((state_val_12436 === 1))
{var inst_12394 = [];var inst_12395 = inst_12394;var inst_12396 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12435__$1 = (function (){var statearr_12437 = state_12435;(statearr_12437[7] = inst_12396);
(statearr_12437[8] = inst_12395);
return statearr_12437;
})();var statearr_12438_12466 = state_12435__$1;(statearr_12438_12466[2] = null);
(statearr_12438_12466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 2))
{var state_12435__$1 = state_12435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12435__$1,4,ch);
} else
{if((state_val_12436 === 3))
{var inst_12433 = (state_12435[2]);var state_12435__$1 = state_12435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12435__$1,inst_12433);
} else
{if((state_val_12436 === 4))
{var inst_12399 = (state_12435[9]);var inst_12399__$1 = (state_12435[2]);var inst_12400 = (inst_12399__$1 == null);var inst_12401 = cljs.core.not.call(null,inst_12400);var state_12435__$1 = (function (){var statearr_12439 = state_12435;(statearr_12439[9] = inst_12399__$1);
return statearr_12439;
})();if(inst_12401)
{var statearr_12440_12467 = state_12435__$1;(statearr_12440_12467[1] = 5);
} else
{var statearr_12441_12468 = state_12435__$1;(statearr_12441_12468[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 5))
{var inst_12399 = (state_12435[9]);var inst_12396 = (state_12435[7]);var inst_12403 = (state_12435[10]);var inst_12403__$1 = f.call(null,inst_12399);var inst_12404 = cljs.core._EQ_.call(null,inst_12403__$1,inst_12396);var inst_12405 = cljs.core.keyword_identical_QMARK_.call(null,inst_12396,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12406 = (inst_12404) || (inst_12405);var state_12435__$1 = (function (){var statearr_12442 = state_12435;(statearr_12442[10] = inst_12403__$1);
return statearr_12442;
})();if(cljs.core.truth_(inst_12406))
{var statearr_12443_12469 = state_12435__$1;(statearr_12443_12469[1] = 8);
} else
{var statearr_12444_12470 = state_12435__$1;(statearr_12444_12470[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 6))
{var inst_12395 = (state_12435[8]);var inst_12420 = inst_12395.length;var inst_12421 = (inst_12420 > 0);var state_12435__$1 = state_12435;if(cljs.core.truth_(inst_12421))
{var statearr_12446_12471 = state_12435__$1;(statearr_12446_12471[1] = 12);
} else
{var statearr_12447_12472 = state_12435__$1;(statearr_12447_12472[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 7))
{var inst_12431 = (state_12435[2]);var state_12435__$1 = state_12435;var statearr_12448_12473 = state_12435__$1;(statearr_12448_12473[2] = inst_12431);
(statearr_12448_12473[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 8))
{var inst_12399 = (state_12435[9]);var inst_12395 = (state_12435[8]);var inst_12403 = (state_12435[10]);var inst_12408 = inst_12395.push(inst_12399);var tmp12445 = inst_12395;var inst_12395__$1 = tmp12445;var inst_12396 = inst_12403;var state_12435__$1 = (function (){var statearr_12449 = state_12435;(statearr_12449[7] = inst_12396);
(statearr_12449[11] = inst_12408);
(statearr_12449[8] = inst_12395__$1);
return statearr_12449;
})();var statearr_12450_12474 = state_12435__$1;(statearr_12450_12474[2] = null);
(statearr_12450_12474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 9))
{var inst_12395 = (state_12435[8]);var inst_12411 = cljs.core.vec.call(null,inst_12395);var state_12435__$1 = state_12435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12435__$1,11,out,inst_12411);
} else
{if((state_val_12436 === 10))
{var inst_12418 = (state_12435[2]);var state_12435__$1 = state_12435;var statearr_12451_12475 = state_12435__$1;(statearr_12451_12475[2] = inst_12418);
(statearr_12451_12475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 11))
{var inst_12399 = (state_12435[9]);var inst_12403 = (state_12435[10]);var inst_12413 = (state_12435[2]);var inst_12414 = [];var inst_12415 = inst_12414.push(inst_12399);var inst_12395 = inst_12414;var inst_12396 = inst_12403;var state_12435__$1 = (function (){var statearr_12452 = state_12435;(statearr_12452[7] = inst_12396);
(statearr_12452[8] = inst_12395);
(statearr_12452[12] = inst_12413);
(statearr_12452[13] = inst_12415);
return statearr_12452;
})();var statearr_12453_12476 = state_12435__$1;(statearr_12453_12476[2] = null);
(statearr_12453_12476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 12))
{var inst_12395 = (state_12435[8]);var inst_12423 = cljs.core.vec.call(null,inst_12395);var state_12435__$1 = state_12435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12435__$1,15,out,inst_12423);
} else
{if((state_val_12436 === 13))
{var state_12435__$1 = state_12435;var statearr_12454_12477 = state_12435__$1;(statearr_12454_12477[2] = null);
(statearr_12454_12477[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 14))
{var inst_12428 = (state_12435[2]);var inst_12429 = cljs.core.async.close_BANG_.call(null,out);var state_12435__$1 = (function (){var statearr_12455 = state_12435;(statearr_12455[14] = inst_12428);
return statearr_12455;
})();var statearr_12456_12478 = state_12435__$1;(statearr_12456_12478[2] = inst_12429);
(statearr_12456_12478[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12436 === 15))
{var inst_12425 = (state_12435[2]);var state_12435__$1 = state_12435;var statearr_12457_12479 = state_12435__$1;(statearr_12457_12479[2] = inst_12425);
(statearr_12457_12479[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6110__auto__){
return (function() {
var state_machine__6111__auto__ = null;
var state_machine__6111__auto____0 = (function (){var statearr_12461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12461[0] = state_machine__6111__auto__);
(statearr_12461[1] = 1);
return statearr_12461;
});
var state_machine__6111__auto____1 = (function (state_12435){while(true){
var ret_value__6112__auto__ = (function (){try{while(true){
var result__6113__auto__ = switch__6110__auto__.call(null,state_12435);if(cljs.core.keyword_identical_QMARK_.call(null,result__6113__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6113__auto__;
}
break;
}
}catch (e12462){if((e12462 instanceof Object))
{var ex__6114__auto__ = e12462;var statearr_12463_12480 = state_12435;(statearr_12463_12480[5] = ex__6114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12435);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6112__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12481 = state_12435;
state_12435 = G__12481;
continue;
}
} else
{return ret_value__6112__auto__;
}
break;
}
});
state_machine__6111__auto__ = function(state_12435){
switch(arguments.length){
case 0:
return state_machine__6111__auto____0.call(this);
case 1:
return state_machine__6111__auto____1.call(this,state_12435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6111__auto____0;
state_machine__6111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6111__auto____1;
return state_machine__6111__auto__;
})()
;})(switch__6110__auto__))
})();var state__6182__auto__ = (function (){var statearr_12464 = f__6181__auto__.call(null);(statearr_12464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6180__auto___12465);
return statearr_12464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6182__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
