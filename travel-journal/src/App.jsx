import JournalHeader from "./components/JournalHeader.jsx";
import Entry from "./components/JournalMainContent.jsx";
import travelData from '/src/data/data.js';
console.log(travelData);


export default function App() {

  const entryData = travelData.map(destination => {
  const {coutry, dates, googleMapsLink, img, text, title} = destination;
    return (
      <Entry 
         img={{
            src: img.src,
            alt: img.alt
         }}
         title= {title}
         country= {coutry}
         googleMapsLink= {googleMapsLink}
         dates= {dates}
         text= {text}
      />
    )
  })

  return (
    <>
      <JournalHeader />
      {entryData}
    </>
  )
}