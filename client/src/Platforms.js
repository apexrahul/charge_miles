import React, {useEffect, useState} from 'react'

const Platforms = (props) => { 
    
    let [data, setState] = useState();
 
    useEffect(() => {
        setState({...props})
        console.log(props);
    }, [props]);

  return (
    <div>{data && 
    <div>
    <h4>Facebook</h4>
    <p>{data.platforms.facebook.status}</p>
    <p>{data.platforms.facebook.total_budget}</p>
    <p>{data.platforms.facebook.remaining_budget}</p>
    <p>{data.platforms.facebook.start_date}</p>
    <p>{data.platforms.facebook.end_date}</p>


              {/* 3 diffrent objects for target , creatives, insights */}
    <div>
    <h2>Target Audience</h2>
    <ul>Languages: {data.platforms.facebook.target_audiance.languages.map(lang => <li key={lang}>{lang}</li>)}</ul>
    <ul>Genders:   {data.platforms.facebook.target_audiance.genders.map(gender => <li key={gender}>{gender}</li>)}</ul>
    <ul>Age Limit: {data.platforms.facebook.target_audiance.age_range.map(age => <li key={age}>{age}</li>)}</ul>
    <ul>Languages: {data.platforms.facebook.target_audiance.locations.map(location => <li key={location}>{location}</li>)}</ul>
    <ul>Interests: {data.platforms.facebook.target_audiance.interests.map(interest => <li key={interest}>{interest}</li>)}</ul>

    </div>


    <div>
    <h2>Creatives</h2>
    <p>Header : {data.platforms.facebook.creatives.header}</p>
    <p>Description : {data.platforms.facebook.creatives.description}</p>
    <a href={data.platforms.facebook.creatives.url} target='_blank' without rel="noreferrer">{data.platforms.facebook.creatives.url}</a>
    
    {/* to be done */}
    {/* <img src={`img4${data.platforms.facebook.creatives.image}`} alt='Logo'/> */}

    </div>

    <div>
      <h2>Insights</h2>
      <p>{data.platforms.facebook.insights.impressions}</p>
      <p>{data.platforms.facebook.insights.clicks}</p>
      <p>{data.platforms.facebook.insights.nanos_score}</p>
      <p>{data.platforms.facebook.insights.cost_per_click}</p>
      <p>{data.platforms.facebook.insights.click_through_rate}</p>
      <p>{data.platforms.facebook.insights.advanced_kpi_1}</p>
      <p>{data.platforms.facebook.insights.advanced_kpi_2}</p>
    </div>



    </div>
    }</div>
  )
}

export default Platforms
