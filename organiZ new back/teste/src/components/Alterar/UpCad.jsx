import Header2 from "../News/Header2";
import './UpCad.css'

export default function Reminder() {

    return (
        <div id="div_color">
            <Header2 />

            <section id="main-container">
                <h1 className="name">Alterar cadastro</h1>

                <form action="#" id="lembrete">

                    <div className="title">
                        <label for="title" className="form_label">Nome</label>
                        <input type="text" className="form_input" placeholder="Insira o novo nome" />
                    </div>

                    <div className="date">
                        <label for="data" className="form_label">Data de nascimento</label>
                        <input type="date" className="form_input" />
                    </div>

                    <div className="email">
                        <label for="email" className="form_label">Email</label>
                        <input type="text" className="form_input" placeholder="Insira o novo email" />
                    </div>

                    <div className="senha">
                        <label for="senha" className="form_label">Senha</label>
                        <input type="text" className="form_input" placeholder="Insira a nova senha" />
                    </div>

                    <div className="plan">
                        <label for="plan" className="form_label">Alterar plano</label>
                        <select name="menu" id="" className="form_input">
                            <option value="opt">Selecione uma opção</option>
                            <option value="ffree" id="even">Plano gratuito</option>
                            <option value="mmensal" id="appo">Plano mensal</option>
                            <option value="aanual" id="stud">Plano anual</option>
                        </select>
                    </div>

                    <div className="buttons">
                        <input type="submit" value="Concluído" />
                        <input type="button" value="Cancelar" />
                    </div>
                </form>
            </section>
        </div>
    )
}