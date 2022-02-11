const Card = (props) => {
    const {image, title, desc, order=1, id, handleShowFullDescription = () =>{console.log("show full decription");}} = props;

    const style = order === 1 ? {} : {
        backgroundColor:  "#e6e6e6"
    }

    return ( 
    <div className="jumbotron jumbotron-fluid my-5 p-4" style={style}>
        <div className="row">
            <div className="col-lg-4">
                <img className="card-img-top" src={image.src} alt={image.alt}/>
            </div>
            <div className="col-lg-8">
                <div className="container py-3">
                    <a className="display-6 text-dark" href="#" onClick={()=>{handleShowFullDescription(id, true)}} style={{textDecoration: "none"}}>{title}</a>
                    <p className="lead">{desc}</p>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default Card;