import './Rodape.css';

const Rodape = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='https://github.com/gustavourzedo' target="_blank" rel="noreferrer">
                        <img src='/imagens/github.png' alt='Github' />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/gustavourzedo/' target="_blank" rel="noreferrer">
                        <img src='/imagens/linkedin.png' alt='Linkedin' />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo.png' alt='Logo' />
        </section>
        <section className='desenvolvedor'>
            <p>
                Desenvolvido por <a href='github.com/gustavourzedo' target="_blank" rel="noreferrer"> Gustavo Urzedo</a>.
            </p>
        </section>

    </footer>)
}

export default Rodape;