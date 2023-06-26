"use strict";(self.webpackChunkproworkforce_ts=self.webpackChunkproworkforce_ts||[]).push([[7306],{"./stories/organisms/modals/o-calculate-time-modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{closedState:()=>closedState,default:()=>o_calculate_time_modal_stories,openState:()=>openState});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),modal=__webpack_require__("./node_modules/antd/es/modal/index.js"),row=__webpack_require__("./node_modules/antd/es/row/index.js"),es_form=__webpack_require__("./node_modules/antd/es/form/index.js"),col=__webpack_require__("./node_modules/antd/es/col/index.js"),input_number=__webpack_require__("./node_modules/antd/es/input-number/index.js"),react=__webpack_require__("./node_modules/react/index.js"),InfoCircleOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js"),typography=__webpack_require__("./node_modules/antd/es/typography/index.js"),variables_module=__webpack_require__("./frontend/styles/variables.module.scss"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var _openState$parameters,_openState$parameters2,_openState$parameters3,_closedState$paramete,_closedState$paramete2,_closedState$paramete3,CalculateTimeModal=function CalculateTimeModal(_ref){var isOpen=_ref.isOpen,setIsOpen=_ref.setIsOpen,_useState=(_ref.setTime,(0,react.useState)(!1)),showExplaination=_useState[0],setShowExplaination=_useState[1],_useState2=(0,react.useState)(),estimatedTime=_useState2[0],setEstimatedTime=_useState2[1],_useState3=(0,react.useState)(),inofficialTime=_useState3[0],setInofficialTime=_useState3[1],_useState4=(0,react.useState)({optimisticGuess:0,realisticGuess:0,pessimisticGuess:0}),values=_useState4[0],setValues=_useState4[1],handleChange=function handleChange(fieldName,value){setValues((function(prevValues){return _objectSpread(_objectSpread({},prevValues),{},(0,defineProperty.Z)({},fieldName,value))})),calculateTimeEstimation()},calculateTimeEstimation=function calculateTimeEstimation(){var optimisticGuess=values.optimisticGuess,realisticGuess=values.realisticGuess,pessimisticGuess=values.pessimisticGuess;if(optimisticGuess&&realisticGuess&&pessimisticGuess){var estimation=(optimisticGuess+4*realisticGuess+pessimisticGuess)/6;setEstimatedTime(Math.ceil(estimation));var externalEstimation=estimation+2*((pessimisticGuess-optimisticGuess)/6);setInofficialTime(Math.ceil(externalEstimation))}else setEstimatedTime(null)},Text=typography.Z.Text,Title=typography.Z.Title;return __jsx(react.Fragment,null,__jsx(modal.Z,{title:__jsx("div",null,"Calculate time ",__jsx(InfoCircleOutlined.Z,{style:{cursor:"pointer"},onClick:function onClick(){return setShowExplaination(!showExplaination)}})),centered:!0,open:isOpen,onOk:function onOk(){return console.log("OK")},onCancel:setIsOpen},__jsx(row.Z,{style:{display:"inline-flex",gap:variables_module.Z.gapStandard,width:"100%"}},__jsx(es_form.Z,{style:{flex:"1"}},__jsx(col.Z,null,__jsx(es_form.Z.Item,null,__jsx("label",null,"optimistic guess"),__jsx(input_number.Z,{addonAfter:"hours",defaultValue:0,style:{width:"100%"},onChange:function onChange(value){return handleChange("optimisticGuess",value)},onBlur:function onBlur(event){return handleChange("optimisticGuess",Number(event.target.value))}})),__jsx(es_form.Z.Item,null,__jsx("label",null,"realistic guess"),__jsx(input_number.Z,{addonAfter:"hours",defaultValue:0,style:{width:"100%"},onChange:function onChange(value){return handleChange("realisticGuess",value)},onBlur:function onBlur(event){return handleChange("realisticGuess",Number(event.target.value))}})),__jsx(es_form.Z.Item,null,__jsx("label",null,"pessimistic guess"),__jsx(input_number.Z,{addonAfter:"hours",defaultValue:0,style:{width:"100%"},onChange:function onChange(value){return handleChange("pessimisticGuess",value)},onBlur:function onBlur(event){return handleChange("pessimisticGuess",Number(event.target.value))}}))),estimatedTime?__jsx(react.Fragment,null,__jsx(col.Z,null,__jsx(Text,null,"Internal estimation: "),__jsx(Text,{strong:!0},estimatedTime),__jsx(Text,null," hours")),__jsx(col.Z,null,__jsx(Text,null,__jsx(Text,null,"External extimation: "),__jsx(Text,{strong:!0},inofficialTime),__jsx(Text,null," hours")))):__jsx(Text,null,"Fill out all fields to calculate the estimation for internal and external usage.")),showExplaination&&__jsx(col.Z,{style:{flex:"1"}},__jsx(Title,{level:5,style:{marginTop:"0"}},"How does it work?"),__jsx(Text,null,"PERT's three-point estimation technique is used to estimate the time required to complete a project phase. It considers three estimates for each task: optimistic, most likely, and pessimistic. This method helps to provide a more realistic and accurate estimate by considering potential risks and uncertainties that may affect the task, allowing for better management of resources and timelines.")))))};CalculateTimeModal.__docgenInfo={description:"",methods:[],displayName:"CalculateTimeModal"};try{CalculateTimeModal.displayName="CalculateTimeModal",CalculateTimeModal.__docgenInfo={description:"",displayName:"CalculateTimeModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"() => void"}},setTime:{defaultValue:null,description:"",name:"setTime",required:!0,type:{name:"(time: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["frontend/components/organisms/modals/o-calculate-time-modal.tsx#CalculateTimeModal"]={docgenInfo:CalculateTimeModal.__docgenInfo,name:"CalculateTimeModal",path:"frontend/components/organisms/modals/o-calculate-time-modal.tsx#CalculateTimeModal"})}catch(__react_docgen_typescript_loader_error){}function o_calculate_time_modal_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function o_calculate_time_modal_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o_calculate_time_modal_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):o_calculate_time_modal_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var o_calculate_time_modal_stories_open=!0;const o_calculate_time_modal_stories={title:"organisms/modals/CalculateTimeModal",component:CalculateTimeModal,tags:["autodocs"],parameters:{isOpen:o_calculate_time_modal_stories_open,setIsOpen:function setIsOpen(){o_calculate_time_modal_stories_open=!o_calculate_time_modal_stories_open}}};var openState={args:{isOpen:!0}},closedState={args:{isOpen:!1}};openState.parameters=o_calculate_time_modal_stories_objectSpread(o_calculate_time_modal_stories_objectSpread({},openState.parameters),{},{docs:o_calculate_time_modal_stories_objectSpread(o_calculate_time_modal_stories_objectSpread({},null===(_openState$parameters=openState.parameters)||void 0===_openState$parameters?void 0:_openState$parameters.docs),{},{source:o_calculate_time_modal_stories_objectSpread({originalSource:"{\n  args: {\n    isOpen: true\n  }\n}"},null===(_openState$parameters2=openState.parameters)||void 0===_openState$parameters2||null===(_openState$parameters3=_openState$parameters2.docs)||void 0===_openState$parameters3?void 0:_openState$parameters3.source)})}),closedState.parameters=o_calculate_time_modal_stories_objectSpread(o_calculate_time_modal_stories_objectSpread({},closedState.parameters),{},{docs:o_calculate_time_modal_stories_objectSpread(o_calculate_time_modal_stories_objectSpread({},null===(_closedState$paramete=closedState.parameters)||void 0===_closedState$paramete?void 0:_closedState$paramete.docs),{},{source:o_calculate_time_modal_stories_objectSpread({originalSource:"{\n  args: {\n    isOpen: false\n  }\n}"},null===(_closedState$paramete2=closedState.parameters)||void 0===_closedState$paramete2||null===(_closedState$paramete3=_closedState$paramete2.docs)||void 0===_closedState$paramete3?void 0:_closedState$paramete3.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./frontend/styles/variables.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={shiftLeft:"-8px",gapStandard:"8px",paddingXSmall:"2px",paddingSmall:"4px",paddingStandard:"8px",paddingLarge:"16px",paddingHuge:"24px",offsetOutline:"-3px",outlineNoColor:"2px solid",xSmallBorderRadius:"2px",smallBorderRadius:"4px",standardBorderRadius:"8px",largeBorderRadius:"16px",hugeBorderRadius:"24px",borderRadiusCircle:"50%",thinBorderNoColor:"1px solid",mediumBorderNoColor:"2px solid",boxShadowTopNoColor:"0 -2px 3px",boxShadowRightNoColor:"2px 0 3px",boxShadowRotatedRightNoColor:"2px -2px 2px",boxShadowActiveNoColor:"0 0 2px",boxShadowSelectedNoColor:"inset 0 0 8px 2px",boxShadowUpwardsNoColor:"inset 0 -15px 10px -15px",shortRotateRight:"rotate(45deg)",shortRotateLeft:"rotate(-45deg)",iconDiameter:"35px",dayColumnWidth:"15px",weekDisplayWidth:"105px",weekDisplayHeight:"40px",teamCardWidth:"250px",teamCardHeight:"100px",timeSlotHeight:"52px",selectorMinWidth:"200px",rowHeight:"400px",navBarLogoBorderOpen:"100px",navBarLogoBorderClosed:"30px",navOpenWidth:"200px",navClosedWidth:"47px",navMenuHeight:"calc(100vh - 148px)",layerTop:"100",layerCenter:"50",layerBottom:"0",maxPopConfirmWidth:"200px",assignedTeamsButtonHeight:"64px"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./frontend/styles/variables.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./frontend/styles/variables.module.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);