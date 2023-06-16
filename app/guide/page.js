'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Guide = () => {
    const [guideType, setGuideType] = useState(null)

    const handleClick = (type) => {
        if (guideType === type) {
            setGuideType(null)
        } else {
            setGuideType(type)
        }
    }

    const renderGuide = () => {
        switch (guideType) {
            case 'individual':
                return (
                    <section className="content py-8">
                        <div className="container mx-auto flex flex-col items-center">
                            <ol className="prose prose-lg text-center">
                                <li>
                                    Step 1: Click
                                    <Link
                                        href="https://discord.com/api/oauth2/authorize?client_id=1065134684616536114&permissions=543582321744&scope=bot"
                                        target="_blank"
                                    >
                                        <span style={{ fontWeight: 'bold' }}>
                                            {' '}
                                            here
                                        </span>
                                    </Link>{' '}
                                    to add our bot to your server.{' '}
                                </li>
                                <li>
                                    Step 2: Put 5 players into the team radiant
                                    and dire channel.
                                </li>
                                <li>
                                    Step 3: Click the lock emoji to lock the
                                    teams and start the game.
                                </li>
                                <li>
                                    Step 4: At the end of the game, answer the
                                    generated message in the text channel to
                                    inform the bot which team won.
                                </li>
                                <li>
                                    Step 5: Thus, your league is created! Click
                                    the trophy emoji to see the league
                                    statistics and rankings.
                                </li>
                            </ol>
                        </div>
                    </section>
                )
            case 'team':
                return (
                    <section className="content py-8">
                        <div className="container mx-auto flex flex-col items-center">
                            <ol className="prose prose-lg text-center">
                                <li>
                                    Step 1: Click
                                    <Link
                                        href="https://discord.com/api/oauth2/authorize?client_id=1065134684616536114&permissions=543582321744&scope=bot"
                                        target="_blank"
                                    >
                                        <span style={{ fontWeight: 'bold' }}>
                                            {' '}
                                            here
                                        </span>
                                    </Link>{' '}
                                    to add our bot to your server.{' '}
                                </li>
                                <li>
                                    Step 2: Put 5 players into the team radiant
                                    and dire channel.
                                </li>
                                <li>
                                    Step 3: Click the lock emoji to lock the
                                    teams and start the game.
                                </li>
                                <li>
                                    Step 4: At the end of the game, answer the
                                    generated message in the text channel to
                                    inform the bot which team won.
                                </li>
                                <li>
                                    Step 5: Thus, your league is created! Click
                                    the trophy emoji to see the league
                                    statistics and rankings.
                                </li>
                            </ol>
                        </div>
                    </section>
                )
            default:
                return null
        }
    }

    return (
        <div>
            <Head>
                <title>Guide - Your Startup Name</title>
                <meta
                    name="description"
                    content="Your Startup - Dota 2 In-house League Bot - Guide"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-brand-bg text-black">
                <section className="hero py-16 text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Guide to Your Startup
                    </h1>
                    <p className="text-xl mb-8">
                        Choose the guide that fits your needs:
                    </p>
                    <button
                        onClick={() => handleClick('individual')}
                        className={`bg-accent hover:bg-accent-light text-white font-bold py-2 px-4 rounded mr-4 ${
                            guideType === 'individual' ? 'shadow-glow' : ''
                        }`}
                    >
                        Guide for Individual Stats
                    </button>
                    <button
                        onClick={() => handleClick('team')}
                        className={`bg-accent hover:bg-accent-light text-white font-bold py-2 px-4 rounded ${
                            guideType === 'team'
                                ? 'border-2 border-blue-500'
                                : ''
                        }`}
                    >
                        Guide for Team Stats
                    </button>
                </section>

                {renderGuide()}

                <section className="cta py-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to start your own in-house league?
                        </h2>
                        <Link
                            href="https://discord.com/api/oauth2/authorize?client_id=1065134684616536114&permissions=543582321744&scope=bot"
                            target="_blank"
                        >
                            <button className="bg-accent hover:bg-accent-light text-white font-bold py-2 px-4 rounded">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Guide
