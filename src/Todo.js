import React, { useEffect, useState } from 'react'
import db from './firebase'

const Todo = () => {
    const [todos, setTodo] = useState([])
    useEffect(() => {
        db.collection('todos').orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setTodo(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data() })))
            })
    }, [])
    return (
        <div className='todo-container'>
            {
                todos.map(({ id, todo }, index) => {
                    return <div className='todo' key={id}>
                        <p>{todo.todo}</p>
                        <button onClick={e => db.collection('todos').doc(id).delete()}>
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </div>
                })
            }
        </div>
    )
}

export default Todo