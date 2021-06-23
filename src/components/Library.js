import React, {useState, useEffect} from 'react';
import axios from '../axios';


const Library = () => {
    const [people, setPeople] = useState([]);

    useEffect(()=> {
        (async () => {
            const getPeople = await axios.get('people');
            setPeople(getPeople.data.results);
            console.log(getPeople.data.results);
          })()
    },[]);
    console.log(people);
    return (
        <div>
            {people.map((data)=> {
                return (
                    <p>{data.name}</p>
                )
            })}
        </div>
    );
}

export default Library;