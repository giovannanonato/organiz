import './HeaderLP.css'

import {Link} from 'react-router-dom'

function HeaderLP() {
    return (
        
        <div>
        <nav>
        <div className="image">
            <img src="img/logo2.png" alt="logo" height="70px"/>
        </div>
        <ul className="menu">
            <li><a href="">Início</a></li>
            <li><a href="#oquesomos">Sobre nós</a></li>
            <li><a href="#oqueoferecemos">Produtos</a>
                <ul>
                    <li>Calendários</li>
                    <li>Anotações</li>
                    <li>Planejamento rápido</li>
                    {/*<li><Link to =  "/todolist">To do list</Link></li>*/}
                    <li>To Do List</li>
                    <li>Check List</li>
                </ul>
            </li>
            <li><a href="#planos">Planos</a>
                <ul>
                    <li>Plano gratuito</li>
                    <li>Plano mensal</li>
                    <li>Plano anual</li>
                </ul>
            </li>
            <li>{/*<a href="login.html">Login</a>*/}<Link to = "/login">Login</Link></li>
        </ul>
    </nav>
    </div>
        
    );
}

export { HeaderLP };