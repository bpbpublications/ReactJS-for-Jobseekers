import BlogThumbnail1 from '../assets/blog-1.png';
import BlogThumbnail2 from '../assets/blog-2.png';
import BlogThumbnail3 from '../assets/blog-3.png';
import BlogThumbnail4 from '../assets/blog-4.png';
import BlogThumbnail5 from '../assets/blog-5.png';
import BlogThumbnail6 from '../assets/blog-6.png';
import BlogThumbnail7 from '../assets/blog-7.png';
import BlogThumbnail8 from '../assets/blog-8.png';
//To use this file, please also download the assets folder and place it in the src folder

export const BLOG_DATA = [
    {
        id: 1,
        thumbnail: BlogThumbnail1,
        title: "Best Fitness Training",
        description: "Description for Blog 1"
    },
    {
        id: 2,
        thumbnail: BlogThumbnail2,
        title: "How to Edit Like a Pro",
        description: "Description for Blog 2"
    },
    {
        id: 3,
        thumbnail: BlogThumbnail3,
        title: "Web Developer Course - Lesson 1",
        description: "Description for Blog 3"
    },
    {
        id: 4,
        thumbnail: BlogThumbnail4,
        title: "Dubai's High-end Hotels",
        description: "Description for Blog 4"
    },
    {
        id: 5,
        thumbnail: BlogThumbnail5,
        title: "Increase Sales in Just 1 Week",
        description: "Description for Blog 5"
    },
    {
        id: 6,
        thumbnail: BlogThumbnail6,
        title: "Yoga for Mental Benefits",
        description: "Description for Blog 6"
    },
    {
        id: 7,
        thumbnail: BlogThumbnail7,
        title: "How to Train Your Abs",
        description: "Description for Blog 7"
    },
    {
        id: 8,
        thumbnail: BlogThumbnail8,
        title: "How to Make Money Online?",
        description: "Description for Blog 8"
    },
]

Object.freeze(BLOG_DATA); //To avoid updating this data programatically