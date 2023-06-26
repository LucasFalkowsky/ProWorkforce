"use strict";(self.webpackChunkproworkforce_ts=self.webpackChunkproworkforce_ts||[]).push([[7551],{"./node_modules/antd/es/col/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/antd/es/grid/col.js").Z},"./node_modules/antd/es/grid/col.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_config_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),_RowContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/grid/RowContext.js"),_style__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/grid/style/index.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const sizes=["xs","sm","md","lg","xl","xxl"];const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((props,ref)=>{const{getPrefixCls,direction}=react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__.E_),{gutter,wrap,supportFlexGap}=react__WEBPACK_IMPORTED_MODULE_1__.useContext(_RowContext__WEBPACK_IMPORTED_MODULE_3__.Z),{prefixCls:customizePrefixCls,span,order,offset,push,pull,className,children,flex,style}=props,others=__rest(props,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),prefixCls=getPrefixCls("col",customizePrefixCls),[wrapSSR,hashId]=(0,_style__WEBPACK_IMPORTED_MODULE_4__.c)(prefixCls);let sizeClassObj={};sizes.forEach((size=>{let sizeProps={};const propSize=props[size];"number"==typeof propSize?sizeProps.span=propSize:"object"==typeof propSize&&(sizeProps=propSize||{}),delete others[size],sizeClassObj=Object.assign(Object.assign({},sizeClassObj),{[`${prefixCls}-${size}-${sizeProps.span}`]:void 0!==sizeProps.span,[`${prefixCls}-${size}-order-${sizeProps.order}`]:sizeProps.order||0===sizeProps.order,[`${prefixCls}-${size}-offset-${sizeProps.offset}`]:sizeProps.offset||0===sizeProps.offset,[`${prefixCls}-${size}-push-${sizeProps.push}`]:sizeProps.push||0===sizeProps.push,[`${prefixCls}-${size}-pull-${sizeProps.pull}`]:sizeProps.pull||0===sizeProps.pull,[`${prefixCls}-${size}-flex-${sizeProps.flex}`]:sizeProps.flex||"auto"===sizeProps.flex,[`${prefixCls}-rtl`]:"rtl"===direction})}));const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls,{[`${prefixCls}-${span}`]:void 0!==span,[`${prefixCls}-order-${order}`]:order,[`${prefixCls}-offset-${offset}`]:offset,[`${prefixCls}-push-${push}`]:push,[`${prefixCls}-pull-${pull}`]:pull},className,sizeClassObj,hashId),mergedStyle={};if(gutter&&gutter[0]>0){const horizontalGutter=gutter[0]/2;mergedStyle.paddingLeft=horizontalGutter,mergedStyle.paddingRight=horizontalGutter}if(gutter&&gutter[1]>0&&!supportFlexGap){const verticalGutter=gutter[1]/2;mergedStyle.paddingTop=verticalGutter,mergedStyle.paddingBottom=verticalGutter}return flex&&(mergedStyle.flex=function parseFlex(flex){return"number"==typeof flex?`${flex} ${flex} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)?`0 0 ${flex}`:flex}(flex),!1!==wrap||mergedStyle.minWidth||(mergedStyle.minWidth=0)),wrapSSR(react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",Object.assign({},others,{style:Object.assign(Object.assign({},mergedStyle),style),className:classes,ref}),children))}))},"./frontend/components/atoms/a-week-display.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>WeekDisplay});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/typography/index.js"),_styles_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/styles/colors.ts"),_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/styles/variables.module.scss"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,WeekDisplay=function WeekDisplay(_ref){var week=_ref.week,isStart=_ref.isStart,Text=antd__WEBPACK_IMPORTED_MODULE_3__.Z.Text;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{style:{width:_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z.weekDisplayWidth,height:_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z.weekDisplayHeight,background:"".concat(isStart?(0,_styles_colors__WEBPACK_IMPORTED_MODULE_1__.Uk)(_styles_colors__WEBPACK_IMPORTED_MODULE_1__.O9.PRIMARY)[5]:"none"),borderTopLeftRadius:_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z.standardBorderRadius,borderTopRightRadius:_styles_variables_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z.standardBorderRadius,display:"flex",justifyContent:"center",alignItems:"center"}},__jsx(Text,{strong:isStart,style:{color:"".concat(isStart?(0,_styles_colors__WEBPACK_IMPORTED_MODULE_1__.Uk)(_styles_colors__WEBPACK_IMPORTED_MODULE_1__.O9.NEUTRAL)[0]:(0,_styles_colors__WEBPACK_IMPORTED_MODULE_1__.Uk)(_styles_colors__WEBPACK_IMPORTED_MODULE_1__.O9.NEUTRAL)[12])}},"cw ",week)))};WeekDisplay.__docgenInfo={description:"",methods:[],displayName:"WeekDisplay"};try{WeekDisplay.displayName="WeekDisplay",WeekDisplay.__docgenInfo={description:"",displayName:"WeekDisplay",props:{week:{defaultValue:null,description:"",name:"week",required:!0,type:{name:"number"}},isStart:{defaultValue:null,description:"",name:"isStart",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["frontend/components/atoms/a-week-display.tsx#WeekDisplay"]={docgenInfo:WeekDisplay.__docgenInfo,name:"WeekDisplay",path:"frontend/components/atoms/a-week-display.tsx#WeekDisplay"})}catch(__react_docgen_typescript_loader_error){}},"./frontend/components/molecules/m-week-row.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>WeekRow});var react=__webpack_require__("./node_modules/react/index.js"),a_week_display=__webpack_require__("./frontend/components/atoms/a-week-display.tsx"),col=__webpack_require__("./node_modules/antd/es/col/index.js"),row=__webpack_require__("./node_modules/antd/es/row/index.js"),colors=__webpack_require__("./frontend/styles/colors.ts"),variables_module=__webpack_require__("./frontend/styles/variables.module.scss"),__jsx=react.createElement,DayColumn=function DayColumn(_ref){var color=_ref.color,date=_ref.date,isNonWorkingDay=_ref.isNonWorkingDay,isNewYear=_ref.isNewYear,_useState=(0,react.useState)(isNonWorkingDay?(0,colors.Uk)(colors.O9.NEUTRAL)[2]:(0,colors.Uk)(colors.O9.NEUTRAL)[0]),bgColor=_useState[0],setBgColor=_useState[1],today=new Date(date);(0,react.useEffect)((function(){var dayColumnHTMLElement=document.getElementById("".concat(date,"-column"));if(1===today.getDate()&&0===today.getMonth()){if(!dayColumnHTMLElement)return;var bounding=dayColumnHTMLElement.getBoundingClientRect();isNewYear(bounding.x)}}),[]);return __jsx(react.Fragment,null,__jsx(col.Z,{id:"".concat(date,"-column"),style:{width:variables_module.Z.dayColumnWidth,height:"100%",borderRight:"".concat(variables_module.Z.thinBorderNoColor," ").concat((0,colors.Uk)(colors.O9.NEUTRAL)[4]),backgroundColor:bgColor},onMouseEnter:function onMouseEnter(){return setBgColor(isNonWorkingDay?(0,colors.Uk)(colors.O9.NEUTRAL)[3]:(0,colors.Uk)(color)[1])},onMouseLeave:function onMouseLeave(){return setBgColor(isNonWorkingDay?(0,colors.Uk)(colors.O9.NEUTRAL)[2]:(0,colors.Uk)(colors.O9.NEUTRAL)[0])},onMouseDown:function onMouseDown(){return function handleMouseDown(){var dayColumnHTMLElement=document.getElementById("".concat(date,"-column"));dayColumnHTMLElement&&dayColumnHTMLElement.getBoundingClientRect().x}()},onMouseUp:function onMouseUp(){return function handleMouseUp(){var dayColumnHTMLElement=document.getElementById("".concat(date,"-column"));dayColumnHTMLElement&&dayColumnHTMLElement.getBoundingClientRect().x}()}}))};DayColumn.__docgenInfo={description:"",methods:[],displayName:"DayColumn"};try{DayColumn.displayName="DayColumn",DayColumn.__docgenInfo={description:"",displayName:"DayColumn",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"neutral"'},{value:'"red"'},{value:'"yellow"'},{value:'"orange"'},{value:'"cyan"'},{value:'"green"'},{value:'"blue"'},{value:'"purple"'},{value:'"geekblue"'},{value:'"magenta"'},{value:'"volcano"'},{value:'"gold"'},{value:'"lime"'},{value:'"gray"'},{value:'"grey"'}]}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}},isNonWorkingDay:{defaultValue:null,description:"",name:"isNonWorkingDay",required:!1,type:{name:"boolean"}},isNewYear:{defaultValue:null,description:"",name:"isNewYear",required:!0,type:{name:"(offsetX: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["frontend/components/atoms/a-day-column.tsx#DayColumn"]={docgenInfo:DayColumn.__docgenInfo,name:"DayColumn",path:"frontend/components/atoms/a-day-column.tsx#DayColumn"})}catch(__react_docgen_typescript_loader_error){}var m_week_row_jsx=react.createElement,WeekRow=function WeekRow(_ref){var weekData=_ref.weekData,color=_ref.color,rowHeight=_ref.rowHeight,isStart=_ref.isStart,setNewYear=_ref.setNewYear;return m_week_row_jsx(react.Fragment,null,m_week_row_jsx(col.Z,null,m_week_row_jsx(a_week_display.M,{week:weekData.week,isStart}),m_week_row_jsx(row.Z,{style:{height:rowHeight}},weekData.days.map((function(day){return m_week_row_jsx("div",{key:day.day},m_week_row_jsx(DayColumn,{color,date:day.date,isNonWorkingDay:day.isNonWorkingDay,isNewYear:function isNewYear(offset){return setNewYear(new Date(day.date).getFullYear(),offset)}}))})))))};WeekRow.__docgenInfo={description:"",methods:[],displayName:"WeekRow"};try{WeekRow.displayName="WeekRow",WeekRow.__docgenInfo={description:"",displayName:"WeekRow",props:{weekData:{defaultValue:null,description:"",name:"weekData",required:!0,type:{name:"WeekData"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"neutral"'},{value:'"red"'},{value:'"yellow"'},{value:'"orange"'},{value:'"cyan"'},{value:'"green"'},{value:'"blue"'},{value:'"purple"'},{value:'"geekblue"'},{value:'"magenta"'},{value:'"volcano"'},{value:'"gold"'},{value:'"lime"'},{value:'"gray"'},{value:'"grey"'}]}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"string"}},isStart:{defaultValue:null,description:"",name:"isStart",required:!1,type:{name:"boolean"}},setNewYear:{defaultValue:null,description:"",name:"setNewYear",required:!0,type:{name:"(year: number, offsetX: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["frontend/components/molecules/m-week-row.tsx#WeekRow"]={docgenInfo:WeekRow.__docgenInfo,name:"WeekRow",path:"frontend/components/molecules/m-week-row.tsx#WeekRow"})}catch(__react_docgen_typescript_loader_error){}},"./frontend/styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O9:()=>colors,Uk:()=>getAntDesignColor,vm:()=>getTagColor});var _prisma_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@prisma/client/index-browser.js"),_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ant-design/colors/es/index.js"),primary=["#e6f7ff","#bae7ff","#91d5ff","#69c0ff","#40a9ff","#1890ff","#096dd9","#0050b3","#003a8c","#002766"],neutral=["#ffffff","#fafafa","#f5f5f5","#f0f0f0","#d9d9d9","#bfbfbf","#8c8c8c","#595959","#434343","#262626","#1f1f1f","#141414","#000000"],colors=function(colors){return colors.PRIMARY="primary",colors.NEUTRAL="neutral",colors.RED="red",colors.YELLOW="yellow",colors.ORANGE="orange",colors.CYAN="cyan",colors.GREEN="green",colors.BLUE="blue",colors.PURPLE="purple",colors.GEEKBLUE="geekblue",colors.MAGENTA="magenta",colors.VOLCANO="volcano",colors.GOLD="gold",colors.LIME="lime",colors.GRAY="gray",colors.GREY="grey",colors}({}),getTagColor=function getTagColor(status){return status===_prisma_client__WEBPACK_IMPORTED_MODULE_1__.State.ARCHIVED?"purple":status===_prisma_client__WEBPACK_IMPORTED_MODULE_1__.State.COMPLETED?"green":status===_prisma_client__WEBPACK_IMPORTED_MODULE_1__.State.DRAFT?"orange":"geekblue"},getAntDesignColor=function getAntDesignColor(color){return"primary"===color?primary:"neutral"===color?neutral:"red"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.Q6:"yellow"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.er:"orange"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.$y:"cyan"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.sl:"green"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.ek:"blue"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.iN:"purple"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.jk:"geekblue"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.oZ:"magenta"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.Ce:"volcano"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.b_:"gold"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.EV:"lime"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.LR:"gray"===color?_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.MA:_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.BA}},"./stories/molecules/m-week-row.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,primary:()=>primary});var _primary$parameters,_primary$parameters2,_primary$parameters2$,_Users_lucasfalkowsky_Desktop_Hochschule_Semester_VIII_05_Projekt_proworkforce_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_frontend_components_molecules_m_week_row__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./frontend/components/molecules/m-week-row.tsx"),_frontend_styles_colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./frontend/styles/colors.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_lucasfalkowsky_Desktop_Hochschule_Semester_VIII_05_Projekt_proworkforce_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"molecules/WeekRow",component:_frontend_components_molecules_m_week_row__WEBPACK_IMPORTED_MODULE_1__.U,tags:["autodocs"]};var primary={args:{weekData:{week:23,days:[{day:1,date:"2023-06-05"},{day:2,date:"2023-06-06"},{day:3,date:"2023-06-07"},{day:4,date:"2023-06-08"},{day:5,date:"2023-06-09",isNonWorkingDay:!0},{day:6,date:"2023-06-10",isNonWorkingDay:!0},{day:0,date:"2023-06-11",isNonWorkingDay:!0}]},color:_frontend_styles_colors__WEBPACK_IMPORTED_MODULE_2__.O9.CYAN,rowHeight:"400px",isStart:!0}};primary.parameters=_objectSpread(_objectSpread({},primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_primary$parameters=primary.parameters)||void 0===_primary$parameters?void 0:_primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    weekData: data,\n    color: colors.CYAN,\n    rowHeight: '400px',\n    isStart: true\n  }\n}"},null===(_primary$parameters2=primary.parameters)||void 0===_primary$parameters2||null===(_primary$parameters2$=_primary$parameters2.docs)||void 0===_primary$parameters2$?void 0:_primary$parameters2$.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./frontend/styles/variables.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={shiftLeft:"-8px",gapStandard:"8px",paddingXSmall:"2px",paddingSmall:"4px",paddingStandard:"8px",paddingLarge:"16px",paddingHuge:"24px",offsetOutline:"-3px",outlineNoColor:"2px solid",xSmallBorderRadius:"2px",smallBorderRadius:"4px",standardBorderRadius:"8px",largeBorderRadius:"16px",hugeBorderRadius:"24px",borderRadiusCircle:"50%",thinBorderNoColor:"1px solid",mediumBorderNoColor:"2px solid",boxShadowTopNoColor:"0 -2px 3px",boxShadowRightNoColor:"2px 0 3px",boxShadowRotatedRightNoColor:"2px -2px 2px",boxShadowActiveNoColor:"0 0 2px",boxShadowSelectedNoColor:"inset 0 0 8px 2px",boxShadowUpwardsNoColor:"inset 0 -15px 10px -15px",shortRotateRight:"rotate(45deg)",shortRotateLeft:"rotate(-45deg)",iconDiameter:"35px",dayColumnWidth:"15px",weekDisplayWidth:"105px",weekDisplayHeight:"40px",teamCardWidth:"250px",teamCardHeight:"100px",timeSlotHeight:"52px",selectorMinWidth:"200px",rowHeight:"400px",navBarLogoBorderOpen:"100px",navBarLogoBorderClosed:"30px",navOpenWidth:"200px",navClosedWidth:"47px",navMenuHeight:"calc(100vh - 148px)",layerTop:"100",layerCenter:"50",layerBottom:"0",maxPopConfirmWidth:"200px",assignedTeamsButtonHeight:"64px"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./frontend/styles/variables.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./frontend/styles/variables.module.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_variables_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);