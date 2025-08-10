import yoshikage from '../public/projects/yoshikage-kira-introduction-monologue-generator/image/Yoshikage_Kira_FullBody_Posing_with_Stand.png'

function Card()
{
    return(
        <div className="card">
            <a target="_blank" href="../public/projects/yoshikage-kira-introduction-monologue-generator/index.html"><img src={yoshikage} alt="test"></img></a>
            <a><h2>Yoshikage Kira&rsquo;s Iconic Monologue Generator</h2></a>
            <a><p>Generate monologues that are funny, customized, or random.</p></a>
        </div>
    );
}

export default Card