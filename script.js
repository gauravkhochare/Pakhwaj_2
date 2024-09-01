const imageSet1 = ["t1.jpg", "t1a.jpg", "t1b.jpg", "ab1.jpg"];
const imageSet2 = ["t2.jpg", "t2a.jpg", "t2b.jpg", "ab2.jpeg"];
const imageSet3 = ["t3.jpg", "t3a.jpg", "t3b.jpg", "ab3.jpeg"];
const imageSet4 = ["t4.jpg", "t4a.jpg", "t4b.jpg", "ab4.avif"];

const imageElement1 = document.getElementById("image1");
const imageElement2 = document.getElementById("image2");
const imageElement3 = document.getElementById("image3");
const imageElement4 = document.getElementById("image4");
const nextButton = document.getElementById("nextButton1");


function getRandomIndex(currentIndex, arrayLength) {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * arrayLength);
    } while (newIndex === currentIndex);
    return newIndex;
}

function getUniqueIndices(arrayLength) {
    let indices = [];
    while (indices.length < arrayLength) {
        let randomIndex = Math.floor(Math.random() * arrayLength);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }
    return indices;
}

nextButton.addEventListener("click", () => {
    const uniqueIndices = getUniqueIndices(imageSet1.length);

    imageElement1.src = imageSet1[uniqueIndices[0]];
    imageElement2.src = imageSet2[uniqueIndices[1]];
    imageElement3.src = imageSet3[uniqueIndices[2]];
    imageElement4.src = imageSet4[uniqueIndices[0]];
});
