import {useRouter} from 'next/router';
''
function Post(){
    const router = useRouter();
    return <h2>Posts {router.query.id}</h2>
}
export default Post;