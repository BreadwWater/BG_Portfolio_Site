import './StackTag.scss';

function StackTag({ stack }) {
    return (
        <>
            <article className='stacktag'>
                <p className='stacktag--title'>{stack}</p>
            </article>
        </>
    );
}

export default StackTag;