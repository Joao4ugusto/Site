import './Apresentacao.css'


const Apresentacao = () => {
    return (
        <main>
            <section className="Container Apresentacao">
                <h1 className="Container__Titulo">Hi, I'm João <br></br>
                    Augusto</h1>
                <p className='Container__Apresentacao'>My first contact with web development was at the age of 17, helping to modify themes for some friends' integrated stores, I am currently a computer science student, dedicating a good part of my routine to studying and developing projects, for which I still want to publish and test, because I believe that that is the usefulness of the programming profession, which aims to develop solutions to help other people.</p>
                <div>
                    <ul className='Container__Links'>
                        <li><a className='links' href='https://www.instagram.com/___joao_augusto___/'>⁕ Instagram</a></li>
                        <li><a className='links' href='https://github.com/joao31Oliveira'>⁕ GitHub</a></li>
                        <li><a className='links' href='https://www.linkedin.com/in/jo%C3%A3o-augusto-oliveira-15b018238/'>⁕ Linkedin</a></li>
                        <li><a className='links' href='https://twitter.com/JooaugustoOliv9'>⁕ Twitter</a></li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Apresentacao