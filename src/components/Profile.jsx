import Bio from "./Bio";
import StatCard from "./StatCard";
import App from "../App";

function Profile(){
    return (
        <>
            <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
                <div>
                    <Bio name="Hynes Gavin C. Daugdaug" username="@SaltySummer" />
                    <StatCard label="Followers" value={0} />
                    <StatCard label="PHP per hour" value={500} />
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
                    onClick={App.handleFollow}
                >
                    Follow
                </button>
                <button
                    className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
                    onClick={App.handleAddRate}
                >
                    Add rate
                </button>
                <button
                    className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
                    onClick={App.handleReset}
                >
                    Reset
                </button>
            </div>
        </>
    )
}

export default Profile;