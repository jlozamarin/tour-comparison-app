import React, { useState, useEffect } from 'react'; // import the useState and useEffect hooks

// add the Gallery component
const Gallery = () => {
  const [toursList, setToursList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch data
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        const data = await response.json();
        setToursList(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to retrieve tours. Please try again later.');
        setLoading(false);
      }
    };
    fetchTours(); 
  }, []); 

// togglle functionality for description
  const toggleDescription = (id) => {
    setToursList((prevTours) =>
      prevTours.map((tour) =>
        tour.id === id ? { ...tour, showDescription: !tour.showDescription } : tour
      )
    );
  };

  const handleRemoveTour = (id) => {
    setToursList(toursList.filter((tour) => tour.id !== id));
  };
// loading and error messages
  if (loading) {
    return <p>Loading tours...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
// display the tours
return (
    <div className="tour-list">
      {tours.map((tour) => (
        <div key={tour.id} className="tour-panel">
          <img src={tour.image} alt={tour.name} />
          <h2>{tour.name}</h2>
          <div className="price">${tour.price}</div>
          <p>
            {showFullDescription[tour.id]
              ? tour.info
              : `${tour.info.substring(0, 100)}...`}
          </p>
          <button onClick={() => toggleDescription(tour.id)}>
            {showFullDescription[tour.id] ? "Show Less" : "Read More"}
          </button>
          <button onClick={() => removeTour(tour.id)}>Not Interested</button>
        </div>
      ))}
    </div>
  );  
};

export default Gallery;
