import React, { useEffect, useState } from 'react'; // add the useState and useEffect 

// add the Gallery component
const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  // fetch data
  const fetchTours = async () => {
    try {
      const response = await fetch('https://www.course-api.com/react-tours-project');
      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json(); // parse the JSON
      console.log('Raw Response:', data); // log the raw data

// set the tours
      setTours(data);
    } catch (error) {
      console.error('Error retrieving data:', error); 
      setError(error.message);
    }
  };

  useEffect(() => { // useEffect hook to fetch data
    fetchTours();
  }, []);

  const removeTour = (id) => { // remove tour
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const toggleReadMore = (id) => { // toggle read more
    setTours(
      tours.map((tour) =>
        tour.id === id ? { ...tour, showMore: !tour.showMore } : tour
      )
    );
  };
// loading and error messages
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tours.length) {
    return <div>Loading...</div>; // loading message
  }

  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.name}</h2>
          <p>
            {tour.showMore ? tour.info : `${tour.info.substring(0, 100)}...`}
            <button onClick={() => toggleReadMore(tour.id)}>
              {tour.showMore ? 'Show Less' : 'Read More'}
            </button>
          </p>
          <p>Price: ${tour.price}</p>
          <img src={tour.image} alt={tour.name} />
          <button onClick={() => removeTour(tour.id)}>Not Interested</button> // not interested button
        </div>
      ))}
    </div>
  );
};

export default Gallery; // export the Gallery component