// import './styles/Selections.css';

export default function SourceLanguageSelection(){
    return(
        <form className="custom-select ml-3 mr-[5%]" action="#">
            <select className="border border-gray-400 rounded-full px-3.5 py-2 " name="sourceLanguage">
            <option value="" disabled selected>زبان مبدا</option>
            <option></option>
            <option></option>
            </select>
        </form>
    )
}
