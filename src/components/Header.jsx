// import logo from './assets/Frame 270.png';
import logo from '../assets/Frame 270.png'

export default function Header(){
    return(
        <div>
        <div className='flex justify-between items-center p-[5%] '>
            <p className='font-bold leading-4 inline-block'>Startranslate</p>
            <img className='w-20 h-8' src={logo} alt="logo..."/>

        </div>
        <div>
        <svg width="100%" height="2" >
        <line x1="0" y1="1" x2="100%" y2="1" stroke='gray' strokeWidth="1"/>
    </svg>
    </div>
    </div>
     )
 }
