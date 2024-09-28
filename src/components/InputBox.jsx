import './styles/Boxes.css'
export default function InputBox() {
       return(
        <form className="mr-[5%] rounded-xl border border-gray-300  w-full lg:w-1/2 h-32 custom-textarea">
            <textarea className="text-right" placeholder="متن خود را وارد کنید"></textarea>
        </form>
       )
}
