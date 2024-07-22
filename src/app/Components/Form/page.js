"use client";

import swal from 'sweetalert';

import Image from 'next/image';


import MarkaLogo from "../../../../public/marka.png";

export default function FormMe() {

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "a1555e7d-3169-4cca-a325-38d571507ea0",
            name: e.target.name.value,
            surname: e.target.surname.value,
            age: e.target.age.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        swal("Teşekkürler!", "Form başarıyla gönderildi.", "success");
        console.log(result);
          e.target.reset();
    }
    else {
        swal("Üzgünüm!", "Form gönderilemedi.", "error");
    }
}
      

  return (
    <section className="py-10">
      <form
        className="grid grid-cols-1 h-full w-1/2 bg-slate-100 gap-5 p-4  mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="grid-rows-2 text-3xl uppercase font-bold text-center">
          Başvuru Formu
        </h2>

        <Image src={MarkaLogo} className='text-center mx-auto' alt="form" width={100} height={70} />
        <label className="grid font-bold grid-rows-2">
          Adınız:
          <input type="text" name="name" placeholder='Write your name..' className='p-2  border-amber-500' required />
        </label>
        <label className="grid font-bold grid-rows-2">
          Soyadınız:
          <input type="text" name="surname" required placeholder='Write your surname..'   className='p-2  border-amber-500' />
        </label>
        <label className="grid font-bold grid-rows-2">
          Yaşınız: (18-60)
          <input type="number" name="age" min={18} max={60}  placeholder='Write your age..'  className='p-2 border-amber-500' />
        </label>
        <label className="grid font-bold h-fit  grid-rows-1 gap-4">
          Fikirleriniz:
          <textarea type="text" name="message"  placeholder='Write your opinion..'  className=' h-[150px] p-2 border-amber-500' />
        </label>


        <button
          type="submit"
          className=" border-2 p-2 text-xl bg-slate-400 text-white hover:bg-blue-500"
        >
          Gönder
        </button>
      </form>

    </section>
  );
}
