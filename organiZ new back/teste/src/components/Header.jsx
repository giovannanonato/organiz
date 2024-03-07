import Perfil from "./Perfil"

export default function Header() {
    return (
        /*logo(img) e nome(h1) do progeto do canto superior esquerdo*/
        <header className="menu">
            <div className="imgLogo">
                <img src="img/logo.png.png" alt="logo" height="60px" />
                <h1 class="nome2">Organi<span>Z</span></h1>
            </div>

            <div className="suporte"> <p>Suporte</p> </div>
            <Perfil />

        </header>

    )
}