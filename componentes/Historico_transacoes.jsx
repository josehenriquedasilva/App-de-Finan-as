import { FaCircleArrowUp } from "react-icons/fa6";
import { IoIosRemoveCircle } from "react-icons/io";
import { HiTrash } from "react-icons/hi";

function Historico_transacoes({transacoes, excluirTransacao}) {

    return (
        <div className="flex flex-col w-4/5 max-w-250 bg-terceira border-1 border-slate-500 rounded-xl shadow-lg p-5 mb-5">
            <h3 className="text-2xl font-bold text-amber-50 mb-2">Transações</h3>
            <p className="text-amber-50 text-sm md:text-base mb-5">Histórico de entradas e saidas</p>
            <ul className="flex flex-col gap-2">
                {transacoes.length ? <div className="flex flex-col gap-2.5">{transacoes.map((transacao) => (
                    <li key={transacao.id} className="flex items-center bg-slate-800 text-amber-50 justify-between md:pl-3 md:pr-3 md:w-[270px] rounded-sm p-1.5">
                        <p>
                            {transacao.receita ? <FaCircleArrowUp className="size-6 text-green-600 bg-amber-50 rounded-4xl border-2 border-amber-50"/> : <IoIosRemoveCircle className="size-6 bg-amber-50 text-red-600 rounded-4xl"/>}
                        </p>

                        <div>
                            <p className="flex gap-1.5 items-center font-medium">{transacao.receita ? <p className="text-green-600">Receita</p> : <p className="text-[#F22C3D] font-medium">Despesa</p>}</p>
                            <p className="font-medium">{transacao.titulo}</p>
                        </div>

                        <p className="font-medium">{transacao.receita ? <span className="text-green-600 text-sm md:text-base">+R${transacao.valor}</span> : <span className="text-[#F22C3D]">-R${transacao.valor}</span>}</p>
                        <HiTrash className="size-6 border border-red-300 rounded-2xl bg-red-500 p-[1.5px] cursor-pointer"
                        onClick={() => excluirTransacao(transacao)}/>
                    </li>
                ))}</div> : <p className="text-sm md:text-base text-amber-50 text-center p-8">Nenhuma transação registrada</p>}
            </ul>
        </div>
    );
};

export default Historico_transacoes;