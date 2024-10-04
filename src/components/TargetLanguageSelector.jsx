export default function TargetLanguageSelector({TargetLanguage , setTargetLanguage}){
    return(

            <select value={TargetLanguage} onChange={(e)=>
                setTargetLanguage(e.target.value)
            } className="border border-gray-400 rounded-full px-3.5 h-10 " name="sourceLanguage">
            <option value="" disabled selected>زبان مقصد</option>
            <option value="eng_Latn">انگلیسی</option>
            <option value="fra_Latn">فرانسوی</option>
            <option value="spa_Latn">اسپانیایی</option>
            <option value="deu_Latn">آلمانی</option>
            <option value="tur_Latn">ترکی</option>
            <option value="zho_Hant">چینی</option>
            <option value="jpn_Jpan">ژاپنی</option>
            <option value="ita_Latn">ایتالیایی</option>
            <option value="kor_Hang">کره ای</option>
            <option value="hin_Deva">هندی</option>
            <option value="pes_Arab">فارسی</option>
            <option value="rus_Cyrl">روسی</option>
            </select>

    )
}
