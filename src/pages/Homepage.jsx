import BarChart from "../components/BarChart"
import Footer from "../components/Footer"
import LineChart from "../components/LineChart"

// const dateCounter = () =>{
//     const dateToTime = date => date.toLocaleString('en-US', {
//         hour: 'numeric',
//         minute: 'numeric'
//       });
      
//       const dateString = "2020-03-22T22:45:05+00:00";
//       const userOffset = new Date().getTimezoneOffset()*60*1000;
//       const localDate = new Date(dateString);
//       const utcDate = new Date(localDate.getTime() + userOffset);
      
//       console.log(`${dateToTime(utcDate)} (${dateToTime(localDate)} Your Time)`);
// }

const Homepage = () =>{
    
    return <>
        <LineChart/>
        <BarChart/>
        <Footer/>
    </>
    

}

export default Homepage