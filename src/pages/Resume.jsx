import fileDownload from 'bootstrap-icons/icons/file-earmark-arrow-down.svg'

import fileText from 'bootstrap-icons/icons/file-text.svg'

function Resume() {

    const resumeURL = 'https://drive.google.com/file/d/1igS2bvKwcgxOp1c1gOCDetXXvQMBxn7S/view?usp=sharing'

    const gDocResume = 'https://docs.google.com/document/d/1tjrQz4MHVP33DOwslxzLYuS4C4ctpSBOxIkYzOk1d3I/edit?usp=drive_link';

    return (
        <>
            <section className="text-center p-4 mt-5">
                <h5 className='mb-5'>Click the link below to download my full resume:</h5>
                <p className="my-3 resume-link">

                    <a href={resumeURL} download="DC-Dev-Resume.pdf" >

                        <img style={{ height: '2.75rem' }} src={fileDownload} className='mb-3' />
                        <br />

                        <p>Download Resume</p>
                    </a>
                </p>
            </section>

            <section className="text-center p-4 my-3">

                {/* Google Docs versions of Resume */}

                <h5>
                    ...for a Google Docs version of my resume, click here :
                </h5>

                <a href={gDocResume} className='d-flex justify-content-center align-items-center mt-4 resume-link'>
                    <img style={{ height: '2rem' }} src={fileText} className='mb-0 ' />

                    <p className='mb-0 ms-2 fs-3'>Dana's Resume (Google Docs)</p>
                </a>

            </section>
        </>
    )
}

export default Resume