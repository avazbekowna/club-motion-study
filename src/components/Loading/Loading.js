import React from 'react';

const Loading = ({load}) => {

    return (
            <div id="load" style={{
                display: load ? 'block' : 'none'
            }}>
                <div className="load" style={{textAlign: 'center'}}>
                    <h1 className='load-zero'>0%</h1>
                    <h1 className='load-ten'>10%</h1>
                    <h1 className='load-twenty'>20%</h1>
                    <h1 className='load-thirty'>30%</h1>
                    <h1 className='load-forty'>40%</h1>
                    <h1 className='load-fifty'>50%</h1>
                    <h1 className='load-sixty'>60%</h1>
                    <h1 className='load-seventy'>70%</h1>
                    <h1 className='load-eighty'>80%</h1>
                    <h1 className='load-ninety'>90%</h1>
                    <h1 className='load-hundred'>100%</h1>
                </div>
        </div>
    );
};

export default Loading;