interface Props {
    subTitle: string
}
export const MySubtitle = ({subTitle}: Props) => {


    console.log('My subtitulo rerender');
    return (
        <>
            <h6>{subTitle}</h6>

            <button className="bg-indigo-500 text-white px-2 py-2 rounded-md cursor-pointer">
                llamar a la funciòn
            </button>
        </>
    )
}
