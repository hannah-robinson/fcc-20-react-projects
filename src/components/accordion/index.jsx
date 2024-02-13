import { useState } from 'react'
import data from './data'
import './styles.css'

export default function Accordion() {
  const [selected, setSelected] = useState(null)

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  return (
    <div className='accordion__wrapper'>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='accordion__item'>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className='accordion__item__title'
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? '-' : '+'}</span>
              </div>
              {selected === dataItem.id ? (
                <div className='accordion__item__content'>
                  {dataItem.answer}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  )
}
