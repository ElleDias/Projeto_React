import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro"
import "./CadastroFilme.css"; //importando meu css do cadastro filme
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
    return (
        <>
            <Header />
            <main>
            <Cadastro />
            <Lista />
            </main>
            <Footer />
        </>
    );
};
export default CadastroFilme;
