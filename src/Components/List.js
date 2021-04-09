import React from 'react';

const List = ({days}) => {
    return (
        <>
            {days.map((day) => {
                const {id, description, todo} = day;
                return <article key={id} className='todo'>
                    <div>
                        <h4>{description}</h4>
                    </div>
                </article>
            })}
        </>
    );
};

export default List;