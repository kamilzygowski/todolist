(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{33:function(t,e,s){},34:function(t,e,s){},53:function(t,e,s){},59:function(t,e,s){},60:function(t,e,s){},61:function(t,e,s){},62:function(t,e,s){"use strict";s.r(e);var n=s(3),a=s.n(n),i=s(28),c=s.n(i),o=(s(33),s(6)),l=s(7),r=s(14),d=s(9),h=s(8),u=(s(34),s(18)),g=s(5),p=s(2),j=s.n(p),m=(s(53),s(10)),f=s(11),b=s(0),O=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).addTask=function(){j.a.get("http://localhost:8000/to-do-lists").then((function(t){n.setState({newList:t.data[n.props.index-1]})})).then((function(t){n.setState({newTask:Object(g.a)(Object(g.a)({},n.state.newTask),{},{id:n.state.newList.task.length+1})}),n.state.newList.task.push(n.state.newTask)})),setTimeout((function(){j.a.put("http://localhost:8000/to-do-lists/"+n.props.index,Object(g.a)(Object(g.a)({},n.state.newList),{},{task:Object(u.a)(n.state.newList.task)})).then((function(){n.componentDidMount()}))}),500)},n.saveChanges=function(){j.a.get("http://localhost:8000/to-do-lists").then((function(t){n.setState({newList:t.data[n.props.index-1]})})).then((function(){""!==n.state.changeTaskName&&""!==n.state.changeTaskId&&(n.state.newList.task[n.state.changeTaskId-1].name=n.state.changeTaskName)})),setTimeout((function(){""===n.state.changeListName&&n.setState({changeListName:n.state.newList.name}),j.a.put("http://localhost:8000/to-do-lists/"+n.props.index,Object(g.a)(Object(g.a)({},n.state.newList),{},{name:n.state.changeListName,task:Object(u.a)(n.state.newList.task)})).then((function(){n.componentDidMount()}))}),500)},n.deleteTask=function(t){j.a.get("http://localhost:8000/to-do-lists").then((function(t){n.setState({newList:t.data[n.props.index-1]})})).then((function(){n.state.newList.task.splice(t.target.id-1,1)})),setTimeout((function(){j.a.put("http://localhost:8000/to-do-lists/"+n.props.index,n.state.newList).then((function(){n.componentDidMount()}))}),500)},n.toggleListView=function(){n.props.toggleListView()},n.deleteList=function(){n.props.deleteList()},n.state={lists:[],index:0,changeListName:"",newList:{},newTask:{id:5,name:"",isDone:!1},changeTaskName:"",changeTaskId:""},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var t=this;j.a.get("http://localhost:8000/to-do-lists",{headers:{Authorization:"Bearer siema"}}).then((function(e){t.setState({lists:e.data})}))}},{key:"render",value:function(){var t=this,e=this.state.lists;return Object(b.jsxs)("div",{className:"listView",children:[e.length?e.filter((function(e){return e.id===t.props.index})).map((function(e){return Object(b.jsx)("span",{className:"listSection",children:Object(b.jsx)("input",{type:"text",placeholder:"List name",defaultValue:e.name,onChange:function(e){return t.setState({changeListName:e.target.value})},className:"listName"})})})):"",e.length?e.filter((function(e){return e.id===t.props.index})).map((function(e){return Object(b.jsx)("div",{className:"tasks",children:e.task.map((function(s){return Object(b.jsxs)("form",{className:"tasksForm",children:[Object(b.jsx)("input",{type:"checkbox",className:"checkBox"}),Object(b.jsx)("input",{type:"text",placeholder:"Task name",className:"taskNameInput",id:s.id,onChange:function(e){return t.setState({changeTaskName:e.target.value})},onClick:function(e){return t.setState({changeTaskId:e.target.id})},defaultValue:s.name}),Object(b.jsx)("span",{className:"checkmark"}),Object(b.jsx)("span",{className:"coverSpan",children:Object(b.jsx)(m.a,{icon:f.f,className:"deleteTask",id:s.id,onClick:t.deleteTask})})]},e.key)}))},e.key)})):"",Object(b.jsx)("button",{className:"addBtn",type:"submit",onClick:this.addTask,children:" ADD TASK "}),Object(b.jsx)("button",{className:"cancelAddBtn",onClick:this.deleteList,children:" DELETE LIST "}),Object(b.jsx)("a",{className:"cancelBtn",onClick:this.toggleListView,children:"CANCEL"}),Object(b.jsx)("button",{className:"saveBtn",type:"submit",onClick:this.saveChanges,children:"SAVE"})]})}}]),s}(a.a.Component),L=s(12),x=(s(59),j.a.create({baseURL:"http://localhost:8000",headers:{Authorization:"Bearer ".concat("siema")}})),w=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).toggle=function(){n.props.toggle()},n.logged=function(){n.postLogin(),n.props.logged()},n.changeHandler=function(t){n.setState(Object(L.a)({},t.target.name,t.target.value))},n.state={identifier:"",password:""},n}return Object(l.a)(s,[{key:"postLogin",value:function(){var t=x.post("/login",this.state).then((function(e){console.log(e),console.log(t)})).catch((function(t){console.log(t),console.log(":(")}))}},{key:"render",value:function(){var t=this.state,e=t.identifier,s=t.password;return Object(b.jsx)("div",{className:"Login",ref:this.props.containerRef,children:Object(b.jsxs)("div",{className:"window",children:[Object(b.jsx)("h1",{className:"loginHeader",children:"Login"}),Object(b.jsx)("input",{className:"username",name:"identifier",placeholder:"E-mail or Username",value:e,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"password",className:"password",name:"password",placeholder:"Password",value:s,onChange:this.changeHandler}),Object(b.jsx)("button",{className:"loginBtn",onClick:this.logged,children:"Login"}),Object(b.jsx)("p",{className:"smallOr",children:" or "}),Object(b.jsx)("a",{className:"createAccount",ref:this.props.containerRef,onClick:this.toggle,children:" create an account "})]})})}}]),s}(a.a.Component),k=(s(60),j.a.create({baseURL:"http://localhost:8000",headers:{Authorization:"Bearer ".concat("siema")}})),v=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).toggle=function(){n.props.toggle()},n.changeHandler=function(t){n.setState(Object(L.a)({},t.target.name,t.target.value))},n.submitHandler=function(t){t.preventDefault(),console.log(n.state);var e=k.post("/register",n.state).then((function(t){console.log(t),console.log(e)})).catch((function(t){console.log(t)}))},n.state={username:"",email:"",password:""},n}return Object(l.a)(s,[{key:"render",value:function(){var t=this.state,e=t.username,s=t.email,n=t.password,a=t.check;return Object(b.jsxs)("div",{className:"register",ref:this.props.containerRef,children:[Object(b.jsx)(m.a,{icon:f.b,onClick:this.toggle,className:"back"}),Object(b.jsx)("h1",{className:"registerHeader",children:" Create a new account "}),Object(b.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(b.jsx)("input",{type:"text",placeholder:"Username",name:"username",className:"inputs",value:e,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"email",placeholder:"E-mail",name:"email",className:"inputs",value:s,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"inputs",value:n,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"password",placeholder:"Repeat password",name:"password",className:"inputs",value:a,onChange:this.changeHandler}),Object(b.jsx)("button",{type:"submit",className:"createBtn",children:" Create "})]})]})}}]),s}(a.a.Component),N=(s(61),function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).logged=function(){n.props.logged()},n.getKeyOfList=function(t){void 0!==t&&n.setState({indexOfList:t.target.getAttribute("index")})},n.toggleListView=function(){!1===n.state.viewList?n.setState({viewList:!0}):n.setState({viewList:!1})},n.listItemOnClick=function(){n.getKeyOfList(),n.toggleListView()},n.filterBySearch=function(){},n.addList=function(){j.a.get("http://localhost:8000/to-do-lists").then((function(t){n.setState({lists:t.data})})).then((function(){n.setState({newList:Object(g.a)(Object(g.a)({},n.state.newList),{},{id:n.state.lists.length+1})})})),j.a.post("http://localhost:8000/to-do-lists",Object(g.a)({},n.state.newList)).then((function(t){}))},n.deleteList=function(t){j.a.get("http://localhost:8000/to-do-lists").then((function(t){n.setState({placeholderList:t.data[n.props.index-1]})})),j.a.delete("http://localhost:8000/to-do-lists/"+n.state.indexOfList).then((function(t){n.componentDidMount()})),n.setState({viewList:!1})},n.state={lists:[],viewList:!1,indexOfList:0,renderToDo:!1,dataFromChild:"",newList:{id:"",name:"I'm nameless list :(",task:[]},searchingPhrase:"",placeholderList:{}},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var t=this;j.a.get("http://localhost:8000/to-do-lists",{headers:{Authorization:"Bearer siema"}}).then((function(e){t.setState({lists:e.data})})).catch((function(t){}))}},{key:"componentDidUpdate",value:function(){this.componentDidMount()}},{key:"render",value:function(){var t=this,e=this.state,s=e.lists,n=e.viewList,a=e.indexOfList,i=e.renderToDo;return Object(b.jsxs)("div",{className:"toDo",children:[Object(b.jsx)(m.a,{icon:f.d,className:"logOut",onClick:this.logged}),Object(b.jsx)("input",{placeholder:"Search for lists!",className:"searchInput",onChange:function(e){return t.setState({searchingPhrase:e.target.value.toLowerCase()})}}),Object(b.jsx)("div",{className:"mainBody",children:Object(b.jsxs)("div",{className:"lists",children:[s.filter((function(e){return""===t.state.searchingPhrase||e.name.toLowerCase().includes(t.state.searchingPhrase.toLowerCase())?e.name:void 0})).map((function(e,s){return Object(b.jsxs)("span",{className:"pinSpan",children:[Object(b.jsx)(m.a,{icon:f.e,className:"pinIcon"}),Object(b.jsxs)("div",{className:"list",onClick:t.listItemOnClick,onClickCapture:function(){return t.setState({indexOfList:e.id})},index:e.id,children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("p",{children:" created today"}),Object(b.jsxs)("span",{className:"tasksDone",children:[Object(b.jsxs)("p",{children:[" Tasks: ",e.task.length]}),Object(b.jsx)(m.a,{icon:f.a,className:"doneIcon"}),Object(b.jsxs)("p",{children:["/",e.task.length," all"]})]})]},e.id),Object(b.jsx)(m.a,{icon:f.e,className:"pinIcon"})]})})),n&&Object(b.jsx)(O,{toggleListView:this.toggleListView,index:a,renderToDo:i,deleteList:this.deleteList})]})}),Object(b.jsxs)("span",{className:"addNewList",children:[Object(b.jsx)(m.a,{icon:f.c,className:"plusList",onClick:this.addList}),Object(b.jsx)("p",{className:"plusListDescription",children:" add new list "})]})]})}}]),s}(a.a.Component)),C=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).toggleLoginAndRegister=function(){!0===n.state.loginView?n.setState({loginView:!1}):n.setState({loginView:!0})},n.logIn=function(){!1===n.state.loggedIn?n.setState({loggedIn:!0}):n.setState({loggedIn:!1})},n.state={loginView:!0,loggedIn:!1,viewList:!1},n.toggleLoginAndRegister=n.toggleLoginAndRegister.bind(Object(r.a)(n)),n}return Object(l.a)(s,[{key:"render",value:function(){var t=this.state,e=t.loginView,s=t.loggedIn;t.viewList;return Object(b.jsxs)("div",{className:"App",children:[e&&!s&&Object(b.jsx)(w,{toggle:this.toggleLoginAndRegister,logged:this.logIn}),!e&&!s&&Object(b.jsx)(v,{toggle:this.toggleLoginAndRegister}),s&&Object(b.jsx)(N,{logged:this.logIn,toggleListView:this.toggleListView,viewList:this.viewList})]})}}]),s}(a.a.Component),S=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,63)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;s(t),n(t),a(t),i(t),c(t)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.b964aba0.chunk.js.map