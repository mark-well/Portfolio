
import { Helmet } from "react-helmet";
import Header from '../components/Header'

function NoPage() {
    return(
        <>
            <Helmet>
                <title>404</title>
            </Helmet>
            <div className="no-page-container h-dvh w-full">
                <Header />
                <h1 className="font-bold text-8xl text-center mt-28">404</h1>
                <section className='info-section mt-14 about-section bg-[var(--primary-color)] font-montserrat'>
                    <h2 className='font-bold text-4xl'>Oops!</h2>
                    <div className='flex flex-col gap-y-8 text-center p-8'>
                        <p className='max-w-3xl'>
                            Sorry, the page you're looking for doesn't seem to exist in this universe.
                        </p>
                    </div>
                </section>

            </div>
        </>
    );
}

export default NoPage;