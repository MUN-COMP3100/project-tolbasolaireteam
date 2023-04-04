import { useState, useEffect } from "react"
import axios from "../api/axios.mjs"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchUsers = async () => {
            try {
                const res = await axios.get('/users', { signal: controller.signal });
                isMounted && setUsers(res.data);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    throw err;
                }
            }
        }

        fetchUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])


    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.email}</li>)}
                    </ul>
                ) : (
                    <p>No users found.</p>
                )
            }
        </article>
    )
}

export default Users