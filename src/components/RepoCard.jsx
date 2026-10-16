import App from "../App";
function RepoCard({ name, description, language, commits }){
     const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }
    return (
        <>
            <div className="rounded-xl border-2 border-[#222222] p-8">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{name}</h3>
                <button
                className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
                onClick={handleStarPortfolio}
                >
                ★ {portfolioStars}
                </button>
            </div>
            <p className="mt-2 text-xl">{description}</p>
            <div className="mt-6 flex items-center gap-4 text-lg">
                <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
                {language}
                </span>
                <span>{commits} commits</span>
            </div>
            </div>
        </>
    )
}

export default RepoCard;