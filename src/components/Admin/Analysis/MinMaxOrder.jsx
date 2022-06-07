import React from 'react'
import { useSelector } from 'react-redux'
import '../../../css_components/css_admin/minMax.scss'

function MinMaxOrder() {
const min =  useSelector(state=>state.analysis.minOrderByName);
const max = useSelector(state=>state.analysis.maxOrderByName)

return (<> 
     <h3 className='min_max_header'>User with most order and least Order</h3>
    <section className='min_max'>
    <div className='analysis max'>
        {
            max.map((details,index)=><MaxCard details={details} rank={index++} key={index}/>)
        }
    </div>
    <div className="analysis min">
    {
            min.map((details,index)=><MinCard details={details} rank={index++} key={index}/>)
        }
    </div>
    </section>
    </>)
}

export default MinMaxOrder

export const MaxCard = ({details,rank})=>{

return <div className='analytics_card'>
    { 
        rank===0?<h4>1<sup>st</sup></h4>:rank===1?<h4>2<sup>nd</sup></h4>:<h4>3<sup>rd</sup></h4>
    }
    <h3>{details.name}</h3>
    <h2>{`$ ${details.highest}`}</h2>
</div>

}

export const MinCard = ({details,rank})=>{

    return <div className='analytics_card'>
        { 
        rank===0?<h4>1<sup>st</sup></h4>:rank===1?<h4>2<sup>nd</sup></h4>:<h4>3<sup>rd</sup></h4>
        }
        <h3>{details.name}</h3>
        <h2>{`$ ${details.lowest}`}</h2>
    </div>
    
    }