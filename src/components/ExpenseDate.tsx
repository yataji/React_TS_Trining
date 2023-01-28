interface Yataji {
    dt1: Date;
    tit: String;
}

const ExpenseDate: React.FC<Yataji> = ({dt1, tit}) => {
    const month = dt1.toLocaleString('en-US', { month: 'long' });
    const day = dt1.toLocaleString('en-US', { day: '2-digit' });
    const year = dt1.getFullYear();
    return (
        <div className=" flex flex-row justify-start items-center">
            <div className="flex flex-col items-center justify-center mx-5 bg-[#262526] w-28 border-2 rounded-xl">
                <p className=" text-white " >{month}</p>
                <p className=" text-white " >{year}</p>
                <p className=" text-white " >{day}</p>  
            </div>
            <p className=" text-white">{tit}</p>
        </div>
    );
}

export default ExpenseDate;