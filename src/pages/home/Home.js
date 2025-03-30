import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../../pages/home/Home.css'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router'

function Home() {
    const [posts,setPosts] = useState([])
    const {search} = useLocation()
// console.log(search)

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/api/post/"+search)
            setPosts(res.data)
            // console.log(res);
        }
        fetchPosts()
    }, [search])
    return (
        <>
        <Header/>
        <div className='home'>
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
        <Footer/>
        </>
    )
}

export default Home
