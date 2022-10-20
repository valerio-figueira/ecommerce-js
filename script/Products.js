const products = [
    {
        id: 1,
        name: "Flamininus T-Shirt",
        label: "brand-name",
        img: [
            "imgs/products/f1.jpg",
            "imgs/products/f3.jpg",
            "imgs/products/f4.jpg",
            "imgs/products/f5.jpg"
        ],
        price: 89,
        quantity: 1,
        total: 89,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 2,
        name: "Lorem T-Shirt",
        label: "brand-name",
        img: [
            "imgs/products/f2.jpg",
            "imgs/products/f4.jpg",
            "imgs/products/f5.jpg",
            "imgs/products/f6.jpg"
        ],
        price: 72,
        quantity: 1,
        total: 72,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 3,
        name: "Rose T-Shirt",
        label: "brand-name",
        img: [
            "imgs/products/f3.jpg",
            "imgs/products/f5.jpg",
            "imgs/products/f6.jpg",
            "imgs/products/f1.jpg"
        ],
        price: 98,
        quantity: 1,
        total: 98,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 4,
        name: "White T-Shirt",
        label: "brand-name",
        img: [
            "imgs/products/f4.jpg",
            "imgs/products/f6.jpg",
            "imgs/products/f1.jpg",
            "imgs/products/f2.jpg"
        ],
        price: 94,
        quantity: 1,
        total: 94,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 5,
        name: "Midnight Blue T-Shirt",
        label: "brand-name",
        img: [
            "imgs/products/f5.jpg",
            "imgs/products/f1.jpg",
            "imgs/products/f2.jpg",
            "imgs/products/f3.jpg"
        ],
        price: 104,
        quantity: 1,
        total: 104,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 6,
        name: "Casual Shirt",
        label: "brand-name",
        img: [
            "imgs/products/f6.jpg",
            "imgs/products/f2.jpg",
            "imgs/products/f3.jpg",
            "imgs/products/f4.jpg"
        ],
        price: 69,
        quantity: 1,
        total: 69,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 7,
        name: "Lorem Pants",
        label: "brand-name",
        img: [
            "imgs/products/f7.jpg",
        ],
        price: 74,
        quantity: 1,
        total: 74,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 8,
        name: "Lorem Casual Shirt",
        label: "brand-name",
        img: [
            "imgs/products/f8.jpg",
            "imgs/products/f1.jpg",
            "imgs/products/f2.jpg",
            "imgs/products/f3.jpg",
            "imgs/products/f4.jpg"
        ],
        price: 86,
        quantity: 1,
        total: 86,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 9,
        name: "Lorem ipsum dolor",
        label: "brand-name",
        img: [
            "imgs/products/n1.jpg",
        ],
        price: 69,
        quantity: 1,
        total: 69,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 10,
        name: "Lorem ipsum dolor",
        label: "brand-name",
        img: [
            "imgs/products/n2.jpg",
        ],
        price: 78,
        quantity: 1,
        total: 78,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 11,
        name: "White Casual Shirt",
        label: "brand-name",
        img: [
            "imgs/products/n3.jpg",
        ],
        price: 82,
        quantity: 1,
        total: 82,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 12,
        name: "Lorem ipsum dolor",
        label: "brand-name",
        img: [
            "imgs/products/n4.jpg",
        ],
        price: 72,
        quantity: 1,
        total: 72,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 13,
        name: "Lorem ipsum dolor",
        label: "brand-name",
        img: [
            "imgs/products/n5.jpg",
        ],
        price: 76,
        quantity: 1,
        total: 76,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 14,
        name: "Lorem ipsum dolor",
        label: "brand-name",
        img: [
            "imgs/products/n6.jpg",
        ],
        price: 78,
        quantity: 1,
        total: 78,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 15,
        name: "Lorem ipsum dolor",
        label: "brand-name",
        img: [
            "imgs/products/n7.jpg",
        ],
        price: 67,
        quantity: 1,
        total: 67,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
    {
        id: 16,
        name: "Lorem ipsum dolor",
        label: "brand-name",
        img: [
            "imgs/products/n8.jpg",
        ],
        price: 96,
        quantity: 1,
        total: 96,
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?"
    },
];

export default products;