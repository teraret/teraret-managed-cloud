(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1139:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(65),_clientLogger=__webpack_require__(44),_configFilename=__webpack_require__(1140);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1140:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1141:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(402).configure)([__webpack_require__(1142),__webpack_require__(1143)],module,!1)}).call(this,__webpack_require__(123)(module))},1142:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":1151};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1142},1143:function(module,exports,__webpack_require__){var map={"./stories/Button.stories.js":1154,"./stories/CustomPaginationActionsTable.stories.js":1155};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1143},1144:function(module,exports,__webpack_require__){},1151:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var esm=__webpack_require__(11),blocks=__webpack_require__(243),code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments=__webpack_require__.p+"static/media/comments.a3859089.svg",direction=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow=__webpack_require__.p+"static/media/flow.edad2ac1.svg",assets_plugin=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Example/Introduction",mdxType:"Meta"}),Object(esm.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(esm.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(esm.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(esm.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(esm.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(esm.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(esm.mdx)("div",{className:"subheading"},"Configure"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(esm.mdx)("img",{src:assets_plugin,alt:"plugin"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(esm.mdx)("img",{src:stackalt,alt:"Build"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(esm.mdx)("img",{src:colors,alt:"colors"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(esm.mdx)("img",{src:flow,alt:"flow"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(esm.mdx)("div",{className:"subheading"},"Learn"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(esm.mdx)("img",{src:repo,alt:"repo"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(esm.mdx)("a",{className:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(esm.mdx)("img",{src:direction,alt:"direction"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(esm.mdx)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(esm.mdx)("img",{src:code_brackets,alt:"code"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(esm.mdx)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(esm.mdx)("img",{src:comments,alt:"comments"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(esm.mdx)("div",{className:"tip-wrapper"},Object(esm.mdx)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(esm.mdx)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))};__webpack_exports__.default=componentMeta},1154:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));var objectSpread2=__webpack_require__(85),objectWithoutProperties=(__webpack_require__(0),__webpack_require__(521)),jsx_runtime=(__webpack_require__(1144),__webpack_require__(29)),Button_Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=Object(objectWithoutProperties.a)(_ref,["primary","backgroundColor","size","label"]),mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(jsx_runtime.jsxs)("button",Object(objectSpread2.a)(Object(objectSpread2.a)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props),{},{children:[label," "]}))};Button_Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button_Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.js"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src/stories/Button.js"});__webpack_exports__.default={title:"Example/Button",component:Button_Button,argTypes:{backgroundColor:{control:"color"}}};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object(objectSpread2.a)({},args))},Primary=Button_stories_Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Button_stories_Template.bind({});Secondary.args={label:"Button"};var Large=Button_stories_Template.bind({});Large.args={size:"large",label:"Button"};var Small=Button_stories_Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => < Button {\n  ...args\n}\n/>"}},Primary.parameters),Secondary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => < Button {\n  ...args\n}\n/>"}},Secondary.parameters),Large.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => < Button {\n  ...args\n}\n/>"}},Large.parameters),Small.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => < Button {\n  ...args\n}\n/>"}},Small.parameters)},1155:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return CustomPaginationActionsTable_stories_Primary}));var objectSpread2=__webpack_require__(85),react=__webpack_require__(0),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__(360),makeStyles=__webpack_require__(1198),useTheme=__webpack_require__(116),Table=__webpack_require__(1205),TableBody=__webpack_require__(1206),TableCell=__webpack_require__(1208),TableContainer=__webpack_require__(1203),TableFooter=__webpack_require__(1209),TablePagination=__webpack_require__(1210),TableRow=__webpack_require__(1207),Paper=__webpack_require__(1204),IconButton=__webpack_require__(1201),FirstPage=__webpack_require__(357),FirstPage_default=__webpack_require__.n(FirstPage),KeyboardArrowLeft=__webpack_require__(359),KeyboardArrowLeft_default=__webpack_require__.n(KeyboardArrowLeft),KeyboardArrowRight=__webpack_require__(358),KeyboardArrowRight_default=__webpack_require__.n(KeyboardArrowRight),LastPage=__webpack_require__(356),LastPage_default=__webpack_require__.n(LastPage),jsx_runtime=__webpack_require__(29),useStyles1=Object(makeStyles.a)((function(theme){return{root:{flexShrink:0,marginLeft:theme.spacing(2.5)}}}));function TablePaginationActions(props){var classes=useStyles1(),theme=Object(useTheme.a)(),count=props.count,page=props.page,rowsPerPage=props.rowsPerPage,onChangePage=props.onChangePage;return Object(jsx_runtime.jsxs)("div",{className:classes.root,children:[Object(jsx_runtime.jsx)(IconButton.a,{onClick:function handleFirstPageButtonClick(event){onChangePage(event,0)},disabled:0===page,"aria-label":"first page",children:"rtl"===theme.direction?Object(jsx_runtime.jsx)(LastPage_default.a,{}):Object(jsx_runtime.jsx)(FirstPage_default.a,{})}),Object(jsx_runtime.jsx)(IconButton.a,{onClick:function handleBackButtonClick(event){onChangePage(event,page-1)},disabled:0===page,"aria-label":"previous page",children:"rtl"===theme.direction?Object(jsx_runtime.jsx)(KeyboardArrowRight_default.a,{}):Object(jsx_runtime.jsx)(KeyboardArrowLeft_default.a,{})}),Object(jsx_runtime.jsx)(IconButton.a,{onClick:function handleNextButtonClick(event){onChangePage(event,page+1)},disabled:page>=Math.ceil(count/rowsPerPage)-1,"aria-label":"next page",children:"rtl"===theme.direction?Object(jsx_runtime.jsx)(KeyboardArrowLeft_default.a,{}):Object(jsx_runtime.jsx)(KeyboardArrowRight_default.a,{})}),Object(jsx_runtime.jsx)(IconButton.a,{onClick:function handleLastPageButtonClick(event){onChangePage(event,Math.max(0,Math.ceil(count/rowsPerPage)-1))},disabled:page>=Math.ceil(count/rowsPerPage)-1,"aria-label":"last page",children:"rtl"===theme.direction?Object(jsx_runtime.jsx)(FirstPage_default.a,{}):Object(jsx_runtime.jsx)(LastPage_default.a,{})})]})}function createData(name,calories,fat){return{name:name,calories:calories,fat:fat}}var rows=[createData("Cupcake",305,3.7),createData("Donut",452,25),createData("Eclair",262,16),createData("Frozen yoghurt",159,6),createData("Gingerbread",356,16),createData("Honeycomb",408,3.2),createData("Ice cream sandwich",237,9),createData("Jelly Bean",375,0),createData("KitKat",518,26),createData("Lollipop",392,.2),createData("Marshmallow",318,0),createData("Nougat",360,19),createData("Oreo",437,18)].sort((function(a,b){return a.calories<b.calories?-1:1})),useStyles2=Object(makeStyles.a)({table:{minWidth:500}});function CustomPaginationActionsTable(){var classes=useStyles2(),_React$useState=react_default.a.useState(0),_React$useState2=Object(slicedToArray.a)(_React$useState,2),page=_React$useState2[0],setPage=_React$useState2[1],_React$useState3=react_default.a.useState(5),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),rowsPerPage=_React$useState4[0],setRowsPerPage=_React$useState4[1],emptyRows=rowsPerPage-Math.min(rowsPerPage,rows.length-page*rowsPerPage);return Object(jsx_runtime.jsx)(TableContainer.a,{component:Paper.a,children:Object(jsx_runtime.jsxs)(Table.a,{className:classes.table,"aria-label":"custom pagination table",children:[Object(jsx_runtime.jsxs)(TableBody.a,{children:[(rowsPerPage>0?rows.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage):rows).map((function(row){return Object(jsx_runtime.jsxs)(TableRow.a,{children:[Object(jsx_runtime.jsx)(TableCell.a,{component:"th",scope:"row",children:row.name}),Object(jsx_runtime.jsx)(TableCell.a,{style:{width:160},align:"right",children:row.calories}),Object(jsx_runtime.jsx)(TableCell.a,{style:{width:160},align:"right",children:row.fat})]},row.name)})),emptyRows>0&&Object(jsx_runtime.jsx)(TableRow.a,{style:{height:53*emptyRows},children:Object(jsx_runtime.jsx)(TableCell.a,{colSpan:6})})]}),Object(jsx_runtime.jsx)(TableFooter.a,{children:Object(jsx_runtime.jsx)(TableRow.a,{children:Object(jsx_runtime.jsx)(TablePagination.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:rows.length,rowsPerPage:rowsPerPage,page:page,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function handleChangePage(event,newPage){setPage(newPage)},onChangeRowsPerPage:function handleChangeRowsPerPage(event){setRowsPerPage(parseInt(event.target.value,10)),setPage(0)},ActionsComponent:TablePaginationActions})})})]})})}CustomPaginationActionsTable.__docgenInfo={description:"",methods:[],displayName:"CustomPaginationActionsTable"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/CustomPaginationActionsTable.js"]={name:"CustomPaginationActionsTable",docgenInfo:CustomPaginationActionsTable.__docgenInfo,path:"src/stories/CustomPaginationActionsTable.js"});var CustomPaginationActionsTable_stories_Primary=function Primary(){return Object(jsx_runtime.jsx)(void 0,{})};CustomPaginationActionsTable_stories_Primary.parameters=Object(objectSpread2.a)({storySource:{source:"() => < CustomPaginationActionsTable / >"}},CustomPaginationActionsTable_stories_Primary.parameters),CustomPaginationActionsTable_stories_Primary.__docgenInfo={description:"",methods:[],displayName:"Primary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/CustomPaginationActionsTable.stories.js"]={name:"Primary",docgenInfo:CustomPaginationActionsTable_stories_Primary.__docgenInfo,path:"src/stories/CustomPaginationActionsTable.stories.js"})},532:function(module,exports,__webpack_require__){__webpack_require__(533),__webpack_require__(690),__webpack_require__(691),__webpack_require__(856),__webpack_require__(1077),__webpack_require__(1110),__webpack_require__(1118),__webpack_require__(1130),__webpack_require__(1132),__webpack_require__(1137),__webpack_require__(1139),module.exports=__webpack_require__(1141)},600:function(module,exports){},691:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(402)}},[[532,1,2]]]);
//# sourceMappingURL=main.adebc8e512c801e2eb7d.bundle.js.map