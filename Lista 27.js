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

    ExibirInfo(gerenteParametro)
}

class Produto{
    NomeProduto
    Valor
}

class Venda extends Vendedor{
    ListaDeProdutos
    ValorTotal

    AdicionarProduto(produtoParametro){
        arrayProdutos.push(produtoParametro)
    }
    
    CalcularTotal(){
        let total = 0
        arrayProdutos.forEach((produto) =>{
            this.ValorTotal = total + produto
        })
    }

    FinalizarVenda(vendedorParametro){
        console.log(vendedorParametro , this.ValorTotal)
    }
}


let gerenteUm = new Gerente()
gerenteUm.Nome = "Gabriel"
gerenteUm.Salario = 20000
gerenteUm.Departamento = "TI"

let vendaUm = new Venda()
arrayProdutos = []
vendaUm.ListaDeProdutos = arrayProdutos
vendaUm.ValorTotal = 0

let produtoUm = new Produto()
produto.NomeProduto = "Chocolate"
produto.Valor = 5
produto.AdicionarProduto(produtoUm)

let produtoDois = new Produto()
produto.NomeProduto = "Leite Condensado"
produto.Valor = 6
produto.AdicionarProduto(produtoDois)