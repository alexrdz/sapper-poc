(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{5:function(t,e,s){"use strict";s.r(e);var c=s(0);function n(t){var e,s,n,a,o,r,i;if(Object(c.t)(this,t),this._state=Object(c.d)({},t.data),this._intro=!0,this._fragment=(e=this._state,r=e.post.title,i=e.post.html,{c(){s=Object(c.k)("h1"),n=Object(c.l)(r),a=Object(c.l)("\n\n"),o=Object(c.k)("div"),this.h()},l(t){s=Object(c.h)(t,"H1",{},!1);var e=Object(c.g)(s);n=Object(c.i)(e,r),e.forEach(c.n),a=Object(c.i)(t,"\n\n"),o=Object(c.h)(t,"DIV",{class:!0},!1),Object(c.g)(o).forEach(c.n),this.h()},h(){o.className="content"},m(t,e){Object(c.u)(t,s,e),Object(c.c)(s,n),Object(c.u)(t,a,e),Object(c.u)(t,o,e),o.innerHTML=i},p(t,e){t.post&&r!==(r=e.post.title)&&Object(c.z)(n,r),t.post&&i!==(i=e.post.html)&&(o.innerHTML=i)},d(t){t&&(Object(c.n)(s),Object(c.n)(a),Object(c.n)(o))}}),t.target){var h=Object(c.g)(t.target);t.hydrate?this._fragment.l(h):this._fragment.c(),h.forEach(c.n),this._mount(t.target,t.anchor)}}Object(c.d)(n.prototype,c.x);var a=n;function o(t){}function r(t){if(Object(c.t)(this,t),this._state=Object(c.d)({},t.data),this._intro=!0,this._handlers.state=[o],o.call(this,{changed:Object(c.e)({},this._state),current:this._state}),this._fragment=function(t,e){var s,n;document.title=s=e.post.title;var o={post:e.post},r=new a({root:t.root,store:t.store,data:o});return{c(){n=Object(c.l)("\n\n"),r._fragment.c()},l(t){n=Object(c.i)(t,"\n\n"),r._fragment.l(t)},m(t,e){Object(c.u)(t,n,e),r._mount(t,e)},p(t,e){t.post&&s!==(s=e.post.title)&&(document.title=s);var c={};t.post&&(c.post=e.post),r._set(c)},d(t){t&&Object(c.n)(n),r.destroy(t)}}}(this,this._state),this.root._oncreate.push(()=>{this.fire("update",{changed:Object(c.e)({},this._state),current:this._state})}),t.target){var e=Object(c.g)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.n),this._mount(t.target,t.anchor),Object(c.q)(this)}}Object(c.d)(r.prototype,c.x),r.preload=async function({params:t,query:e}){const{posts:s}=this.store.get(),c=s.filter(e=>e.slug===t.slug)[0];return console.log("r"),c?{post:c}:{post:this.post}};e.default=r}}]);