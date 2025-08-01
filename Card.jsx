import React from "react";

function Card() {
    return (
        <div className="bg-gray-900 w-96 rounded-lg p-4 dark:bg-orange-800">
            <img
                src="https://img.freepik.com/premium-photo/man-sitting-desk-front-computer-generative-ai-image_87646-18311.jpg"
                alt="image"
                className="h-48 mx-auto mt-4 rounded"
            />
            <h1 className="text-white mt-4 text-sm px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi consectetur laborum qui, hic reiciendis optio quibusdam labore perferendis tempore, natus assumenda cum magni non soluta velit atque obcaecati error!
            </h1>
            <p className="text-xl text-white ml-8 mt-4">Manish R,</p>
            <p className="text-xl text-white ml-8 mb-4">Software Engineer</p>
        </div>
    );
}

export default Card;
