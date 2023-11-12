import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectTrending } from "../../store/slices/trending/trendingSlice";
import { useAppDispatch } from "../../store";
import { fetchTrending } from "../../store/slices/trending/api";
import { setFeatured } from "../../store/slices/featured/featuredSlice";
import "./style.css";
import { Movie } from "../../types";

const Trending = () => {
    const trendings = useSelector(selectTrending);
    const [current, setCurrent] = useState(1);
    const carouselItemRef = useRef<HTMLImageElement>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTrending());
    }, [dispatch]);

    let translateValue = carouselItemRef.current?.offsetWidth
        ? carouselItemRef.current.offsetWidth * current
        : 0;

    let arrowClickHandle = (value: number) => {
        const count = trendings.length - 1 - 7;

        setCurrent(value < 0 ? 0 : value > count ? count : value);
    };

    let carouselItemClickHandle = (trending: Movie) => {
        dispatch(setFeatured(trending));
        let sessionHistory = sessionStorage.getItem("history");

        let history: string[] = sessionHistory ? sessionHistory.split(",") : [];

        history.push(trending.Id);

        sessionStorage.setItem("history", history.join(","));
    };

    return (
        <div className="trending">
            <h3>Trending Now</h3>
            <div className="list">
                <button className="left" onClick={() => arrowClickHandle(current - 1)}>
                    &#8249;
                </button>
                <button className="right" onClick={() => arrowClickHandle(current + 1)}>
                    &#8250;
                </button>
                <div
                    className="carousel"
                    style={{
                        transform: `translateX(-${translateValue}px)`,
                    }}
                >
                    {trendings.map((trending, index) => (
                        <img
                            ref={index === 0 ? carouselItemRef : null}
                            key={trending.Id}
                            src={`/assets/images/${trending.CoverImage}`}
                            alt={trending.Title}
                            onClick={() => carouselItemClickHandle(trending)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trending;
