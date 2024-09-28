import SourceLanguageSelection from "./SourceLanguageSelection"
import TargetLanguageSelection from "./TargetLanguageSelection"
import TranslateButton from "./TranslateButton";
import InputBox from "./inputBox";
import OutputBox from "./OutputBox";
export default function Body() {
       return(
        <div>
        <div className=" flex flex-row-reverse justify-srart mt-[10%] mb-[3%]">
        <SourceLanguageSelection/>
        <TargetLanguageSelection/>
        </div>

        <div className="hidden max-1023:flex max-1023:flex-col max-1023:items-center max-1023:justify-center max-1024:p-4">
        <InputBox/>
        <TranslateButton/>
        <OutputBox/>
        </div>


        <div className=" hidden lg:flex lg:flex-row-reverse lg:justify-between">
        <InputBox/>
        <OutputBox/>
        </div>
         <div className="hidden  lg:flex lg:justify-end mr-[5%]">
        <TranslateButton/>
        </div>

        </div>
       )
}
