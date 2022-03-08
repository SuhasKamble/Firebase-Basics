import React, { useState } from 'react'
import db from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const AddTodo = () => {
    const [todo, setTodo] = useState('')
    const AddTodo = (e) => {
        e.preventDefault()
        if (todo) {
            db.collection('todos').add({
                todo: todo,
                timestamp: firebase.firestore.Timestamp.fromDate(new Date())
            })
            setTodo('')
        }
    }
    return (
        <form onSubmit={AddTodo}>
            <input type="text" placeholder='Create a todo...' value={todo} onChange={(e) => setTodo(e.target.value)} />
        </form>
    )
}

export default AddTodo