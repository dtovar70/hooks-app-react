import { useCallback, useState } from "react";
import { MySubtitle } from "./ui/MySubtitle";
import { MyTitle } from "./ui/MyTitle"

  const handleMyAPICall = useCallback( () => {
    console.log('llamando a mi API');
  }, [] )

export const MemoHook = () => {

  const [title, setTitle] = useState('hola');
  const [subTitle, setSubTitle] = useState('Mundo');

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">MemoApp</h1>

        <MyTitle title={title}/>
        <MySubtitle subTitle={subTitle} callMyAPI={handleMyAPICall}/>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={ () => setTitle('World' + new Date().getTime())}>
            Cambiar título
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={ () => setSubTitle('World'/*  + new Date().getTime() */)}>
            Cambiar subtitulo
        </button>
    </div>
  )
}
