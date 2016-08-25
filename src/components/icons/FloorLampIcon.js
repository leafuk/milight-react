import React from 'react'
import SvgIcon from 'material-ui/SvgIcon'

const FloorLampIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 512 512"  >
      <circle style={{fill:'#273B7A'}} cx="256" cy="256" r="256"/>
      <path style={{fill:'#121149'}} d="M305.648,78.352l-44.239,78.417l-88.157,20.88L256,260.396v197.301l-54.303,10.343l43.725,43.725
      	c3.51,0.143,7.034,0.234,10.578,0.234c132.177,0,240.945-100.174,254.555-228.742L305.648,78.352z"/>
      <rect x="249.966" y="170.667" style={{fill:'#FFC61B'}} width="12.067" height="284.444"/>
      <rect x="253.707" y="170.667" style={{fill:'#D48B07'}} width="8.332" height="284.444"/>
      <polygon style={{fill:'#FF7F4F'}} points="338.747,177.648 173.253,177.648 206.352,78.352 305.648,78.352 "/>
      <polygon style={{fill:'#E03A00'}} points="305.648,78.352 253.702,78.352 253.702,177.648 338.747,177.648 "/>
      <rect x="201.697" y="447.354" style={{fill:'#FF7F4F'}} width="108.606" height="20.687"/>
      <rect x="253.707" y="447.354" style={{fill:'#E03A00'}} width="56.601" height="20.687"/>
    </SvgIcon>
  );

export default FloorLampIcon
