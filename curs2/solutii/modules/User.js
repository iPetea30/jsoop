class User {
    _varsta; // protected
    #email; // private
    constructor(id, nume, email, varsta) {
        //setam proprietatile
        this.id = id;
        this.nume = nume;
        this.#email = email;
        this._varsta = varsta; // proprietate protected
    }
    get email() {
        console.log('Sunt in getter email');
        return this.#email;
    }

    set email(emailNou) {
        console.log('Sunt in setter email');
        if (emailNou == 'dan@dan.com') {
            this.#email = emailNou;
        } else {
            throw 'Error: invalid data!';
        }

    }



    get varsta() {
        return this._varsta;
    }
    set varsta(varstaNoua) {
        if (varstaNoua > 0) {
            this._varsta = this.varstaNoua;
        }
        else {
            throw 'Error: invalid data!';
            // console.error('Error!')
        }
    }
    mananca(calorii) {
        console.log(`Mananca ${calorii} calorii pe zi. Adresa lui de email este ${this.#email}`);
    }
    doarme(ore) {
        console.log(`Doarme ${ore} ore pe zi`);
    }
}
export { User }
