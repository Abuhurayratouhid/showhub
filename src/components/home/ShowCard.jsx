import React from 'react';

const ShowCard = ({ item, showSummary, setShowBooking }) => {
    const { show, image } = item;
    console.log(show)
    // console.log(item)
    return (
        <div>
            <div className="card w-80 bg-primary text-primary-content m-auto">
                <div className="card-body">
                <h2 className="card-title">{show.name}
                <div className="badge badge-secondary">{show.status}</div>
                </h2>
                    <p>{show.summary.slice(0, 30)}</p>
                    <div className="card-actions justify-end">
                        
                        <label 
                        htmlFor="summary-modal" 
                        className="btn btn-sm"
                        onClick={()=> showSummary(item)}
                        >Full Summary</label>

                        <label 
                        htmlFor="booking-modal" 
                        className="btn btn-sm"
                        onClick={()=> setShowBooking(item)}
                        >Book now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;