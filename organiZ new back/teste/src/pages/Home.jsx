import { HeaderLP } from '../components/HeaderLP/HeaderLP';
import { Principal } from '../components/Principal/Principal';
import { OqueSomos } from '../components/OqueSomos/OqueSomos';
import { Produtos } from '../components/Produtos/Produtos';
import { Planos } from '../components/Planos/Planos';
import { Rodape } from '../components/Rodape/Rodape';


function Home() {
    return (

        <div className="app">
            <HeaderLP />
            <Principal />
            <OqueSomos />
            {/*<Produtos />*/}
            <Planos />
            <Rodape />

        </div>

    );
}

export { Home };