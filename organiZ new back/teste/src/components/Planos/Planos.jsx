import './Planos.css'
import {Link} from 'react-router-dom'

function Planos() {
    return (
        <>

            <h1 className="prod">Produtos:</h1>
            <section id="oqueoferecemos">
                <div className="oqueoferecemos">
                    <h1 className="oqo">O que oferecemos?</h1>
                    <ul>
                        <li>-Calendário;</li><br />
                        <li>-Planejamento rápido;</li><br />
                        <li>-To do list;</li><br />
                        <li>-Anotações;</li><br />
                        <li>-Check list;</li><br />

                    </ul>
                </div>
                <div className="calendario">
                    <img src="img/pngegg.png" alt="calendario" height="450px" width="380px" />
                </div>
    </section>


            <h1 className="po">Planos oferecidos:</h1>
            <section id="planos">

                <section className="classfree">
                    <div className="gratis">
                        <img src="img/Untitled Project.jpg" alt="" height="500px" width="500px" />
                    </div>
                    <div className="planofree">
                        <h4 className="planom">Plano gratuito</h4><br />
                        <ul id="planofree">
                            <p> Calendário;</p><br />
                            <p> Anotações.</p><br />
                        </ul>

                        <div>
                            <input type="hidden" value="cadastro" />
                            {/*<button type="submit" name="submit" class="submit_btn"><a
                                href="formulario.html">Cadastre-se</a></button>*/}
                                <Link to = '/gratuito' className = 'submit_btn'>Cadastre-se</Link>
                        </div>


                    </div>
                </section>


                <section className="classmensal">
                    <div className="trintadias">
                        <img src="img/30 dias.jpg" alt="" height="500px" width="500px" />
                    </div>
                    <div className="planomensal">
                        <h4 className="planom">Plano mensal</h4><br />
                        <ul id="planomen">
                            <p> Calendário;</p><br />
                            <p> Anotações;</p><br />
                            <p> Planejamento rápido;</p><br />
                            <p> To do list.</p><br />
                        </ul>

                        <h1 id="pm">R$ 9,90 mensal</h1>
                        <div>
                            <input type="hidden" value="cadastro" />
                            {/*<button type="submit" name="submit" className="submit_btn"><a
                                href="mensal.html">Cadastre-se</a></button>*/}
                             <Link to = '/mensal' className = 'submit_btn'>Cadastre-se</Link>
                        </div>
                    </div>

                </section>


                <section className="classanual">
                    <div className="trezentos">
                        <img src="img/Untitled Project (1).jpg" alt="" height="500px" width="500px" />
                    </div>
                    <div className="planoanual">
                        <h4 className="planom">Plano anual</h4><br />
                        <ul id="planoanual">
                            <li>Calendário;</li><br />
                            <li>Anotações;</li><br />
                            <li>Planejamento rápido;</li><br />
                            <li>To do list;</li><br />
                            <li>Check list.</li><br />

                        </ul>

                        <h1 id="pa">R$ 109,90 anual</h1>
                        <div>
                            <input type="hidden" value="cadastro" />
                            {/*<button type="submit" name="submit" className="submit_btn"> <a
                                href="anual.html">Cadastre-se</a></button>*/}
                             <Link to = '/anual' className = 'submit_btn'>Cadastre-se</Link>
                        </div>
                    </div>
                </section>

            </section>

        </>

    );
}
export { Planos }