var m=Object.defineProperty;var g=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e,t)=>(g(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();class c{constructor(){this.fullNames=["George Fisher","John Bonham","James Hetfield","Stevie T","Tim Henson","Peter Parker","Eva Elfie","Scott Henderson","Scott Le Page","Robert Plant","John Smith"],this.englishLevels=["A1","A2","B1","B2","C1","C2"],this.documents=["passport","insurance","photo"]}getRandomNumber(e,t){return Math.floor(Math.random()*(t-e+1))+e}getRandomizeChance(e){return Math.floor(Math.random()*100)+1<=e}generateFullName(){return this.fullNames[this.getRandomNumber(0,this.fullNames.length-1)]}generateBalance(){return this.getRandomizeChance(60)?this.getRandomNumber(2e3,1e4):this.getRandomNumber(0,1999)}generateAge(){return this.getRandomizeChance(70)?this.getRandomNumber(18,60):this.getRandomNumber(1,17)}generateDocuments(){return this.getRandomizeChance(80)?this.documents:this.documents.slice(0,this.getRandomNumber(1,2))}generateEnglishLevel(){const e=this.getRandomizeChance(30),t=this.englishLevels.slice(2),n=this.englishLevels.slice(0,2);return e?t[this.getRandomNumber(0,t.length-1)]:n[this.getRandomNumber(0,n.length-1)]}}class p{constructor(e=[]){this.users=e,this.newUser={fullName:"",balance:"",age:"",documents:[],englishLevel:""},this.generator=new c}addGeneratedFullName(){this.newUser.fullName=this.generator.generateFullName()}addFullNameInput(e){this.newUser.fullName=e}addGeneratedBalance(){this.newUser.balance=this.generator.generateBalance()}addBalanceInput(e){this.newUser.balance=e}addGeneratedAge(){this.newUser.age=this.generator.generateAge()}addAgeInput(e){this.newUser.age=e}addGeneratedDocuments(){this.newUser.documents=this.generator.generateDocuments()}addToggleDocument(e){const t=this.newUser.documents.filter(n=>n!==e);t.length===this.newUser.documents.length&&t.push(e),this.newUser.documents=t}addGeneratedEnglishLevel(){this.newUser.englishLevel=this.generator.generateEnglishLevel()}addEnglishLevel(e){this.newUser.englishLevel=e}getIsFullNameUnique(e,t){return!e.some(n=>n.fullName===t)}addAllUsers(){for(let e=0;e<5;e++){if(this.users.length===5)return;let t=this.generator.generateFullName();for(;!this.getIsFullNameUnique(this.users,t);)t=this.generator.generateFullName();const n={fullName:t,balance:this.generator.generateBalance(),age:this.generator.generateAge(),documents:this.generator.generateDocuments(),englishLevel:this.generator.generateEnglishLevel()};this.users.push(n)}alert("Maximum participants have been added, happy racing!")}clearAllUsers(){this.users=[],alert("All participants have been removed")}addParticipant(){if(this.users.length===5){alert("You cannot add more than five participants");return}this.users.push(this.newUser),this.newUser={fullName:"",balance:"",age:"",documents:[],englishLevel:""}}get participantCount(){return`${this.users.length} / 5 participants added`}}class v{constructor(){this.fullNameGenerateButton=document.getElementById("generateFullName"),this.balanceGenerateButton=document.getElementById("generateBalance"),this.ageGenerateButton=document.getElementById("generateAge"),this.documentsGenerateButton=document.getElementById("generateDocuments"),this.documentPassport=document.getElementById("passport"),this.documentInsurance=document.getElementById("insurance"),this.documentPhoto=document.getElementById("photo"),this.englishLevelGenerateButton=document.getElementById("generateEnglishLevel"),this.generateAllButton=document.getElementById("generateAll"),this.clearAllButton=document.getElementById("clearAll"),this.addParticipantButton=document.getElementById("addNewUser"),this.initRaceButton=document.getElementById("initRace"),this.startRaceButton=document.getElementById("startRace"),this.raceDisplay=document.getElementById("raceDisplay"),this.fullNameInput=document.getElementById("fullName"),this.balanceInput=document.getElementById("balance"),this.ageInput=document.getElementById("age"),this.documentsInput=document.getElementById("documents"),this.englishLevelInput=document.getElementById("englishLevel"),this.participantsCounter=document.getElementById("participantsCounter")}bindGeneratedFullName(e){this.fullNameGenerateButton.addEventListener("click",()=>{e()})}bindFullNameInput(e){this.fullNameInput.addEventListener("input",()=>{e(this.fullNameInput.value)})}bindGeneratedBalance(e){this.balanceGenerateButton.addEventListener("click",()=>{e()})}bindBalanceInput(e){this.balanceInput.addEventListener("input",()=>{e(this.balanceInput.value)})}bindGeneratedAge(e){this.ageGenerateButton.addEventListener("click",()=>{e()})}bindAgeInput(e){this.ageInput.addEventListener("input",()=>{e(this.ageInput.value)})}bindGeneratedDocuments(e){this.documentsGenerateButton.addEventListener("click",()=>{e()})}bindDocument(e){this.documentPassport.addEventListener("click",()=>{e(this.documentPassport.id)}),this.documentInsurance.addEventListener("click",()=>{e(this.documentInsurance.id)}),this.documentPhoto.addEventListener("click",()=>{e(this.documentPhoto.id)})}bindGeneratedEnglishLevel(e){this.englishLevelGenerateButton.addEventListener("click",()=>{e()})}bindEnglishLevel(e){this.englishLevelInput.addEventListener("change",()=>{e(this.englishLevelInput.value)})}bindAddAllUsers(e){this.generateAllButton.addEventListener("click",()=>{e()})}bindClearAllUsers(e){this.clearAllButton.addEventListener("click",()=>{e()})}bindAddParticipant(e){this.addParticipantButton.addEventListener("click",()=>{e(),this.resetAllInputs()})}renderFullName(e){this.fullNameInput.value=e}renderBalance(e){this.balanceInput.value=e}renderAge(e){this.ageInput.value=e}renderDocuments(e){const t=this.documentsInput.children;for(let n=0;n<t.length;n++){const s=t[n].querySelector('input[type="checkbox"]').id;t[n].querySelector('input[type="checkbox"]').checked=s===e[n]}}renderEnglishLevel(e){for(const t of this.englishLevelInput.options)t.value===e&&(t.selected=!0)}renderParticipantsCounter(e){this.participantsCounter.innerText=e}resetAllInputs(){this.fullNameInput.value="",this.balanceInput.value="",this.ageInput.value="";const e=this.documentsInput.children;for(let t=0;t<e.length;t++)e[t].querySelector('input[type="checkbox"]').checked=!1;this.englishLevelInput.children[0].selected=!0}bindInitRace(e){this.initRaceButton.addEventListener("click",()=>{e(),this.raceDisplay.classList.remove("hidden"),this.raceDisplay.scrollIntoView({behavior:"smooth"})})}bindStartRace(e){this.startRaceButton.addEventListener("click",()=>{e()})}}const h=Math.PI*2;class d{constructor({text:e,x:t,y:n,radius:s=65,startAngle:i=0,endAngle:l=Math.PI*2,color:o="white",duration:u}){this.text=e,this.x=t,this.y=n,this.radius=s,this.startAngle=i,this.endAngle=l,this.color=o,this.duration=u,this.previousTimeAnimation=null}updateEndAngle(e){if(this.duration){if(!this.previousTimeAnimation){this.previousTimeAnimation=e;return}this.endAngle<=h&&(this.endAngle+=h/(this.duration/(e-this.previousTimeAnimation))),this.previousTimeAnimation=e}}drawCircle(e,t){this.updateEndAngle(t),e.beginPath(),e.font="16px Arial",e.fillStyle="white",e.textAlign="center",e.textBaseline="middle",e.fillText(this.text,this.x,this.y),e.lineWidth=3,e.strokeStyle=this.color,e.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle),e.stroke(),e.closePath()}}class A{constructor(){this.users=[],this.generator=new c,this.winner={}}resetWinner(){this.winner.user&&(this.winner={})}addUsers(e){e.forEach((t,n)=>{this.users.length>=5||this.users.push({...t,circles:[new d({text:t.fullName,x:150,y:110+n*150})]})})}addBalanceCircle(e,t){e.circles.push(new d({text:`Balance ${e.balance}`,x:e.circles[0].x+280,y:e.circles[0].y,color:"yellow",endAngle:0,duration:t}))}validateBalance(e){const t=this.generator.getRandomNumber(5e3,1e4);this.addBalanceCircle(e,t);let n=e.balance>=2e3;return new Promise((s,i)=>{setTimeout(()=>{n?(e.circles[1].color="green",s(e)):(e.circles[1].color="red",i(`User ${e.fullName} balance is not valid`))},t)})}addThirdPhaseCircle({user:e,text:t,relativePositionY:n,duration:s}){e.circles.push(new d({text:t,x:e.circles[1].x+280,y:e.circles[1].y+n,radius:20,endAngle:0,duration:s,color:"yellow"}))}checkAge(e){const t=this.generator.getRandomNumber(1e3,3e3);this.addThirdPhaseCircle({user:e,text:"Age",relativePositionY:-40,duration:t});const n=e.age>=18&&e.age<=60;return new Promise((s,i)=>{setTimeout(()=>{n?(e.circles[2].color="green",s()):(e.circles[2].color="red",i(`${e.fullName}'s age is too low`))},t)})}checkDocuments(e){const t=this.generator.getRandomNumber(1e4,2e4);this.addThirdPhaseCircle({user:e,text:"Documents",relativePositionY:0,duration:t});const s=this.generator.documents.every(i=>e.documents.includes(i));return new Promise((i,l)=>{setTimeout(()=>{s?(e.circles[3].color="green",i()):(e.circles[3].color="red",l(`${e.fullName}'s documents quantity is not enough`))},t)})}checkEnglishLevel(e){const t=this.generator.getRandomNumber(5e3,1e4);this.addThirdPhaseCircle({user:e,text:"English Level",relativePositionY:40,duration:t});const n=this.generator.englishLevels.includes(e.englishLevel,2);return new Promise((s,i)=>{setTimeout(()=>{n?(e.circles[4].color="green",s()):(e.circles[4].color="red",i(`${e.fullName}'s english level is not enough`))},t)})}async validateUser(e){try{return await this.validateBalance(e),await Promise.all([this.checkAge(e),this.checkDocuments(e),this.checkEnglishLevel(e)]),Object.keys(this.winner).length||(this.winner.user=e),e}catch(t){return console.log(t),t}}async startRace(){return await Promise.race(this.users.map(e=>this.validateUser(e)))}}class f{constructor(){this.canvas=document.getElementById("raceCanvas"),this.context=this.canvas.getContext("2d"),this.isRacePhase=!1,this.winnerUsername=document.getElementById("winnerUser"),this.maxRequestAnimationTime=43e3,this.clearAll=document.getElementById("clearAll")}updateCanvasSize(e){const t=this.canvas.parentElement;this.canvas.width=t.clientWidth,this.canvas.height=t.clientHeight,this.yAxisStep=this.canvas.height/5,this.clearAllCircles(),this.isRacePhase?this.renderRace(e):this.renderCircles(e)}clearAllCircles(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}clearWinner(){this.winnerUsername.innerText=""}clear(){this.clearAllCircles(),this.clearWinner(),cancelAnimationFrame(this.firstAnimationId),cancelAnimationFrame(this.secondAnimationId)}bindResizeInnerWidth(e){window.addEventListener("resize",()=>{e()})}renderCircles(e,t){this.clearAllCircles(),e.forEach(n=>{n.circles.forEach(s=>s.drawCircle(this.context,t))})}renderWinnerUser(e){e&&(this.winnerUsername.innerText=`${e.fullName} Wins!!! 
 FATALITY!`)}renderRace(e,t){this.isRacePhase=!0;const n=s=>{this.renderCircles(e,s),this.renderWinnerUser(t==null?void 0:t.user),this.firstAnimationId=requestAnimationFrame(n)};this.secondAnimationId=requestAnimationFrame(n),setTimeout(()=>{cancelAnimationFrame(this.firstAnimationId),cancelAnimationFrame(this.secondAnimationId)},this.maxRequestAnimationTime+1)}}class w{constructor(){a(this,"handleGeneratedFullName",()=>{this.usersModel.addGeneratedFullName(),this.usersView.renderFullName(this.usersModel.newUser.fullName)});a(this,"handleFullNameInput",e=>{this.usersModel.addFullNameInput(e)});a(this,"handleGeneratedBalance",()=>{this.usersModel.addGeneratedBalance(),this.usersView.renderBalance(this.usersModel.newUser.balance)});a(this,"handleBalanceInput",e=>{this.usersModel.addBalanceInput(e)});a(this,"handleGeneratedAge",()=>{this.usersModel.addGeneratedAge(),this.usersView.renderAge(this.usersModel.newUser.age)});a(this,"handleAgeInput",e=>{this.usersModel.addAgeInput(e)});a(this,"handleGeneratedDocuments",()=>{this.usersModel.addGeneratedDocuments(),this.usersView.renderDocuments(this.usersModel.newUser.documents)});a(this,"handleDocument",e=>{this.usersModel.addToggleDocument(e)});a(this,"handleGeneratedEnglishLevel",()=>{this.usersModel.addGeneratedEnglishLevel(),this.usersView.renderEnglishLevel(this.usersModel.newUser.englishLevel)});a(this,"handleEnglishLevel",e=>{this.usersModel.addEnglishLevel(e)});a(this,"handleAddAllUsers",()=>{this.usersModel.addAllUsers(),this.usersView.renderParticipantsCounter(this.usersModel.participantCount)});a(this,"handleClearAllUsers",()=>{this.raceView.clear(),this.usersModel.clearAllUsers(),this.usersView.renderParticipantsCounter(this.usersModel.participantCount),this.raceModel.users=[]});a(this,"handleAddParticipant",()=>{this.usersModel.addParticipant(),this.usersView.renderParticipantsCounter(this.usersModel.participantCount)});a(this,"handleInitRace",()=>{this.raceModel.resetWinner(),this.raceModel.addUsers(this.usersModel.users),this.raceView.updateCanvasSize(this.raceModel.users),this.raceView.renderCircles(this.raceModel.users)});a(this,"handlerResizeWindowWidth",()=>{this.raceModel.users.length>0&&this.raceView.updateCanvasSize(this.raceModel.users)});a(this,"handlerStartRace",async()=>{this.raceModel.resetWinner(),this.raceModel.users.length>0&&(this.raceView.renderRace(this.raceModel.users,this.raceModel.winner),await this.raceModel.startRace())});this.usersModel=new p,this.generator=new c,this.usersView=new v,this.raceModel=new A,this.raceView=new f,this.usersView.bindGeneratedFullName(this.handleGeneratedFullName),this.usersView.bindFullNameInput(this.handleFullNameInput),this.usersView.bindGeneratedBalance(this.handleGeneratedBalance),this.usersView.bindBalanceInput(this.handleBalanceInput),this.usersView.bindGeneratedAge(this.handleGeneratedAge),this.usersView.bindAgeInput(this.handleAgeInput),this.usersView.bindGeneratedDocuments(this.handleGeneratedDocuments),this.usersView.bindDocument(this.handleDocument),this.usersView.bindGeneratedEnglishLevel(this.handleGeneratedEnglishLevel),this.usersView.bindEnglishLevel(this.handleEnglishLevel),this.usersView.bindAddAllUsers(this.handleAddAllUsers),this.usersView.bindClearAllUsers(this.handleClearAllUsers),this.usersView.bindAddParticipant(this.handleAddParticipant),this.usersView.bindInitRace(this.handleInitRace),this.raceView.bindResizeInnerWidth(this.handlerResizeWindowWidth),this.usersView.bindStartRace(this.handlerStartRace)}}new w;