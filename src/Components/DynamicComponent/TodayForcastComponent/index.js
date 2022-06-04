import React from 'react'
import DetailCompnonet from '../DetailsComponent'
import MapComponent from '../MapComponent'
import './index.css'


let TodayForcastComponent = ({weatherToggler,weatherTodayDetailsComponentToggler}) => {
    return(
        <main className="container py-3 py-md-4">
        <div className="row d-flex flex-wrap-reverse px-1">

            <DetailCompnonet weatherToggler={weatherToggler} weatherTodayDetailsComponentToggler={weatherTodayDetailsComponentToggler}/>
            <MapComponent/>
            </div>
            </main>
    )
}

export default TodayForcastComponent