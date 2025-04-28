import React from 'react';

function Cards({ item }) {
    console.log(item);

    if (!item) {
        return item;
    }
    return (
        <>
            <div className="mt-8 p-3">
                <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            src={item.image}
                            alt="Books" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <h4>
                            {item.title}
                        </h4>
                        <p>
                            Books open your mind, enlarge your thinking, and make you stronger. No one else can  do that. Books accompany us in solitude and save us from becoming a burden on ourselves. If you only read the books that everyone else is reading, you will be able to think what everyone else is thinking.
                        </p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer px-3 py-2 rounded-full border [2px] hover:bg-pink-500 hover:text-white duration-200">
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;