import React, { useMemo } from 'react'
import queryString from 'query-string'
import { HeroeCard } from '../heroes/HeroeCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SeachScreen = ({ history }) => {

    const location =  useLocation();
    const { q='' } = queryString.parse(location.search)

    const [values, handleInputChange]= useForm({
        searchText: q
    });

    const { searchText } = values

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            autoComplete="off"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>

                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    { 
                        (q==='') 
                            && 
                                <div className="alert alert-info">
                                    Search hero
                                </div>
                    }

{ 
                        (q!=='' && heroesFiltered.length ===0) 
                            && 
                                <div className="alert alert-danger">
                                    There is no a hero with { q }
                                </div>
                    }

                    {
                        heroesFiltered.map( heroe => (
                            <HeroeCard 
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

