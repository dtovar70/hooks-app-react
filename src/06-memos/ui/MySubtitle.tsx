import React from "react";

interface Props {
    subTitle: string


    callMyAPI: () => void;
}
export const MySubtitle = React.memo(({subTitle, callMyAPI}: Props) => {


    console.log('My subtitulo rerender');
    console.log('tarea super pesada');
    return (
        <>
            <h6>{subTitle}</h6>

            <button className="bg-indigo-500 text-white px-2 py-2 rounded-md cursor-pointer"
                onClick={ callMyAPI }>
                llamar a la función
            </button>
        </>
    )
});
