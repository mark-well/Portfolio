
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer"
import PrimaryButton from '../components/PrimaryButton'

function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Header />
            <div className="w-full pl-[180px] pr-[180px] flex gap-x-40 gap-y-20 mt-36 font-montserrat max-sm:flex-col max-sm:px-8">
                <div className="flex-1 flex flex-col gap-y-20">
                    <div className='flex flex-col gap-y-4'>
                        <h1 className='font-bold text-3xl'>Get in Touch</h1>
                        <p className='text-base'>Do you have any questions? I would like to hear from you, feel free to send me a message.</p>
                    </div>
                    <div className="info flex flex-col gap-y-16">
                        <div className="contact-details flex flex-col gap-y-4">
                            <h2 className='text-base font-bold'>Contact Details</h2>
                            <div>
                                <p>markwellmerto.05@gmail.com</p>
                                <p>+639197369758</p>
                                <p>+639564776123</p>
                                <p>199, M. Facundo St. Brgy.Lucong, Mabitac, Laguna, Philippines</p>
                            </div>
                        </div>
                        <section className='flex gap-x-8'>
                            <a href='https://www.facebook.com/markwell.fb' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-facebook" size='xl' /></a>
                            <a href='https://github.com/mark-well' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-github" size='xl' /></a>
                            <a href='https://www.instagram.com/its__merts/' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-instagram" size='xl' /></a>
                        </section>
                    </div>
                </div>
                <div className="flex-1">
                    <form action="post" className='send-email flex flex-col gap-y-4 mt-12'>
                        <div className='nameContainer flex gap-x-6 max-sm:flex-col max-sm:gap-y-4'>
                            <div className='fullName flex flex-col gap-y-4'>
                                <label htmlFor="name">Your Full Name</label>
                                <input id='name' name='name' type="text" placeholder='Name' className='h-12 pl-4 pr-4 outline-hidden bg-[var(--primary-color-light)]'/>
                            </div>
                            <div className='emailContainer flex flex-col gap-y-4'>
                                <label htmlFor="email">Your Email*</label>
                                <input id='email' name='email' type="text" placeholder='Email' className='h-12 pl-4 pr-4 outline-hidden bg-[var(--primary-color-light)]'/>
                            </div>
                        </div>
                        <div className='subjectContainer flex flex-col gap-y-4'>
                            <label htmlFor="subject">Your Subject</label>
                            <input id='subject' name='subject' type="text" placeholder='Subject' className='h-12 pl-4 pr-4 outline-hidden bg-[var(--primary-color-light)]'/>
                        </div>
                        <div className='messageContainer flex flex-col gap-y-4'>
                            <label htmlFor="message">Enter your message</label>
                            <textarea name="message" id="message" placeholder='Type your message here...' className='min-h-64 p-4 resize-none outline-hidden bg-[var(--primary-color-light)]'></textarea>
                        </div>
                        <PrimaryButton content='Submit' type='submit'/>
                    </form>
                </div>
            </div>
            <Footer className="mt-32"/>
        </>
    );
}

export default Contact;