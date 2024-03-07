import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //Not Interested function
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
    console.log("fhrfyrgyffgr");
    console.log(newTour);
  };

  //Fetch Tours
  const FetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tour = await response.json();
      setTours(tour);
      console.log("opiiopio");
      console.log(tour);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    FetchTours();
  }, []);

  if (IsLoading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }


  if(tours.length ===0){
    return(
      <main>
        <div className="title">
        <h2>No tours left</h2>
        <div className="title-underline"></div>
        <button type="button" className="btn" style={{marginTop:'2rem'}} onClick={()=>FetchTours()}>refresh</button>
      </div>
     
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
};
export default App;
