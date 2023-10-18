import banner from "../assets/banner.avif"
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h3 className="mb-5 text-2xl font-bold"><span className="text-pink-400">Delicious Food</span> Delivered To Your Doorstep</h3>
            <p className="mb-5 text-gray-300">Satisfy your cravings with our mouthwatering dishes and delightful treats.</p>
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;