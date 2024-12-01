import './App.css';
import OtherAccordionFile from './Components/Accordion/AccordionFile';
import AvatarFile from './Components/Avatar/AvatarFile';
import ZDividerAddFile from './Components/DividerAddComponent/DividerAddFile';
import HeadingFile from './Components/Heading/HeadingFile';
import AccordionFile from './Components/ZAccordianListDetails/AccordionFile';
import ButtonFile from './Components/Buttons/ButtonFile';
import ButtonRadioFile from './Components/ButtonwithRadio/ButtonRadioFile';
import CalenderFile from './Components/Calendar/CalenderFile';
import CardLayoutFile from './Components/Card/CardLayoutFile';
import CheckboxFile from './Components/Chekbox/CheckboxFile';
import ContainerFile from './Components/Container/ContFile';
import DatePickerFile from './Components/DatePicker/DatePickerFile';
import DrawerFile from './Components/Drawer/DrawerFile';
import DropDownFile from './Components/DropDown/DropdownFile';
import FileUploderFile from './Components/FileUploader/FileUploderFile';

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
      <CardLayoutFile/>
      <CheckboxFile/>
      <ContainerFile/>
      <DatePickerFile/>
      <DrawerFile/>
      <DropDownFile/>
      <FileUploderFile/>
    </div>
  );
}

export default App;
