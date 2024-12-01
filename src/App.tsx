import './App.css';
import OtherAccordionFile from './Components/Accordion/AccordionFile';
import AvatarFile from './Components/Avatar/AvatarFile';
import ZDividerAddFile from './Components/DividerAddComponent/DividerAddFile';
import HeadingFile from './Components/Heading/HeadingFile';
import AccordionFile from './Components/ZAccordianListDetails/AccordionFile';
import ButtonFile from './Components/Buttons/ButtonFile';
import ButtonRadioFile from './Components/ButtonwithRadio/ButtonRadioFile';
import CalenderFile from './Components/Calendar/CalenderFile';

function App() {
  return (
    <div >
      <ZDividerAddFile/>
      <HeadingFile/>
      <AccordionFile/>
      <OtherAccordionFile/>
      <AvatarFile/>
      <ButtonFile/>
      <ButtonRadioFile/>
      <CalenderFile/>
    </div>
  );
}

export default App;
