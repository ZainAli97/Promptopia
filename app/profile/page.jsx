"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Profile from '@components/profile';

const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState("");
    useEffect(() => {
        const fetchPosts = async () => {
            const response = fetch(`/api/users${session?.user.id}/posts`);
            const data = await response.json();
            setPosts(data);
        };
        { session?.user.id ? fetchPosts() : ""; }
    }, []);
    const handleEdit = () => {

    };
    const handleDelete = async () => {

    };
    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
};

export default MyProfile;