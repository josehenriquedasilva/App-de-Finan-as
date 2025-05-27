import { useEffect, useState } from "react";
import Add_transacao from "../componentes/Add_transacao";
import Historico_transacoes from "../componentes/Historico_transacoes";
import Resumo from "../componentes/Resumo";
import "./App.css";

function App() { 
  const [transacoes, setTransacoes] = useState(
    JSON.parse(localStorage.getItem("transacoes")) || []
  );

  const [balanco, setbalanco] = useState(
    JSON.parse(localStorage.getItem("balanco")) || 0
  );
  const [receita, setReceita] = useState(
    JSON.parse(localStorage.getItem("receita")) || 0
  );
  const [despesa, setDespesa] = useState(
    JSON.parse(localStorage.getItem("despesa")) || 0
  );

  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes))
    localStorage.setItem("balanco", JSON.stringify(balanco))
    localStorage.setItem("receita", JSON.stringify(receita))
    localStorage.setItem("despesa", JSON.stringify(despesa))
  }, [transacoes, balanco, receita, despesa]);

  function transacaoAdd(titulo, valor, receita) {
    const novaTransacao = {
      id: transacoes.length + 1,
      titulo: titulo,
      valor: valor,
      receita: receita,
    };
    setTransacoes([...transacoes, novaTransacao]);
  };
  
  function tratarValor(valor) {
    return parseFloat(valor).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
  };

  function calculandoTransacoes(valor, tipo) {
    const valorSemFormato = valor.replace("R$ ", "").replace(/\./g, "").replace(",", ".");

    const valorNumerico = parseFloat(valorSemFormato);

    if (tipo === true) {
      setbalanco((balancoAnterior) => balancoAnterior + valorNumerico);
      setReceita((receitaAnterior) => receitaAnterior + valorNumerico);
    } else if (tipo === false) {
      if (balanco - valorNumerico <= 0) {
        setbalanco(0);
        setDespesa((despesaAnterior) => despesaAnterior + valorNumerico);
      } else {
        setbalanco((balancoAnterior) => balancoAnterior - valorNumerico);
        setDespesa((despesaAnterior) => despesaAnterior + valorNumerico);
      }
    }
  }

function excluirTransacao(transacaoClick) {
  const novasTransacoes = transacoes.filter(
    (transacao) => transacao.id !== transacaoClick.id
  );
  setTransacoes(novasTransacoes);

  const valorSemFormato = transacaoClick.valor
    .replace("R$ ", "")
    .replace(/\./g, "")
    .replace(",", ".");
  const valorNumerico = parseFloat(valorSemFormato);

  if (transacaoClick.receita === true) {
    setbalanco((balancoAnterior) => balancoAnterior - valorNumerico);
    setReceita((receitaAnterior) => receitaAnterior - valorNumerico);
    if (balanco - valorNumerico < 0) {
      setbalanco(0);
    }
  } else if (transacaoClick.receita === false) {
    setDespesa((despesaAnterior) => despesaAnterior - valorNumerico);
    setbalanco(receita)
  }
}


  return (
    <div className="min-h-screen flex flex-col items-center gap-5 bg-gradient-to-br from-primeira to-segunda">
      <h1 className="text-center text-3xl md:text-5xl md:m-5 font-bold text-gradient m-2">Controle suas Finanças</h1>
      <Resumo 
      balanco={balanco}
      receita={receita}
      despesa={despesa}
      tratarValor={tratarValor}
      />
      <Add_transacao 
      transacaoAdd={transacaoAdd}
      transacoes={transacoes}
      calculandoTransacoes={calculandoTransacoes}
      />
      <Historico_transacoes 
      transacoes={transacoes}
      excluirTransacao={excluirTransacao}
      />
    </div>
  );
};

export default App;