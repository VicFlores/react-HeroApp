import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroeScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero =  useMemo(() => getHeroeById(heroeId), [heroeId])

    if ( !hero ){
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if (history.length <= 2){
            history.push('/');
        } else {
            history.goBack();   
        }
    }

    const {
        superhero,
        alter_ego,
        first_appearance,
        characters,
        publisher,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                    src={ `../assets/heroes/${ heroeId }.jpg ` } 
                    alt={ superhero }
                />
            </div>            
            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> Firts appearance: </b> { first_appearance } </li>
                    <li className="list-group-item"> <b> Characters: </b> { characters } </li>
                </ul>

                <button 
                    className="btn btn-outline-info mt-3 ml-3"
                    onClick={handleReturn}
                >
                    Return
                </button>

            </div>
        </div>
    )
}
