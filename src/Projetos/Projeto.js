import './Projeto.css'

const Projeto = () => {
    return (
        <section className='Container'>
            <h2 className='Container__Projeto'>Projects ※⁕⌁</h2>
            <div className='Container__Projeto1'>
                <a className='link1' href='https://app-finan-as.vercel.app/'>
                    <h1 className='titulo__Projeto'>#financial control</h1>
                    <p className='descricao__projeto'>
                        Design of a personal finance control system.</p>
                </a>
            </div>

            <div className='Container__Projeto1'>
                <a className='link1' href='#'>
                    <h1 className='titulo__Projeto'>#todo list</h1>
                    <p className='descricao__projeto'>
                        Project developed to train react + typescript.</p>
                </a>
            </div>
        </section>
    )
}

export default Projeto