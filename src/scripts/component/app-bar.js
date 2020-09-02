class AppBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header>
        <div class="navbar-fixed">
            <nav class="red darken-2">
                <div class="container-nav-foot">
                    <div class="nav-wrapper">
                        <h5 class="logo">Covid19 Update</h5>
                    </div>
                </div>
            </nav>
        </div>
        </header>`;
    }
}

customElements.define("app-bar", AppBar);