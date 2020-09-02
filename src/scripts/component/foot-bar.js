class FootBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="page-footer red darken-2">
            <div class="footer-copyright">
                <div class="container-nav-foot">
                    <p>© 2020 Covid-19 Update Dev</p>
                </div>
            </div>
        </footer>`;
    }
}

customElements.define("foot-bar", FootBar);