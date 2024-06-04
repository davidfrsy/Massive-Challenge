import React from 'react'
import Slide from '../Slide/Slide'

const AquaModul = () => {
  return (
    <div className='bg-white'>
      <div className='m-5'>
        <h3 className='text-3xl font-semibold text-blue-900 text-center py-4' id='aquamodul'>AquaModul</h3>
        <div className='px-36 py-9'>
            <p className='font-bold text-4xl text-black py-5'>Pelajari lebih lanjut artikel dibawah ini!</p>
        </div>
        <div>
          <Slide />
        </div>
      </div>
    </div>
  )
}
export default AquaModul
