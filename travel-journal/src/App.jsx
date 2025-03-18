import JournalHeader from "./components/JournalHeader.jsx";
import Entry from "./components/JournalMainContent.jsx";
import travelData from '/src/data/data.js';

export default function App() {

  const entryData = travelData.map(destination => {
  const {coutry, dates, googleMapsLink, img, text, title, id} = destination;
    return (
      <Entry 
         key={id}
         entry= {destination}
      />
    )
  })
  console.log(entryData);
  return (
    <>
      <JournalHeader />
      {entryData}
    </>
  )
}