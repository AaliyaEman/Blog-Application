import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesListPage = () => {
    return (
        <div className='bg-black h-screen'>
        <>
            <h1 className='text-center text-bold text-white m-10'>Articles</h1>
            {articles.map(article => (
                <Link key={article.name} className="block  text-white text-center my-4" to={`/articles/${article.name}`}>
                    <h3 className='font-bold text-white '>{article.title}</h3>
                    <p>{article.content[0].substring(0, 100)}...</p>
                    <hr />
                </Link>
            ))}
        </>
        </div>
    );
}

export default ArticlesListPage;
