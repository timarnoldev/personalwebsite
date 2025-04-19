export default function BlogSeparator(props: { text: string, id: string, center?:boolean }) {
    return <div id={props.id} className={`mx-5 sm:mx-0 flex items-center ${props.center&&"justify-evenly"} flex-row gap-2 mt-10 mb-5 w-full self-center`}>
        <div className="w-1/3 h-1 bg-gray-600 rounded"></div>
        <h2 className="text-xl font-bold text-gray-600 text-center">{props.text}</h2>
        <div className="w-1/3 h-1 bg-gray-600 rounded"></div>
    </div>

}