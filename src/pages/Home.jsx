import hero_image from '../images/dana-background-img.jpg'

function Home() {
    return (
        <>
            <main className='about-me'>

                <img src={hero_image} alt="picture of Dana Castagna" />

                <h2 className='mb-4'>Welcome!</h2>

                <p>
                    My name is Dana Castagna. I am a dedicated full-stack web developer with a passion for design and a diverse academic background. With college degrees in American Studies, Elementary Education, Special Education, and a Master’s in Education, I've always been driven by a love for learning and a commitment to excellence. My recent achievement—a certificate in full-stack web development—marks an exciting new chapter in my career.
                </p>

                <p className='pt-3'>
                    I blend my design sensibility with my technical skills to create intuitive and visually appealing web solutions. Hardworking and driven, I am eager to bring my unique perspective and expertise to dynamic development projects.
                </p>
            </main>

        </>
    )


}

export default Home