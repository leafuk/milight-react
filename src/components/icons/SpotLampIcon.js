import React from 'react'
import SvgIcon from 'material-ui/SvgIcon'

const SpotLampIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 512 512"  >
      <circle style={{fill:'#366796'}} cx="256" cy="256" r="256"/>
      <path style={{fill:'#273B7A'}} d="M511.071,277.764L352.682,119.375L170.515,256l103.012,87.057l-26.872-3.448L113.778,227.556
      	L85.333,369.778L225.77,510.214C235.685,511.381,245.77,512,256,512C390.053,512,500.022,408.96,511.071,277.764z"/>
      <path style={{fill:'#D48B07'}} d="M284.444,355.125H113.778c-7.616,0-13.791-6.175-13.791-13.791c0-7.616,6.175-13.791,13.791-13.791
      	h156.875v-99.987c0-7.616,6.175-13.791,13.791-13.791s13.791,6.175,13.791,13.791v113.778
      	C298.236,348.95,292.061,355.125,284.444,355.125z"/>
      <path style={{fill:'#FF5419'}} d="M284.444,213.764c-1.09,0-2.143,0.14-3.16,0.378v140.983h3.16c7.616,0,13.791-6.175,13.791-13.791
      	V227.556C298.236,219.939,292.061,213.764,284.444,213.764z"/>
      <polygon style={{fill:'#FFC61B'}} points="398.222,256 170.515,256 216.055,119.375 352.68,119.375 "/>
      <polygon style={{fill:'#D48B07'}} points="352.68,119.375 281.285,119.375 281.285,256 398.222,256 "/>
      <rect x="85.333" y="227.556" style={{fill:'#FF5419'}} width="28.444" height="142.222"/>
    </SvgIcon>
  );

export default SpotLampIcon