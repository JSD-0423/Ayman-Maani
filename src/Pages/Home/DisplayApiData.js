import TopicsCard from "../../components/TopicsCard/TopicsCard"


export const displayDataWithoutSearch = (webTopicsData)=>{
 return webTopicsData.map((card) => <TopicsCard key={card.id} image={card.image} category={card.category} topic={card.topic} name={card.name}/>)
}

export const displaySearchedData = (searchAPIArray)=>{
 return searchAPIArray.map((card) => <TopicsCard key={card.id} image={card.image} category={card.category} topic={card.topic} name={card.name}/>)
}