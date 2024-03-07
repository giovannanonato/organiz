import ListGroup from 'react-bootstrap/ListGroup';

function Lembretes() {
    return (
        /*lista de lembretes da semana: futuramente sera substituido por outro código(os lembretes aparecerão de acordo com a tarefa que o usuário adicionar)*/
        <div className='ListaLembretes'>
            <ListGroup>
                <h2>LEMBRETES</h2>
                <ListGroup.Item>Seg: dentista 10h</ListGroup.Item>
                <ListGroup.Item>Qua: aniversário 19h</ListGroup.Item>
                <ListGroup.Item>Sex: entrega de trabalho</ListGroup.Item>
                <ListGroup.Item>Dom: jogo 16h</ListGroup.Item>
                <ListGroup.Item>Qua: aniversário 19h</ListGroup.Item>
                <ListGroup.Item>Sex: entrega de trabalho</ListGroup.Item>
                <ListGroup.Item>Dom: jogo 16h</ListGroup.Item>
                <ListGroup.Item>Qua: aniversário 19h</ListGroup.Item>
                <ListGroup.Item>Sex: entrega de trabalho</ListGroup.Item>
                <ListGroup.Item>Dom: jogo 16h</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Lembretes;