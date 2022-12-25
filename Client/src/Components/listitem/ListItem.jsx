import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";
import "./listitems.scss"

export default function ListItem() {
    return (
        <div className='listItem'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpvH51WdkjZDNLJhPQKF7jvAXP-9FrKwkLw&usqp=CAU" alt="" />

            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow />
                    <Add />
                    <ThumbUpAltOutlined />
                    <ThumbDownOutlined />
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 min</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                Disgruntled Korean War veteran Walt Kowalski
                sets out to reform his neighbor,Thao Lor, 
                a Hmong teenager who tried to steal 
                Kowalski's prized possession: a 1972
                 Gran Torino.
                </div>
                <div className="genre">Action</div>
            </div>
        </div>
    )
}
