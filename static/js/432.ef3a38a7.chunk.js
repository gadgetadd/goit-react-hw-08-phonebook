"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[432],{8432:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var n=t(1413),r=t(9439),i=t(2791),s=t(5048),o=t(1087),l=t(8518),u=t(6727),c=t(1614),m=t(4554),d=t(3044),f=t(3239),h=t(890),Z=t(1889),p=t(7665),x=t(4518),v=t(533),j=t(9658),w=t(403),N=t(5047),b=t(7834),g=t(9176),y=t(3329);function k(){var e=(0,b.a)(),a=e.error,t=e.isAuth,k=(0,i.useState)({firstName:!0,lastName:!0,email:!0,password:!0}),C=(0,r.Z)(k,2),P=C[0],S=C[1],W=(0,s.I0)(),A=(0,i.useState)(""),q=(0,r.Z)(A,2),E=q[0],z=q[1],T=(0,i.useState)(""),_=(0,r.Z)(T,2),D=_[0],F=_[1],I=(0,i.useState)(""),U=(0,r.Z)(I,2),L=U[0],V=U[1],$=(0,i.useState)(""),B=(0,r.Z)($,2),G=B[0],H=B[1];console.log(P);var J=(0,u.Z_)().matches(/^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]+([' -][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]*)*$/).max(35),K=(0,u.Z_)().email(),M=(0,u.Z_)().min(8);(0,i.useEffect)((function(){return function(){W((0,g.f)())}}),[W]);var O=function(e){var a=e.currentTarget,t=a.name,r=a.value;switch(t){case"firstName":J.validate(r).then((function(){return S((function(e){return(0,n.Z)((0,n.Z)({},e),{},{firstName:!0})}))})).catch((function(){return S((function(e){return(0,n.Z)((0,n.Z)({},e),{},{firstName:!1})}))})),z(r);break;case"lastName":J.validate(r).then((function(){return S((function(e){return(0,n.Z)((0,n.Z)({},e),{},{lastName:!0})}))})).catch((function(){return S((function(e){return(0,n.Z)((0,n.Z)({},e),{},{lastName:!1})}))})),F(r);break;case"email":K.validate(r).then((function(){return S((function(e){return(0,n.Z)((0,n.Z)({},e),{},{email:!0})}))})).catch((function(){return S((function(e){return(0,n.Z)((0,n.Z)({},e),{},{email:!1})}))})),V(r);break;case"password":M.validate(r).then((function(){return S((function(e){return(0,n.Z)((0,n.Z)({},e),{},{password:!0})}))})).catch((function(){return S((function(e){return(0,n.Z)((0,n.Z)({},e),{},{password:!1})}))})),H(r);break;default:throw new Error("unsupported input name")}};return(0,y.jsxs)(c.Z,{component:"main",maxWidth:"xs",children:[(0,y.jsxs)(m.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)(d.Z,{sx:{m:1,bgcolor:"secondary.main"},children:t?(0,y.jsx)(f.Z,{size:24,color:"inherit"}):(0,y.jsx)(w.Z,{})}),(0,y.jsx)(h.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,y.jsxs)(m.Z,{component:"form",noValidate:!0,onSubmit:function(e){if(e.preventDefault(),P.firsName&&P.lastName&&P.email&&P.password){var a=e.target.elements,t={name:"".concat(a.firstName.value," ").concat(a.lastName.value),email:a.email.value,password:a.password.value};W((0,N.y1)(t))}else(0,l.yv)("Please check the entered data",{variant:"error"})},sx:{mt:3},children:[(0,y.jsxs)(Z.ZP,{container:!0,spacing:2,children:[(0,y.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,y.jsx)(p.Z,{onChange:O,type:"text",value:E,error:!P.firstName,autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,y.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,y.jsx)(p.Z,{onChange:O,type:"text",value:D,error:!P.lastName,required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,y.jsx)(Z.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.Z,{onChange:O,type:"email",value:L,error:!P.email,required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,y.jsx)(Z.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.Z,{onChange:O,value:G,error:!P.password,title:"Password must contain at least 8 characters",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,y.jsx)(x.Z,{type:"submit",fullWidth:!0,variant:"contained",disabled:t,sx:{mt:3,mb:2},children:"Sign Up"}),(0,y.jsx)(Z.ZP,{container:!0,justifyContent:"flex-end",children:(0,y.jsx)(Z.ZP,{item:!0,children:(0,y.jsx)(v.Z,{variant:"body2",component:o.rU,to:"/login",children:"Already have an account? Sign in"})})})]})]}),a&&(0,y.jsx)(j.Z,{severity:"error",children:"Network Error"!==a?"This user is already registered. Please try again with a another email":a})]})}}}]);
//# sourceMappingURL=432.ef3a38a7.chunk.js.map