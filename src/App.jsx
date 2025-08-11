import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'


function App() {

  return (
    <>
      <Header />
      <div className="card-container">
        <Card href="/projects/yoshikage-kira-introduction-monologue-generator/index.html"
          src="/projects/yoshikage-kira-introduction-monologue-generator/image/Yoshikage_Kira_FullBody_Posing_with_Stand.png"
          alt="Yoshikage Kira monologue generator"
          title="Yoshikage Kira&rsquo;s Iconic Monologue Generator"
          description="Generate monologues that are funny, customized, or random." />
        <Card href="/projects/god-donating-simulator/index.html"
          src="/projects/god-donating-simulator/image/cow-static.png"
          alt="God Donating Simulator"
          title="God Donating Simulator"
          description="Donate to God" />
      </div>
      <Footer />
    </>
  );
}

export default App
