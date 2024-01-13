import OneExpBar from "./OneExpBar"
import ThreeExpBar from "./ThreeExpBar"
import TwoExpBar from "./TwoExpBar"
import ZeroExpBar from "./ZeroExpBar"

import { useGetUserQuery } from "../../../../redux/api"

const ExpBar = () => {
    const { data, error, isLoading } = useGetUserQuery();

    if (isLoading) {
        console.log("Loading...")
        //TO DO
        return null
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }

    return (
        <div>
            {data.totalExp === 0 || data.totalExp === 4 || data.totalExp === 8
                ? //if level 1 return level 1 image...
                <div>
                    <ZeroExpBar />
                </div>
                : //if not, return empty <div>
                <div />}

            {data.totalExp === 1 || data.totalExp === 5 || data.totalExp === 9
                ? //if level 1 return level 1 image...
                <div>
                    <OneExpBar />
                </div>
                : //if not, return empty <div>
                <div />}

            {data.totalExp === 2 || data.totalExp === 6 || data.totalExp === 10
                ? //if level 1 return level 1 image...
                <div>
                    <TwoExpBar />
                </div>
                : //if not, return empty <div>
                <div />}

            {data.totalExp === 3 || data.totalExp === 7 || data.totalExp === 11
                ? //if level 1 return level 1 image...
                <div>
                    <ThreeExpBar />
                </div>
                : //if not, return empty <div>
                <div />}
        </div>
    )
}
export default ExpBar