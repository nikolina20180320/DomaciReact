import React from 'react'


export default function InfoItem({ name, value }) {
    return (
        <div className='mt-3 d-flex align-items-center justify-content-between'>
            <div >
                <strong>{name}:</strong>
            </div>
            <div className='ml-3' style={{ marginLeft: '12px' }}>
                {value}
            </div>
        </div>
    )
}
