(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{WvHH:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var d=e("NcP4"),i=e("t68o"),o=e("zbXB"),a=e("pMnS"),r=e("TSSN"),s=e("pIm3"),c=e("zQui"),p=e("8rEH"),m=e("SVse"),h=e("s7LF"),g=e("IP0z"),v=e("/HVE"),f=e("b1+6"),C=e("OIZN"),b=e("PSD3"),_=e.n(b),w=e("HR6+"),y=e("EUZL"),R=e("KwIb");class P{constructor(l,n,e,u,t,d){this.route=l,this.router=n,this.productService=e,this.translate=u,this.spinner=t,this.masterService=d,this.IMAGE_PATH="http://10.10.60.224:8088/api/files/",this.length=0,this.displayedColumns=["product_name","model","viewed","percent"],this.fileName="product_view.xlsx",this.productName="",this.startPrice=0,this.endPrice=0,this.price="0.00-0.00",this.status=-1,this.model="",this.startQuantity=0,this.endQuantity=0,this.quantity="0-0",this.itemNumber="",this.masterPeroidPriceList=[],this.masterPeroidQuantityList=[],this.productLits=[],this.totalView=0,this.currentUserType="seller"}ngOnInit(){this.storeId=localStorage.getItem("storeId"),this.currentUserType=localStorage.getItem("currentUserType"),this.ogcId=localStorage.getItem("ogcId"),this.getTotalView(),this.get(),this.getMasterPeroidPrice(),this.getMasterQuantity()}getTotalView(){let l,n={storeId:this.storeId,currentUserType:this.currentUserType,ogcId:this.ogcId,page:1,limit:10};console.log(n),l=this.productService.getTotalProductViewed(n),l.then(l=>{console.log(l),l.status?this.totalView=l.data:(this.spinner.hide(),_.a.fire({icon:"error",title:l.message,showConfirmButton:!1}))},l=>{console.log(l)})}priceChanged(){console.log(this.price);let l=this.price.split("-");this.startPrice=Number(l[0]),this.endPrice=Number(l[1])}quantityChange(){console.log(this.quantity);let l=this.quantity.split("-");this.startQuantity=Number(l[0]),this.endQuantity=Number(l[1])}getMasterPeroidPrice(){let l;this.masterPeroidPriceList=[],l=this.masterService.getByGroupCode("product_period_price"),l.then(l=>{l.status&&(this.masterPeroidPriceList=l.data)},l=>{console.log(l)})}getMasterQuantity(){let l;this.masterPeroidQuantityList=[],l=this.masterService.getByGroupCode("product_period_quantity"),l.then(l=>{l.status&&(this.masterPeroidQuantityList=l.data)},l=>{console.log(l)})}get(){let l;this.spinner.show();let n={storeId:this.storeId,isMaster:0,productName:this.productName,startPrice:this.startPrice,endPrice:this.endPrice,status:this.status,model:this.model,startQuantity:this.startQuantity,endQuantity:this.endQuantity,itemNumber:this.itemNumber,viewedCondition:!0,currentUserType:this.currentUserType,ogcId:this.ogcId,page:1,limit:10};console.log(n),l=this.productService.findProductByCriteria(n),l.then(l=>{l.status?(this.length=l.data.total,this.dataSource=new p.j(l.data.data),l.data.data.forEach(l=>{l.percentView=l.viewed/this.totalView*100}),this.productLits=l.data.data,console.log(this.productLits),this.spinner.hide()):(this.spinner.hide(),_.a.fire({icon:"error",title:l.message,showConfirmButton:!1}))},l=>{console.log(l)})}serverside(l){let n;this.spinner.show(),n=this.productService.findProductByCriteria({storeId:this.storeId,isMaster:0,productName:this.productName,startPrice:this.startPrice,endPrice:this.endPrice,status:this.status,model:this.model,startQuantity:this.startQuantity,endQuantity:this.endQuantity,itemNumber:this.itemNumber,viewedCondition:!0,currentUserType:this.currentUserType,ogcId:this.ogcId,limit:l.pageSize,page:l.pageIndex+1}),n.then(l=>{l.status?(this.length=l.data.total,this.dataSource=new p.j(l.data.data),l.data.data.forEach(l=>{l.percentView=l.viewed/this.totalView*100}),this.productLits=l.data.data,this.spinner.hide()):(this.spinner.hide(),_.a.fire({icon:"error",title:l.message,showConfirmButton:!1}))},l=>{console.log(l)})}exportexcel(){let l;this.spinner.show();let n={storeId:this.storeId,isMaster:0,productName:this.productName,startPrice:this.startPrice,endPrice:this.endPrice,status:this.status,model:this.model,startQuantity:this.startQuantity,endQuantity:this.endQuantity,itemNumber:this.itemNumber,viewedCondition:!0,currentUserType:this.currentUserType,ogcId:this.ogcId};console.log(n),l=this.productService.findProductByCriteriaExcel(n),l.then(l=>{if(console.log(l),l.status){let e=[];e.push(["Product Name","Model","Viewed","Percent"]),l.data.forEach(l=>{let n=[];n.push(l.productName),n.push(l.model),n.push(l.viewed);let u=0;u=Number(l.viewed)/this.totalView*100,n.push(u.toFixed(2)+"%"),e.push(n)});var n=y.utils.aoa_to_sheet(e);const u=y.utils.book_new();y.utils.book_append_sheet(u,n,"sheet1"),y.writeFile(u,"Product View Report.xlsx"),this.spinner.hide()}else this.spinner.hide(),_.a.fire({icon:"error",title:l.message,showConfirmButton:!1})},l=>{console.log(l)})}goToedit(l){console.log(l);var n=JSON.stringify(l);this.router.navigate(["catalog/product/edit"],{queryParams:{data:n}})}checkUncheckAll(l){for(var n=0;n<this.productLits.length;n++)this.productLits[n].isSelected=l;this.dataSource=new p.j(this.productLits)}isItemSelected(l,n){for(var e=0;e<this.productLits.length;e++)n==e&&(this.productLits[e].isSelected=l,this.dataSource=new p.j(this.productLits))}}var I=e("iInd"),D=e("7g+E"),T=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function N(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"th",[["class","border text-center"],["mat-sort-header",""],["scope","col"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" ",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("products_entry_name")))}))}function S(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.context.$implicit.descriptions[0].name)}))}function x(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"th",[["class","border text-center"],["mat-sort-header",""],["scope","col"],["style","width: 30%;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" ",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("products_entry_model")))}))}function E(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.context.$implicit.model)}))}function k(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"th",[["class","border text-center"],["mat-sort-header",""],["scope","col"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" ",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("products_viewed_column_viewed")))}))}function M(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"td",[["align","right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""])),u["\u0275ppd"](2,1)],null,(function(l,n){var e=u["\u0275unv"](n,1,0,l(n,2,0,u["\u0275nov"](n.parent,0),n.context.$implicit.viewed));l(n,1,0,e)}))}function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"th",[["class","border text-center"],["mat-sort-header",""],["scope","col"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("products_viewed_column_percent")))}))}function j(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,4,"td",[["align","right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[""," "])),u["\u0275ppd"](2,2),(l()(),u["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["%"]))],null,(function(l,n){var e=u["\u0275unv"](n,1,0,l(n,2,0,u["\u0275nov"](n.parent,0),n.context.$implicit.percentView,"1.2-2"));l(n,1,0,e)}))}function q(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"tr",[["class","info mat-header-row"],["mat-header-row",""],["role","row"],["style","height: 30px;"]],null,null,null,s.d,s.a)),u["\u0275prd"](6144,null,c.k,null,[p.e]),u["\u0275did"](2,49152,null,0,p.e,[],null,null)],null,null)}function Q(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,s.e,s.b)),u["\u0275prd"](6144,null,c.m,null,[p.g]),u["\u0275did"](2,49152,null,0,p.g,[],null,null)],null,null)}function U(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["style","text-align: center;color: #747171;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Data not found "]))],null,null)}function O(l){return u["\u0275vid"](0,[u["\u0275pid"](0,m.DecimalPipe,[u.LOCALE_ID]),u["\u0275qud"](671088640,1,{paginator:0}),u["\u0275qud"](671088640,2,{sort:0}),(l()(),u["\u0275eld"](3,0,null,null,158,"div",[["id","content"],["style","padding-left: 235px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,16,"div",[["class","page-header"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,15,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,2,"div",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"a",[["class","btn btn-info space"],["data-original-title","Export"],["data-toggle","tooltip"],["title",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.exportexcel()&&u),u}),null,null)),(l()(),u["\u0275eld"](8,0,null,null,0,"i",[["class","fa fa-file-excel-o"]],null,null,null,null,null)),(l()(),u["\u0275eld"](9,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),u["\u0275ted"](10,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](12,0,null,null,8,"ul",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,2,"a",[["href","./"]],null,null,null,null,null)),(l()(),u["\u0275ted"](15,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](17,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](18,0,null,null,2,"a",[],null,null,null,null,null)),(l()(),u["\u0275ted"](19,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](21,0,null,null,140,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),u["\u0275eld"](22,0,null,null,139,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,null,4,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),u["\u0275eld"](24,0,null,null,3,"h3",[["class","panel-title"]],null,null,null,null,null)),(l()(),u["\u0275eld"](25,0,null,null,0,"i",[["class","fa fa-list"]],null,null,null,null,null)),(l()(),u["\u0275ted"](26,null,[" ",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](28,0,null,null,133,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](29,0,null,null,57,"div",[["class","well"]],null,null,null,null,null)),(l()(),u["\u0275eld"](30,0,null,null,56,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,12,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](32,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](33,0,null,null,2,"label",[["class","control-label"],["for","input-name"]],null,null,null,null,null)),(l()(),u["\u0275ted"](34,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](36,0,null,null,6,"input",[["autocomplete","off"],["class","form-control"],["id","input-name"],["name","filter_name"],["type","text"],["value",""]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var t=!0,d=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,37)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,37).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,37)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,37)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(d.productName=e)&&t),t}),null,null)),u["\u0275did"](37,16384,null,0,h.e,[u.Renderer2,u.ElementRef,[2,h.a]],null,null),u["\u0275prd"](1024,null,h.n,(function(l){return[l]}),[h.e]),u["\u0275did"](39,671744,null,0,h.s,[[8,null],[8,null],[8,null],[6,h.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,h.o,null,[h.s]),u["\u0275did"](41,16384,null,0,h.p,[[4,h.o]],null,null),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](43,0,null,null,0,"ul",[["class","dropdown-menu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](44,0,null,null,12,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](45,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](46,0,null,null,2,"label",[["class","control-label"],["for","input-model"]],null,null,null,null,null)),(l()(),u["\u0275ted"](47,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](49,0,null,null,6,"input",[["autocomplete","off"],["class","form-control"],["id","input-model"],["name","filter_model"],["type","text"],["value",""]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var t=!0,d=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,50)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,50).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,50)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,50)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(d.model=e)&&t),t}),null,null)),u["\u0275did"](50,16384,null,0,h.e,[u.Renderer2,u.ElementRef,[2,h.a]],null,null),u["\u0275prd"](1024,null,h.n,(function(l){return[l]}),[h.e]),u["\u0275did"](52,671744,null,0,h.s,[[8,null],[8,null],[8,null],[6,h.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,h.o,null,[h.s]),u["\u0275did"](54,16384,null,0,h.p,[[4,h.o]],null,null),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](56,0,null,null,0,"ul",[["class","dropdown-menu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](57,0,null,null,29,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](58,0,null,null,24,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](59,0,null,null,2,"label",[["class","control-label"],["for","input-status"]],null,null,null,null,null)),(l()(),u["\u0275ted"](60,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](62,0,null,null,20,"select",[["class","form-control"],["id","input-status"],["name","filter_status"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,e){var t=!0,d=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,63).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,63).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(d.status=e)&&t),t}),null,null)),u["\u0275did"](63,16384,null,0,h.x,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,h.n,(function(l){return[l]}),[h.x]),u["\u0275did"](65,671744,null,0,h.s,[[8,null],[8,null],[8,null],[6,h.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,h.o,null,[h.s]),u["\u0275did"](67,16384,null,0,h.p,[[4,h.o]],null,null),(l()(),u["\u0275eld"](68,0,null,null,4,"option",[["value","-1"]],null,null,null,null,null)),u["\u0275did"](69,147456,null,0,h.t,[u.ElementRef,u.Renderer2,[2,h.x]],{value:[0,"value"]},null),u["\u0275did"](70,147456,null,0,h.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](71,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](73,0,null,null,4,"option",[["value","1"]],null,null,null,null,null)),u["\u0275did"](74,147456,null,0,h.t,[u.ElementRef,u.Renderer2,[2,h.x]],{value:[0,"value"]},null),u["\u0275did"](75,147456,null,0,h.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](76,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](78,0,null,null,4,"option",[["value","0"]],null,null,null,null,null)),u["\u0275did"](79,147456,null,0,h.t,[u.ElementRef,u.Renderer2,[2,h.x]],{value:[0,"value"]},null),u["\u0275did"](80,147456,null,0,h.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](81,null,["",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](83,0,null,null,3,"button",[["class","btn btn-primary pull-right"],["id","button-filter"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.get()&&u),u}),null,null)),(l()(),u["\u0275eld"](84,0,null,null,0,"i",[["class","fa fa-search"]],null,null,null,null,null)),(l()(),u["\u0275ted"](85,null,[" ",""])),u["\u0275pid"](131072,r.j,[r.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](87,0,null,null,74,"form",[["action",""],["enctype","multipart/form-data"],["id","form-product"],["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0;return"submit"===n&&(t=!1!==u["\u0275nov"](l,89).onSubmit(e)&&t),"reset"===n&&(t=!1!==u["\u0275nov"](l,89).onReset()&&t),t}),null,null)),u["\u0275did"](88,16384,null,0,h.D,[],null,null),u["\u0275did"](89,4210688,null,0,h.r,[[8,null],[8,null]],null,null),u["\u0275prd"](2048,null,h.d,null,[h.r]),u["\u0275did"](91,16384,null,0,h.q,[[4,h.d]],null,null),(l()(),u["\u0275eld"](92,0,null,null,66,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),u["\u0275eld"](93,0,null,null,63,"table",[["class","table table-bordered mb-0 mat-table"],["id","table-product-view"],["mat-table",""],["matSort",""]],null,null,null,s.f,s.c)),u["\u0275did"](94,2342912,null,4,p.i,[u.IterableDiffers,u.ChangeDetectorRef,u.ElementRef,[8,null],[2,g.b],m.DOCUMENT,v.a],{dataSource:[0,"dataSource"]},null),u["\u0275qud"](603979776,3,{_contentColumnDefs:1}),u["\u0275qud"](603979776,4,{_contentRowDefs:1}),u["\u0275qud"](603979776,5,{_contentHeaderRowDefs:1}),u["\u0275qud"](603979776,6,{_contentFooterRowDefs:1}),(l()(),u["\u0275eld"](99,0,null,null,12,null,null,null,null,null,null,null)),u["\u0275prd"](6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[p.b]),u["\u0275did"](101,16384,null,3,p.b,[],{name:[0,"name"]},null),u["\u0275qud"](335544320,7,{cell:0}),u["\u0275qud"](335544320,8,{headerCell:0}),u["\u0275qud"](335544320,9,{footerCell:0}),u["\u0275prd"](2048,[[3,4]],c.d,null,[p.b]),(l()(),u["\u0275and"](0,null,null,2,null,N)),u["\u0275did"](107,16384,null,0,p.d,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[8,4]],c.j,null,[p.d]),(l()(),u["\u0275and"](0,null,null,2,null,S)),u["\u0275did"](110,16384,null,0,p.a,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[7,4]],c.b,null,[p.a]),(l()(),u["\u0275eld"](112,0,null,null,12,null,null,null,null,null,null,null)),u["\u0275prd"](6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[p.b]),u["\u0275did"](114,16384,null,3,p.b,[],{name:[0,"name"]},null),u["\u0275qud"](335544320,10,{cell:0}),u["\u0275qud"](335544320,11,{headerCell:0}),u["\u0275qud"](335544320,12,{footerCell:0}),u["\u0275prd"](2048,[[3,4]],c.d,null,[p.b]),(l()(),u["\u0275and"](0,null,null,2,null,x)),u["\u0275did"](120,16384,null,0,p.d,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[11,4]],c.j,null,[p.d]),(l()(),u["\u0275and"](0,null,null,2,null,E)),u["\u0275did"](123,16384,null,0,p.a,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[10,4]],c.b,null,[p.a]),(l()(),u["\u0275eld"](125,0,null,null,12,null,null,null,null,null,null,null)),u["\u0275prd"](6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[p.b]),u["\u0275did"](127,16384,null,3,p.b,[],{name:[0,"name"]},null),u["\u0275qud"](335544320,13,{cell:0}),u["\u0275qud"](335544320,14,{headerCell:0}),u["\u0275qud"](335544320,15,{footerCell:0}),u["\u0275prd"](2048,[[3,4]],c.d,null,[p.b]),(l()(),u["\u0275and"](0,null,null,2,null,k)),u["\u0275did"](133,16384,null,0,p.d,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[14,4]],c.j,null,[p.d]),(l()(),u["\u0275and"](0,null,null,2,null,M)),u["\u0275did"](136,16384,null,0,p.a,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[13,4]],c.b,null,[p.a]),(l()(),u["\u0275eld"](138,0,null,null,12,null,null,null,null,null,null,null)),u["\u0275prd"](6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[p.b]),u["\u0275did"](140,16384,null,3,p.b,[],{name:[0,"name"]},null),u["\u0275qud"](335544320,16,{cell:0}),u["\u0275qud"](335544320,17,{headerCell:0}),u["\u0275qud"](335544320,18,{footerCell:0}),u["\u0275prd"](2048,[[3,4]],c.d,null,[p.b]),(l()(),u["\u0275and"](0,null,null,2,null,L)),u["\u0275did"](146,16384,null,0,p.d,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[17,4]],c.j,null,[p.d]),(l()(),u["\u0275and"](0,null,null,2,null,j)),u["\u0275did"](149,16384,null,0,p.a,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[16,4]],c.b,null,[p.a]),(l()(),u["\u0275and"](0,null,null,2,null,q)),u["\u0275did"](152,540672,null,0,p.f,[u.TemplateRef,u.IterableDiffers],{columns:[0,"columns"]},null),u["\u0275prd"](2048,[[5,4]],c.l,null,[p.f]),(l()(),u["\u0275and"](0,null,null,2,null,Q)),u["\u0275did"](155,540672,null,0,p.h,[u.TemplateRef,u.IterableDiffers],{columns:[0,"columns"]},null),u["\u0275prd"](2048,[[4,4]],c.n,null,[p.h]),(l()(),u["\u0275and"](16777216,null,null,1,null,U)),u["\u0275did"](158,16384,null,0,m.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](159,0,null,null,2,"mat-paginator",[["class","mat-paginator"]],null,[[null,"page"]],(function(l,n,e){var u=!0;return"page"===n&&(u=!1!==l.component.serverside(e)&&u),u}),f.b,f.a)),u["\u0275did"](160,245760,[[1,4]],0,C.b,[C.c,u.ChangeDetectorRef],{length:[0,"length"],pageSize:[1,"pageSize"],pageSizeOptions:[2,"pageSizeOptions"]},{page:"page"}),u["\u0275pad"](161,3)],(function(l,n){var e=n.component;l(n,39,0,"filter_name",e.productName),l(n,52,0,"filter_model",e.model),l(n,65,0,"filter_status",e.status),l(n,69,0,"-1"),l(n,70,0,"-1"),l(n,74,0,"1"),l(n,75,0,"1"),l(n,79,0,"0"),l(n,80,0,"0"),l(n,94,0,e.dataSource),l(n,101,0,"product_name"),l(n,114,0,"model"),l(n,127,0,"viewed"),l(n,140,0,"percent"),l(n,152,0,e.displayedColumns),l(n,155,0,e.displayedColumns),l(n,158,0,0==e.length);var u=e.length,t=l(n,161,0,10,50,100);l(n,160,0,u,10,t)}),(function(l,n){l(n,10,0,u["\u0275unv"](n,10,0,u["\u0275nov"](n,11).transform("products_viewed_heading_title"))),l(n,15,0,u["\u0275unv"](n,15,0,u["\u0275nov"](n,16).transform("text_home"))),l(n,19,0,u["\u0275unv"](n,19,0,u["\u0275nov"](n,20).transform("products_viewed_heading_title"))),l(n,26,0,u["\u0275unv"](n,26,0,u["\u0275nov"](n,27).transform("products_viewed_text_list"))),l(n,34,0,u["\u0275unv"](n,34,0,u["\u0275nov"](n,35).transform("products_column_name"))),l(n,36,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](n,36,0,u["\u0275nov"](n,42).transform("products_column_name")),""),u["\u0275nov"](n,41).ngClassUntouched,u["\u0275nov"](n,41).ngClassTouched,u["\u0275nov"](n,41).ngClassPristine,u["\u0275nov"](n,41).ngClassDirty,u["\u0275nov"](n,41).ngClassValid,u["\u0275nov"](n,41).ngClassInvalid,u["\u0275nov"](n,41).ngClassPending),l(n,47,0,u["\u0275unv"](n,47,0,u["\u0275nov"](n,48).transform("products_column_model"))),l(n,49,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](n,49,0,u["\u0275nov"](n,55).transform("products_column_model")),""),u["\u0275nov"](n,54).ngClassUntouched,u["\u0275nov"](n,54).ngClassTouched,u["\u0275nov"](n,54).ngClassPristine,u["\u0275nov"](n,54).ngClassDirty,u["\u0275nov"](n,54).ngClassValid,u["\u0275nov"](n,54).ngClassInvalid,u["\u0275nov"](n,54).ngClassPending),l(n,60,0,u["\u0275unv"](n,60,0,u["\u0275nov"](n,61).transform("products_column_status"))),l(n,62,0,u["\u0275nov"](n,67).ngClassUntouched,u["\u0275nov"](n,67).ngClassTouched,u["\u0275nov"](n,67).ngClassPristine,u["\u0275nov"](n,67).ngClassDirty,u["\u0275nov"](n,67).ngClassValid,u["\u0275nov"](n,67).ngClassInvalid,u["\u0275nov"](n,67).ngClassPending),l(n,71,0,u["\u0275unv"](n,71,0,u["\u0275nov"](n,72).transform("text_all_status"))),l(n,76,0,u["\u0275unv"](n,76,0,u["\u0275nov"](n,77).transform("text_enabled"))),l(n,81,0,u["\u0275unv"](n,81,0,u["\u0275nov"](n,82).transform("text_disabled"))),l(n,85,0,u["\u0275unv"](n,85,0,u["\u0275nov"](n,86).transform("products_entry_filter"))),l(n,87,0,u["\u0275nov"](n,91).ngClassUntouched,u["\u0275nov"](n,91).ngClassTouched,u["\u0275nov"](n,91).ngClassPristine,u["\u0275nov"](n,91).ngClassDirty,u["\u0275nov"](n,91).ngClassValid,u["\u0275nov"](n,91).ngClassInvalid,u["\u0275nov"](n,91).ngClassPending)}))}function V(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-product_viewed-list",[],null,null,null,O,T)),u["\u0275did"](1,114688,null,0,P,[I.a,I.k,w.a,r.h,D.c,R.a],null,null)],(function(l,n){l(n,1,0)}),null)}var A=u["\u0275ccf"]("app-product_viewed-list",P,V,{},{},[]),z=e("QQfA"),F=e("POq0"),H=e("JjoW"),B=e("Mz6y"),J=e("cUpR"),G=e("Xd0L"),Z=e("s6ns"),$=e("821u"),K=e("Fwaw"),W=e("zMNK"),X=e("hOhj"),Y=e("HsOI"),ll=e("5GAg"),nl=e("oapL"),el=e("ZwOa"),ul=e("Nv++");class tl{}e.d(n,"ProductViewedModuleNgFactory",(function(){return dl}));var dl=u["\u0275cmf"](t,[],(function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,i.a,o.b,o.a,a.a,A]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[u.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,z.c,z.c,[z.i,z.e,u.ComponentFactoryResolver,z.h,z.f,u.Injector,u.NgZone,m.DOCUMENT,g.b,[2,m.Location]]),u["\u0275mpd"](5120,z.j,z.k,[z.c]),u["\u0275mpd"](4608,F.c,F.c,[]),u["\u0275mpd"](5120,H.a,H.b,[z.c]),u["\u0275mpd"](5120,B.b,B.c,[z.c]),u["\u0275mpd"](4608,J.f,G.c,[[2,G.g],[2,G.l]]),u["\u0275mpd"](5120,C.c,C.a,[[3,C.c]]),u["\u0275mpd"](4608,G.b,G.b,[]),u["\u0275mpd"](5120,Z.b,Z.c,[z.c]),u["\u0275mpd"](135680,Z.d,Z.d,[z.c,u.Injector,[2,m.Location],[2,Z.a],Z.b,[3,Z.d],z.e]),u["\u0275mpd"](4608,$.h,$.h,[]),u["\u0275mpd"](5120,$.a,$.b,[z.c]),u["\u0275mpd"](4608,G.a,G.w,[[2,G.f],v.a]),u["\u0275mpd"](4608,h.A,h.A,[]),u["\u0275mpd"](4608,h.f,h.f,[]),u["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),u["\u0275mpd"](1073742336,c.p,c.p,[]),u["\u0275mpd"](1073742336,g.a,g.a,[]),u["\u0275mpd"](1073742336,G.l,G.l,[[2,G.d],[2,J.g]]),u["\u0275mpd"](1073742336,p.k,p.k,[]),u["\u0275mpd"](1073742336,v.b,v.b,[]),u["\u0275mpd"](1073742336,G.v,G.v,[]),u["\u0275mpd"](1073742336,K.c,K.c,[]),u["\u0275mpd"](1073742336,W.f,W.f,[]),u["\u0275mpd"](1073742336,X.b,X.b,[]),u["\u0275mpd"](1073742336,z.g,z.g,[]),u["\u0275mpd"](1073742336,G.t,G.t,[]),u["\u0275mpd"](1073742336,G.q,G.q,[]),u["\u0275mpd"](1073742336,F.d,F.d,[]),u["\u0275mpd"](1073742336,Y.d,Y.d,[]),u["\u0275mpd"](1073742336,H.d,H.d,[]),u["\u0275mpd"](1073742336,ll.a,ll.a,[]),u["\u0275mpd"](1073742336,B.e,B.e,[]),u["\u0275mpd"](1073742336,C.d,C.d,[]),u["\u0275mpd"](1073742336,nl.c,nl.c,[]),u["\u0275mpd"](1073742336,el.b,el.b,[]),u["\u0275mpd"](1073742336,Z.g,Z.g,[]),u["\u0275mpd"](1073742336,$.i,$.i,[]),u["\u0275mpd"](1073742336,G.x,G.x,[]),u["\u0275mpd"](1073742336,G.n,G.n,[]),u["\u0275mpd"](1073742336,ul.a,ul.a,[]),u["\u0275mpd"](1073742336,h.z,h.z,[]),u["\u0275mpd"](1073742336,h.k,h.k,[]),u["\u0275mpd"](1073742336,h.w,h.w,[]),u["\u0275mpd"](1073742336,r.h,r.h,[]),u["\u0275mpd"](1073742336,I.o,I.o,[[2,I.t],[2,I.k]]),u["\u0275mpd"](1073742336,tl,tl,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](256,G.e,G.i,[]),u["\u0275mpd"](1024,I.i,(function(){return[[{path:"list",component:P},{path:"",redirectTo:"list",pathMatch:"full"}]]}),[])])}))}}]);