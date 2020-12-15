(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{24:function(e,t,a){e.exports={overlay:"Loader_overlay__5c8x7"}},30:function(e,t,a){},33:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(4),s=a.n(c),i=(a(30),a(5)),l=a.n(i),u=a(13),d=a(6),h=a(7),g=a(8),m=a(10),p=a(9),b=a(12);a(32),a(33);var j=function(e){var t=e.value,a=e.handleSubmit,r=e.handleChange;return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:a,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:t,onChange:r})]})})};var f=function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,o=e.onOpenModal;return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{src:t,alt:r,"data-source":a,className:"ImageGalleryItem-image",onClick:o})})};var v=function(e){var t=e.images,a=e.onOpenModal;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e,t){var r=e.webformatURL,o=e.largeImageURL,c=e.tags;return Object(n.jsx)(f,{webformatURL:r,largeImageURL:o,tags:c,onOpenModal:a},t)}))})},O=a(22),y=a.n(O),w=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=18963132-a5d8582da162d4c0f5ee62384&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var x=function(e){var t=e.onLoadMore;return Object(n.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},L=a(23),M=a.n(L),S=(a(72),a(24)),k=a.n(S);var I=function(){return Object(n.jsx)("div",{className:k.a.overlay,children:Object(n.jsx)(M.a,{type:"Grid",color:"#3f51b5",height:100,width:100,timeout:0})})},C=document.querySelector("#modal-root"),N=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(c.createPortal)(Object(n.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:e,alt:""})})}),C)}}]),a}(r.Component),U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",query:"",images:[],page:1,error:null,showLoadMoreBtn:!1,isLoading:!1,showModal:!1,largeImageURL:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.searchImgs()},e.searchImgs=Object(d.a)(l.a.mark((function t(){var a,n,r,o,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.query,r=a.page,o=a.showLoadMoreBtn,""!==n.trim()){t.next=3;break}return t.abrupt("return",b.b.info("\ud83d\ude31 Please enter a value for search images!"));case 3:return e.toggleLoader(),t.prev=4,t.next=7,w(n,r);case 7:c=t.sent,e.setState((function(e){var t=e.images,a=e.page;return{images:[].concat(Object(u.a)(t),Object(u.a)(c)),page:a+1}})),0===c.length&&e.setState({error:"No results were found for ".concat(n,"!")}),o||12!==c.length||e.setState({showLoadMoreBtn:!0}),o&&c.length<12&&e.setState({showLoadMoreBtn:!1}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),e.setState({error:"Something went wrong. Try again."});case 17:return t.prev=17,e.toggleLoader(),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[4,14,17,20]])}))),e.onLoadMore=function(){e.searchImgs()},e.onScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.onOpenModal=function(t){e.setState({largeImageURL:t.target.dataset.source}),e.toggleModal()},e.toggleLoader=function(){e.setState((function(e){return{isLoading:!e.isLoading}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(g.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.images.length>12&&this.onScroll(),t.query!==this.state.query&&this.setState({images:[],page:1,error:null,showLoadMoreBtn:!1})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.query,r=e.showLoadMoreBtn,o=e.isLoading,c=e.showModal,s=e.largeImageURL;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,value:a}),t.length>0&&Object(n.jsx)(v,{images:t,onOpenModal:this.onOpenModal}),o&&Object(n.jsx)(I,{}),r&&Object(n.jsx)(x,{onLoadMore:this.onLoadMore}),c&&Object(n.jsx)(N,{onToggleModal:this.toggleModal,largeImageURL:s}),Object(n.jsx)(b.a,{autoClose:4e3})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.523abcd5.chunk.js.map