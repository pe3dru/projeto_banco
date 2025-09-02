export class Pessoa {
    private _nome: string
    private _idade: number
    private _altura: number
    //metodos
    //metodos construtor preenchido

    constructor(nome: string, idade: number, altura: number){
        this._nome = nome
        this._idade = idade
        this._altura = altura
    }
    pular(): void{
        console.log('A pessoa pulou')
    }
    
}