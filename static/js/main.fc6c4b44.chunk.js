(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},53:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),i=n(28),c=n.n(i),o=(n(33),n(6)),l=n(7),r=n(14),d=n(9),u=n(8),h=(n(34),n(18)),g=n(5),p=n(2),j=n.n(p),m=(n(53),n(10)),f=n(11),b=n(0),O="https://todolist-fake-server.herokuapp.com/",L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).addTask=function(){j.a.get("".concat(O,"to-do-lists/")).then((function(e){s.setState({newList:e.data[s.props.index-1]})})).then((function(e){s.setState({newTask:Object(g.a)(Object(g.a)({},s.state.newTask),{},{id:s.state.newList.task.length+1})}),s.state.newList.task.push(s.state.newTask)})).then((function(){j.a.put("".concat(O,"to-do-lists/").concat(s.props.index),Object(g.a)(Object(g.a)({},s.state.newList),{},{task:Object(h.a)(s.state.newList.task)})).then((function(){s.componentDidMount()}))}))},s.saveChanges=function(){j.a.get("".concat(O,"to-do-lists/")).then((function(e){s.setState({newList:e.data[s.props.index-1]})})).then((function(){""!==s.state.changeTaskName&&""!==s.state.changeTaskId&&(s.state.newList.task[s.state.changeTaskId-1].name=s.state.changeTaskName),""!==s.state.changeListName&&(s.state.newList.name=s.state.changeListName)})).then((function(){j.a.put("".concat(O,"to-do-lists/").concat(s.props.index),Object(g.a)(Object(g.a)({},s.state.newList),{},{task:Object(h.a)(s.state.newList.task)})).then((function(){s.componentDidMount()}))}))},s.deleteTask=function(e){j.a.get("".concat(O,"to-do-lists/")).then((function(e){s.setState({newList:e.data[s.props.index-1]})})).then((function(){console.log("xd: "+e.target.id),j.a.put("".concat(O,"to-do-lists/").concat(s.props.index),s.state.newList).then((function(){s.componentDidMount(),s.render()}))}))},s.toggleListView=function(){s.props.toggleListView()},s.deleteList=function(){s.props.deleteList()},s.state={lists:[],index:0,changeListName:"",newList:{},newTask:{id:5,name:"",isDone:!1},changeTaskName:"",changeTaskId:""},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(O,"to-do-lists/"),{headers:{Authorization:"Bearer siema"}}).then((function(t){e.setState({lists:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.lists;return Object(b.jsxs)("div",{className:"listView",children:[t.length?t.filter((function(t){return t.id===e.props.index})).map((function(t){return Object(b.jsx)("span",{className:"listSection",children:Object(b.jsx)("input",{type:"text",placeholder:"List name",defaultValue:t.name,onChange:function(t){return e.setState({changeListName:t.target.value})},className:"listName"})})})):"",t.length?t.filter((function(t){return t.id===e.props.index})).map((function(t){return Object(b.jsx)("div",{className:"tasks",children:t.task.map((function(n){return Object(b.jsxs)("form",{className:"tasksForm",children:[Object(b.jsx)("input",{type:"checkbox",className:"checkBox"}),Object(b.jsx)("input",{type:"text",placeholder:"Task name",className:"taskNameInput",id:n.id,onChange:function(t){return e.setState({changeTaskName:t.target.value})},onClick:function(t){return e.setState({changeTaskId:t.target.id})},defaultValue:n.name},t.id),Object(b.jsx)("span",{className:"checkmark"}),Object(b.jsx)("span",{className:"coverSpan",children:Object(b.jsx)(m.a,{icon:f.f,className:"deleteTask",id:n.id-1,onClick:e.deleteTask})})]},t.key)}))},t.key)})):"",Object(b.jsx)("button",{className:"addBtn",type:"submit",onClick:this.addTask,children:" ADD TASK "}),Object(b.jsx)("button",{className:"cancelAddBtn",onClick:this.deleteList,children:" DELETE LIST "}),Object(b.jsx)("a",{className:"cancelBtn",onClick:this.toggleListView,children:"CANCEL"}),Object(b.jsx)("button",{className:"saveBtn",type:"submit",onClick:this.saveChanges,children:"SAVE"})]})}}]),n}(a.a.Component),x=n(12),k=(n(59),j.a.create({baseURL:"https://todolist-fake-server.herokuapp.com/",headers:{Authorization:"Bearer ".concat("siema")}})),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).toggle=function(){s.props.toggle()},s.logged=function(){s.postLogin(),s.props.logged()},s.changeHandler=function(e){s.setState(Object(x.a)({},e.target.name,e.target.value))},s.state={identifier:"",password:""},s}return Object(l.a)(n,[{key:"postLogin",value:function(){var e=k.post("/login",this.state).then((function(t){console.log(t),console.log(e)})).catch((function(e){console.log(e),console.log(":(")}))}},{key:"render",value:function(){var e=this.state,t=e.identifier,n=e.password;return Object(b.jsx)("div",{className:"Login",ref:this.props.containerRef,children:Object(b.jsxs)("div",{className:"window",children:[Object(b.jsx)("h1",{className:"loginHeader",children:"Login"}),Object(b.jsx)("input",{className:"username",name:"identifier",placeholder:"E-mail or Username",value:t,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"password",className:"password",name:"password",placeholder:"Password",value:n,onChange:this.changeHandler}),Object(b.jsx)("button",{className:"loginBtn",onClick:this.logged,children:"Login"}),Object(b.jsx)("p",{className:"smallOr",children:" or "}),Object(b.jsx)("a",{className:"createAccount",ref:this.props.containerRef,onClick:this.toggle,children:" create an account "})]})})}}]),n}(a.a.Component),w=(n(60),j.a.create({baseURL:"http://localhost:8000",headers:{Authorization:"Bearer ".concat("siema")}})),N=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).toggle=function(){s.props.toggle()},s.changeHandler=function(e){s.setState(Object(x.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state);var t=w.post("/register",s.state).then((function(e){console.log(e),console.log(t)})).catch((function(e){console.log(e)}))},s.state={username:"",email:"",password:""},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,s=e.password,a=e.check;return Object(b.jsxs)("div",{className:"register",ref:this.props.containerRef,children:[Object(b.jsx)(m.a,{icon:f.b,onClick:this.toggle,className:"back"}),Object(b.jsx)("h1",{className:"registerHeader",children:" Create a new account "}),Object(b.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(b.jsx)("input",{type:"text",placeholder:"Username",name:"username",className:"inputs",value:t,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"email",placeholder:"E-mail",name:"email",className:"inputs",value:n,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"inputs",value:s,onChange:this.changeHandler}),Object(b.jsx)("input",{type:"password",placeholder:"Repeat password",name:"password",className:"inputs",value:a,onChange:this.changeHandler}),Object(b.jsx)("button",{type:"submit",className:"createBtn",children:" Create "})]})]})}}]),n}(a.a.Component),C=(n(61),"https://todolist-fake-server.herokuapp.com/"),S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).logged=function(){s.props.logged()},s.getKeyOfList=function(e){void 0!==e&&s.setState({indexOfList:e.target.getAttribute("index")})},s.toggleListView=function(){!1===s.state.viewList?s.setState({viewList:!0}):s.setState({viewList:!1})},s.listItemOnClick=function(){s.getKeyOfList(),s.toggleListView()},s.filterBySearch=function(){},s.addList=function(){j.a.get("".concat(C,"to-do-lists/")).then((function(e){s.setState({lists:e.data})})).then((function(){s.setState({newList:Object(g.a)(Object(g.a)({},s.state.newList),{},{id:s.state.lists.length+1})})})).then((function(){j.a.post("".concat(C,"to-do-lists/"),Object(g.a)({},s.state.newList))}))},s.deleteList=function(e){j.a.get("".concat(C,"to-do-lists/")).then((function(e){s.setState({placeholderList:e.data[s.props.index-1]})})).then((function(){j.a.delete("".concat(C,"to-do-lists/").concat(s.state.indexOfList)).then((function(){s.componentDidMount()})),s.setState({viewList:!1})}))},s.state={lists:[],viewList:!1,indexOfList:0,renderToDo:!1,dataFromChild:"",newList:{id:"",name:"I'm nameless list :(",task:[]},searchingPhrase:"",placeholderList:{}},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(C,"to-do-lists/"),{headers:{Authorization:"Bearer siema"}}).then((function(t){e.setState({lists:t.data})}))}},{key:"componentDidUpdate",value:function(){this.componentDidMount()}},{key:"render",value:function(){var e=this,t=this.state,n=t.lists,s=t.viewList,a=t.indexOfList,i=t.renderToDo;return Object(b.jsxs)("div",{className:"toDo",children:[Object(b.jsx)(m.a,{icon:f.d,className:"logOut",onClick:this.logged}),Object(b.jsx)("input",{placeholder:"Search for lists!",className:"searchInput",onChange:function(t){return e.setState({searchingPhrase:t.target.value.toLowerCase()})}}),Object(b.jsx)("div",{className:"mainBody",children:Object(b.jsxs)("div",{className:"lists",children:[n.filter((function(t){return""===e.state.searchingPhrase||t.name.toLowerCase().includes(e.state.searchingPhrase.toLowerCase())?t.name:void 0})).map((function(t,n){return Object(b.jsxs)("span",{className:"pinSpan",children:[Object(b.jsx)(m.a,{icon:f.e,className:"pinIcon"}),Object(b.jsxs)("div",{className:"list",onClick:e.listItemOnClick,onClickCapture:function(){return e.setState({indexOfList:t.id})},index:t.id,children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("p",{children:" created today"}),Object(b.jsxs)("span",{className:"tasksDone",children:[Object(b.jsxs)("p",{children:[" Tasks: ",t.task.length]}),Object(b.jsx)(m.a,{icon:f.a,className:"doneIcon"}),Object(b.jsxs)("p",{children:["/",t.task.length," all"]})]})]},t.id),Object(b.jsx)(m.a,{icon:f.e,className:"pinIcon"})]})})),s&&Object(b.jsx)(L,{toggleListView:this.toggleListView,index:a,renderToDo:i,deleteList:this.deleteList})]})}),Object(b.jsxs)("span",{className:"addNewList",children:[Object(b.jsx)(m.a,{icon:f.c,className:"plusList",onClick:this.addList}),Object(b.jsx)("p",{className:"plusListDescription",children:" add new list "})]})]})}}]),n}(a.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).toggleLoginAndRegister=function(){!0===s.state.loginView?s.setState({loginView:!1}):s.setState({loginView:!0})},s.logIn=function(){!1===s.state.loggedIn?s.setState({loggedIn:!0}):s.setState({loggedIn:!1})},s.state={loginView:!0,loggedIn:!1,viewList:!1},s.toggleLoginAndRegister=s.toggleLoginAndRegister.bind(Object(r.a)(s)),s}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.loginView,n=e.loggedIn;e.viewList;return Object(b.jsxs)("div",{className:"App",children:[t&&!n&&Object(b.jsx)(v,{toggle:this.toggleLoginAndRegister,logged:this.logIn}),!t&&!n&&Object(b.jsx)(N,{toggle:this.toggleLoginAndRegister}),n&&Object(b.jsx)(S,{logged:this.logIn,toggleListView:this.toggleListView,viewList:this.viewList})]})}}]),n}(a.a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),T()}},[[62,1,2]]]);
//# sourceMappingURL=main.fc6c4b44.chunk.js.map