console.log("App loaded"),new class{constructor({position:e="bottom-right"}={}){this.position=this.getPosition(e),this.open=!1,this.initialise(),this.createStyles()}getPosition(e){let[t,n]=e.split("-");return{[t]:"30px",[n]:"30px"}}initialise(){let e=document.createElement("div");e.style.position="fixed",Object.keys(this.position).forEach(t=>e.style[t]=this.position[t]),document.body.appendChild(e);let t=document.createElement("div");t.classList.add("button-container");let n=document.createElement("img");n.src="assets/chat.svg",n.classList.add("icon"),this.chatIcon=n;let s=document.createElement("img");s.src="assets/cross.svg",s.classList.add("icon","hidden"),this.closeIcon=s,t.appendChild(this.chatIcon),t.appendChild(this.closeIcon),t.addEventListener("click",this.toggleOpen.bind(this)),this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("hidden","message-container"),this.createMessageContainerContent(),e.appendChild(this.messageContainer),e.appendChild(t)}createMessageContainerContent(){this.messageContainer.innerHTML="";let e=document.createElement("h2");e.textContent="We're not here, drop us an email...";let t=document.createElement("form");t.classList.add("content");let n=document.createElement("input");n.required=!0,n.id="email",n.type="email",n.placeholder="Enter your email address";let s=document.createElement("textarea");s.required=!0,s.id="message",s.placeholder="Your message";let i=document.createElement("button");i.textContent="Submit",t.appendChild(n),t.appendChild(s),t.appendChild(i),t.addEventListener("submit",this.submit.bind(this)),this.messageContainer.appendChild(e),this.messageContainer.appendChild(t)}createStyles(){let e=document.createElement("style");e.innerHTML=`
            .icon {
                cursor: pointer;
                width: 70%;
                position: absolute;
                top: 9px;
                left: 9px;
                transition: transform .3s ease;
            }
            .hidden {
                transform: scale(0);
            }
            .button-container {
                background-color: #04b73f;
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
            .message-container {
                box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
                width: 400px;
                right: -25px;
                bottom: 75px;
                max-height: 400px;
                position: absolute;
                transition: max-height .2s ease;
                font-family: Helvetica, Arial ,sans-serif;
            }
            .message-container.hidden {
                max-height: 0px;
            }
            .message-container h2 {
                margin: 0;
                padding: 20px 20px;
                color: #fff;
                background-color: #04b73f;
            }
            .message-container .content {
                margin: 20px 10px ;
                border: 1px solid #dbdbdb;
                padding: 10px;
                display: flex;
                background-color: #fff;
                flex-direction: column;
            }
            .message-container form * {
                margin: 5px 0;
            }
            .message-container form input {
                padding: 10px;
            }
            .message-container form textarea {
                height: 100px;
                padding: 10px;
            }
            .message-container form textarea::placeholder {
                font-family: Helvetica, Arial ,sans-serif;
            }
            .message-container form button {
                cursor: pointer;
                background-color: #04b73f;
                color: #fff;
                border: 0;
                border-radius: 4px;
                padding: 10px;
            }
            .message-container form button:hover {
                background-color: #16632f;
            }
        `.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}toggleOpen(){this.open=!this.open,this.open?(this.chatIcon.classList.add("hidden"),this.closeIcon.classList.remove("hidden"),this.messageContainer.classList.remove("hidden")):(this.createMessageContainerContent(),this.chatIcon.classList.remove("hidden"),this.closeIcon.classList.add("hidden"),this.messageContainer.classList.add("hidden"))}submit(e){e.preventDefault();let t={email:e.srcElement.querySelector("#email").value,message:e.srcElement.querySelector("#message").value};this.messageContainer.innerHTML='<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry',console.log(t)}};
//# sourceMappingURL=index.993ab0f1.js.map
