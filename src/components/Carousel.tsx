import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

// Custom Arrow Component
const CustomArrow = (props: any) => {
  const { className, style, onClick, direction } = props;

  return (
    <button
      className={`${className} slick-arrow ${
        direction === "prev" ? "slick-prev" : "slick-next"
      }`}
      style={{
        ...style,
        display: "block",
        zIndex: 2,
        [direction === "prev" ? "left" : "right"]: "-10px", // Bring the arrows closer
      }}
      onClick={onClick}
    >
      {direction === "prev" ? "←" : "→"}
    </button>
  );
};

// Carousel Settings
const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomArrow direction="prev" />,
  nextArrow: <CustomArrow direction="next" />,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [streamsByCategory, setStreamsByCategory] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    // Fetch categories and streams
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await axios.get("http://localhost:4040/categories");
        const fetchedCategories = categoriesResponse.data.categories;

        // Randomize categories
        const shuffledCategories = fetchedCategories.sort(() => Math.random() - 0.5);
        setCategories(shuffledCategories);

        // Fetch streams for each category
        const streamsData: { [key: string]: any[] } = {};
        for (const category of shuffledCategories) {
          const response = await axios.get("http://localhost:4040/streams", { params: { category } });
          streamsData[category] = response.data.streams;
        }
        setStreamsByCategory(streamsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="mb-8 mx-4">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <Slider className="p-2" {...carouselSettings}>
            {streamsByCategory[category]?.length ? (
              streamsByCategory[category].map((stream, idx) => (
                <div
                  key={idx}
                  className="relative w-full pb-[56.25%] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden m-0"
                >
                  <img
                    src={stream.imageUrl} // Use the image URL from the backend
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                    <h4 className="text-sm md:text-base font-semibold mb-1">{stream.name}</h4>
                    <div className="flex items-center">
                      <img
                        src="/src/assets/Skeletor.webp" // Use a placeholder image or adjust accordingly
                        alt="Channel Pic"
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2"
                      />
                      <span className="text-xs md:text-sm">{stream.author}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center text-gray-500">No videos available</div>
            )}
          </Slider>
        </div>
      ))}
    </>
  );
};

export default Carousel;
