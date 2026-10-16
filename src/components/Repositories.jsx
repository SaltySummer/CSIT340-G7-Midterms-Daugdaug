import RepoCard from "./RepoCard";
import Hire from "./Hire";
import { useState } from "react";

function Repositories() {
    const [portfolioStars, setPortfolioStars] = useState(0);
    const [todoStars, setTodoStars] = useState(0);
    const [dotfilesStars, setDotfilesStars] = useState(0);

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
            <main className="grid grid-cols-3 gap-8 px-20 pt-8">
                <RepoCard name={"portfolio"} description={"My personal page built with React."} language={"JavaScript"} commits={48}/>
                <RepoCard name={"todo-api"} description={"A small REST API for a to-do list."} language={"Java"} commits={31}/>
                <RepoCard name={"dotfiles"} description={"My terminal and editor settings."} language={"Shell"} commits={12}/>
            </main>
        </>
    )
}

export default Repositories;