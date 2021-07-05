const laptop = {
    name: "Dell",
    color: "gray",
    os: "Windows"
}

const addLaptop = currentLaptop => {
    const newArticle = document.createElement("article")
    newArticle.innerHTML = `
                
                <h1>${currentLaptop.name}</h1 >
                <ul>
                    <li>name: ${currentLaptop.name}</li>
                    <li>color: ${currentLaptop.color}</li>
                    <li>os: ${currentLaptop.os}
                </ul>
                `;
    return newArticle
};
const main = document.querySelector("main");
main.append(addLaptop(laptop))