import BlogPic from '../../pics/Blog ss.png'
import TaskBoard from '../../pics/Task boars ss.png'
import Payroll from '../../pics/Payroll tracker ss.png'
import WeatherTracker from '../../pics/Weather.png'
import PetCronicles from '../../pics/Pet combat.png'
import README from '../../pics/README cd coverPhoto.png'
import LogoCreator from '../../pics/LogoCreatorCoverPhoto.png'
import Ecommerce from '../../pics/E-Commerce.png'
import MongoDB from '../../pics/MongoDB.png'
import Regex from '../../pics/rexgex portfolio.png'


export default function MyWork() {
    return (

        <section id="Work" className="Work">
            <h2>My Work</h2>
            <div class="all">
            {/* <div class="refactor">
                <a href="https://mitchell-610.github.io/Refactor">
                    <img src="./assets/pics/Refactor ss.png"
                        alt="A photo of a marketing team collabrating"/></a>        
            </div> */}

            <div className="blog">
                <a href="https://mitchell-610.github.io/Blog">
                    <img src={BlogPic}
                        alt="A photo of my amazing blog site"/></a>        
            </div>

             <div className="Task-Board">
                <a href="https://mitchell-610.github.io/Task-board">
                    <img src={TaskBoard}
                        alt="A photo of a task board website"/></a>        
            </div>

            <div className="Payroll">
                <a href="https://mitchell-610.github.io/Payroll-Tracker">
                    <img src={Payroll}
                        alt="A photo of a Employee tracker website that will track all your employees and return a random winner"/></a>        
            </div>

            <div className="weather-tracker">
                <a href="https://mitchell-610.github.io/Weather-Tracker">
                    <img src={WeatherTracker}
                        alt="A photo of a website that tracks any cities weather."/></a>        
            </div>

            <div className="pet">
                <a href="https://mitchell-610.github.io/Pet-Combat-Chronicles">
                    <img src={PetCronicles}
                        alt="A photo of a website that allows you to play a game where you choose a dog and see what breed wins."/></a>        
            </div>

            <div className="README">
                <a href="https://github.com/Mitchell-610/README-Generator">
                    <img src={README}
                        alt="A photo of a README-Generator that can be made within the command-line."/></a>        
            </div>

            <div className="logo">
                <a href="https://github.com/Mitchell-610/Logo-Creator">
                    <img src={LogoCreator}
                        alt="A photo of a Logo-Creator that can be made within the command-line."/></a>        
            </div>

            <div className="E-Commerce">
                <a href="https://github.com/Mitchell-610/E-Commerce">
                    <img src={Ecommerce}
                        alt="A photo of a Logo-Creator that can be made within the command-line."/></a>        
            </div>

            <div className="MongoDB">
                <a href="https://github.com/Mitchell-610/MongoDB">
                    <img src={MongoDB}
                        alt="A photo of a Logo-Creator that can be made within the command-line."/></a>        
            </div>

            <div className="Regex">
                <a href="https://gist.github.com/Mitchell-610/eb8aad3676249cef47ea91763bf825bd">
                    <img src={Regex}
                        alt="A photo of a Logo-Creator that can be made within the command-line."/></a>        
            </div>


        </div>
        </section>
    );
  }
  