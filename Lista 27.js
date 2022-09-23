class Funcionario{
    Nome
    Salario
}

class Gerente extends Funcionario{
    Departamento

    ExibirInfo(gerenteParametro){
        console.log(gerenteParametro)
    }

}

class Vendedor extends Funcionario{
    PercentualComissao

    CalcularPercentualComissao(){
       return this.Salario = this.Salario * 0.5 
    }
}

let gerenteUm = new Gerente()
gerenteUm.Nome = "Gabriel"
gerenteUm.Salario = 20000
gerenteUm.Departamento = "TI"
