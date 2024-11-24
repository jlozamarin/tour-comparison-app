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
      {toursList.map((tour) => (
        <div className="tour-card" key={tour.id}>
          <img src={tour.image} alt={tour.name} />
          <h2>{tour.name}</h2>
          <p>{tour.price}</p>
          <p>
            {tour.showDescription ? tour.description : `${tour.description.slice(0, 100)}...`}
          </p>
          <button onClick={() => toggleDescription(tour.id)}>
            {tour.showDescription ? 'Show Less' : 'Read More'}
          </button>
          <button onClick={() => handleRemoveTour(tour.id)}>Not Interested</button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
