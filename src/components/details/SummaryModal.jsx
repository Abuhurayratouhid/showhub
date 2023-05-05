

const SummaryModal = ({showSummary}) => {
    return (
        <>
            {/* The button to open modal */}
            {/* <label htmlFor="summary-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="summary-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="summary-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Summary for: {showSummary.show.name}</h3>
                    <p className="py-4">{showSummary.show.summary}</p>
                </div>
            </div>
        </>
    );
};

export default SummaryModal;