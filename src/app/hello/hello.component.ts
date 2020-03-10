import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: `
        <h2>
            Hello {{nome}}
        </h2>
    ` 
    //template literal usando crase para templates literais com ate 3 ou 4 linhas por boa pratica
})

export class HelloComponent {
    nome = 'Maria'
}