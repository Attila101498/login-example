"use strict";(self.webpackChunkangular_authentication=self.webpackChunkangular_authentication||[]).push([[677],{8677:(k,p,a)=>{a.r(p),a.d(p,{AccountModule:()=>L});var i=a(2382),u=a(9808),s=a(6463),e=a(1223),m=a(6082);let Z=(()=>{class r{constructor(t,n){this.router=t,this.accountService=n,this.accountService.userValue&&this.router.navigate(["/"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.F0),e.Y36(m.B))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"col-md-6","offset-md-3","mt-5"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"router-outlet"),e.qZA())},directives:[s.lC],encapsulation:2}),r})();var g=a(590);function _(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function h(r,o){if(1&r&&(e.TgZ(0,"div",13),e.YNc(1,_,2,0,"div",14),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.username.errors.required)}}function T(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function b(r,o){if(1&r&&(e.TgZ(0,"div",13),e.YNc(1,T,2,0,"div",14),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.password.errors.required)}}function q(r,o){1&r&&e._UZ(0,"span",15)}const v=function(r){return{"is-invalid":r}};function A(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"First Name is required"),e.qZA())}function N(r,o){if(1&r&&(e.TgZ(0,"div",17),e.YNc(1,A,2,0,"div",18),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.firstName.errors.required)}}function U(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"Last Name is required"),e.qZA())}function J(r,o){if(1&r&&(e.TgZ(0,"div",17),e.YNc(1,U,2,0,"div",18),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.lastName.errors.required)}}function I(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function Y(r,o){if(1&r&&(e.TgZ(0,"div",17),e.YNc(1,I,2,0,"div",18),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.username.errors.required)}}function x(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function y(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function w(r,o){if(1&r&&(e.TgZ(0,"div",17),e.YNc(1,x,2,0,"div",18),e.YNc(2,y,2,0,"div",18),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.password.errors.minlength)}}function S(r,o){1&r&&e._UZ(0,"span",19)}const c=function(r){return{"is-invalid":r}},Q=[{path:"",component:Z,children:[{path:"login",component:(()=>{class r{constructor(t,n,d,l,f){this.formBuilder=t,this.route=n,this.router=d,this.accountService=l,this.alertService=f,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({username:["",i.kI.required],password:["",i.kI.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.login(this.f.username.value,this.f.password.value).pipe((0,g.P)()).subscribe({next:()=>{this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"/")},error:t=>{this.alertService.error(t),this.loading=!1}}))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(i.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(m.B),e.Y36(m.c))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:21,vars:11,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../register",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h4",1),e._uU(2,"Login"),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(5,"div",4),e.TgZ(6,"label",5),e._uU(7,"Username"),e.qZA(),e._UZ(8,"input",6),e.YNc(9,h,2,1,"div",7),e.qZA(),e.TgZ(10,"div",4),e.TgZ(11,"label",8),e._uU(12,"Password"),e.qZA(),e._UZ(13,"input",9),e.YNc(14,b,2,1,"div",7),e.qZA(),e.TgZ(15,"div",4),e.TgZ(16,"button",10),e.YNc(17,q,1,0,"span",11),e._uU(18," Login "),e.qZA(),e.TgZ(19,"a",12),e._uU(20,"Register"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",n.form),e.xp6(4),e.Q6J("ngClass",e.VKq(7,v,n.submitted&&n.f.username.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.username.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(9,v,n.submitted&&n.f.password.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.password.errors),e.xp6(2),e.Q6J("disabled",n.loading),e.xp6(1),e.Q6J("ngIf",n.loading))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,u.mk,u.O5,s.yS],encapsulation:2}),r})()},{path:"register",component:(()=>{class r{constructor(t,n,d,l,f){this.formBuilder=t,this.route=n,this.router=d,this.accountService=l,this.alertService=f,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({firstName:["",i.kI.required],lastName:["",i.kI.required],username:["",i.kI.required],password:["",[i.kI.required,i.kI.minLength(6)]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.register(this.form.value).pipe((0,g.P)()).subscribe({next:()=>{this.alertService.success("Registration successful",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:t=>{this.alertService.error(t),this.loading=!1}}))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(i.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(m.B),e.Y36(m.c))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:31,vars:19,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h4",1),e._uU(2,"Register"),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(5,"div",4),e.TgZ(6,"label",5),e._uU(7,"First Name"),e.qZA(),e._UZ(8,"input",6),e.YNc(9,N,2,1,"div",7),e.qZA(),e.TgZ(10,"div",4),e.TgZ(11,"label",8),e._uU(12,"Last Name"),e.qZA(),e._UZ(13,"input",9),e.YNc(14,J,2,1,"div",7),e.qZA(),e.TgZ(15,"div",4),e.TgZ(16,"label",10),e._uU(17,"Username"),e.qZA(),e._UZ(18,"input",11),e.YNc(19,Y,2,1,"div",7),e.qZA(),e.TgZ(20,"div",4),e.TgZ(21,"label",12),e._uU(22,"Password"),e.qZA(),e._UZ(23,"input",13),e.YNc(24,w,3,2,"div",7),e.qZA(),e.TgZ(25,"div",4),e.TgZ(26,"button",14),e.YNc(27,S,1,0,"span",15),e._uU(28," Register "),e.qZA(),e.TgZ(29,"a",16),e._uU(30,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",n.form),e.xp6(4),e.Q6J("ngClass",e.VKq(11,c,n.submitted&&n.f.firstName.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.firstName.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(13,c,n.submitted&&n.f.lastName.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.lastName.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(15,c,n.submitted&&n.f.username.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.username.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(17,c,n.submitted&&n.f.password.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.password.errors),e.xp6(2),e.Q6J("disabled",n.loading),e.xp6(1),e.Q6J("ngIf",n.loading))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,u.mk,u.O5,s.yS],encapsulation:2}),r})()}]}];let R=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[s.Bz.forChild(Q)],s.Bz]}),r})(),L=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[u.ez,i.UX,R]]}),r})()}}]);