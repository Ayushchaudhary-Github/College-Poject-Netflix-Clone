import { InfoOutlined, More, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    {/* <span>{type === "movie" ? "Movies" : "Series"}</span> */}
                    <span>{type === "movie"? "Movies": "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="advanture">advanture</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            
            <img
                src="https://cdn.vox-cdn.com/thumbor/DIRY3c1lvydVb-Wxv3Y_gTKL2iw=/0x0:2764x4096/2070x1164/filters:focal(1157x2163:1599x2605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70296586/matrixposters.0.jpeg"
                alt=""
            />

            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/The-matrix-logo.svg/1280px-The-matrix-logo.svg.png" alt="" />

                <span className="desc">
                    Return to a world of two realities: one, everyday life;
                    the other, what lies behind it.
                    To find out if his reality is a construct, to
                    truly know himself, Mr. Anderson will have to choose
                    to follow the white rabbit once more.
                </span>

                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>

                    <button className="more">
                        <InfoOutlined />
                        <span >Info</span>
                    </button>
                </div>

            </div>
        </div>
    )
}
