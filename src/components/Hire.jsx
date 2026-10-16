// import useState from "react";

// function Hire ({rate}){
//     const [hours, setHours] = useState(0);
//     const [rate, setRate] = useState(500);

//     function handleHour(){
//         setHours(hours + 1);
//     }
//     function handleAddHour() {
//         handleHour();
//         setRate(rate + 100);
//     }
//     function handleReset() {
//         setHours(0);
//         set(500);
//     }
//     return (
//         <>
//             <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10"> 
//                 <div>
//                     <Bio name="Hynes Gavin C. Daugdaug" username="@SaltySummer" />
//                     <StatCard label="Followers" value={followers} />
//                     <StatCard label="PHP per hour" value={rate} />
//                 </div>

//                 <div className="flex gap-4">
//                     <button
//                         className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
//                         onClick={handleHour}
//                     >
//                     Hour
//                     </button>
//                     <button
//                         className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
//                         onClick={handleAddHour}
//                     >
//                     Add hour
//                     </button>
//                     <button
//                         className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
//                         onClick={handleReset}
//                     >
//                     Clear
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Hire;
