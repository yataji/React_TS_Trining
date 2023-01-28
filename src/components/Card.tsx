
interface Props {
    children: React.ReactNode;
}
function Card ({ children}: Props) {
    return (
    <div className=" h-24 flex mb-5 font-bold text-lg shadow-xl flex-row rounded-2xl w-full justify-between items-center bg-[#434243]">
        {children}
    </div>);
}

export default Card;