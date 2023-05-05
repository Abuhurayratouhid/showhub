import { useQuery } from "react-query";
import ShowCard from "./ShowCard";
import SummaryModal from "../details/SummaryModal";
import { useState } from "react";
import BookingModal from "../booking/BookingModal";


const AllShows = () => {

    const [showSummary, setShowSummary] = useState(null)
    const [showBooking, setShowBooking] = useState(null)

    const { isLoading, error, data } = useQuery('allShows', () =>
    fetch('https://api.tvmaze.com/search/shows?q=all').then(res =>
      res.json()
    )
  )
    // const allData = data.slice(1, 3)
  console.log(data)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: '

    return (
        <div id="allShow" className="w-full pb-20 lg:pb-40">
            <h1 className="text-4xl text-center my-10 font-bold">All shows </h1>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(item => <ShowCard
                    key={item.show.id}
                    showSummary={setShowSummary}
                    setShowBooking={setShowBooking}
                    item={item}
                    />)
                }
            </div>

            { showSummary &&
                <SummaryModal
            showSummary={showSummary}
            />}

            <div>
                { showBooking &&
                    <BookingModal
                showBooking={showBooking}
                />}
            </div>
            
        </div>
    );
};

export default AllShows;