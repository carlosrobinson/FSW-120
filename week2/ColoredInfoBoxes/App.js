import React from "react"
import InfoBox from "./components/InfoBox"
function App() {
    return (
        <div className= "info-box">
            <InfoBox boxColor = "#E0271C" info= {{
                title: "Frankenstein:", 
                subtitle: "The Modern Prometheus", 
                information: " An 1818 novel written by English author Mary Shelley."
            }} />
        <br/>
            <InfoBox boxColor = "#0E6616" info= {{
                title: "Oliver Twist:", 
                subtitle: "The Parish Boy's Progress", 
                information: " A Charles Dickens's second novel, and was published as a serial from 1837 to 1839 and released as a three-volume book in 1838."
            }}/>
        <br/>
            <InfoBox boxColor= "#F6EF12" info= {{
                title: "Close to the Sun:", 
                subtitle: "The Journey of a Pioneer Heart Surgeon", 
                information: " An adventurous, riveting account based on the experience of over 40,000 heart surgeries."
            }}/>
        <br/>
            <InfoBox boxColor= "#0E664B" info= {{
                title: "Wrong Planet:", 
                subtitle: "Searching for your Tribe", 
                information: " The most unexpected and revealing book of our time."
            }}/>
        <br/>
            <InfoBox boxColor= "#6B0FA8" info= {{
                title: "Ghost Hunt:", 
                subtitle: "true New Zealand ghost stories", 
                information: " Ten chapters exploring haunted hotspots, theatres, pubs, cemeteries, hospitals and heritage houses."
            }}/>
          <br/>
            <InfoBox boxColor= "#F7471B" info= {{
                title: "The Year of the Ghouls:", 
                subtitle: "The Complete History of Burke and Hare", 
                information: " One of the world's most gruesome and notorious criminal partnerships ran its horrific course in Edinburgh during the year 1828."
            }}/>
          <br/>
            <InfoBox boxColor= "#3B2AFF" info= {{
                title: "Frankenstein", 
                subtitle: "The Modern Prometheus", 
                information: " An 1818 novel written by English author Mary Shelley."
            }}/>
          <br/>
            <InfoBox boxColor= "#6B1F0C" info= {{
                title: "Bloom County:", 
                subtitle: "Loose Tails", 
                information: "  It's an acknowledged bit of wisdom that authors all learn at one time or another: Don't let your publisher write the promotional material."
            }}/>
          <br/>
            <InfoBox boxColor= "#0676C0" info= {{
                title: "On the Road: ", 
                subtitle: "Growing up in Eight Journeys", 
                information: " In a new and very appropriate form of autobiography, Richard Hammond tells his life story through a series of significant driving episodes."
            }}/>
          <br/>
            <InfoBox boxColor= "#39FF0F" info= {{
                title: "Judy:", 
                subtitle: "A Dog In A Million", 
                information: " Judy, a beautiful liver and white English pointer, and the only animal POW of WWII, truly was a dog in a million."
            }}/>
        </div>
    )
}

export default App