

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        console.log('constructor');
    }

    connectedCallback() {
        //         this.css = getDefaultStyle();
        //         this.template = getDefaultTemplate();
        //         this.shadow.appendChild(this.css);
        //         this.shadow.appendChild(this.template);
        console.log('connectedCallback',this.shadow);
    }
}

customElements.whenDefined('app-container').then(() => {
    console.log('app-container defined');
});

setTimeout(()=>
        customElements.define('app-container',AppContainer)
,2000);