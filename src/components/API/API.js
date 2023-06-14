export async function fetchWebTopicsData(setWebTopicsData){
    try{
        let data = await fetch('https://tap-web-1.herokuapp.com/topics/list');
        if (!data.ok) {
            throw new Error('Error fetching data');
        }else{
            let webTopicsData =  await data.json();
            setWebTopicsData(webTopicsData);
        }
    } catch (error){
        alert(`An error occurred while fetching data: ${error.message}`);
    }
}