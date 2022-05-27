import React, { Component, useEffect, useState } from 'react';
import Header from './header';
import './style.css'
import {collection, query, where, getDocs,deleteDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown  from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Table } from 'react-bootstrap';

function UserList() {   
    const [postLists, setPostList] = useState([]);
    const postColectionRef = collection(db, 'RegistrationInfo');

    useEffect(() => {
        const getPosts = async() =>{
            const data = await getDocs(postColectionRef);
            console.log(data)
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPosts();
    },[]);
    const deleteuser = (id) =>{
console.log('user to delete ',id)


    }
    
    return (
        <div><Header dataFromParent = 'User Registration Data'/>
        <Table responsive>
        <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Type</th>
            <th>User Location</th>
            <th>Username</th>
            <th>Email id</th>
            <th>Password</th>
            <th>Delete User</th>
            </tr>
        </thead>
        <tbody>{postLists.map((post) =>{
            return <tr>
                <td>{post.firstName}</td>
                <td>{post.lastName}</td>
                <td>{post.userType}</td>
                <td>{post.location}</td>
                <td>{post.userName}</td>
                <td>{post.email}</td>
                <td>{post.password}</td>
                <button onClick={deleteuser(post.id)}>Delete</button>
                </tr>
        })}</tbody>
        </Table>
        
        </div>
    );
}
export default UserList;