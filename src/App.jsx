import s from './App.module.css'
import Header from "./components/Header/index.jsx";
import Main from "./components/Main/index.jsx";
import Footer from "./components/Footer/index.jsx";

import './i18n.js'

const App = () => {
    return (
        <div className={s.background}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;