import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Inhouse Buddy - Contact</title>
                <meta name="description" content="Inhouse Buddy - Contact Us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-brand-bg text-white">
                <section className="py-16 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-black">
                        Contact Us
                    </h1>
                    <p className="text-xl mb-8 text-black">
                        If you have any questions or need support, please fill
                        out the form below, and we will get back to you as soon
                        as possible.
                    </p>
                    <form
                        action="mailto:peter.sedberg@gmail.com"
                        method="post"
                        encType="text/plain"
                        className="w-full max-w-md mx-auto"
                    >
                        <div className="flex flex-wrap mb-6">
                            <label
                                htmlFor="name"
                                className="block text-black text-sm font-bold mb-2"
                            >
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <label
                                htmlFor="email"
                                className="block text-black text-sm font-bold mb-2"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <label
                                htmlFor="message"
                                className="block text-black text-sm font-bold mb-2"
                            >
                                Message:
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline h-48"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-accent hover:bg-accent-light text-white
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="mr-2"
                                />
                                Send
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Contact
