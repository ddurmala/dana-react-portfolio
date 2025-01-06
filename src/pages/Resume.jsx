import fileDownload from 'bootstrap-icons/icons/file-earmark-arrow-down.svg'

import fileText from 'bootstrap-icons/icons/file-text.svg'

function Resume() {

    const resumeURL = 'https://drive.google.com/file/d/1So_5yYcOTgz3cQZq7MgIYEvswKQ-vFBU/view?usp=sharing'

    const gDocResume = 'https://docs.google.com/document/d/1tjrQz4MHVP33DOwslxzLYuS4C4ctpSBOxIkYzOk1d3I/edit?usp=drive_link';

    return (
        <>
            <section className="text-center p-4 mt-5">
                <h5 className='mb-5'>Click the link below to download my full resume:</h5>
                <p className="my-3 resume-link">

                    <a href={resumeURL} download="DC-Dev-Resume.pdf" target="_blank" rel="noopener noreferrer" >

                        <img style={{ height: '2.75rem' }} src={fileDownload} className='mb-3' />
                        <br />

                        <p>Download Resume</p>
                    </a>
                </p>
            </section>


        </>
    )
}

export default Resume