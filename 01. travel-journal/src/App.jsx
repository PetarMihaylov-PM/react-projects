import JournalHeader from "./components/JournalHeader.jsx";
import Entry from "./components/JournalMainContent.jsx";
import travelData from '/src/data/data.js';

export default function App() {

  const entryData = travelData.map(entry => {
    return (
      <Entry 
         key={entry.id}
         {...entry}
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