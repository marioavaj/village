import './App.css';
import  VillageItem from './VillageItem';


const villageArray =
[{ type: '🏢', color: 'gray', size: '50px' },
{ type: '🚗', color: 'red', size: '20px' },
{ type: '🏫', color: '#000000', size: '30px' },
{ type: '🏢', color: 'yellow', size: '80px' },
{ type: '🏡', color: 'green', size: '40px' },
{ type: '🏡', color: 'green', size: '60px' },
{ type: '🏡', color: 'green', size: '15px' },
{ type: '🏫', color: 'brown', size: '25px' },
{ type: '🏫', color: '#88cfe5', size: '35px' }]

function Village() {


return villageArray.map( (e)=>
  <VillageItem type={e.type} color={e.color} size={e.size}/>
);  
}
export default Village;




