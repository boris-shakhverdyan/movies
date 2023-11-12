import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFeatured } from "../../store/slices/featured/featuredSlice";
import { fetchFeatured } from "../../store/slices/featured/api";
import { useAppDispatch } from "../../store";
import "./style.css";
import { toTimeString } from "../../utils/helpers";

const Featured = () => {
    const featured = useSelector(selectFeatured);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFeatured());
    }, [dispatch]);

    if (!featured) {
        return null;
    }

    return (
        <div className="featured">
            <div className="background">
                {featured.VideoUrl ? (
                    <video autoPlay loop muted>
                        <source src={featured.VideoUrl} type="video/mp4" />
                    </video>
                ) : (
                    <img src={`/assets/images/${featured.CoverImage}`} alt="Background" />
                )}
            </div>
            <div className="side">
                <h3 className="type">{featured.Category}</h3>
                <img src="/assets/images/FeaturedTitleImage.png" alt="The Irishman" />
                <p className="info">
                    <span className="year">{featured.ReleaseYear}</span>
                    <span className="rating">{featured.MpaRating}</span>
                    <span className="duration">{toTimeString(+featured.Duration)}</span>
                </p>
                <p className="description">{featured.Description}</p>
                <div className="actions">
                    <button className="btn-play">&#9658; Play</button>
                    <button className="btn-more-info">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
