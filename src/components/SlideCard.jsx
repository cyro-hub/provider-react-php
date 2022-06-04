import '../css_components/card.scss'

function SlideCard({image}) {
  return (
    <div className='card' style={{width:'100%'}}>
        <div className='card-img-container'>
            <img loading='lazy' src={image.imageUrl} alt={image.name} className='card-img' />
            <div className='img-cover'>
            <h4 className='card-name'>{image.name}</h4>    
        </div>
    </div>
</div>
  )
}

export default SlideCard