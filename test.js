class Company {
    constructor(president, vicepresident) {
        this.president = president;
        this.vicepresident = vicepresident;
    }

    displayStoreDisplay() {
        console.log(`President: ${this.president}`);
        console.log(`Vicepresident: ${this.vicepresident}`);
    }
}

const myCompany = new Company('glfabila', 'rhicsgeonzon');
myCompany.displayStoreDisplay();