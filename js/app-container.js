const config = {  childList: true };

//Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);



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
        // Start observing the target node for configured mutations
        observer.observe(this, config);
    }
}

// customElements.whenDefined('app-container').then(() => {
//     console.log('app-container defined');
// });

//setTimeout(()=>
        customElements.define('app-container',AppContainer)
//,2000);