import Image from "next/image";
import GemiFoto from "../../../public/gemi.jpeg";


export default function HomePage() {
    return(
        <section className="text-black-600 bg-slate-900 body-font h-screen text-center">

            <form className=" flex grid grid-cols-1 h-full w-1/2 bg-slate-100 gap-5 p-4  mx-auto">
                
            <Image src={GemiFoto} flex className='text-center mx-auto' alt="gemi.png" width={410} height={550}/>
                         <h2 className="text-3xl font-bold grid-rows-1">
                            Deniz ve Gemiler hakkında bilgi
                        </h2>
                        <label className="flex text-left grid font-bold grid-rows-1">
                            Yazılacak metin    
                        </label>
                
                
 
                </form>   
        </section>
    );
}