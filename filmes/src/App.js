import './App.css';
import CadastroFilme from './pages/cadastroFilme/CadastroFilme.jsx';
import Login from  "./pages/login/Login.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
  <>
   {/* <Login/>*/}
  <CadastroFilme/>
  </>
  );
}
//qualquer um pode acessar o app, por causa do comando abaixo
export default App;
