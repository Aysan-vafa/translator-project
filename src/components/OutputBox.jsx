import './styles/Boxes.css'
export default function outputBox() {
    return(
        <form className=" mr-4 rounded-xl border border-gray-300  w-full lg:w-1/2  h-32 custom-textarea">
            <textarea className='text-right'text-right placeholder="نتیجه"></textarea>
        </form>
    )
}
