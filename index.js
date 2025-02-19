// Attaching date,month,year
const months=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
const dateObjs=new Date()
const month=months[dateObjs.getUTCMonth()]
const day=dateObjs.getDate()
const year=dateObjs.getFullYear()

const appealToTime=document.getElementById('app-body-div1-dateId')
appealToTime.innerHTML=`${month} ${day},${year}`


// API calling

async function callingToApi(){
    const apiKey='e4ac7f8224e4ba1e8c940ad0594c340d'
    const value=document.getElementById('search-engine-id').value
     
    
    try{
        const APIcalling=await  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`)
        const apiJSONdata= await APIcalling.json()
        
        // if(!apiJSONdata.ok){
        //     alert('Did not find')
        //     const showAppBody=document.getElementById('app-body-id')
        //     showAppBody.style.display="none"
        // }

        const city=document.getElementById('app-body-div1-city-id')
        city.innerHTML= await apiJSONdata.name
        
        const weather=document.getElementById('app-body-div1-weather-id')
        weather.innerHTML=await apiJSONdata.weather[0].main

        const icon=document.getElementById('app-body-div1-img-id') 
        icon.src='./src/img/images (1).jpg'
         
     
        const temprature=document.getElementById('app-body-div1-temprature-id')
        temprature.innerText=await apiJSONdata.main.temp

        const hights=document.getElementById('flex-container-div1-GRADUSid')
        hights.innerHTML=await apiJSONdata.main.temp_max
        
        const lows=document.getElementById('flex-container-div2-pId')
        lows.innerHTML=await apiJSONdata.main.temp_min
        
        const inputField=document.getElementById('search-engine-id')
        inputField.value=''
        
        const showAppBody=document.getElementById('app-body-id')
        showAppBody.style.display="contents"

         
    }
    catch(error){
        
          const showAppBody1=document.getElementById('app-body-id')
        showAppBody1.style.display="none"

        const showAppBody=document.getElementById('not-found-section')
        showAppBody.style.display="contents" 
 
        
    }
}

 
 

const appealToSearchBtn=document.getElementById('searchBtn')
appealToSearchBtn.addEventListener('click',callingToApi)

document.addEventListener('keypress',function(event){
    if(event.key==='Enter'){
        callingToApi()
    }
})