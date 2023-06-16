'use client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faClipboard } from '@fortawesome/free-regular-svg-icons'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
            <title>Your Startup Name</title>
            <meta
                name="description"
                content="Your Startup - Dota 2 In-house League Bot"
            />
            <link rel="icon" href="/favicon.ico" />
            <main className="bg-brand-bg text-white">
                <section className="hero py-16 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-black">
                        Welcome to Your inhouse Bot
                    </h1>
                    <p className="text-xl mb-8 text-black">
                        The ultimate Dota 2 in-house league bot for creating and
                        managing your own leagues
                    </p>
                    <Link href="/guide">
                        <button className="bg-accent hover:bg-accent-light text-white font-bold py-2 px-4 rounded">
                            Guide
                        </button>
                    </Link>
                </section>

                <section className="features py-16">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="feature flex flex-col items-center text-center">
                            <h3 className="text-2xl font-bold my-4 text-black">
                                Easy to Use
                            </h3>
                            <div className="w-12 h-12 flex items-center justify-center mb-2">
                                <FontAwesomeIcon
                                    icon={faThumbsUp}
                                    className="text-black"
                                />
                            </div>
                            <p className="text-black">
                                Our bot simplifies the process of creating and
                                managing in-house leagues with an intuitive user
                                interface.
                            </p>
                        </div>
                        <div className="feature flex flex-col items-center text-center">
                            <h3 className="text-2xl font-bold my-4 text-black">
                                Customizable
                            </h3>
                            <div className="w-12 h-12 flex items-center justify-center mb-2">
                                <FontAwesomeIcon
                                    icon={faSlidersH}
                                    className="text-black"
                                />
                            </div>
                            <p className="text-black">
                                Customize your league with various settings to
                                create a unique experience for your community.
                            </p>
                        </div>
                        <div className="feature flex flex-col items-center text-center">
                            <h3 className="text-2xl font-bold my-4 text-black">
                                Statistics & Leaderboards
                            </h3>
                            <div className="w-12 h-12 flex items-center justify-center mb-4">
                                <FontAwesomeIcon
                                    icon={faClipboard}
                                    className="text-black"
                                />
                            </div>
                            <p className="text-black">
                                Track player performance and showcase top
                                performers with built-in statistics and
                                leaderboards.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cta py-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 text-black">
                            Ready to revolutionize your Dota 2 in-house leagues?
                        </h2>
                        <button className="bg-accent hover:bg-accent-light text-white font-bold py-2 px-4 rounded">
                            Add inhouse buddy
                        </button>
                    </div>
                </section>
                <section>
                </section>
            </main>
        </div>
    )
}

export default Home
