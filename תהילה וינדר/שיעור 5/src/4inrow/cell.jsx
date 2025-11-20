import './cell.css';
export default function Cell(props)
{
    return<>
    <div className='case' onClick={props.onClick} style={{ backgroundColor: props.color || 'white' }}
></div>
    </>
}