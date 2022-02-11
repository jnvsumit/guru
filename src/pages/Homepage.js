import Card from "../components/Card";
import Description from "../components/Description";

//Images
import SwamiJiBaburi from '../assets/swami-ji-baburi.JPG';
import SwamiJiPamhati from '../assets/swami-ji-pamhati.JPG';
import SwamiJiByuri from '../assets/swami-ji-byuri.JPG';

const HomePage = (props) => {
    const { handleShowFullDescription, showFullDescription } = props;
    const cards = [
        {
            image: {
                src: SwamiJiBaburi,
                alt: "श्री श्री १००८ स्वामी जी महाराज 'परमहंस'"
            },
            title: "श्री श्री १००८ स्वामी जी महाराज 'परमहंस'",
            shortDescription: "this is a desc",
            longDescription: "",
            order: 1,
            id: 1
        },
        {
            image: {
                src: SwamiJiPamhati,
                alt: "श्री श्री १००८ स्वामी कबीर जी महाराज 'परमहंस'"
            },
            title: "श्री श्री १००८ स्वामी कबीर जी महाराज 'परमहंस'",
            shortDescription: "this is a desc This is another",
            longDescription: "",
            order: 1,
            id: 2
        },
        {
            image: {
                src: SwamiJiByuri,
                alt: "श्री श्री १०८ स्वामी नामधनी जी महाराज 'परमहंस'"
            },
            title: "श्री श्री १०८ स्वामी नामधनी जी महाराज 'परमहंस'",
            shortDescription: "this is a desc",
            longDescription: "",
            order: 1,
            id: 3
        }
    ];

    const card = cards.filter(card => card.id === showFullDescription.id ? true : false)[0];


    return (
        <div className="container">
            { showFullDescription.show ? <Description image={card.image} title={card.title} desc={card.longDescription} id={card.id} order={card.order} key={card.id} handleShowFullDescription={handleShowFullDescription} /> :
                cards.map((card)=>{
                    return <Card image={card.image} title={card.title} desc={card.shortDescription} id={card.id} order={card.order} key={card.id} handleShowFullDescription={handleShowFullDescription}/>
                })
            }
        </div>
     );
}
 
export default HomePage;