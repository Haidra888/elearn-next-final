(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"7QQ4":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n("gi+x"),o=n("Enk7"),i=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(a){return n={"content-type":"application/x-amz-json-1.1","x-amz-target":"AWSCognitoIdentityService.GetCredentialsForIdentity"},o=JSON.stringify(j(e,t)),[2,T(t,n,"/",void 0,o)]}))}))},r=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(a){return n={"content-type":"application/x-amz-json-1.1","x-amz-target":"AWSCognitoIdentityService.GetId"},o=JSON.stringify(x(e,t)),[2,T(t,n,"/",void 0,o)]}))}))},c=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,i;return Object(a.d)(this,(function(r){switch(r.label){case 0:return e.statusCode>=300?[2,s(e,t)]:[4,q(e.body,t)];case 1:return n=r.sent(),{},o=$(n,t),i=Object(a.a)({$metadata:M(e)},o),[2,Promise.resolve(i)]}}))}))},s=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,i,r,c,s,d,u,y,j,x,E,I,h,$;return Object(a.d)(this,(function(w){switch(w.label){case 0:return o=[Object(a.a)({},e)],$={},[4,q(e.body,t)];case 1:switch(n=a.a.apply(void 0,o.concat([($.body=w.sent(),$)])),r="UnknownError",r=K(e,n.body),r){case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":return[3,2];case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":return[3,4];case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":return[3,6];case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":return[3,8];case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":return[3,10];case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":return[3,12];case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":return[3,14];case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":return[3,16]}return[3,18];case 2:return c=[{}],[4,l(n,t)];case 3:return i=a.a.apply(void 0,[a.a.apply(void 0,c.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 4:return s=[{}],[4,v(n,t)];case 5:return i=a.a.apply(void 0,[a.a.apply(void 0,s.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 6:return d=[{}],[4,m(n,t)];case 7:return i=a.a.apply(void 0,[a.a.apply(void 0,d.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 8:return u=[{}],[4,p(n,t)];case 9:return i=a.a.apply(void 0,[a.a.apply(void 0,u.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 10:return y=[{}],[4,b(n,t)];case 11:return i=a.a.apply(void 0,[a.a.apply(void 0,y.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 12:return j=[{}],[4,f(n,t)];case 13:return i=a.a.apply(void 0,[a.a.apply(void 0,j.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 14:return x=[{}],[4,g(n,t)];case 15:return i=a.a.apply(void 0,[a.a.apply(void 0,x.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 16:return E=[{}],[4,O(n,t)];case 17:return i=a.a.apply(void 0,[a.a.apply(void 0,E.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 18:I=n.body,r=I.code||I.Code||r,i=Object(a.a)(Object(a.a)({},I),{name:""+r,message:I.message||I.Message||r,$fault:"client",$metadata:M(e)}),w.label=19;case 19:return h=i.message||i.Message||r,i.message=h,delete i.Message,[2,Promise.reject(Object.assign(new Error(h),i))]}}))}))},d=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,i;return Object(a.d)(this,(function(r){switch(r.label){case 0:return e.statusCode>=300?[2,u(e,t)]:[4,q(e.body,t)];case 1:return n=r.sent(),{},o=w(n,t),i=Object(a.a)({$metadata:M(e)},o),[2,Promise.resolve(i)]}}))}))},u=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,i,r,c,s,d,u,m,j,x,E,I,h,$;return Object(a.d)(this,(function(w){switch(w.label){case 0:return o=[Object(a.a)({},e)],$={},[4,q(e.body,t)];case 1:switch(n=a.a.apply(void 0,o.concat([($.body=w.sent(),$)])),r="UnknownError",r=K(e,n.body),r){case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":return[3,2];case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":return[3,4];case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":return[3,6];case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":return[3,8];case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":return[3,10];case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":return[3,12];case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":return[3,14];case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":return[3,16]}return[3,18];case 2:return c=[{}],[4,l(n,t)];case 3:return i=a.a.apply(void 0,[a.a.apply(void 0,c.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 4:return s=[{}],[4,v(n,t)];case 5:return i=a.a.apply(void 0,[a.a.apply(void 0,s.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 6:return d=[{}],[4,p(n,t)];case 7:return i=a.a.apply(void 0,[a.a.apply(void 0,d.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 8:return u=[{}],[4,y(n,t)];case 9:return i=a.a.apply(void 0,[a.a.apply(void 0,u.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 10:return m=[{}],[4,b(n,t)];case 11:return i=a.a.apply(void 0,[a.a.apply(void 0,m.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 12:return j=[{}],[4,f(n,t)];case 13:return i=a.a.apply(void 0,[a.a.apply(void 0,j.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 14:return x=[{}],[4,g(n,t)];case 15:return i=a.a.apply(void 0,[a.a.apply(void 0,x.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 16:return E=[{}],[4,O(n,t)];case 17:return i=a.a.apply(void 0,[a.a.apply(void 0,E.concat([w.sent()])),{name:r,$metadata:M(e)}]),[3,19];case 18:I=n.body,r=I.code||I.Code||r,i=Object(a.a)(Object(a.a)({},I),{name:""+r,message:I.message||I.Message||r,$fault:"client",$metadata:M(e)}),w.label=19;case 19:return h=i.message||i.Message||r,i.message=h,delete i.Message,[2,Promise.reject(Object.assign(new Error(h),i))]}}))}))},l=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=h(n,t),[2,Object(a.a)({name:"ExternalServiceException",$fault:"client",$metadata:M(e)},o)]}))}))},v=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=z(n,t),[2,Object(a.a)({name:"InternalErrorException",$fault:"server",$metadata:M(e)},o)]}))}))},m=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=C(n,t),[2,Object(a.a)({name:"InvalidIdentityPoolConfigurationException",$fault:"client",$metadata:M(e)},o)]}))}))},p=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=A(n,t),[2,Object(a.a)({name:"InvalidParameterException",$fault:"client",$metadata:M(e)},o)]}))}))},y=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=S(n,t),[2,Object(a.a)({name:"LimitExceededException",$fault:"client",$metadata:M(e)},o)]}))}))},b=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=R(n,t),[2,Object(a.a)({name:"NotAuthorizedException",$fault:"client",$metadata:M(e)},o)]}))}))},f=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=P(n,t),[2,Object(a.a)({name:"ResourceConflictException",$fault:"client",$metadata:M(e)},o)]}))}))},g=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=N(n,t),[2,Object(a.a)({name:"ResourceNotFoundException",$fault:"client",$metadata:M(e)},o)]}))}))},O=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=L(n,t),[2,Object(a.a)({name:"TooManyRequestsException",$fault:"client",$metadata:M(e)},o)]}))}))},j=function(e,t){return Object(a.a)(Object(a.a)(Object(a.a)({},void 0!==e.CustomRoleArn&&null!==e.CustomRoleArn&&{CustomRoleArn:e.CustomRoleArn}),void 0!==e.IdentityId&&null!==e.IdentityId&&{IdentityId:e.IdentityId}),void 0!==e.Logins&&null!==e.Logins&&{Logins:E(e.Logins,t)})},x=function(e,t){return Object(a.a)(Object(a.a)(Object(a.a)({},void 0!==e.AccountId&&null!==e.AccountId&&{AccountId:e.AccountId}),void 0!==e.IdentityPoolId&&null!==e.IdentityPoolId&&{IdentityPoolId:e.IdentityPoolId}),void 0!==e.Logins&&null!==e.Logins&&{Logins:E(e.Logins,t)})},E=function(e,t){return Object.entries(e).reduce((function(e,t){var n,o=Object(a.e)(t,2),i=o[0],r=o[1];return null===r?e:Object(a.a)(Object(a.a)({},e),((n={})[i]=r,n))}),{})},I=function(e,t){return{AccessKeyId:void 0!==e.AccessKeyId&&null!==e.AccessKeyId?e.AccessKeyId:void 0,Expiration:void 0!==e.Expiration&&null!==e.Expiration?new Date(Math.round(1e3*e.Expiration)):void 0,SecretKey:void 0!==e.SecretKey&&null!==e.SecretKey?e.SecretKey:void 0,SessionToken:void 0!==e.SessionToken&&null!==e.SessionToken?e.SessionToken:void 0}},h=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},$=function(e,t){return{Credentials:void 0!==e.Credentials&&null!==e.Credentials?I(e.Credentials):void 0,IdentityId:void 0!==e.IdentityId&&null!==e.IdentityId?e.IdentityId:void 0}},w=function(e,t){return{IdentityId:void 0!==e.IdentityId&&null!==e.IdentityId?e.IdentityId:void 0}},z=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},C=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},A=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},S=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},R=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},P=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},N=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},L=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},M=function(e){var t;return{httpStatusCode:e.statusCode,requestId:null!==(t=e.headers["x-amzn-requestid"])&&void 0!==t?t:e.headers["x-amzn-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}},k=function(e,t){return void 0===e&&(e=new Uint8Array),e instanceof Uint8Array?Promise.resolve(e):t.streamCollector(e)||Promise.resolve(new Uint8Array)},T=function(e,t,n,i,r){return Object(a.b)(void 0,void 0,void 0,(function(){var c,s,d,u,l,v;return Object(a.d)(this,(function(a){switch(a.label){case 0:return[4,e.endpoint()];case 1:return c=a.sent(),s=c.hostname,d=c.protocol,u=void 0===d?"https":d,l=c.port,v={protocol:u,hostname:s,port:l,method:"POST",path:n,headers:t},void 0!==i&&(v.hostname=i),void 0!==r&&(v.body=r),[2,new o.a(v)]}}))}))},q=function(e,t){return function(e,t){return k(e,t).then((function(e){return t.utf8Encoder(e)}))}(e,t).then((function(e){return e.length?JSON.parse(e):{}}))},K=function(e,t){var n,a,o=function(e){var t=e;return t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},i=(n=e.headers,a="x-amzn-errortype",Object.keys(n).find((function(e){return e.toLowerCase()===a.toLowerCase()})));return void 0!==i?o(e.headers[i]):void 0!==t.code?o(t.code):void 0!==t.__type?o(t.__type):""}}}]);