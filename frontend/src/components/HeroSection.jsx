
import profilePic from "../assets/profile.png";
import PrimaryButton from '../components/PrimaryButton'

function HeroSection({className}) {
    const knowMoreButton = {
        width: '10rem', 
        height: '3rem' 
    }

    return(
        <main className={`hero-section flex items-center gap-x-52 w-full max-sm:flex-col-reverse max-sm:gap-x-24 ${className}`}>
            <div className="title-container flex flex-col flex-1 gap-y-4 max-sm:items-center">
                <h1 className="text-3xl font-bold max-sm:text-xl max-sm:text-center">Hi, my name is <span className="text-highlight">Mark Well Merto</span> <br/>
                    an aspiring Software Engineer.
                </h1>
                <PrimaryButton content='Know More' to='/about' style={knowMoreButton}/>
            </div>

            <div className="flex flex-1 justify-center">
                <div className="picture-container relative overflow-hidden">
                    <img src={profilePic} className="profile-picture h-auto w-full min-w-52 max-w-80 " width="399" height="558" alt="profile picture of the developer" />
                </div>
            </div>
        </main>
    );
}

export default HeroSection;