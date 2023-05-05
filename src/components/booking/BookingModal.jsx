

const BookingModal = ({ showBooking }) => {

    const handleBooking = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const phone= form.phone.value;

        const useInfo = {
            email,
            phone
        }
        localStorage.setItem('userInfo', JSON.stringify(useInfo))
        console.log( email, phone)
        form.reset();
    }
    return (
        <>
            {/* The button to open modal */}
            {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking for:{showBooking.show.name}</h3>


                    <div className="booking-form w-full p-5">

                        <form onSubmit={handleBooking}>
                            <label className="label">
                                <span className="label-text">Show name:</span>

                            </label>
                            <input name="name" type="text" defaultValue={showBooking.show.name} readOnly className="input input-bordered input-primary w-full mb-5" />
                            <label className="label">
                                <span className="label-text">Enter Your Email:</span>

                            </label>
                            <input name="email" type="email" required placeholder="Email"  className="input input-bordered input-primary w-full mb-5" />
                            <label className="label">
                                <span className="label-text">Your Phone:</span>

                            </label>
                            <input name="phone" type="text" required placeholder="Phone number"  className="input input-bordered input-primary w-full mb-5" />
                            
                            <div className="flex justify-center items-center">
                                
                                <button type="submit">
                                <label type="submit" htmlFor="booking-modal" className="btn">
                                    Confirm Booking
                                </label> 
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;