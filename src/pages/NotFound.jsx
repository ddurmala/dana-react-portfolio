import oopsimg from '/src/images/oops.png'

function NotFound() {
    return (
        <>
            <section className='notfound'>
                <img src={oopsimg} />
                <p>...page not found</p>
            </section>
        </>
    )
}

export default NotFound