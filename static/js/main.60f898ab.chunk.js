(this["webpackJsonpreact-easy-auth-example"]=this["webpackJsonpreact-easy-auth-example"]||[]).push([[0],{22:function(e,t,a){"use strict";a.r(t);a(3);var r=a(1),s=a.n(r),n=a(6),o=a.n(n),i=a(7),c=a(2);a(20);const l=Object(c.initializeApp)({apiKey:"AIzaSyDu7zzy9fwG8b_sb6K3nnZVbD2LZgpBpgU",authDomain:"react-simple-auth-58be4.firebaseapp.com",databaseURL:"https://react-simple-auth-58be4.firebaseio.com",projectId:"react-simple-auth-58be4",storageBucket:"react-simple-auth-58be4.appspot.com",messagingSenderId:"692701140679",appId:"1:692701140679:web:8d190d378f9744020f10e2"}),u=c.auth,h=({authProvider:e,style:t,fetchAuthData:a,scopes:r})=>{let n;switch(e){case"Twitter":n=new u.TwitterAuthProvider;break;case"Google":n=new u.GoogleAuthProvider;break;case"Facebook":n=new u.FacebookAuthProvider;break;case"Github":n=new u.GithubAuthProvider;break;case"Microsoft":n=new u.OAuthProvider("microsoft.com");break;case"Apple":n=new u.OAuthProvider("apple.com");break;default:n=null}return s.a.createElement("div",null,s.a.createElement("button",{style:t,onClick:()=>{void 0!==r&&r.forEach(e=>{n.addScope(e)}),l.auth().signInWithPopup(n).then(e=>{a(e,null)}).catch(e=>{"auth/account-exists-with-different-credential"===e.code&&"undefined"!==typeof window&&alert("An account already exists with the same email address. You have already signed up with a different auth provider for that email."),a(null,e)})}},"Sign In with ",e))};class p extends s.a.Component{constructor(...e){super(...e),this.state={userCredentials:null,error:null},this.authListener=e=>{e&&this.props.fetchUserData(e,this.state.userCredentials,null)},this.fetchAuthData=(e,t)=>{t&&this.props.fetchUserData(null,null,t),this.setState({userCredentials:e,error:t})}}componentDidMount(){l.auth().onAuthStateChanged(this.authListener)}render(){return s.a.createElement(h,{style:this.props.style,authProvider:this.props.authProvider,scopes:this.props.scopes,fetchAuthData:this.fetchAuthData})}}class d extends s.a.Component{constructor(...e){super(...e),this.SignOutHandler=()=>{l.auth().signOut().then(()=>{this.props.onSignOut(null)}).catch(e=>{this.props.onSignOut(e)})}}render(){return s.a.createElement("button",{style:this.props.style,onClick:this.SignOutHandler},"Sign Out")}}var m=()=>{const e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],o=e=>{e||(console.log("signed out"),n(null))};return a?s.a.createElement("div",{className:"container"},s.a.createElement("h3",{className:"title"}," ",a.displayName," "),s.a.createElement("div",{class:"button"},s.a.createElement(d,{style:{color:"red",fontSize:"10px"},onSignOut:o}))):s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"}," Super Power App "),s.a.createElement("div",{className:"button"},s.a.createElement(p,{authProvider:"Google",style:{color:"white",backgroundColor:"red",fontSize:"20px",borderRadius:"5px"},scopes:["https://www.googleapis.com/auth/androidpublisher","https://www.googleapis.com/auth/games"],fetchUserData:(e,t,a)=>{a&&console.error(a),console.log(t),n(e)}})))};o.a.render(s.a.createElement(m,null),document.getElementById("root"))},3:function(e,t,a){},8:function(e,t,a){e.exports=a(22)}},[[8,1,2]]]);
//# sourceMappingURL=main.60f898ab.chunk.js.map