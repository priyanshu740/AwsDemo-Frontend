import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { Context } from '../../context/context/context'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './singlepost.css'

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const { user } = useContext(Context)

  const [post, setPost] = useState({})
  const [date, setDate] = useState()
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updatePost, setUpdatePost] = useState(false)

  useEffect(() => {
    const getSinglePost = async () => {
      const res = await axios.get('http://localhost:5000/api/post/' + path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)

      const date = res.data.time.split('T')[0]
      setDate(date)

    }
    getSinglePost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/post/${post._id}`, {
        data: { username: user.username }
      })
      window.location.replace('/')
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async () => {
    setUpdatePost(true)
    try {
      await axios.put(`/post/${post._id}`, {
        username: user.username,
        title,
        desc
      })
      setUpdatePost(false)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        {updatePost ? (
          <input
            className='updatePostInput'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username == user.username && (
              <>
                <i className="buttons singlePostEdit far fa-trash-alt" onClick={handleDelete}></i>
                <i className="buttons singlePostIcon far fa-edit" onClick={handleUpdate}></i>
              </>

            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Author:
           
            <Link className='link' to={`/?user=${post.username}`} 
            >
              <b> {post.username}</b>
            </Link>
          </span>
          <span>{date}</span>
        </div>
       {updatePost ? (
         <textarea
          className='singlePostDescInput'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
         />
       ) : (
         <p className='singlePostDesc'>{desc}</p>
       )}

        {updatePost && (
          <button className='updated-btn' onClick={handleUpdate}>update</button>
        )}


      </div>
    </div>
  )
}
