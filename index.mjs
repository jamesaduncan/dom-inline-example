class InlineExample extends HTMLElement {
    connectedCallback() {
        const exampleCode = this.cloneNode( true ).innerHTML;
        const shadowRoot = this.attachShadow( { mode: "open" } );                    

        const code = document.createElement('code');
        const pre  = document.createElement('pre');
        pre.appendChild( code );
        code.innerText = exampleCode;

        shadowRoot.appendChild( pre );

        if ( this.hasAttribute('include')) this.after( ...this.children )
    }
}
customElements.define("inline-example", InlineExample);
