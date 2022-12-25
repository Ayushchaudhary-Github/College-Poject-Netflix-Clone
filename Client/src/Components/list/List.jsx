import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../listitem/ListItem'
import "./list.scss"

export default function List() {
  return (
    <div className='list'>
      <span className='listTitle'>Contenue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined className='sliderArrow left'/>
        <div className='Container'>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right'/>
      </div>
    </div>
  );
}

