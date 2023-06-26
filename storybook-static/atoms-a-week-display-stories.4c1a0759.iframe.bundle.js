"use strict";(self.webpackChunkproworkforce_ts=self.webpackChunkproworkforce_ts||[]).push([[8224],{"./frontend/components/atoms/a-week-display.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>WeekDisplay});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/typography/index.js"),_styles_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/styles/colors.ts"),_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/styles/variables.module.scss"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,WeekDisplay=function WeekDisplay(_ref){var week=_ref.week,isStart=_ref.isStart,Text=antd__WEBPACK_IMPORTED_MODULE_3__.Z.Text;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{style:{width:_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z.weekDisplayWidth,height:_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z.weekDisplayHeight,background:"".concat(isStart?(0,_styles_colors__WEBPACK_IMPORTED_MODULE_1__.Uk)(_styles_colors__WEBPACK_IMPORTED_MODULE_1__.O9.PRIMARY)[5]:"none"),borderTopLeftRadius:_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z.standardBorderRadius,borderTopRightRadius:_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z.standardBorderRadius,display:"flex",justifyContent:"center",alignItems:"center"}},__jsx(Text,{strong:isStart,style:{color:"".concat(isStart?(0,_styles_colors__WEBPACK_IMPORTED_MODULE_1__.Uk)(_styles_colors__WEBPACK_IMPORTED_MODULE_1__.O9.NEUTRAL)[0]:(0,_styles_colors__WEBPACK_IMPORTED_MODULE_1__.Uk)(_styles_colors__WEBPACK_IMPORTED_MODULE_1__.O9.NEUTRAL)[12])}},"cw ",week)))};WeekDisplay.__docgenInfo={description:"",methods:[],displayName:"WeekDisplay"};try{WeekDisplay.displayName="WeekDisplay",WeekDisplay.__docgenInfo={description:"",displayName:"WeekDisplay",props:{week:{defaultValue:null,description:"",name:"week",required:!0,type:{name:"number"}},isStart:{defaultValue:null,description:"",name:"isStart",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["frontend/components/atoms/a-week-display.tsx#WeekDisplay"]={docgenInfo:WeekDisplay.__docgenInfo,name:"WeekDisplay",path:"frontend/components/atoms/a-week-display.tsx#WeekDisplay"})}catch(__react_docgen_typescript_loader_error){}},"./frontend/styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O9:()=>colors,Uk:()=>getAntDesignColor,vm:()=>getTagColor});var _prisma_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@prisma/client/index-browser.js"),_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ant-design/colors/es/index.js"),primary=["#e6f7ff","#bae7ff","#91d5ff","#69c0ff","#40a9ff","#1890ff","#096dd9","#0050b3","#003a8c","#002766"],neutral=["#ffffff","#fafafa","#f5f5f5","#f0f0f0","#d9d9d9","#bfbfbf","#8c8c8c","#595959","#434343","#262626","#1f1f1f","#141414","#000000"],colors=function(colors){return colors.PRIMARY="primary",colors.NEUTRAL="neutral",colors.RED="red",colors.YELLOW="yellow",colors.ORANGE="orange",colors.CYAN="cyan",colors.GREEN="green",colors.BLUE="blue",colors.PURPLE="purple",colors.GEEKBLUE="geekblue",colors.MAGENTA="magenta",colors.VOLCANO="volcano",colors.GOLD="gold",colors.LIME="lime",colors.GRAY="gray",colors.GREY="grey",colors}({}),getTagColor=function getTagColor(status){return status===_prisma_client__WEBPACK_IMPORTED_MODULE_1__.State.ARCHIVED?"purple":status===_prisma_client__WEBPACK_IMPORTED_MODULE_1__.State.COMPLETED?"green":status===_prisma_client__WEBPACK_IMPORTED_MODULE_1__.State.DRAFT?"orange":"geekblue"},getAntDesignColor=function getAntDesignColor(color){return"primary"===color?primary:"neutral"===color?neutral:"red"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.Q6:"yellow"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.er:"orange"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.$y:"cyan"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.sl:"green"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.ek:"blue"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.iN:"purple"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.jk:"geekblue"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.oZ:"magenta"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.Ce:"volcano"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.b_:"gold"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.EV:"lime"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.LR:"gray"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.MA:_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.BA}},"./stories/atoms/a-week-display.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,normalWeek:()=>normalWeek,projectStartWeek:()=>projectStartWeek});var _normalWeek$parameter,_normalWeek$parameter2,_normalWeek$parameter3,_projectStartWeek$par,_projectStartWeek$par2,_projectStartWeek$par3,_Users_lucasfalkowsky_Desktop_Hochschule_Semester_VIII_05_Projekt_proworkforce_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_lucasfalkowsky_Desktop_Hochschule_Semester_VIII_05_Projekt_proworkforce_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"atoms/WeekDisplay",component:__webpack_require__("./frontend/components/atoms/a-week-display.tsx").M,tags:["autodocs"],parameters:{week:36,isStart:!0}};var normalWeek={args:{week:36,isStart:!1}},projectStartWeek={args:{week:36,isStart:!0}};normalWeek.parameters=_objectSpread(_objectSpread({},normalWeek.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_normalWeek$parameter=normalWeek.parameters)||void 0===_normalWeek$parameter?void 0:_normalWeek$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    week: 36,\n    isStart: false\n  }\n}"},null===(_normalWeek$parameter2=normalWeek.parameters)||void 0===_normalWeek$parameter2||null===(_normalWeek$parameter3=_normalWeek$parameter2.docs)||void 0===_normalWeek$parameter3?void 0:_normalWeek$parameter3.source)})}),projectStartWeek.parameters=_objectSpread(_objectSpread({},projectStartWeek.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_projectStartWeek$par=projectStartWeek.parameters)||void 0===_projectStartWeek$par?void 0:_projectStartWeek$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    week: 36,\n    isStart: true\n  }\n}"},null===(_projectStartWeek$par2=projectStartWeek.parameters)||void 0===_projectStartWeek$par2||null===(_projectStartWeek$par3=_projectStartWeek$par2.docs)||void 0===_projectStartWeek$par3?void 0:_projectStartWeek$par3.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./frontend/styles/variables.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={shiftLeft:"-8px",gapStandard:"8px",paddingXSmall:"2px",paddingSmall:"4px",paddingStandard:"8px",paddingLarge:"16px",paddingHuge:"24px",offsetOutline:"-3px",outlineNoColor:"2px solid",xSmallBorderRadius:"2px",smallBorderRadius:"4px",standardBorderRadius:"8px",largeBorderRadius:"16px",hugeBorderRadius:"24px",borderRadiusCircle:"50%",thinBorderNoColor:"1px solid",mediumBorderNoColor:"2px solid",boxShadowTopNoColor:"0 -2px 3px",boxShadowRightNoColor:"2px 0 3px",boxShadowRotatedRightNoColor:"2px -2px 2px",boxShadowActiveNoColor:"0 0 2px",boxShadowSelectedNoColor:"inset 0 0 8px 2px",boxShadowUpwardsNoColor:"inset 0 -15px 10px -15px",shortRotateRight:"rotate(45deg)",shortRotateLeft:"rotate(-45deg)",iconDiameter:"35px",dayColumnWidth:"15px",weekDisplayWidth:"105px",weekDisplayHeight:"40px",teamCardWidth:"250px",teamCardHeight:"100px",timeSlotHeight:"52px",selectorMinWidth:"200px",rowHeight:"400px",navBarLogoBorderOpen:"100px",navBarLogoBorderClosed:"30px",navOpenWidth:"200px",navClosedWidth:"47px",navMenuHeight:"calc(100vh - 148px)",layerTop:"100",layerCenter:"50",layerBottom:"0",maxPopConfirmWidth:"200px",assignedTeamsButtonHeight:"64px"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./frontend/styles/variables.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./frontend/styles/variables.module.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);