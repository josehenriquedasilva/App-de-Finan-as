import { useState } from "react";
import { IoRemoveCircle, IoAddCircleSharp } from "react-icons/io5";

 
function Add_transacao({transacaoAdd, calculandoTransacoes}) {
    const [tituloTransacao, setTituloTransacao] = useState("");
    const [valorTransacao, setValorTransacao] = useState("");
    const [tipoTransacao, setTipoTransacao] = useState(true);
    const [inputVazio, setInputVazio] = useState(false);

    const verificaNumero = (Event) => {
        const valorInput = Event.target.value;
        const valorEmNumero = valorInput.replace(/[^0-9]/g, '');
        setValorTransacao(valorEmNumero);
    };

    return (
        <div className="flex flex-col gap-6 bg-terceira w-4/5 max-w-250 border-1 border-slate-500 rounded-xl shadow-lg p-5">
            <div>
                <h3 className="text-2xl text-amber-50 font-bold mb-2">Adicionar Transação</h3>
                <p className="text-amber-50">Registre uma nova entrada ou saida</p>
            </div>
                <div className="flex flex-col gap-5">
                    <section className="flex gap-2.5">
                        <button className={`flex items-center justify-center w-1/2 h-8.5 text-center text-green-500 font-medium bg-quarta rounded-sm p-1 hover:bg-oitava hover:text-green-300 duration-250 cursor-pointer ${tipoTransacao ? 'border border-amber-50' : ''}`} onClick={() => setTipoTransacao(true)}>
                            <IoAddCircleSharp className="size-5 mr-[5px]"/>
                            Receita
                        </button>
                        
                        <button className={`flex items-center justify-center w-1/2 text-cente font-medium text-red-400 bg-quinta rounded-sm hover:bg-nona hover:text-red-300 duration-250 cursor-pointer ${tipoTransacao ? '' : 'border border-amber-50'}`} onClick={() => setTipoTransacao(false)}>
                            <IoRemoveCircle className="size-5 mr-[5px]"/>
                            Despesa
                        </button>
                    </section>

                    <p className={`bg-nona text-red-400 p-1.5 border-1 rounded-sm ${inputVazio ? 'block' : 'hidden' }`}>Preencha Todos os Campos!</p>

                    <section className="flex flex-col gap-4">
                        <input className="bg-sexta text-slate-100 p-1 border border-setima rounded-sm focus:outline-none focus:ring-1 focus:ring-black" type="text" placeholder="Título da Transação" value={tituloTransacao} onChange={(t) => setTituloTransacao(t.target.value)}/>

                        <input className="bg-sexta text-slate-100 p-1 border border-setima rounded-sm focus:outline-none focus:ring-1 focus:ring-black" type="text" onChange={verificaNumero} placeholder="Valor" value={valorTransacao}/>
                    
                        <button onClick={() => {
                            if (tituloTransacao === "" || valorTransacao === "") {
                                setInputVazio(true)
                            } else {
                                transacaoAdd(tituloTransacao, valorTransacao, tipoTransacao)
                                calculandoTransacoes(valorTransacao, tipoTransacao)
                                setTituloTransacao('')
                                setValorTransacao('')
                                setInputVazio(false)
                            }
                        }} className="bg-gradient-to-r from-l via-c to-r text-amber-50 font-bold h-8 rounded-sm hover:from-l2 hover:via-c2 hover:to-r2 transition-colors ease-in-out duration-250 cursor-pointer">Adicionar Transação</button>
                    </section>
                </div>
        </div>
    );
};

export default Add_transacao;