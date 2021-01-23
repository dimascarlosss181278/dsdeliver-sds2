import StepsHeader from './StepsHeader';
import './styles.css';

//criando componente
function Orders() {
    return (
        <div className="orders-container">
          <StepsHeader />
          <h1>Orders</h1>
        </div>
     )
}

export default Orders;