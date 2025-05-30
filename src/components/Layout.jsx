export default function Layout(props){

    const {children} = props

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND </h1>
                <p>for coffee instatiates</p>
            </div>
            <button>
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )
    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by <a href="https://developersam-portfolio.netlify.app/">Sam Waithaka</a></p>
        </footer>
    )
    return(
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}