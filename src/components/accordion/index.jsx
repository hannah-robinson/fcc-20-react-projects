import { useState } from 'react'
import data from './data'
import './styles.css'

export default function Accordion() {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiSelectedItems, setMultiSelectedItems] = useState([])

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    console.log(getCurrentId)
    let copyMultiSelectedItems = [...multiSelectedItems]
    const findIndexOfCurrrentId = copyMultiSelectedItems.indexOf(getCurrentId)
    console.log(findIndexOfCurrrentId)
    findIndexOfCurrrentId === -1
      ? copyMultiSelectedItems.push(getCurrentId)
      : copyMultiSelectedItems.splice(findIndexOfCurrrentId, 1)
    setMultiSelectedItems(copyMultiSelectedItems)
    console.log('multiSelectedItems ', multiSelectedItems)
  }

  return (
    <div className='accordion__wrapper'>
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection)
          setSelected(null)
          setMultiSelectedItems([])
        }}
      >
        {enableMultiSelection
          ? 'Disable multi-selection'
          : 'Enable multi-selection'}
      </button>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='accordion__item'>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className='accordion__item__title'
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? '-' : '+'}</span>
              </div>
              {/* {enableMultiSelection
                ? multiSelectedItems.indexOf(dataItem.id) !== -1 && (
                    <div className='accordion__item__content'>
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className='accordion__item__content'>
                      {dataItem.answer}
                    </div>
                  )} */}
              {selected === dataItem.id ||
              multiSelectedItems.indexOf(dataItem.id) !== -1 ? (
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
