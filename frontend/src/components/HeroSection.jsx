
import profilePic from "../assets/profile.png";

function HeroSection({className}) {
    return(
        <main className={`hero-section flex items-center gap-x-52 w-full ${className}`}>
            <div className="title-container flex flex-col flex-1 gap-y-4">
                <h1 className="text-3xl font-bold">Hi, my name is <span className="text-highlight">Mark Well Merto</span> <br/>
                    an aspiring Software Engineer.
                </h1>

                <a href="/about" className="main-button">Know More</a>
            </div>

            <div className="picture-container flex-1">
                <img src={profilePic} width="399" height="558" alt="profile picture of the developer" />
            </div>
        </main>
    );
}

export default HeroSection;