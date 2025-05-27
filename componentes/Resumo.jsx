import { FaMoneyBillAlt } from "react-icons/fa";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";

function Resumo({balanco, receita, despesa, tratarValor}) {

    return (
        <div className="flex flex-col w-4/5 max-w-250 bg-slate-800 md:bg-terceira border-1 border-slate-500 rounded-xl shadow-lg p-3.5 md:p-5">
            <h3 className="flex items-center text-xl md:text-2xl font-bold text-slate-200 md:mb-2"><FaMoneyBillAlt className="text-green-500 mr-2.5"/>Visão Geral</h3>
            <p className="max-md:hidden text-slate-100">Seu balanço geral</p>
            <div className="flex justify-around gap-2 md:justify-around md:gap-12 pt-2 md:pt-5">
                <section className="text-center md:text-left md:bg-slate-800 md:min-w-40 md:h-24 md:rounded-lg">
                    <h4 className="md:text-lg md:flex md:items-center text-amber-50 font-bold m-1.5"><FaScaleUnbalancedFlip className="text-blue-500 ml-5.5 md:ml-0 md:mr-2.5"/>
                        Disponível</h4>
                    <p className="text-xs md:p-1 md:text-2xl font-bold md:m-1.5 text-green-500">R$ {tratarValor(balanco)}</p>
                </section>
                <section className="text-center md:text-left md:bg-slate-800 md:min-w-40 md:h-24 md:rounded-lg">
                    <h4 className="md:text-lg md:flex md:items-center text-amber-50 font-bold m-1.5"><BsGraphUpArrow className="text-green-500 ml-5 md:ml-0 md:mr-2.5"/>Receita</h4>
                    <p className="text-xs md:p-1 md:text-2xl font-bold md:m-1.5 text-green-500">R$ {tratarValor(receita)}</p>
                </section>
                <section className="text-center md:text-left md:bg-slate-800 md:min-w-40 md:h-24 md:rounded-lg">
                    <h4 className="md:text-lg md:flex md:items-center text-amber-50 font-bold m-1.5"><BsGraphDownArrow className="text-red-500 ml-5.5 md:ml-0 md:mr-2.5"/>Despesa</h4>
                    <p className="text-xs md:p-1 md:text-2xl font-bold md:m-1.5 text-red-500">R$ {tratarValor(despesa)}</p>
                </section>
            </div>
        </div>
    );
};

export default Resumo;