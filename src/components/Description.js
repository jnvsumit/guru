const Description = (props) => {
    const {image, title, desc, order=1, id, handleShowFullDescription = () =>{console.log("show full decription");}} = props;

    const style = order === 1 ? {} : {
        backgroundColor:  "#e6e6e6"
    }

    return ( 
        <>
        <div className="jumbotron jumbotron-fluid my-5 p-4" style={style}>
            <div className="ro">
                <img className="card-img-top" src={image.src} alt={image.alt}/>
            </div>
            <div className="co">
                <div className="container py-3">
                    <a className="display-6 text-dark" href="#" style={{textDecoration: "none"}}>{title}</a>
                    <p className="lead">{desc}</p>
                </div>
            </div>
            <div className="py-3 text-center">
                <button className="btn btn-md btn-dark" onClick={()=>{handleShowFullDescription(id, false)}}>Go back</button>
            </div>
        </div>
    </>
    );
}
 
export default Description;