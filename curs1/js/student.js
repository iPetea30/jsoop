class Student {
    // nota1 = 6;
    // nota2 = 7;
    constructor(id, nume, varsta, nota1, nota2, media) {
        this.id = id;
        this.nume = nume;
        this.varsta = varsta;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.media = media;
    }
    salut() {
        console.log(`Buna ziua ${this.nume}!`);
    }
    examen(nota1, nota2) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        console.log(`Nota la examen a fost ${nota1}`);
    }
    calMedia() {
        console.log(`Media examenelor a fost (${nota1} + ${nota2})/2`);
    }
}
