import TypewriterSwitch from "@/components/typewriter-switch";

const AboutIndex = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-4 py-10 text-white space-y-24">
            <div className="text-4xl font-bold text-center mb-16">
                <TypewriterSwitch texts={["About Me", "Education", "Interests"]} />
            </div>

            {/* About Me */}
            <div className="text-stone-400 text-2xl text-center mb-16">
                <p>
                    My name is Stephen, and I’m from a small town called Stuarts Draft in the Shenandoah Valley.
                    I first got into programming in high school when one of my favorite teachers introduced a new course on game development.
                    While the class wasn’t very technical, it exposed me to the foundations of programming — and I was hooked.
                </p>
            </div>

            {/* Education Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <img
                    src="/about-me/graduation.jpg"
                    alt="Graduation"
                    className="rounded-2xl w-full object-cover"
                />
                <div className="text-stone-400 text-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
                    <p>
                        I graduated from James Madison University in May 2024 with a degree in Computer Science,
                        along with minors in Mathematics and History. I was especially drawn to courses in computer graphics
                        and machine learning — subjects that combined technical depth with creativity.
                    </p>
                    <p className="mt-4">
                        My mathematics minor was essential to my understanding of computer science.
                        Courses like Calculus III, Probability and Statistics, and Linear Algebra gave me the foundation I needed
                        for tackeling challenging concepts in computer science. My interest in History comes from a desire to better understand the world;
                        I believe that learning about culture, conflict, and philosophy helps us approach technology with a more thoughtful, human-centered perspective.
                    </p>
                    <p className="mt-4">
                        During my time at JMU, I completed projects in a variety of languages including Java, C/C++, and Python.
                        Some of my favorite projects included <strong>Counter Cart</strong>, a Minecraft-themed racing game built in WebGL and TypeScript,
                        and <strong>KiloBites</strong>, a Java-based recipe management tool developed using agile principles.
                    </p>
                </div>
            </div>


            {/* Extracurricular – Rocket Team */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
                <div className="text-stone-400 text-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">Piedmont Student Launch Team</h2>
                    <p>
                        Before transferring to JMU, I studied at Piedmont Virginia Community College, where I joined the
                        <strong> Piedmont Student Launch Team</strong>—a NASA-sponsored program challenging students to design, build, and launch a research-based high-powered rocket.
                    </p>
                    <p className="mt-4">
                        From 2019 to 2021, I focused on designing experimental payloads. One year, I developed a deployable drone system capable of autonomous rendezvous at a predefined location.
                        Another year, I worked on a vision-based landing detection system that estimated touchdown coordinates without relying on GPS—using onboard sensors and environmental pattern recognition.
                    </p>
                    <p className="mt-4">
                        I designed mechanical components in <strong>Fusion 360</strong>, which was my first exposure to 3D modeling and CAD software. This experience also introduced me to working with physical materials—
                        including <strong>woodworking</strong>, <strong>fiberglass layups</strong>, and <strong>soldering electronics</strong>—to build and integrate custom systems into the rocket.
                    </p>
                    <p className="mt-4">
                        Throughout each year-long project cycle, our team submitted formal technical proposals, collaborated across disciplines, and met engineering review milestones.
                    </p>
                </div>
                <img
                    src="/about-me/rocket.jpg"
                    alt="Rocket Launch Team"
                    className="rounded-2xl w-full object-cover"
                />
            </div>


            {/* Extracurricular – CAPWIC Conference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <img
                    src="/about-me/capwic.jpg"
                    alt="CAPWIC Conference"
                    className="rounded-2xl w-full object-cover"
                />
                <div className="text-stone-400 text-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">CAPWIC Conference</h2>
                    <p>
                        I had the opportunity to attend the <strong>Capital Region Celebration of Women in Computing (CAPWIC)</strong>,
                        a regional conference that promotes diversity and inclusion in technology.
                    </p>
                    <p className="mt-4">
                        As part of the event, my team and I presented an app we developed to showcase how algorithmic thinking can solve practical, real-world problems.
                        Our project focused on helping visitors to Harrisonburg build travel itineraries and generate optimized routes based on their selected destinations.
                    </p>
                    <p className="mt-4">
                        The app tackled the classic <strong>Traveling Salesman Problem (TSP)</strong>, and allowed users to experiment with different route-planning algorithms—
                        giving them insight into how various approaches performed on real, dynamic data.
                    </p>
                    <p className="mt-4">
                        We were thrilled to win <strong>first place</strong> in the conference’s flash talk competition, earning recognition for both our technical execution and presentation.
                    </p>
                </div>
            </div>


            {/* Interests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
                <div className="text-stone-400 text-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">Interests</h2>
                    <p>
                        I have a strong passion for computer graphics and machine learning, but outside of development, I’m just as drawn to music and the outdoors.
                        I play guitar and love going to concerts whenever I get the chance.
                    </p>
                    <p className="mt-4">
                        One of my favorite experiences is attending music festivals with friends—camping and enjoying live performances, and being immersed in nature.
                        I also frequently hike the trails near my home, which helps me recharge and stay inspired.
                    </p>
                </div>
                <img
                    src="/about-me/festival.jpg"
                    alt="Festival"
                    className="rounded-2xl w-full object-cover"
                />
            </div>

        </section>
    );
};

export default AboutIndex;
