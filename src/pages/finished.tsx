import React from "react";
import { useLocation } from "react-router-dom";

export function Finished() {
    const location = useLocation();
    const totalValue = location.state?.data || 0;
  return (
    <div className=" bg-zinc-600 flex flex-col items-center justify-center h-screen">
        <h1>Compra concluída com sucesso!</h1>
         <div className="total">
                <h2><b>Valor total: R${totalValue.toFixed(2)}</b></h2> 
        </div>
    </div>
  );
};
