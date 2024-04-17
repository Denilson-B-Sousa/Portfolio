
export function Tags() {

    const tecnologies = ["#React", "#Tailwindcss", "#Typescript"];

    return(
        <>
            {tecnologies.map((tag, index) => (
                 <span key={index} className="p-[4px] px-[8px] bg-light-background text-black-background text-xs font-Poppins font-semibold rounded-lg ">
                    {tag}
                 </span>
            ))}
        </>
        
    )
}