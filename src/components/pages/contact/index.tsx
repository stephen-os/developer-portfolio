const ContactIndex = () => {
    return (
        <section className="max-w-screen-md mx-auto px-4 py-16 space-y-10">
            <h1 className="text-4xl font-bold text-center text-white">Contact Me</h1>

            <p className="text-stone-400 text-lg text-left max-w-2xl mx-auto">
                Whether you want to discuss a project, collaborate on something creative, or just chat
                about graphics programming, feel free to reach out. I&rsquo;m always open to new ideas and connections.
            </p>

            <form className="bg-neutral-800 border border-stone-700 p-6 rounded-xl shadow-lg space-y-6">
                <div className="flex flex-col">
                    <label className="text-stone-300 mb-2" htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-neutral-900 border border-stone-600 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-stone-300 mb-2" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="bg-neutral-900 border border-stone-600 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-stone-300 mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Write your message here..."
                        className="bg-neutral-900 border border-stone-600 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactIndex;
