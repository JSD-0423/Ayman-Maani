export let createOptions = (options)=>{
  return  options.map( (option,index) => <option key={index} value={option}>{option}</option>)
}

