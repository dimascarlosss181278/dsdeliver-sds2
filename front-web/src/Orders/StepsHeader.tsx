import './styles.css';

//criando componente
function StepsHeader() {
    return (
        <header className="orders-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br /> ETAPAS
                </h1>
                
                {/* tag <ul> instancia uma lista com nome de classe steps-items  */}
                <ul className="steps-items">
                    {/* tag <li>, itens da lista */}
                    <li>
                        {/* tag <span>referente a um numero do item da lista */}
                        <span className="steps-number">1</span>
                        Selecione os produtos e localização.
                    </li>
                    <span className="steps-number">2</span>
                    {/* Tag <strong> transforma uma parte/bloco texto em negrito     */}
                        Depois clique em <strong>"ENVIAR PEDIDO"</strong>
                    <li>

                    </li>

                </ul>
            </div>
        </header>
    )
}

export default StepsHeader;