
import SampleIMG from './SampleIMG.png'
//Here we imported image from src folder same like that we import files
//only difference is here we have to mention extenstion along with image.  


let Movie=()=>{
    let Moviename="SALAAR CeaseFire"

    let Movieimg='https://www.pinkvilla.com/english/images/2023/07/2111941244_prabhas-salaar_-part-1-ceasefire-trailer-to-release-in-august-1-1_1280*720.jpg'
    return <div>
        <h1>MovieName:-{Moviename}</h1>

        {/* THIS IMAGE IS FROM GOOGLE WE ARE USING BY STOREING IN VARABLE */}

        <img src={Movieimg} alt="" />
        {/* here we accessing image by using ReactExpression */}

        <img src={SampleIMG} alt="" />
        {/* THIS IMAGE IS FROM SYSTEM SOURCE WE ARE USING BY IMPORTING */}
            </div>
}
export default Movie