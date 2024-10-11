import SourceLanguageSelector from "./SourceLanguageSelector"
import TargetLanguageSelector from "./TargetLanguageSelector"
import TranslateButton from "./TranslateButton";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import React,{useState} from "react";
export default function Body() {
    const [SourceLanguage, setSourceLanguage] = useState('eng_Latn');
  const [TargetLanguage, setTargetLanguage] = useState('fra_Latn');
  const [InputText, setInputText] = useState('');
  const [OutputText, setOutputText] = useState('');
  const apiToken = '95fe641b7988211661ae02b5ef9fb10c53db71ce';

  const handleTranslate = async () => {
    try {
      const response = await fetch('https://api.nlpcloud.io/v1/nllb-200-3-3b/translation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${apiToken}`,
        },
        body: JSON.stringify({
          text: InputText,
          source: SourceLanguage,
          target: TargetLanguage,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setOutputText(data.translation_text);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

       return(
        <div>
        <div className=" flex flex-row-reverse justify-srart mt-[10%] mb-[3%]">
        <SourceLanguageSelector SourceLanguage={SourceLanguage} setSourceLanguage={setSourceLanguage}/>
        <TargetLanguageSelector TargetLanguage={TargetLanguage} setTargetLanguage={setTargetLanguage}/>
        </div>

        <div className="hidden max-1023:flex max-1023:flex-col max-1023:items-center max-1023:justify-center max-1024:p-4">
        <InputBox InputText={InputText} setInputText={setInputText}/>
        <TranslateButton handleTranslate={handleTranslate}/>
        <OutputBox OutputText={OutputText}/>
        </div>


        <div className=" hidden lg:flex lg:flex-row-reverse lg:justify-between">
        <InputBox InputText={InputText} setInputText={setInputText}/>
        <OutputBox OutputText={OutputText} />
        </div>
         <div className="hidden  lg:flex lg:justify-end mr-[5%]">
        <TranslateButton handleTranslate={handleTranslate} />
        </div>

        </div>
       )
}
