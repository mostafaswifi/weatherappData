import React from 'react'
import DetailCompnonet from '../DetailsComponent'
import MapComponent from '../MapComponent'
import './index.css'

let TodayForcastComponent = () => {
    return(
        <main className="container py-3 py-md-4">
        <div className="row px-1">

            <DetailCompnonet/>
            <MapComponent/>
            </div>
            </main>
    )
}

export default TodayForcastComponent