//import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github() {
    const data = useLoaderData();
//    const [data, setData] = useState([])
//    useEffect(() => {
//        fetch('https://api.github.com/users/mohits-git')
//            .then(response => response.json())
//            .then(res => {
//                console.log(res)
//                setData(res);
//            })
//    }, [data])
    
    return (
        <div className="bg-orange-400 text-white text-center text-3xl m-4 p-5">
            Github followers: {data.followers}  
        <img className="rounded-xl " src={data.avatar_url} alt="Github Avatar" width={300}/>
        </div>
    )
}

export const gitInfoLoader = async () => {
        const response = await fetch('https://api.github.com/users/mohits-git')
        return response.json();
}
