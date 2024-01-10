import { useNavigate, useParams } from 'react-router-dom';
import { PostForm, Container } from '../components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function EditPost(){
    let post = null;
    const { slug } = useParams();
    const navigate = useNavigate();
    post = useSelector(state => {
        return state.post.posts.find(post => post.$id === slug)
    })

    useEffect(() => {
        if(!slug || !post) {
            navigate('/')
        }
    }, [slug])

    return post ? ( 
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ): null;
}
