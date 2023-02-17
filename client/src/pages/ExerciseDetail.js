import { fetchWorkoutData, getRandomWorkouts } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ExerciseDetail = () => {
  const [workouts, setWorkouts] = useState([]);
  const { bodyPart } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setWorkouts([]);
      
      try {
        const response = await fetchWorkoutData(bodyPart);
        console.log(response.length);
        if(response.length >= 50) {
          const randomWorkouts = getRandomWorkouts(response, 50);
          setWorkouts(randomWorkouts);
        } else {
          setWorkouts(response);
        }
      } catch (err) {
        console.error(err);
      }
    };    

    fetchData();
  }, [bodyPart]);

  return (
    <div>
      {workouts.map((workout) => {
        return (
          <ExerciseCard key={workout.id} exercise={workout} />
        )
      })}
    </div>
  );
};

export default ExerciseDetail;
