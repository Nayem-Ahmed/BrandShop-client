

const Dontmiss = () => {
    return (
        <div className="mb-8">
            <div className="bg-red-500 p-6 text-white text-center rounded-md">
                <h2 className="font-bold">Don't Miss Out on
                    Tasty Grocery Deals!</h2>
                <h3 className="mb-6">Sign Up for the Daily Newsletter</h3>
                <div className="join flex flex-col items-center sm:flex-row sm:justify-center">
                    <input
                        className="input input-bordered join-item mb-2 sm:mb-0 sm:mr-2"
                        placeholder="Email"
                    />
                    <button className="btn bg-pink-500 join-item rounded-r-full">
                        Subscribe
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Dontmiss;